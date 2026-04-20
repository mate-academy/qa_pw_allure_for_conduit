import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('User should be able to update profile picture', async ({ page }) => {
  const settingsPage = new SettingsPage(page);
  const link = 'https://picsum.photos/200/300';

  await settingsPage.open();
  await settingsPage.updatePhotoLink(link);
  await settingsPage.updateSettingButtonClick();

  await page.waitForURL(/\/profile\/[^/]+$/);

  await settingsPage.open();
  await settingsPage.assertPhotoLink(link);
});
