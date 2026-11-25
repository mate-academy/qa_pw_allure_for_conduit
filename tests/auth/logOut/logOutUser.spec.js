import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { SettingsPage } from '../../../src/ui/pages/SettingsPage';

test.beforeEach(async({page, user}) => {
    await signUpUser(page, user);
});

test('Log out user', async({ page, homePage}) => {
    const settingsPage = new SettingsPage(page);

    await homePage.openSettings();
    await settingsPage.clickLogout();
    await homePage.assertSignInIconIsVisible();
    await homePage.assertSignUpIconIsVisible();
})