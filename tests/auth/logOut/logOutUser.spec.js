import { test } from '../../_fixtures/fixtures';

test('Log out user', async ({ user, signUpPage, homePage }) => {
  await signUpPage.open();
  await signUpPage.fillUsernameField(user.username);
  await signUpPage.fillEmailField(user.email);
  await signUpPage.fillPasswordField(user.password);
  await signUpPage.clickSignUpButton();

  await homePage.assertYourFeedTabIsVisible();
  await homePage.clickSetingButton();
  await homePage.clickLogUotButton();
  await homePage.assertConduitLogoIsVisible();
});
