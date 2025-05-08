import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {test} from '../../_fixtures/fixtures';

const bio = faker.lorem.sentence(5);

test.beforeEach(async ({
  user,
  page,
  settingsPage
}) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('should allow to add short bio', async ({
  settingsPage,
  profilePage,
  user,
  context,
  signInPage,
  homePage
}) => {
  await settingsPage.fillBioField(bio);
  await settingsPage.clickSubmitButton();

  await profilePage.waitForUrlContainsUsername(user.username);
  await profilePage.assertHeaderHasText(user.username);
  await profilePage.assertProfileBioHasText(bio);
});

test.afterEach(async ({context}) => {
  await context.close()
});