import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test(`Update username from settings`, async ({ userSettingsPage, user }) => {
  const firstName = faker.person.firstName().toLowerCase();
  const lastName = faker.person.lastName().toLowerCase();
  const username = `${firstName}_${lastName}`;

  await userSettingsPage.open();
  await userSettingsPage.fillUsernameField(username);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.assertRedirectedToProfilePage(username);
});
