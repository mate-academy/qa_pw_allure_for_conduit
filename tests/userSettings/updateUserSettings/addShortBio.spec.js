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

test('Add short bio from settings', async ({ userSettingsPage }) => {
  const bio = faker.lorem.sentence();

  await userSettingsPage.fillBioField(bio);
  await userSettingsPage.assertBioFieldHasValue(bio);
});
