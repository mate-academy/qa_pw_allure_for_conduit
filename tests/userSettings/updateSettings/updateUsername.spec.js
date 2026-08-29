import { test } from '../../_fixtures/fixtures';
import { expect } from '@playwright/test';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('Update username', async ({
 page,
 settingsPage,
}) => {
  const newUsername = faker.person.firstName() + '_' + faker.person.lastName();
  await settingsPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettingsButton();
  await expect(page).toHaveURL(new RegExp(`/profile/${newUsername}`));
});

