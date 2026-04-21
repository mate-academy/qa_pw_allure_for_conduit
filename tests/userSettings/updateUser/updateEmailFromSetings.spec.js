import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

const newEmail = faker.internet.email().toLowerCase();

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update email from settings', async ({
  homePage,
  settingsPage,
  profilePage,
  user
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillEmailField(newEmail);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertUserHasCorrectUsername(user.username);
  await profilePage.clickSettingsLink();
  await settingsPage.assertEmailFieldHasNewEmail(newEmail);
});