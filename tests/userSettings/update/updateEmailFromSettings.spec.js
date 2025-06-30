import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
import { expect } from 'allure-playwright';

test('user is able to update email from settings', async ({ page, user, signUpPage, settingsPage }) => {
  const newEmail = faker.internet.email();

  await signUpUser(page, user);
  await settingsPage.clickSettigsLink();
  await signUpPage.fillEmailField(newEmail);
  await settingsPage.clickUpdateSettigsButton();
  await settingsPage.clickSettigsLink();

  await expect(page.getByPlaceholder('Email')).toHaveValue(newEmail);
});
