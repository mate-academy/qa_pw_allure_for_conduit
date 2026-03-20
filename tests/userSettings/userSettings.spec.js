import { test } from '../_fixtures/fixtures'
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { HomePage } from '../../src/ui/pages/HomePage';
import { faker } from '@faker-js/faker';
import { SettingsPage } from '../../src/ui/pages/profile/settings/SettingsPage';
import { ProfilePage } from '../../src/ui/pages/profile/ProfilePage';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users }) => {
  await signUpUser(pages[0], users[0], 1);
});

test('Update username', async ({
  pages,
  users
}) => {
  const homePage = new HomePage(pages[0], 1);
  await homePage.clickSettingsLink();

  const settingsPage = new SettingsPage(pages[0], 1);
  const newUsername = faker.internet.username();
  await settingsPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.clickUsernameLink(users[0].username);

  const profilePage = new ProfilePage(pages[0], 1);
  await profilePage.assertUsernameIsVisible(newUsername);

})


test('Update email', async ({
  pages,
  users
}) => {
  const homePage = new HomePage(pages[0], 1);
  await homePage.clickSettingsLink();

  const settingsPage = new SettingsPage(pages[0], 1);
  const newEmail = faker.internet.email();
  await settingsPage.fillEmailField(newEmail);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.clickUsernameLink(users[0].username);

  await homePage.clickSettingsLink();
  await settingsPage.assertEmailHasCorrectText(newEmail);
})

test('Update password', async ({
  pages,
  users
}) => {
  const homePage = new HomePage(pages[0], 1);
  await homePage.clickSettingsLink();

  const settingsPage = new SettingsPage(pages[0], 1);
  const newPassword = faker.internet.password();
  await settingsPage.fillPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.clickUsernameLink(users[0].username);

  await homePage.clickSettingsLink();
  await settingsPage.clickLogoutButton();
  await homePage.clickSignInLink();

  const signInPage = new SignInPage(pages[0], 1);
  await signInPage.fillEmailField(users[0].email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
})

test('Update image url', async ({
  pages,
  users
}) => {
  const homePage = new HomePage(pages[0], 1);
  await homePage.clickSettingsLink();

  const settingsPage = new SettingsPage(pages[0], 1);
  const newUrl = faker.internet.url();
  await settingsPage.fillImageUrlField(newUrl);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.clickUsernameLink(users[0].username);

  await homePage.clickSettingsLink();
  await settingsPage.assertImageUrlFieldHasCorrectValue(newUrl);
})

test('Update short bio', async ({
  pages,
  users
}) => {
  const homePage = new HomePage(pages[0], 1);
  await homePage.clickSettingsLink();

  const settingsPage = new SettingsPage(pages[0], 1);
  const newShortBioText = faker.lorem.word();
  await settingsPage.fillShortBioField(newShortBioText);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.clickUsernameLink(users[0].username);

  const profilePage = new ProfilePage(pages[0], 1);
  await profilePage.assertShortBioIsVisible(newShortBioText);
})