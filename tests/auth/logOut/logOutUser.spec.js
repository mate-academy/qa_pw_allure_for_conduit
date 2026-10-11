import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Log out user', async ({ page, user, userSettingsPage }) => {
  await signUpUser(page, user);

  await userSettingsPage.open();

  await userSettingsPage.clickLogoutButton();

  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Settings' })).not.toBeVisible();
});
