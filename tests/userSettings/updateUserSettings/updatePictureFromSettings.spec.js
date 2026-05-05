import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Update image from settings', async ({
  homePage,
  settingsPage,
  profilePage,
  user,
}) => {
  const image = user.image;

  await homePage.clickSettigsLink();
  await settingsPage.fillImageField(image);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertImageIsShown(image);
});
