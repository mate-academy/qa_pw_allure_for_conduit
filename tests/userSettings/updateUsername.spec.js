import { test } from '../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from setting', async ({ user, settingsPage }) => {
  const newUsername = faker.internet.username();

  await settingsPage.clickSettingsTab();
  await settingsPage.fillUsername(newUsername);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.assertProfilePage(newUsername);
});
