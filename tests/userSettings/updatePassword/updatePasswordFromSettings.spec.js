import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test('Update password from settings', async ({
  page,
  user,
  settingsPage,
  signInPage,
  homePage,
}) => {
  await signUpUser(page, user);

  const newPassword = generateNewUserData().password;

  await settingsPage.open();
  await settingsPage.fillNewPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.open();
  await settingsPage.clickLogOutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
