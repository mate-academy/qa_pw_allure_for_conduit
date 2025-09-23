import { HomePage } from '../../pages/HomePage';
import { SettingsPage } from '../../pages/SettingsPage';
import { testStep } from '../../../common/helpers/pw';

export async function logOutUser(page, userId = 0) {
  await testStep(
    `Log out user`,
    async () => {
      const homePage = new HomePage(page, userId);
      const settingsPage = new SettingsPage(page, userId);

      await homePage.clickSettingsButton();
      await settingsPage.clickLogOutButton();

      await homePage.assertYourFeedTabIsNotVisible();
    },
    userId,
  );
}
