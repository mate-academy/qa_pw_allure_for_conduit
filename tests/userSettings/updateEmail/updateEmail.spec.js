import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Update email from settings', async ({ page, user, userSettingsPage }) => {
  const newEmail = `updated_${user.email}`;

  await signUpUser(page, user);

  await userSettingsPage.open();
  await userSettingsPage.fillEmailField(newEmail);

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
  await userSettingsPage.assertEmailFieldHasValue(newEmail);
});
