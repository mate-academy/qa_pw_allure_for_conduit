import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({
  profilePage,
  settingsPage,
  user,
}) => {
  const newEmail = (faker.internet.email()).toLowerCase();

  await profilePage.clickProfileLink(user.username);
  await profilePage.clickEditProfileButton();
  await settingsPage.fillEmailField(newEmail);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.waitPageLoaded(user.username);
  await profilePage.clickEditProfileButton();

  await settingsPage.assertEmailField(newEmail);
});
