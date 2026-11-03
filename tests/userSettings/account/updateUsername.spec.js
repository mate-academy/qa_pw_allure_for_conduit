import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  await settingsPage.open();
});

test('Update username from settings', async ({ 
  settingsPage, profilePage, logger }) => {
  const { username } = generateNewUserData(logger);

  await settingsPage.fillUsernameField(username);
  await settingsPage.clickUpdateButton();

  await profilePage.assertUsernameIsVisible(username);
});