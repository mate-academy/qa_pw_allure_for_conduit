import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update user profile - Avatar', async ({
  profilePage,
  homePage,
  settingsPage,
  user,
}) => {
  await homePage.clickSettingsButton();

  await settingsPage.fillAvatarField(user.avatar);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.open(user.username);
  await profilePage.assertAvatarIsSet(user.avatar);
});
