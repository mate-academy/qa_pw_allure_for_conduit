import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({
  settingsPage,
  profilePage,
  user,
  logger,
}) => {
  const newEmail = generateNewUserData(logger).email;

  await settingsPage.open();

  await settingsPage.assertSettingsPageIsOpened();

  await settingsPage.fillEmailField(newEmail);
  await settingsPage.clickUpdateSettingsButton();

  await profilePage.assertProfilePageIsOpened();
  await profilePage.assertUsernameIsVisible(user.username);

  await settingsPage.open();
  await settingsPage.assertEmailFieldHasValue(newEmail);
});
