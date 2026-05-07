import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test(`Log out user`, async ({ userSettingsPage, homePage }) => {
  await userSettingsPage.open();
  await userSettingsPage.clickLogoutButton();

  await homePage.assertSignInButtonIsVisible();
  await homePage.assertSignUpButtonIsVisible();
});
