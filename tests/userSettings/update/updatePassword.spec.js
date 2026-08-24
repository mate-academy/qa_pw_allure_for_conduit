import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { generateNewPassword } from '../../../src/common/testData/generateNewUserData';
import { SignInPage } from '../../../src/ui/pages/auth/SignInPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({ page, homePage, user }) => {
  await homePage.clickSettingsPageLink();

  const settingsPage = new SettingsPage(page);
  await settingsPage.waitForOpened();

  const newPassword = generateNewPassword();
  await settingsPage.fillNewPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.clickLogOutButton();

  await homePage.waitForOpened();

  const signInPage = new SignInPage(page);
  await homePage.assertSignInLinkIsVisible();
  await homePage.clickSignInLink();
  await signInPage.waitForOpened();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.submitSignInForm();

  await homePage.waitForOpened();
  await homePage.assertYourFeedTabIsVisible();
});
