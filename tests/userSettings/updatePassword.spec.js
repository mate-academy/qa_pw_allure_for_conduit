import { test, expect } from '../_fixtures/fixturesGeneric';
import { UserSettingsPage } from '../../src/ui/pages/user/UserSettingsPage';

test('Update password from settings', async ({ page, user }) => {
  const settingsPage = new UserSettingsPage(page);
  await settingsPage.goto();

  const newPassword = 'SuperSecret123!';
  await settingsPage.updatePassword(newPassword);

  // Optional: assert password change success message
  const successMsg = await settingsPage.getPasswordUpdateMessage();
  expect(successMsg).toContain('Password updated');
});
