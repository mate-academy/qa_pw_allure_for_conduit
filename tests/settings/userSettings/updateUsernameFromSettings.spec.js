import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({ homePage, settingsPage }) => {
  const newUserData = generateNewUserData();

  await homePage.clickSettingsButton();
  await settingsPage.fillUsernameField(newUserData.username);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsButton();
  await settingsPage.reload();
  await settingsPage.assertUsernameFieldHasValue(newUserData.username);
});
