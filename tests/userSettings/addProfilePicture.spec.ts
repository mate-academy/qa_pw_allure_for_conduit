import { test, expect } from '../_fixtures/fixturesGeneric';

test.describe('User Settings - profile picture', () => {
  test.beforeEach(async ({ pages, user }) => {
    const page = pages[0];

    // Logowanie użytkownika
    await page.goto('/login');
    await page.fill('input[placeholder="Email"]', user.email);
    await page.fill('input[placeholder="Password"]', user.password);
    await page.click('button[type="submit"]');
    await page.waitForURL('/'); // upewniamy się, że zalogowany
  });

  test('Add profile picture URL from settings', async ({ pages }) => {
    const page = pages[0];
    await page.goto('/settings');

    const imageInput = page.locator(
      'input[placeholder="URL of profile picture"]',
    );
    await imageInput.fill('https://example.com/avatar.png');

    await page.locator('button[type="submit"]').click();
    await expect(page.locator('.success-message')).toHaveText(
      'Your settings have been saved.',
    );
  });
});
