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

test('Update email from settings', async ({ userSettingsPage }) => {
  const newEmail = faker.internet.email().toLowerCase();

  await userSettingsPage.fillEmailField(newEmail);
  await userSettingsPage.assertEmailFieldHasValue(newEmail);
});
