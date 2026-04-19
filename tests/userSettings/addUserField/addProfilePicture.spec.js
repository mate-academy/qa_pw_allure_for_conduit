import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  profilePage,
  settingsPage,
  user,
}) => {
  const pictureUrl = faker.internet.url();

  await profilePage.clickProfileLink(user.username);
  await profilePage.clickEditProfileButton();
  await settingsPage.fillPictureField(pictureUrl);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.waitPageLoaded(user.username);
  await profilePage.clickEditProfileButton();

  await settingsPage.assertPictureUrlValue(pictureUrl);
});
