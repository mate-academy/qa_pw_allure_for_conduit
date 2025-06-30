import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
import { expect } from 'allure-playwright';

test('user is able to add short bio from settings', async ({ page, user, settingsPage }) => {
  const shortBio = faker.lorem.words(10);

  await signUpUser(page, user);
  await settingsPage.clickSettigsLink();
  await settingsPage.fillShortBioField(shortBio);
  await settingsPage.clickUpdateSettigsButton();
  await settingsPage.clickSettigsLink();

  await expect(page.getByPlaceholder('Short bio about you')).toHaveValue(shortBio);
});
