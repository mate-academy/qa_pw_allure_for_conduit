import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Update username from settings', async ({
  page,
  user,
  userSettingsPage,
}) => {
  const newUsername = `${user.username}_updated`;

  await signUpUser(page, user);

  await userSettingsPage.open();
  await userSettingsPage.fillUsernameField(newUsername);

  const responsePromise = page.waitForResponse(
    response =>
      response.request().method() === 'PUT' &&
      response.url().includes('/api/user'),
  );

  await userSettingsPage.clickUpdateSettingsButton();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Update settings request failed: ${response.status()}
     ${await response.text()}`,
  ).toBeTruthy();

  await userSettingsPage.open();
  await userSettingsPage.assertUsernameFieldHasValue(newUsername);
});
