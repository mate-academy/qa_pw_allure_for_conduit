import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';
import { generateNewEmail } from '../../../src/common/testData/generateNewUserData';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';


test('Update Email from settings', async({ page, homePage, signInPage}) => {
    const user = generateNewUserData();
    const settingsPage = new SettingsPage(page);
    const newEmail = generateNewEmail();

    await signUpUser(page, user);
    await homePage.openSettings();
    await settingsPage.fillNewEmail(newEmail);
    await settingsPage.clickUpdateSettingsButton();
    await settingsPage.assertEmailIsUpdated(newEmail);
    await settingsPage.clickLogout();
    await signInPage.open();
    await signInPage.fillEmailField(newEmail);
    await signInPage.fillPasswordField(user.password);
    await signInPage.clickSignInButton();
    await homePage.assertYourFeedTabIsVisible();
})
