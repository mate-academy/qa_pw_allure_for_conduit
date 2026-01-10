import { test } from '../../_fixtures/fixtures';
import { UserSettingsPage } from '../../../src/ui/pages/userSettings/UserSettingsPage';
import { expect } from '@playwright/test';

test('Log out user', async ({ signUpPage, user, homePage, page }) => {
  await signUpPage.open();
  await signUpPage.fillUsernameField(user.username);
  await signUpPage.fillEmailField(user.email);
  await signUpPage.fillPasswordField(user.password);
  await signUpPage.clickSignUpButton();

  await homePage.assertYourFeedTabIsVisible();

  const userSettingsPage = new UserSettingsPage(page);
  await userSettingsPage.open();
  await userSettingsPage.clickLogoutButton();

  const signInLink = page.getByRole('link', { name: 'Sign in' });
  await expect(signInLink).toBeVisible();
});
