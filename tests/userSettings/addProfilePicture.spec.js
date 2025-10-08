import { test, expect } from '../_fixtures/fixturesGeneric';
import { UserSettingsPage } from '../../src/ui/pages/user/UserSettingsPage';

test('Add profile picture URL from settings', async ({ page, user }) => {
  const settingsPage = new UserSettingsPage(page);
  await settingsPage.goto();

  const profilePictureUrl = 'https://example.com/profile.jpg';
  await settingsPage.updateProfilePicture(profilePictureUrl);

  // Assert profile picture updated
  const currentUrl = await settingsPage.getProfilePictureUrl();
  expect(currentUrl).toBe(profilePictureUrl);
});
