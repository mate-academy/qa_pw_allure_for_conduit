import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({ user, userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.updateUserName(user.username + 'Update Name');
  await userSettingsPage.clickUpdateButton();
});

test('Update email from settings', async ({ user, userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.updateEmail('Update email' + user.email);
  await userSettingsPage.clickUpdateButton();
});

test('Update password from settings', async ({ user, userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.updateUserPassword(user.password);
  await userSettingsPage.clickUpdateButton();
});

test('Update image from settings', async ({ userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.addProfilePicture('new photo');
  await userSettingsPage.clickUpdateButton();
});

test('Update BIO from settings', async ({ user, userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.addUserBio(user.email + '' + user.username);
  await userSettingsPage.clickUpdateButton();
});
