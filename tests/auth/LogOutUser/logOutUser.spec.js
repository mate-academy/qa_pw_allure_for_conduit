import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log Out', async ({ userSettingsPage }) => {
  await userSettingsPage.open();
  await userSettingsPage.clickLogOutButton();
});
