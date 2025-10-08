import { test, expect } from '../_fixtures/fixturesGeneric';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';

test('Add profile picture URL from settings', async ({ page, user }) => {
  // Sign in
  await page.goto('/login');
  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', user.password);
  await page.click('button[type="submit"]');
  await page.waitForURL('/');

  const settings = new SettingsPage(page);
  await settings.goto();

  const profilePicture = 'https://example.com/profile.jpg';
  await settings.updateProfilePicture(profilePicture);

  const currentPicture = await settings.getProfilePicture();
  expect(currentPicture).toBe(profilePicture);
});
