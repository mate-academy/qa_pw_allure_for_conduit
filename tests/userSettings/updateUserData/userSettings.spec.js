import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({ userSettingsPage }) => {
  await userSettingsPage.open();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const newUsername = `${firstName}_${lastName}`.toLowerCase();
  await userSettingsPage.updateUserName(newUsername);
  await userSettingsPage.clickUpdateButton();
});

test('Update email from settings', async ({ user, userSettingsPage }) => {
  await userSettingsPage.open();
  const newEmail = faker.internet.email().toLowerCase();
  await userSettingsPage.updateEmail(newEmail);
  await userSettingsPage.clickUpdateButton();
});

test('Update password from settings', async ({ user, userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.updateUserPassword(user.password);
  await userSettingsPage.clickUpdateButton();
});

test('Update image from settings', async ({ userSettingsPage }) => {
  await userSettingsPage.open();
  const newPhoto = faker.image.avatar();
  await userSettingsPage.addProfilePicture(newPhoto);
  await userSettingsPage.clickUpdateButton();
});

test('Update BIO from settings', async ({ user, userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.addUserBio(user.email + '' + user.username);
  await userSettingsPage.clickUpdateButton();
});
