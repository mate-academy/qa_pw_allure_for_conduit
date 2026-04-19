import { test as base } from '@playwright/test';
import { HomePage } from '../../src/ui/pages/HomePage';
import { ProfilePage } from '../../src/ui/pages/ProfilePage';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';

export const test = base.extend<{
  homePage: HomePage;
  profilePage: ProfilePage;
  settingsPage: SettingsPage;
}>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  },

  profilePage: async ({ page }, use) => {
    const profilePage = new ProfilePage(page);

    await use(profilePage);
  },

  settingsPage: async ({ page }, use) => {
    const settingsPage = new SettingsPage(page);

    await use(settingsPage);
  },
});
