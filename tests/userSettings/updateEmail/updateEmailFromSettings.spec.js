import { test } from '../../_fixtures/fixtures';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, logger }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({ page, logger, settingsPage }) => {
  const newUser = generateNewUserData(logger);

  await settingsPage.open();
  await settingsPage.fillEmailField(newUser.email);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.assertEmailFieldHasValue(newUser.email);
});
