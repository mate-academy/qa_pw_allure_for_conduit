import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({
  user,
  homePage,
  settingsPage,
  userPage,
}) => {
  const newUserEmail = faker.internet.email();

  await homePage.clickOnSettingsLink();

  await settingsPage.assertUserEmailIsCorrect(user.email);
  await settingsPage.updateEmail(newUserEmail);
  await settingsPage.clickOnUpdateSettingsButton();

  await userPage.clickOnEditProfileSettingsButton();

  await settingsPage.assertUserEmailIsCorrect(newUserEmail);
});
