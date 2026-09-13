import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test('Update username from settings', async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  const newUsername = generateNewUserData().username;

  await settingsPage.open();
  await settingsPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.open();
  await settingsPage.assertUsernameFieldHasValue(newUsername);
});
