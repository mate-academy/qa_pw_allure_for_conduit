import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { UserPage } from '../../../src/ui/pages/UserPage';
import { generateBio } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async({page, user}) => {
    await signUpUser(page, user);
});

test('Add short bio from settings', async({ page, homePage}) => {
    const settingsPage = new SettingsPage(page);
    const userPage = new UserPage(page);
    const bio = generateBio();

    await homePage.openSettings();
    await settingsPage.fillBio(bio);
    await settingsPage.clickUpdateSettingsButton();
    await userPage.assertBioHasCorrectText(bio);
})