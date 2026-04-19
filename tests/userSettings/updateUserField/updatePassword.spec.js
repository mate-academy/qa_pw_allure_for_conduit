import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings', async ({
  profilePage,
  signInPage,
  homePage,
  settingsPage,
  user,
}) => {
  const newPassword = faker.internet.password();

  await profilePage.clickProfileLink(user.username);
  await profilePage.clickEditProfileButton();
  await settingsPage.fillNewPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.waitPageLoaded(user.username);
  await profilePage.clickEditProfileButton();
  await settingsPage.clickLogoutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
