import { test as base } from 'allure-playwright';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';
import { UserPage } from '../../src/ui/pages/UserPage';

export const test = base.extend<{
  settingsPage;
  userPage;
}>({
  settingsPage: async ({ page }, use) => {
    const settingsPage = new SettingsPage(page);

    await use(settingsPage);
  },
  userPage: async ({ page }, use) => {
    const userPage = new UserPage(page);

    await use(userPage);
  },
});
