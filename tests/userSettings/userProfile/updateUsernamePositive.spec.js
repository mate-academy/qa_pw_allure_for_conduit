import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update user Profile - username', async ({
  profilePage,
  homePage,
  settingsPage,
  user,
}) => {
  const newUsername = user.username + '_updated';

  await homePage.clickSettingsButton();

  await settingsPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.open(newUsername);
  await profilePage.assertUsernameIsVisible(newUsername);
});
