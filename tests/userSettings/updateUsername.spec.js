import { test, expect } from '../_fixtures/fixturesGeneric';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';

test('Update username from settings', async ({ page, user }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', user.password);
  await page.click('button[type="submit"]');
  await page.waitForURL('/');

  const settings = new SettingsPage(page);
  await settings.goto();

  const newUsername = `user_${Date.now()}`;
  await settings.updateUsername(newUsername);

  const currentUsername = await settings.getUsername();
  expect(currentUsername).toBe(newUsername);
});
