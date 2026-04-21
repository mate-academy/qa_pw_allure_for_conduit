import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

const newPassword = faker.internet.password();

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  homePage,
  settingsPage,
  profilePage,
  signInPage,
  user
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertUserHasCorrectUsername(user.username);
  await profilePage.clickSettingsLink();
  await settingsPage.clickLogoutButton();
  await homePage.clickSignInLink();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();
  await homePage.assertYourFeedTabIsVisible();
});