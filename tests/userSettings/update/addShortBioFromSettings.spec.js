import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
import { expect } from 'allure-playwright';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({
  homePage,
  settingsPage,
  page,
  user,
}) => {
  const shortBio = faker.lorem.words(15);

  await homePage.clickSettingsLink();

  await settingsPage.fillBioField(shortBio);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsLink();
  await page.waitForURL(`**/profile/${user.username}`);

  await expect(page.getByText(shortBio)).toBeVisible();
});
