import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';



test('Log out user', async ({
  page,
  user,
  userSettings,
 
  homePage,
}) => {
  await signUpUser(page, user);
  await homePage.clickSettingsLink();
  await userSettings.clickLogOutButton();
  await homePage.assertSignInLinkIsVisible();

  
});