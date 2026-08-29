import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('Add profile picture URL', async ({
 settingsPage,
}) => {
  const imageUrl = faker.internet.url();
  await settingsPage.fillImageLinkField(imageUrl);
  await settingsPage.clickUpdateSettingsButton();
  await settingsPage.open();
  await settingsPage.assertURLIsUpdated(imageUrl);
});

