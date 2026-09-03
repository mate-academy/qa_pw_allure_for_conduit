import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({
  user,
  userSettingsPage,
}) => {
  const updatedEmail = `updated_${user.email}`;

  await userSettingsPage.open();
  await userSettingsPage.fillEmailField(updatedEmail);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.open();
  await userSettingsPage.assertEmailFieldHasValue(updatedEmail);
});
