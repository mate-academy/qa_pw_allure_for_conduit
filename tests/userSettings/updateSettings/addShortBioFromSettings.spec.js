import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({
  homePage,
  settingsPage,
  userPage,
}) => {
  const shortBio = faker.lorem.paragraph();

  await homePage.clickOnSettingsLink();

  await settingsPage.updateShortBio(shortBio);
  await settingsPage.clickOnUpdateSettingsButton();

  await userPage.assertShortBioIsCorrect(shortBio);
});
