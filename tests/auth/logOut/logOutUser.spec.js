import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({ userSettingsPage, homePage }) => {
  await userSettingsPage.open();
  await userSettingsPage.clickLogOutButton();

  await homePage.assertSignInLinkIsVisible();
});
