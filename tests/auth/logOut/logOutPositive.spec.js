import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Successful `Logout` flow test', async ({
  page,
  user,
  homePage,
  profilePage,
  settingsPage,
}) => {
  await signUpUser(page, user);

  await homePage.clickProfilePageLink();
  await profilePage.clickEditProfileSettingsButton();
  await settingsPage.clickLogoutButton();

  await homePage.assertYourFeedTabIsNotVisible();
});