import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Sign Out the user', async ({ page, homePage }) => {
  await homePage.clickSettingsPageLink();

  const settingsPage = new SettingsPage(page);
  await settingsPage.waitForOpened();
  await settingsPage.clickLogOutButton();

  await homePage.waitForOpened();
  await homePage.assertSignInLinkIsVisible();
});
