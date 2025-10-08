import { test, expect } from '../_fixtures/fixturesGeneric';

test('Log out user', async ({ page, user }) => {
  // Sign in first
  await page.goto('/login');
  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', user.password);
  await page.click('button[type="submit"]');
  await page.waitForURL('/');

  // Perform logout
  await page.click('text=Logout');
  await page.waitForURL('/login');

  // Assert logged out
  expect(await page.isVisible('text=Login')).toBeTruthy();
});
