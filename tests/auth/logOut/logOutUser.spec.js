import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({ page, settingsPage }) => {
  await settingsPage.open();
  await settingsPage.clickLogoutButton();

  await expect(page).toHaveURL('/');
});
