import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { HomePage } from '../../../src/ui/pages/HomePage';
import { SettingsPage } from '../../../src/ui/pages/profile/settings/SettingsPage';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users }) => {
  await signUpUser(pages[0], users[0], 1);
});

test('Logout user', async ({
  pages,
}) => {
  const homePage = new HomePage(pages[0], 1);
  await homePage.clickSettingsLink();

  const settingsPage = new SettingsPage(pages[0], 1);
  await settingsPage.clickLogoutButton();

  await homePage.assertSignInLinkIsVisible();
})