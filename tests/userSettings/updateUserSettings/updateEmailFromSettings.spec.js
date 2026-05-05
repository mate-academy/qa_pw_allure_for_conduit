import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({
  homePage,
  settingsPage,
  profilePage,
  signInPage,
  user,
}) => {
  const newUserData = generateNewUserData();
  const email = newUserData.email;

  await homePage.clickSettigsLink();
  await settingsPage.fillEmailField(email);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.clickSettigsLink();
  await settingsPage.clickLogoutButton();
  await signInPage.open();
  await signInPage.fillEmailField(email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();
  await homePage.assertYourFeedTabIsVisible();
});
