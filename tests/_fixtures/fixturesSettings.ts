import { test as base } from '@playwright/test';
import { SettingsPage } from '../../src/ui/pages/userSettings/SettingsPage';

export const test = base.extend<{
  settingsPage: SettingsPage;
}>({
  settingsPage: async ({ page }, use) => {
    const settingsPage = new SettingsPage(page);

    await use(settingsPage);
  },
});
