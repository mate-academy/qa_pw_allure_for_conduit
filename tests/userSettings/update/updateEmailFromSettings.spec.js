import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

const newUser = generateNewUserData();

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({ homePage, settingsPage }) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillEmailField(newUser.email);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsLink();

  await settingsPage.assertEmailFieldValueIs(newUser.email);
});
