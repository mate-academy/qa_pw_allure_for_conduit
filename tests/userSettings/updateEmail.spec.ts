import { test, expect } from '../_fixtures/fixturesGeneric';

test.describe('User Settings - update email', () => {
  test.beforeEach(async ({ pages, user }) => {
    const page = pages[0];

    // Logowanie użytkownika
    await page.goto('/login');
    await page.fill('input[placeholder="Email"]', user.email);
    await page.fill('input[placeholder="Password"]', user.password);
    await page.click('button[type="submit"]');
    await page.waitForURL('/'); // upewniamy się, że zalogowany
  });

  test('Update email from settings', async ({ pages, user }) => {
    const page = pages[0];

    await page.goto('/settings');

    const emailInput = page.locator('input[placeholder="Email"]');
    await emailInput.fill(user.email.replace('@', '+updated@'));

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('.success-message')).toHaveText(
      'Your settings have been saved.',
    );
  });
});
