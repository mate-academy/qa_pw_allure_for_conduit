import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.describe('Update user Auth information', () => {
  test.beforeEach(async ({ page, user }) => {
    await signUpUser(page, user);
  });

  test(`Update user's username from the 'Settings' page`, async ({
    homePage,
    profilePage,
    settingsPage,
  }) => {
    const newUsername = faker.lorem.words(1);

    await homePage.clickProfilePageLink();

    await profilePage.clickEditProfileSettingsButton();
    await settingsPage.fillUsernameField(newUsername);
    await settingsPage.clickUpdateSettingsButton();
    await profilePage.assertUsernameIsVisible(newUsername);
    
  });

  test(`Update user's email from the 'Settings' page`, async ({
    user,
    homePage,
    profilePage,
    settingsPage,
    signInPage,
  }) => {
    const newEmail = faker.internet.email().toLowerCase();

    await homePage.clickProfilePageLink();

    await profilePage.clickEditProfileSettingsButton();
    await settingsPage.fillEmailField(newEmail);
    await settingsPage.clickUpdateSettingsButton();
    await profilePage.clickEditProfileSettingsButton();
    await settingsPage.clickLogoutButton();

    await signInPage.open();
    await signInPage.fillEmailField(newEmail);
    await signInPage.fillPasswordField(user.password);
    await signInPage.clickSignInButton();

    await homePage.assertYourFeedTabIsVisible();
  });

  test(`Update user's password from the 'Settings' page`, async ({
    user,
    homePage,
    profilePage,
    settingsPage,
    signInPage,
  }) => {
    const newPassword = faker.internet.password();

    await homePage.clickProfilePageLink();

    await profilePage.clickEditProfileSettingsButton();
    await settingsPage.fillNewPasswordField(newPassword);
    await settingsPage.clickUpdateSettingsButton();
    await profilePage.clickEditProfileSettingsButton();
    await settingsPage.clickLogoutButton();

    await signInPage.open();
    await signInPage.fillEmailField(user.email);
    await signInPage.fillPasswordField(newPassword);
    await signInPage.clickSignInButton();

    await homePage.assertYourFeedTabIsVisible();
  });
});