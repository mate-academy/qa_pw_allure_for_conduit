import { test, expect } from '../_fixtures/fixturesGeneric';
import { UserSettingsPage } from '../../src/ui/pages/user/UserSettingsPage';

test('Update username from settings', async ({ page, user }) => {
  const settingsPage = new UserSettingsPage(page);
  await settingsPage.goto();

  const newUsername = 'new_user_123';
  await settingsPage.updateUsername(newUsername);

  const currentUsername = await settingsPage.getUsername();
  expect(currentUsername).toBe(newUsername);
});
