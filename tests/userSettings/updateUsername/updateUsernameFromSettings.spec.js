import { test } from '../../_fixtures/fixtures';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, logger }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  page,
  user,
  logger,
  settingsPage,
}) => {
  const newUser = generateNewUserData(logger);

  await settingsPage.open();
  await settingsPage.fillUsernameField(newUser.username);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.assertUsernameFieldHasValue(newUser.username);
});
