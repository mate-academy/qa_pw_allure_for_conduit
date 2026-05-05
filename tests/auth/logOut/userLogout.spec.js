import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('User successfully logs out', async ({ homePage, settingsPage }) => {
  await homePage.clickSettigsLink();
  await settingsPage.clickLogoutButton();
  await homePage.assertYourFeedTabIsNotVisible();
});
