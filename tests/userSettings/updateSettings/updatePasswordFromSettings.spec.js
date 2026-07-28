import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  settingsPage,
  profilePage,
  signInPage,
  homePage,
  user,
  logger,
}) => {
  const newPassword = generateNewUserData(logger).password;

  await settingsPage.open();

  await settingsPage.assertSettingsPageIsOpened();

  await settingsPage.fillNewPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();

  await profilePage.assertProfilePageIsOpened();
  await profilePage.assertUsernameIsVisible(user.username);

  await settingsPage.open();
  await settingsPage.clickLogoutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
