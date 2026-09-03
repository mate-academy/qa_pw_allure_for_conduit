import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  user,
  userSettingsPage,
  signInPage,
  homePage,
}) => {
  const updatedPassword = `${user.password}1Aa!`;

  await userSettingsPage.open();
  await userSettingsPage.fillPasswordField(updatedPassword);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.open();
  await userSettingsPage.clickLogOutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(updatedPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
