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

test('Add profile picture URL from settings', async ({ userSettingsPage }) => {
  const pictureUrl = 'https://api.realworld.io/images/smiley-cyrus.jpeg';

  await userSettingsPage.fillPictureUrlField(pictureUrl);
  await userSettingsPage.assertPictureUrlFieldHasValue(pictureUrl);
});
