import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update Email from settings', async ({ settingsPage, myProfilePage }) => {
  await settingsPage.clickSettingsButton();
  const newEmail = faker.internet.email().toLowerCase();
  await settingsPage.updateNewEmailField(newEmail);
  await settingsPage.clickUpdateSettingsButton();
  await myProfilePage.assertFavoritedPostsButtonIsVisible();
  await settingsPage.clickSettingsButton();
  await settingsPage.assertEmailIsUpdated(newEmail);
});
