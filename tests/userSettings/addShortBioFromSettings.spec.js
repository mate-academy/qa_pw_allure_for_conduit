import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({ settingsPage, myProfilePage }) => {
  await settingsPage.clickSettingsButton();
  const shortBio = faker.lorem.sentences(3);
  await settingsPage.fillShortBioField(shortBio);
  await settingsPage.clickUpdateSettingsButton();
  await myProfilePage.assertFavoritedPostsButtonIsVisible();
  await settingsPage.clickSettingsButton();
  await settingsPage.assertShortBioIsUpdated(shortBio);
});
