import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { SignUpPage } from '../../src/ui/pages/auth/SignUpPage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test.describe(`Log out user`, () => {
  test(`User can log out`, async ({ page }) => {
    const settingPage = new SignUpPage(page, 1);

    await settingPage.clickSettingButton();
    await settingPage.clickLogoutButton();
  });
});