import { test } from '../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({
  user,
  settingsPage,
  signInPage,
}) => {
  const newEmail = faker.internet.email();

  await settingsPage.clickSettingsTab();
  await settingsPage.fillNewEmail(newEmail);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.assertProfilePage(user.username);

  await signInPage.open();
  await signInPage.fillEmailField(newEmail);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();
  await settingsPage.assertProfilePage(user.username);
});
