import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Successful `Log Out User` flow test', async ({
  homePage,
  settingsPage,
  signInPage,
}) => {
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  await homePage.assertSignInButtonIsVisible();
});
