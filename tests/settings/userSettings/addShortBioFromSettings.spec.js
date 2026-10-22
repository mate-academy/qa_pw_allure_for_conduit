import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({ homePage, settingsPage }) => {
  const newUserData = generateNewUserData();

  await homePage.clickSettingsButton();
  await settingsPage.fillBioField(newUserData.bio);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsButton();
  await settingsPage.reload();
  await settingsPage.assertBioFieldHasValue(newUserData.bio);
});
