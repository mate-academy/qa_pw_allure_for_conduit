import { test } from '../_fixtures/fixtures';
import { generateNewUserData } from '../_fixtures/fixturesGeneric';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';
import { ProfilePage } from '../../src/ui/pages/ProfilePage';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

let settingsPage
let profilePage

test.beforeEach(async ({ page,user }) => {
  settingsPage = new SettingsPage(page);
  profilePage = new ProfilePage(page);

  await signUpUser(page, user);
});

test('Update username from settings', async ({ user, page }) => {

  await settingsPage.open();
  await settingsPage.fillUsername(user.username);
  await settingsPage.clickUpdateButton();
 await page.waitForTimeout(1000); 

  await profilePage.assertUsernameIsVisible(user.username);
});
