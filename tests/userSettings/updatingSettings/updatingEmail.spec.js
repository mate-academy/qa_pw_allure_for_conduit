import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {test} from '../../_fixtures/fixtures';

const newEmail = 'email' + faker.string.alpha(5).toLowerCase() + '@example.com';

test.beforeEach(async ({
  user,
  page,
  settingsPage
}) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('should allow to update email', async ({
  settingsPage,
  profilePage,
  user,
  context,
  signInPage,
  homePage
}) => {
  await settingsPage.fillEmail(newEmail);
  await settingsPage.clickSubmitButton();

  await profilePage.waitForUrlContainsUsername(user.username);
  await profilePage.assertHeaderHasText(user.username);

  await context.clearCookies();

  await signInPage.open();
  await signInPage.fillEmailField(newEmail);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});

test.afterEach(async ({context}) => {
  await context.close()
});