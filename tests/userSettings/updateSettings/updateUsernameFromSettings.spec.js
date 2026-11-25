import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { UserPage } from '../../../src/ui/pages/UserPage';
import { generateNewUsername } from '../../../src/common/testData/generateNewUserData';

test.beforeEach(async({page, user}) => {
    await signUpUser(page, user);
});

test('Update Username from settings', async({ page, homePage}) => {
    const settingsPage = new SettingsPage(page);
    const userPage = new UserPage(page);
    const newUsername = generateNewUsername();

    await homePage.openSettings();
    await settingsPage.fillNewUsername(newUsername);
    await settingsPage.clickUpdateSettingsButton();
    await userPage.assertUsernameHeadingHasCorrectText(newUsername, newUsername);
})
