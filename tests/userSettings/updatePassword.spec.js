import { test, expect } from '../_fixtures/fixturesGeneric';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';

test('Update password from settings', async ({ page, user }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', user.password);
  await page.click('button[type="submit"]');
  await page.waitForURL('/');

  const settings = new SettingsPage(page);
  await settings.goto();

  const newPassword = 'SuperSecret123!';
  await settings.updatePassword(newPassword);

  // Optional: sign out and sign in again to verify password
  await page.click('text=Logout');
  await page.goto('/login');
  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', newPassword);
  await page.click('button[type="submit"]');
  await page.waitForURL('/');
  expect(await page.isVisible('text=Logout')).toBeTruthy();
});
