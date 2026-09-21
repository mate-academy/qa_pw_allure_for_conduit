import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  page,
  homePage,
  settingsPage,
  profilePage,
}) => {
  const imageUrl =
    'https://as1.ftcdn.net/v2/jpg/07/14/76/44/1000_F_714764467_WzwIqUmmimEkwAoJZRqwINP3Pf70mw0H.jpg';

  await homePage.clickSittingsButton();
  await settingsPage.open();

  await settingsPage.addUrlPictureField(imageUrl);
  await settingsPage.clickButtonUpdateSettings();

  await page.waitForURL('**/profile/**');

  await profilePage.assertProfileImageSrc(imageUrl);
});
