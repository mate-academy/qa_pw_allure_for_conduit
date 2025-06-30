import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
import { expect } from 'allure-playwright';

test('user is able to update password from settings', async ({ page, user, signUpPage, settingsPage }) => {
  const newPassword = faker.internet.password();

  await signUpUser(page, user);
  await settingsPage.clickSettigsLink();
  await signUpPage.fillPasswordField(newPassword);
  await settingsPage.clickUpdateSettigsButton();
  await settingsPage.clickSettigsLink();

  await expect(page.getByPlaceholder('New Password')).toHaveValue(newPassword);
});
