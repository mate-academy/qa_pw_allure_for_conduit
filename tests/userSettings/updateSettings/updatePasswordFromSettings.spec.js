import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { generateNewPassword } from '../../../src/common/testData/generateNewUserData';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

test('Update Password from settings', async({ page, homePage, signInPage}) => {

    const user = generateNewUserData();
    const settingsPage = new SettingsPage(page);
    const newPassword = generateNewPassword();

    await signUpUser(page, user);
    await homePage.openSettings();
    await settingsPage.fillNewPassword(newPassword);
    await settingsPage.clickUpdateSettingsButton();
    await settingsPage.clickLogout();
    await signInPage.open();
    await signInPage.fillEmailField(user.email);
    await signInPage.fillPasswordField(newPassword);
    await signInPage.clickSignInButton();
    await homePage.assertYourFeedTabIsVisible();
})
