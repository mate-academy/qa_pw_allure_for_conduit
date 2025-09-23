import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
import { expect } from 'allure-playwright';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  homePage,
  settingsPage,
  page,
  user,
}) => {
  const pictureURL = faker.image.avatar();

  await homePage.clickSettingsLink();

  await settingsPage.fillUrlOfProfilePictureField(pictureURL);
  await settingsPage.clickUpdateSettingsButton();

  await page.waitForURL(`**/profile/${user.username}`);

  await expect(page.locator('.user-img')).toBeVisible();
  await expect(page.locator('.user-img')).toHaveAttribute('src', pictureURL);
});
