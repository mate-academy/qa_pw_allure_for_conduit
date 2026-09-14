import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  user,
  homePage,
  settingsPage,
  userPage,
  signInPage,
}) => {
  const newUserPassword = faker.internet.password();
  await homePage.clickOnSettingsLink();

  await settingsPage.updatePassword(newUserPassword);
  await settingsPage.clickOnUpdateSettingsButton();

  await userPage.clickOnEditProfileSettingsButton();

  await settingsPage.clickOnLogoutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newUserPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
