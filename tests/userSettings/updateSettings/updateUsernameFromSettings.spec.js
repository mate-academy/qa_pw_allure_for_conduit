import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  settingsPage,
  profilePage,
  logger,
}) => {
  const newUsername = generateNewUserData(logger).username;

  await settingsPage.open();

  await settingsPage.assertSettingsPageIsOpened();

  await settingsPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettingsButton();

  await profilePage.assertProfilePageIsOpened();
  await profilePage.assertUsernameIsVisible(newUsername);
});
