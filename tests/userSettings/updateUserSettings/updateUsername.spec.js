import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ signUpPage, user, userSettingsPage }) => {
  await signUpPage.open();
  await signUpPage.fillUsernameField(user.username);
  await signUpPage.fillEmailField(user.email);
  await signUpPage.fillPasswordField(user.password);
  await signUpPage.clickSignUpButton();

  await userSettingsPage.open();
});

test('Update username from settings', async ({ userSettingsPage }) => {
  const newUsername = faker.internet.username().toLowerCase();

  await userSettingsPage.fillUsernameField(newUsername);
  await userSettingsPage.assertUsernameFieldHasValue(newUsername);
});
