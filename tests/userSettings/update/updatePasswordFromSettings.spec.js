import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

const newUser = generateNewUserData();

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  homePage,
  settingsPage,
  signInPage,
  user,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillPasswordField(newUser.password);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsLink();
  await settingsPage.logout();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newUser.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
