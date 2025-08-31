// tests/profile/updateEmail.spec.js
import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../src/ui/pages/settings/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({ page, user }) => {
  const settings = new SettingsPage(page);
  const newEmail = `updated_${Date.now()}@qa.team`;

  await settings.openFromProfile(user.username);
  await settings.setEmail(newEmail);
  await settings.updateSettings();

  // reopen Edit Settings and verify the email persisted
  await settings.openFromProfile(user.username);
  await settings.assertSettingsEmailValue(newEmail);
});