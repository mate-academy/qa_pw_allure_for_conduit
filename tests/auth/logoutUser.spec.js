// tests/profile/logoutUser.spec.js
import { test } from '../_fixtures/fixtures.js';
import { expect } from '@playwright/test';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../src/ui/pages/settings/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({ page, user }) => {
  const settings = new SettingsPage(page);

  // Open Settings via Profile and log out
  await settings.openFromProfile(user.username);
  await settings.logout();

  // Assert navbar shows logged-out state
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
});
