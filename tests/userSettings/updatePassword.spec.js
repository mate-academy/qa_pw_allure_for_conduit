// tests/profile/updatePassword.spec.js
import { test } from '../_fixtures/fixtures';
import { expect } from 'playwright-core';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../src/ui/pages/settings/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update password from settings and re-login'
  , async ({ page, user, homePage }) => {
  const settings = new SettingsPage(page);
  const newPassword = `NewPass_${Date.now()}!`;

  // Update password
  await settings.openFromProfile(user.username);
  await settings.setNewPassword(newPassword);
  await settings.updateSettings();

  // Logout
  await settings.editProfileSettingsLink.click();
  await settings.logout();

  // Re-login with NEW password (simple UI flow)
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email').fill(user.email);
  await page.getByPlaceholder('Password').fill(newPassword);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await homePage.assertYourFeedTabIsVisible();
});
