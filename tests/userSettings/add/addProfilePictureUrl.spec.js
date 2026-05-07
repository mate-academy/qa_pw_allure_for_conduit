import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test(`Add profile picture URL from settings`, async ({
  userSettingsPage,
  user,
}) => {
  const profilePictureUrl = faker.image.url();

  await userSettingsPage.open();
  await userSettingsPage.fillProfilePictureUrlField(profilePictureUrl);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.assertRedirectedToProfilePage(user.username);
});
