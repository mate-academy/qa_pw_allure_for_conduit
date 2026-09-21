import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';
test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add short bio from settings', async ({
  page,
  homePage,
  settingsPage,
  profilePage,
}) => {
  const shortBio = faker.lorem.sentence();

  await homePage.clickSittingsButton();
  await settingsPage.open();
  await settingsPage.addShortBioField(shortBio);
  await settingsPage.clickButtonUpdateSettings();
  await page.waitForURL('**/profile/**');

  await profilePage.assertShortBioVisible(shortBio);
});
