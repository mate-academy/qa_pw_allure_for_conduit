import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  userSettingsPage,
}) => {
  const profilePictureUrl = 'https://example.com/profile-picture.png';

  await userSettingsPage.open();
  await userSettingsPage.fillProfilePictureUrlField(profilePictureUrl);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.open();
  await userSettingsPage.assertProfilePictureUrlFieldHasValue(
    profilePictureUrl,
  );
});
