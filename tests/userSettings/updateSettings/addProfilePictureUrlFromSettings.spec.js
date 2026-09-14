import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  homePage,
  settingsPage,
  userPage,
}) => {
  const picture = faker.image.avatar();

  await homePage.clickOnSettingsLink();

  await settingsPage.updateProfilePicture(picture);
  await settingsPage.clickOnUpdateSettingsButton();

  await userPage.assertProfilePictureIsCorrect(picture);
});
