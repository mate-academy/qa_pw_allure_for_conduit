import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { generateNewUsername } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({ page, homePage }) => {
  await homePage.clickSettingsPageLink();

  const settingsPage = new SettingsPage(page);
  await settingsPage.waitForOpened();
  await settingsPage.clearUsernameField();

  const updatedUsername = generateNewUsername();
  await settingsPage.fillUsernameField(updatedUsername);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsPageLink();
  await settingsPage.waitForOpened();
  await settingsPage.assertUsernameFieldWasUpdated(updatedUsername);
});
