import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  await settingsPage.open();
});

test('Update password from settings', async ({ 
  settingsPage, 
  signInPage, 
  homePage,
  user }) => {
  const password = 'qwerty123'
  await settingsPage.fillPasswordField(password);

  await settingsPage.clickUpdateButton();
  await settingsPage.clickSettingsLink();
  await settingsPage.clickLogoutButton();

  await signInPage.open();

  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(password);

  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});