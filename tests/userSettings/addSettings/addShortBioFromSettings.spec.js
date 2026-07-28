import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({
  settingsPage,
  profilePage,
  user,
  logger,
}) => {
  const bio = generateNewUserData(logger).bio;

  await settingsPage.open();

  await settingsPage.assertSettingsPageIsOpened();

  await settingsPage.fillBioField(bio);
  await settingsPage.clickUpdateSettingsButton();

  await profilePage.assertProfilePageIsOpened();
  await profilePage.assertUsernameIsVisible(user.username);
  await profilePage.assertBioIsVisible(bio);
});
