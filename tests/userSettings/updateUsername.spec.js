import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../src/ui/pages/settings/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({ page, user }) => {
  const settings = new SettingsPage(page);
  const newUsername = `user_${Date.now()}`;

  // Open Settings, change username, save
  await settings.openFromProfile(user.username);
  await settings.setUsername(newUsername);
  await settings.updateSettings();

  // Open the new profile page and assert the header <h4> shows the new username
  await settings.openProfile(newUsername);
  await settings.assertProfileUsername(newUsername);
});