import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { signInUser } from '../../../src/ui/actions/auth/signInUser';
import { logOutUser } from '../../../src/ui/actions/auth/logOutUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update user Profile - Email and Password', async ({
  homePage,
  settingsPage,
  page,
}) => {
  const newUser = generateNewUserData();

  await homePage.clickSettingsButton();

  await settingsPage.fillEmailField(newUser.email);
  await settingsPage.fillPasswordField(newUser.password);
  await settingsPage.clickUpdateSettingsButton();

  await logOutUser(page);
  await signInUser(page, newUser);
});
