import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  await settingsPage.open();
});

test('Update email from settings', async ({ settingsPage }) => {
  const email = 'example@mail.com'
  await settingsPage.fillEmailField(email);
  await settingsPage.clickUpdateButton();
  await settingsPage.clickSettingsLink();
  await settingsPage.assertEmailHasValue(email);
});