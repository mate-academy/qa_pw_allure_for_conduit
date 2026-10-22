import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

let user;

test.beforeEach(async ({ page }) => {
  user = generateNewUserData();
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  homePage,
  settingsPage,
  signInPage,
}) => {
  const newUserData = generateNewUserData();

  await homePage.clickSettingsButton();
  await settingsPage.fillNewPasswordField(newUserData.password);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newUserData.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
