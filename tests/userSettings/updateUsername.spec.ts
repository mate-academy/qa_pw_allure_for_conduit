import { test, expect } from '../_fixtures/fixturesGeneric';

test.describe('User Settings - update username', () => {
  test.beforeEach(async ({ pages, user }) => {
    const page = pages[0];

    // Logowanie użytkownika
    await page.goto('/login');
    await page.fill('input[placeholder="Email"]', user.email);
    await page.fill('input[placeholder="Password"]', user.password);
    await page.click('button[type="submit"]');
    await page.waitForURL('/'); // upewniamy się, że zalogowany
  });

  test('Update username from settings', async ({ pages }) => {
    const page = pages[0];

    await page.goto('/settings');

    const usernameInput = page.locator('input[placeholder="Username"]');
    await usernameInput.fill('NewUsername123');

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('.success-message')).toHaveText(
      'Your settings have been saved.',
    );
  });
});
