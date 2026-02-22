import { test as base } from '@playwright/test';
import { UserSettings } from '../../src/ui/pages/userSettings/userSettings';
import { ProfilePage } from '../../src/ui/pages/profile/ProfilePage';


export const test = base.extend<{
  userSettings: UserSettings;
  profilePage: ProfilePage;
}>({
  userSettings: async ({ page }, use) => {
    const userSettings = new UserSettings(page);

    await use(userSettings);
  },
  profilePage: async ({ page }, use) => {
    const profilePage = new ProfilePage(page);

    await use(profilePage);
  },
  
});
