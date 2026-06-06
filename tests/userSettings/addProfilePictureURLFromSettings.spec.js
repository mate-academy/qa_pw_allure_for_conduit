import { test } from '../_fixtures/fixtures';
import { SettingsPage } from '../../src/ui/pages/SettingsPage';
import { ProfilePage } from '../../src/ui/pages/ProfilePage';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
const { faker } = require('@faker-js/faker');


let settingsPage
let profilePage

test.beforeEach(async ({ page,user }) => {
  settingsPage = new SettingsPage(page);
  profilePage = new ProfilePage(page);

  await signUpUser(page, user);

});

test('Add profile picture URL from settings', async ({ user, page }) => {
const fakeImageUrl = faker.image.avatar();

  await settingsPage.open();
  await settingsPage.fillPictureURL(fakeImageUrl);
  await settingsPage.clickUpdateButton();
  await page.waitForTimeout(1000);
  await profilePage.assertPictureURLIsVisible(fakeImageUrl);
});
