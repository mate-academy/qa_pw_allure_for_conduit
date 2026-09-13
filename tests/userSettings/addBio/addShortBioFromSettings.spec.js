import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Add short bio from settings', async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  const newBio = faker.lorem.sentence();

  await settingsPage.open();
  await settingsPage.fillBioField(newBio);
  await settingsPage.clickUpdateSettingsButton();

  await settingsPage.open();
  await settingsPage.assertBioFieldHasValue(newBio);
});
