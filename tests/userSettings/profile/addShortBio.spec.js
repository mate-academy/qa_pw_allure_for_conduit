import { faker } from '@faker-js/faker';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  await settingsPage.open();
});

test('Add profile picture URL from settings', async ({
  settingsPage,
  profilePage,
}) => {
  const bio = faker.lorem.sentence();

  await settingsPage.fillShortBioField(bio);
  await settingsPage.clickUpdateButton();

  await profilePage.assertBioIsVisible(bio);
});
