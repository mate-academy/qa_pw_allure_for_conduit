import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({
  profilePage,
  homePage,
  settingsPage,
  user,
}) => {
  await profilePage.clickProfileLink(user.username);
  await profilePage.clickEditProfileButton();
  await settingsPage.clickLogoutButton();

  await homePage.assertYourFeedTabIsHidden();
});
