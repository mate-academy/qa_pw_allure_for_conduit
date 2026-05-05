import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update bio from settings', async ({
  homePage,
  settingsPage,
  profilePage,
  user,
}) => {
  const bio = user.bio;

  await homePage.clickSettigsLink();
  await settingsPage.fillBioField(bio);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertBioIsShown(bio);
});
