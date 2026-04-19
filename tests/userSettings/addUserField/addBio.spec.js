import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({
  profilePage,
  settingsPage,
  user
}) => {
  const bio = faker.lorem.paragraph();

  await profilePage.clickProfileLink(user.username);
  await profilePage.clickEditProfileButton();
  await settingsPage.fillBioField(bio);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.waitPageLoaded(user.username);
  await profilePage.clickEditProfileButton();

  await settingsPage.assertBioValue(bio);
});
