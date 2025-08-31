import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../src/ui/pages/settings/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({ page, user }) => {
  const settings = new SettingsPage(page);
  const bio = `bio_${Date.now()}`;

  await settings.openFromProfile(user.username);
  await settings.setShortBio(bio);
  await settings.updateSettings();

  // verify on profile page
  await settings.openProfile(user.username);
  await settings.assertProfileBio(bio);
});