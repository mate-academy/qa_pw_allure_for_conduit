import { test, expect } from '../_fixtures/fixturesGeneric';
import { UserSettingsPage } from '../../src/ui/pages/user/UserSettingsPage';

test('Update email from settings', async ({ page, user }) => {
  const settingsPage = new UserSettingsPage(page);
  await settingsPage.goto();

  const newEmail = 'new_email@example.com';
  await settingsPage.updateEmail(newEmail);

  const currentEmail = await settingsPage.getEmail();
  expect(currentEmail).toBe(newEmail);
});
