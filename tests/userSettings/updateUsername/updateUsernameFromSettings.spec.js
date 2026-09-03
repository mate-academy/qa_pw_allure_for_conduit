import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  user,
  userSettingsPage,
}) => {
  const updatedUsername = `updated_${user.username}`;

  await userSettingsPage.open();
  await userSettingsPage.fillUsernameField(updatedUsername);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.open();
  await userSettingsPage.assertUsernameFieldHasValue(updatedUsername);
});
