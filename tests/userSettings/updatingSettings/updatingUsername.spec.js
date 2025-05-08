import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {test} from '../../_fixtures/fixtures';

const newUsername = 'username' + faker.string.alpha(5).toLowerCase();

test.beforeEach(async ({user, page, settingsPage}) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('should allow to update username', async ({settingsPage, profilePage}) => {
  await settingsPage.fillUsername(newUsername);
  await settingsPage.clickSubmitButton();
  await profilePage.waitForUrlContainsUsername(newUsername);
  await profilePage.assertHeaderHasText(newUsername);
});

test.afterEach(async ({context}) => {
  await context.close()
});