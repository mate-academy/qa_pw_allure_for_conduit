import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { UserSettingsPage } from '../../../src/ui/pages/user/UserSettingsPage';


test.beforeEach(async ({page, user}) => {
  await signUpUser(page, user);
})

test('Successful `Logout`', async ({
  homePage,
  page
}) => {
  
  await homePage.clickSettingsLink();
  const userSettingsPage = new UserSettingsPage(page);
  await userSettingsPage.clickLogoutButton();
  await homePage.assertSigninVisible();

});
