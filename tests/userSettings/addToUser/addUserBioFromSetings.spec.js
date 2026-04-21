import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

const bio = faker.lorem.word();

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add user bio from settings', async ({
  homePage,
  settingsPage,
  profilePage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillBioField(bio);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertUserHasCorrectBio(bio);
});