import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  homePage,
  settingsPage,
  userPage,
}) => {
  const newUsername = faker.internet.username().toLowerCase();

  await homePage.clickOnSettingsLink();

  await settingsPage.updateUsername(newUsername);
  await settingsPage.clickOnUpdateSettingsButton();

  await userPage.assertUsernameIsCorrect(newUsername);
});
