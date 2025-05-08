import {test as base} from '@playwright/test';
import {ProfilePage} from '../../src/ui/pages/profile/ProfilePage';

export const test = base.extend<{
  profilePage: ProfilePage
}>({
  profilePage: async ({page}, use) => {
    const profilePage = new ProfilePage(page);
    await use(profilePage);
  }
});