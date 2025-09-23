import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update user profile - Bio', async ({
  profilePage,
  homePage,
  settingsPage,
  user,
}) => {
  await homePage.clickSettingsButton();

  await settingsPage.fillBioField(user.bio);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.open(user.username);
  await profilePage.assertBioIsVisible(user.bio);
});
