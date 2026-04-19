import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  profilePage,
  settingsPage,
  user,
}) => {
  const newUsername = (faker.internet.username()).toLowerCase();

  await profilePage.clickProfileLink(user.username);
  await profilePage.clickEditProfileButton();
  await settingsPage.fillUsernameField(newUsername);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.waitPageLoaded(newUsername);

  await profilePage.assertUsernameValue(newUsername);
});
