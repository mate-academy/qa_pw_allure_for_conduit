import { test as base } from '@playwright/test';
import { UserSettingsPage } from '../../src/ui/pages/userSettings/UserSettingsPage';

export const test = base.extend<{
  userSettingsPage: UserSettingsPage;
}>({
  userSettingsPage: async ({ page }, use) => {
    const userSettingsPage = new UserSettingsPage(page);

    await use(userSettingsPage);
  },
});
