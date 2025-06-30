import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
import { expect } from 'allure-playwright';

test('user is able to update username from settings', async ({ page, user, signUpPage, settingsPage }) => {
  const newUsername = faker.internet.username();
  const expectedUsername = newUsername.toLowerCase();

  await signUpUser(page, user);
  await settingsPage.clickSettigsLink();
  await signUpPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettigsButton();
  await settingsPage.clickSettigsLink();

  await expect(page.getByRole('link', { name: newUsername })).toHaveAttribute(
    'href',
    `/profile/${expectedUsername}`
  );
});
