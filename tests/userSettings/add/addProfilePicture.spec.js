import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { generateProfileImageUrl } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({ page, homePage }) => {
  await homePage.clickSettingsPageLink();

  const settingsPage = new SettingsPage(page);
  await settingsPage.waitForOpened();

  const imageUrl = generateProfileImageUrl();
  await settingsPage.fillProfilePictureField(imageUrl);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsPageLink();
  await settingsPage.waitForOpened();
  await settingsPage.assertProfilePictureFieldWasAdded(imageUrl);
});
