import { test as base } from '@playwright/test';
import { SettingsPage } from '../../src/ui/pages/profile/settings/SettingsPage';

export const test = base.extend<{
  settingsPage;
}>({
 
  settingsPage: async ({ page }, use) => {
    const settingsPage = new SettingsPage(page);

    await use(settingsPage);
  },
});
