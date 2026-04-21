import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('User can log out', async ({
  homePage,
  settingsPage,
}) => {

  await homePage.clickSettingsLink();
  await settingsPage.clickLogoutButton();
  await homePage.assertYourFeedTabIsHidden();
});