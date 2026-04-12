import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({ homePage, settingsPage }) => {
  await settingsPage.clickSettingsTab();
  await settingsPage.clickLogOutButton();

  await homePage.assertConduitPageVisible();
});
