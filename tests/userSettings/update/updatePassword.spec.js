import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test(`Update password from settings`, async ({ userSettingsPage, user }) => {
  const newPassword = faker.internet.password();

  await userSettingsPage.open();
  await userSettingsPage.fillNewPasswordField(newPassword);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.assertRedirectedToProfilePage(user.username);
});
