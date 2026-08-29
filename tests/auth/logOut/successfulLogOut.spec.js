import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, settingsPage }) => {
  await signUpUser(page, user);
  await settingsPage.open();
});

test('Successful log out', async ({
 settingsPage,
 homePage,

}) => {
  await settingsPage.clickLogoutButton();
  await homePage.assertGlobalFeedTabIsVisible();
});

