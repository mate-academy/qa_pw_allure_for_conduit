import { test as base } from '@playwright/test';
import { SignUpPage } from '../../src/ui/pages/auth/SignUpPage';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../src/ui/pages/HomePage';
import { HeaderPage } from '../../src/ui/pages/HeaderPage';
import { ViewProfilePage } from '../../src/ui/pages/profile/ViewProfilePage';
import { SettingsProfilePage } from '../../src/ui/pages/profile/SettingsProfilePage';

export const test = base.extend<{
  signUpUsers;
  signUpPage;
  signInPage;
  homePage;
  headerPage;
  viewProfilePage;
  settingsProfilePage;
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
  headerPage: async ({ page }, use) => {
    const headerPage = new HeaderPage(page);

    await use(headerPage);
  },
  viewProfilePage: async ({ page }, use) => {
    const viewProfilePage = new ViewProfilePage(page);

    await use(viewProfilePage);
  },
  settingsProfilePage: async ({ page }, use) => {
    const settingsProfilePage = new SettingsProfilePage(page);

    await use(settingsProfilePage);
  },
});
