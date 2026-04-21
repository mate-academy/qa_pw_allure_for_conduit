import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

const image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/'+
  'blank-profile-picture-973460_960_720.png';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Add user image from settings', async ({
  homePage,
  settingsPage,
  profilePage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillImageField(image);
  await settingsPage.clickUpdateSettingsButton();
  await profilePage.assertUserHasCorrectImage(image);
});