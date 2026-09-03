import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({
  user,
  userSettingsPage,
}) => {
  const shortBio = `QA engineer ${user.username}`;

  await userSettingsPage.open();
  await userSettingsPage.fillBioField(shortBio);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.open();
  await userSettingsPage.assertBioFieldHasValue(shortBio);
});
