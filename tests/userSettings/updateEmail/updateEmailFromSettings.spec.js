import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test('Update email from settings', async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  const newEmail = generateNewUserData().email;

  await settingsPage.open();
  await settingsPage.fillEmailField(newEmail);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.open();
  await settingsPage.assertEmailFieldHasValue(newEmail);
});
