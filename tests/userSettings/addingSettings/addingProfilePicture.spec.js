import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {test} from '../../_fixtures/fixtures';

const pictureUrl = 'https://cdn-icons-png.freepik.com/512/7347/7347153.png';

test.beforeEach(async ({
  user,
  page,
  settingsPage
}) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('should allow to update profile picture', async ({
  settingsPage,
  profilePage,
  user,
  context,
  signInPage,
  homePage
}) => {
  await settingsPage.fillProfilePictureUrl(pictureUrl);
  await settingsPage.clickSubmitButton();

  await profilePage.waitForUrlContainsUsername(user.username);
  await profilePage.assertHeaderHasText(user.username);
  await profilePage.assertProfilePicturesHaveUrl(pictureUrl);
});

test.afterEach(async ({context}) => {
  await context.close()
});