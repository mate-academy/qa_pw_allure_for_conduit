import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({ page, homePage, settingsPage }) => {
  await homePage.clickSittingsButton();
  await settingsPage.open();
  await settingsPage.clickButtonLogOut();

  await homePage.assertYourFeedTabIsNotVisible();
});
