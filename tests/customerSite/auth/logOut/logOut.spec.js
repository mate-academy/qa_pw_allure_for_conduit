import { test } from '../../../_fixtures/fixtures';
import { signUpUser } from '../../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Successful `Log out` flow test', async ({
  headerPage,
  viewProfilePage,
  homePage,
  settingsProfilePage,
}) => {
  await homePage.open();
  await headerPage.clickProfileLink();
  await viewProfilePage.clickSettingsButton();
  await settingsProfilePage.clickLogOutButton();
  await headerPage.assertUserIsLoggedOut();
});
