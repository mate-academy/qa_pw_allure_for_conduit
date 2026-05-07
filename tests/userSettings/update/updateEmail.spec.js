import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test(`Update email from settings`, async ({ userSettingsPage, user }) => {
  const email = faker.internet.email();

  await userSettingsPage.open();
  await userSettingsPage.fillEmailField(email);
  await userSettingsPage.clickUpdateSettingsButton();

  await userSettingsPage.assertRedirectedToProfilePage(user.username);
});
