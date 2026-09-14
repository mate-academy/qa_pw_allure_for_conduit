import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({
  user,
  homePage,
  settingsPage,
  userPage,
  signInPage,
}) => {
  await homePage.clickOnSettingsLink();

  await settingsPage.clickOnLogoutButton();

  await homePage.assertUserIsNotLoggedIn();
});
