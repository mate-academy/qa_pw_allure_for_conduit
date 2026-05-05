import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  homePage,
  settingsPage,
  profilePage,
  signInPage,
  user,
}) => {
  const newUserData = generateNewUserData();
  const password = newUserData.password;

  await homePage.clickSettigsLink();
  await settingsPage.fillPasswordField(password);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.clickSettigsLink();
  await settingsPage.clickLogoutButton();
  await signInPage.open();
  await signInPage.fillEmailField(newUserData.email);
  await signInPage.fillPasswordField(password);
  await signInPage.clickSignInButton();
  await homePage.assertYourFeedTabIsVisible();
});
