import { test as base } from '@playwright/test';
import { ProfilePage } from '../../src/ui/pages/ProfilePage';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';

export const test = base.extend<{
  profilePage: ProfilePage;
  settingsPage: SettingsPage;
}>({
  profilePage: async ({ page }, use) => {
    const profilePage = new ProfilePage(page);

    await use(profilePage);
  },
  settingsPage: async ({ page }, use) => {
    const settingsPage = new SettingsPage(page);

    await use(settingsPage);
  },
});
