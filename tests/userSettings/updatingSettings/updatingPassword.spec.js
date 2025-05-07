import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {test} from '../../_fixtures/fixtures';

const newPassword = 'Password' + faker.number.int({ min: 100, max: 999 }) + '!';

test.beforeEach(async ({
  user,
  page,
  settingsPage
}) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('should allow to update password', async ({
  settingsPage,
  profilePage,
  user,
  context,
  signInPage,
  homePage
}) => {
  await settingsPage.fillPassword(newPassword);
  await settingsPage.clickSubmitButton();

  await profilePage.waitForUrlContainsUsername(user.username);
  await profilePage.assertHeaderHasText(user.username);

  await context.clearCookies();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});

test.afterEach(async ({context}) => {
  await context.close()
});