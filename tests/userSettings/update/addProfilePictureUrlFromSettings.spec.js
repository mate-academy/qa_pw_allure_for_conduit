import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
import { expect } from 'allure-playwright';

test('user is able to add profile picture from settings', async ({ page, user, settingsPage }) => {
  const pictureUrl = faker.image.avatar();

  await signUpUser(page, user);
  await settingsPage.clickSettigsLink();
  await settingsPage.fillUrlProfilePictureField(pictureUrl);
  await settingsPage.clickUpdateSettigsButton();
  await settingsPage.clickSettigsLink();

  await expect(page.getByPlaceholder('URL of profile picture')).toHaveValue(pictureUrl);
});
