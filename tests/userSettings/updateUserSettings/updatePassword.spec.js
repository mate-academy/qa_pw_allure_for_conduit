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

test('Update password from settings', async ({ userSettingsPage }) => {
  const newPassword = faker.internet.password();

  await userSettingsPage.fillPasswordField(newPassword);
  await userSettingsPage.clickUpdateSettingsButton();
});
