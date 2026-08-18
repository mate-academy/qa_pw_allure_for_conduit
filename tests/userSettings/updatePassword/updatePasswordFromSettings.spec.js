import { test } from '../../_fixtures/fixtures';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SignInPage } from '../../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../../src/ui/pages/HomePage';

test.beforeEach(async ({ page, user, logger }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  page,
  user,
  logger,
  settingsPage,
}) => {
  const newUser = generateNewUserData(logger);

  await settingsPage.open();
  await settingsPage.fillPasswordField(newUser.password);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.clickLogoutButton();

  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newUser.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
