import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {test} from '../../_fixtures/fixtures';

test.beforeEach(async ({
  user,
  page,
  settingsPage
}) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('should allow user to log out', async ({
  settingsPage,
  homePage
}) => {
  await settingsPage.clickLogoutButton();
  await homePage.assertSignUpLinkIsVisible();
});

test.afterEach(async ({context}) => {
  await context.close()
});