import { test, expect } from '../_fixtures/fixturesGeneric';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';

test('Add short bio from settings', async ({ page, user }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', user.password);
  await page.click('button[type="submit"]');
  await page.waitForURL('/');

  const settings = new SettingsPage(page);
  await settings.goto();

  const shortBio = 'Hello, I am a test user!';
  await settings.updateBio(shortBio);

  const currentBio = await settings.getBio();
  expect(currentBio).toBe(shortBio);
});
