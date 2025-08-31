
import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../src/ui/pages/settings/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({ page, user }) => {
  const settings = new SettingsPage(page);
  const imageUrl = 'https://i.pravatar.cc/150?img=7';

  await settings.openFromProfile(user.username);
  await settings.setProfileImageUrl(imageUrl);
  await settings.updateSettings();

  // navbar updates first
  await settings.assertNavbarAvatar(imageUrl);

  // verify on profile page (large avatar)
  await settings.openProfile(user.username);
  await settings.assertProfileAvatar(imageUrl);
});
