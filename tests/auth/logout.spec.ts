import { test, expect } from '../_fixtures/fixturesGeneric';

test.describe('Auth - logout', () => {
  test.beforeEach(async ({ pages, user }) => {
    const page = pages[0];

    // Logowanie użytkownika
    await page.goto('/login');
    await page.fill('input[placeholder="Email"]', user.email);
    await page.fill('input[placeholder="Password"]', user.password);
    await page.click('button[type="submit"]');
    await page.waitForURL('/'); // upewniamy się, że zalogowany
  });

  test('Log out user', async ({ pages }) => {
    const page = pages[0];

    // Po zalogowaniu możemy wykonać logout
    await page.goto('/');
    await page.locator('a[href="/logout"]').click();

    await expect(page).toHaveURL('/login');
  });
});
