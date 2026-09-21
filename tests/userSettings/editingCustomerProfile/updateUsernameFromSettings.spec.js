import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  page,
  homePage,
  settingsPage,
  profilePage,
}) => {
  const UpdateProfileInformation = generateNewUserData();

  await homePage.clickSittingsButton();
  await settingsPage.open();
  await settingsPage.editUsernameField(UpdateProfileInformation.username);
  await settingsPage.clickButtonUpdateSettings();
  await page.waitForURL('**/profile/**');

  await profilePage.assertUsernameVisible(UpdateProfileInformation.username);
});
