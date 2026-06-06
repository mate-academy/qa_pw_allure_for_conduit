import { test } from '../../_fixtures/fixtures';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SignInPage } from '../../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../../src/ui/pages/HomePage';

let settingsPage;
let homePage;

test.beforeEach(async ({ page,user }) => {
  settingsPage = new SettingsPage(page);
  homePage = new HomePage(page);

  await signUpUser(page, user);

});

test('Log out user', async ({ user, page }) => {


  await settingsPage.open();
  await settingsPage.clickUpdateButton();
  await settingsPage.clickOnLogoutButton();
  await  homePage.assertGlobalFeedTabIsVisible();
  });