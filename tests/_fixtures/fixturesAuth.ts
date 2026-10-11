import { test as base } from '@playwright/test';
import { SignUpPage } from '../../src/ui/pages/auth/SignUpPage';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../src/ui/pages/HomePage';
import { UserSettingsPage } from '../../src/ui/pages/userSettings/UserSettingsPage';

export const test = base.extend<{
  signUpUsers;
  signUpPage;
  signInPage;
  homePage;
  userSettingsPage;
}>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);
    await use(signUpPage);
  },

  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);
    await use(signInPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  userSettingsPage: async ({ page }, use) => {
    const userSettingsPage = new UserSettingsPage(page);
    await use(userSettingsPage);
  },
});
