import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('Update email', async ({
 settingsPage,
}) => {
  const newEmail = faker.internet.email();
  await settingsPage.fillEmailField(newEmail);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.assertEmailIsDisplayed(newEmail.toLowerCase());
});

