import { test as base } from '@playwright/test';
import { SettingsPage } from '../../src/ui/pages/auth/SettingsPage';
import { MyProfilePage } from '../../src/ui/pages/auth/MyProfilePage';

export const test = base.extend<{
  settingsPage;
  myProfilePage;
}>({
  settingsPage: async ({ page }, use) => {
    const settingsPage = new SettingsPage(page);

    await use(settingsPage);
  },
  myProfilePage: async ({ page, user }, use) => {
    const myProfilePage = new MyProfilePage(page, user);

    await use(myProfilePage);
  },
});
