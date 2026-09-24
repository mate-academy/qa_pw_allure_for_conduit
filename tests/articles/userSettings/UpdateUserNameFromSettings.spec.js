import { test } from '../../_fixtures/fixtures';

test('Successful `Sign up` flow test', async ({
  user,
  signUpPage,
  homePage,
}) => {
  await signUpPage.open();
  await signUpPage.fillUsernameField(user.username);
  await signUpPage.fillEmailField(user.email);
  await signUpPage.fillPasswordField(user.password);
  await signUpPage.clickSignUpButton();

  await homePage.assertYourFeedTabIsVisible();

  await homePage.clickSetingButton();
  await homePage.editingUserNameInSeting();
  await homePage.clickUpdateSettingButton();
  // await homePage.reloadPage();
  // await homePage.editingUserNameInSeting();
  // await homePage.clickUpdateSettingButton();
  await homePage.assertUserNameCorect();
});
