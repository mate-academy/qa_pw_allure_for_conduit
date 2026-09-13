import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Add profile picture URL from settings', async ({
  page,
  user,
  settingsPage,
}) => {
  await signUpUser(page, user);

  const newAvatarUrl = faker.image.avatar();

  await settingsPage.open();
  await settingsPage.fillProfilePictureUrlField(newAvatarUrl);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.open();
  await settingsPage.assertProfilePictureUrlFieldHasValue(newAvatarUrl);
});
