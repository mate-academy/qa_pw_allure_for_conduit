import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({ page, homePage, settingsPage }) => {
  const UpdateProfileInformation = generateNewUserData();

  await homePage.clickSittingsButton();
  await settingsPage.open();
  await settingsPage.editEmailField(UpdateProfileInformation.email);
  await settingsPage.clickButtonUpdateSettings();
});
