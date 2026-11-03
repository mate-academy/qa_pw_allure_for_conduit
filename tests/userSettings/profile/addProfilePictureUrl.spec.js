import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { PROFILE_PICTURE_URL } from '../../../src/ui/constants/picture'; 

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);

  await settingsPage.open();
});

test('Add profile picture URL from settings', async ({
  settingsPage,
  profilePage,
}) => {
  await settingsPage.fillURLProfileField(PROFILE_PICTURE_URL);
  await settingsPage.clickUpdateButton();

  await profilePage.assertImageIsVisible(PROFILE_PICTURE_URL);
});