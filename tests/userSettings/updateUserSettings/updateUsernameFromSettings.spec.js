import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  homePage,
  settingsPage,
  profilePage,
  signInPage,
  user,
  page,
}) => {
  const newUserData = generateNewUserData();
  const userName = newUserData.username;

  await homePage.clickSettigsLink();
  await settingsPage.fillUsernameField(userName);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertUsernameIsShown(userName);
  await profilePage.clickSettigsLink();
  await settingsPage.clickLogoutButton();
  await signInPage.open();
  await signInPage.fillEmailField(userName);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();
  await homePage.assertYourFeedTabIsVisible();
});
