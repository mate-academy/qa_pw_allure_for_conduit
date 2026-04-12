import { test } from '../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  settingsPage,
  profilePage,
}) => {
  const avatarUrl = faker.image.avatar();

  await settingsPage.clickSettingsTab();
  await settingsPage.fillProfilePicture(avatarUrl);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertPictureAdded();
});
