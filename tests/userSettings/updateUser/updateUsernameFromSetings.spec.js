import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

const newUsername = faker.person.firstName().replaceAll(`'`).toLowerCase();

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  homePage,
  settingsPage,
  profilePage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertUserHasCorrectUsername(newUsername);
});