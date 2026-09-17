import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { PICTURE_URL } from '../../src/ui/constants/pictures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  settingsPage,
  myProfilePage,
}) => {
  await settingsPage.clickSettingsButton();
  await settingsPage.addProfilePictureURL(PICTURE_URL);
  await settingsPage.clickUpdateSettingsButton();
  await myProfilePage.assertFavoritedPostsButtonIsVisible();
  await settingsPage.clickSettingsButton();
  await settingsPage.assertProfilePictureURLFieldIsUpdated(PICTURE_URL);
});
