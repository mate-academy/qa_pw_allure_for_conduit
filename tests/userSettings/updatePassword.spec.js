import { test } from '../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('User updates password from settings', async ({
  user,
  settingsPage,
  signInPage,
}) => {
  const newPassword = faker.internet.password();

  await settingsPage.clickSettingsTab();
  await settingsPage.fillNewPasswordField(newPassword);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.assertProfilePage(user.username);

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();
  await settingsPage.assertProfilePage(user.username);
});
