import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../src/ui/pages/HomePage';


let article;
let newUserData;

test.beforeEach(async ({ page, user, homePage, logger }) => {
  await signUpUser(page, user);
  await homePage.clickSettingsLink();
  article = generateNewArticleData(logger);
  newUserData = generateNewUserData(logger);
});

test('Update username from settings', async ({
  userSettings,
  profilePage,
}) => {
  await userSettings.fillUsernameSettingsField(newUserData.username);
  await userSettings.clickUpdateSettingsButton();

  await profilePage.assertProfileUsernameField(newUserData.username);
});

test('Add profile picture URL from settings', async ({
  userSettings,
  profilePage,
}) => {
  await userSettings.fillProfilePictureSettingsField('https://ideyka.com.ua/files/resized/products/x6299.800x800.jpg.pagespeed.ic.AisMXEiIBK.webp');
  await userSettings.clickUpdateSettingsButton();

  await profilePage.assertProfileImage('https://ideyka.com.ua/files/resized/products/x6299.800x800.jpg.pagespeed.ic.AisMXEiIBK.webp');
});

test('Add short bio from settings', async ({
  userSettings,
  profilePage,
}) => {
  await userSettings.fillBioSettingsField(article.description);
  await userSettings.clickUpdateSettingsButton();

  await profilePage.assertProfileBio(article.description);
});


test('Update email from settings', async ({
  userSettings,
  browser,
  user,
}) => {
  await userSettings.fillEmailSettingsField(newUserData.email);
  await userSettings.clickUpdateSettingsButton();

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  const signInPage = new SignInPage(page2);
  const homePage = new HomePage(page2);

  await signInPage.open();
  await signInPage.fillEmailField(newUserData.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();

  await context2.close();
});



test('Update password from settings', async ({ 
  browser, 
  userSettings, 
  user,
}) => {
  await userSettings.fillNewPasswordSettingsField(newUserData.password);
  await userSettings.clickUpdateSettingsButton();


  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  const signInPage = new SignInPage(page2);
  const homePage = new HomePage(page2);

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newUserData.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();

  await context2.close();
});


