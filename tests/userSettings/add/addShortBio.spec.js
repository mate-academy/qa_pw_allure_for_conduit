import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test(`Add short bio from settings`, async ({ userSettingsPage, user }) => {
  const shortBio = faker.lorem.sentence();

  await userSettingsPage.open();
  await userSettingsPage.fillShortBioField(shortBio);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.assertRedirectedToProfilePage(user.username);
});
