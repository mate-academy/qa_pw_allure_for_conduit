import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { UserPage } from '../../../src/ui/pages/UserPage';

test.beforeEach(async({page, user}) => {
    await signUpUser(page, user);
});

test('Add profile picture URL from settings', async({ page, homePage}) => {
    const settingsPage = new SettingsPage(page);
    const userPage = new UserPage(page);
    const url = 'https://wallartprints-bt.myshopify.com/cdn/shop/files/lake-moraine-nature-pictures-45364998.jpg';

    await homePage.openSettings();
    await settingsPage.fillUrlPicture(url);
    await settingsPage.clickUpdateSettingsButton();
    await userPage.assertPictureIconHasCorrectLink(url);
})