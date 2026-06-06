import { test } from '../_fixtures/fixtures';
import { generateNewUserData } from '../_fixtures/fixturesGeneric';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../src/ui/pages/HomePage';


const { faker } = require('@faker-js/faker');


let settingsPage
let signInPage;
let homePage;


test.beforeEach(async ({ page,user }) => {
  settingsPage = new SettingsPage(page);
  signInPage = new SignInPage(page);
  homePage = new HomePage(page);

  await signUpUser(page, user);

});

test('Update password from settings', async ({ user, page }) => {
const password = user.password

  await settingsPage.open();
  await settingsPage.fillPassword(password);
  await settingsPage.clickUpdateButton();
  await settingsPage.clickOnLogoutButton();
    
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();

});