import { test } from '../../_fixtures/fixtures';
import { expect } from '@playwright/test';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Log out user', async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  await settingsPage.open();
  await settingsPage.clickLogOutButton();

  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
});