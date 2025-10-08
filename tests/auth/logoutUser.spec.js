import { test, expect } from '../_fixtures/fixturesGeneric';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../src/ui/pages/HomePage';

test('Log out user', async ({ page, user }) => {
  // 1. Sign up or log in
  const signInPage = new SignInPage(page);
  await signInPage.goto();
  await signInPage.signIn(user.username, user.password);

  const homePage = new HomePage(page);
  await homePage.waitForLoad();

  // 2. Perform logout via UI
  await homePage.logout();

  // 3. Assert user is logged out (login button visible)
  await expect(homePage.loginButton).toBeVisible();
});
