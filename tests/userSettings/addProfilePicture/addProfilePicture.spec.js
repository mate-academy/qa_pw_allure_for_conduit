import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Add profile picture URL from settings', async ({
  page,
  user,
  userSettingsPage,
}) => {
  const profilePictureUrl = 'https://i.pravatar.cc/150?img=12';

  await signUpUser(page, user);

  await userSettingsPage.open();
  await userSettingsPage.fillProfilePictureField(profilePictureUrl);

  const responsePromise = page.waitForResponse(
    response =>
      response.request().method() === 'PUT' &&
      response.url().includes('/api/user'),
  );

  await userSettingsPage.clickUpdateSettingsButton();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Update profile picture request failed: ${response.status()}
     ${await response.text()}`,
  ).toBeTruthy();

  await userSettingsPage.open();
  await userSettingsPage.assertProfilePictureFieldHasValue(profilePictureUrl);
});
