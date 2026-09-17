import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  settingsPage,
  myProfilePage,
}) => {
  await settingsPage.clickSettingsButton();

  const newFirstName = faker.person.firstName();
  const newLastName = faker.person.lastName();
  const newUserName = `${newFirstName}_${newLastName}`
    .replaceAll(`'`, ``)
    .toLowerCase();

  await settingsPage.updateUserNameField(newUserName);
  await settingsPage.clickUpdateSettingsButton();
  await myProfilePage.assertFavoritedPostsButtonIsVisible();
  await settingsPage.clickSettingsButton();
  await settingsPage.assertUserNameIsUpdated(newUserName);
});
