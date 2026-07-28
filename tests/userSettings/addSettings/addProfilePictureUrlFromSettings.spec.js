import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  settingsPage,
  profilePage,
  user,
  logger,
}) => {
  const pictureUrl = generateNewUserData(logger).profilePictureUrl;

  await settingsPage.open();

  await settingsPage.assertSettingsPageIsOpened();

  await settingsPage.fillProfilePictureUrlField(pictureUrl);
  await settingsPage.clickUpdateSettingsButton();

  await profilePage.assertProfilePageIsOpened();
  await profilePage.assertUsernameIsVisible(user.username);
  await profilePage.assertProfilePictureHasSrc(pictureUrl);
});
