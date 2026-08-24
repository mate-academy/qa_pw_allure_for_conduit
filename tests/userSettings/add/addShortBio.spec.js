import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { generateBioText } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio about the user from settings', async ({
  page,
  homePage,
}) => {
  await homePage.clickSettingsPageLink();

  const settingsPage = new SettingsPage(page);
  await settingsPage.waitForOpened();

  const bioText = generateBioText();
  await settingsPage.fillBioField(bioText);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsPageLink();
  await settingsPage.waitForOpened();
  await settingsPage.assertBioTextWasAdded(bioText);
});
