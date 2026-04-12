import { test } from '../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('User adds short bio from settings', async ({
  settingsPage,
  profilePage,
}) => {
  const shortBio = faker.person.bio();

  await settingsPage.clickSettingsTab();
  await settingsPage.fillBio(shortBio);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertBio(shortBio);
});
