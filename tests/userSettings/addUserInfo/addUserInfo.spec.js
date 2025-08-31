import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test(`Add profile URL picture from 'Settings' page`, async ({
  user,
  homePage,
  profilePage,
  settingsPage,
}) => {
  const profilePictureUrl = faker.image.url();
  
  await homePage.clickProfilePageLink();

  await profilePage.clickEditProfileSettingsButton();
  await settingsPage.fillProfileUrlField(profilePictureUrl);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertProfilePictureIsVisible(user.username, profilePictureUrl);
});

test(`Add short bio from 'Settings' page`, async ({
  homePage,
  profilePage,
  settingsPage,
}) => {
  const profileBio = faker.lorem.sentences(1);

  await homePage.clickProfilePageLink();

  await profilePage.clickEditProfileSettingsButton();
  await settingsPage.fillBioField(profileBio);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertBioIsVisible(profileBio);
});