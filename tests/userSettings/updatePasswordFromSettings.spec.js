import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  user,
  settingsPage,
  myProfilePage,
  signInPage,
  homePage,
}) => {
  await settingsPage.clickSettingsButton();
  const newPassword = faker.internet.password();
  await settingsPage.updateNewPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();
  await myProfilePage.assertFavoritedPostsButtonIsVisible();
  await settingsPage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();
  await homePage.assertYourFeedTabIsVisible();
});
