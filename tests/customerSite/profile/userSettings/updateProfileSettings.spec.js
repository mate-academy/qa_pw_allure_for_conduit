import { test } from '../../../_fixtures/fixtures';
import { generateNewUserData } from '../../../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../../../src/ui/actions/auth/signUpUser';

const user = generateNewUserData();
const testParameters = [
  {
    value: user.newUsername,
    title: 'username',
    field: 'Username',
    assert: async ({ viewProfilePage }, value) => {
      await viewProfilePage.assertUsernameIsVisible(value, value);
    },
  },
  {
    value: user.newEmail,
    title: 'email',
    field: 'Email',
    assert: async ({ viewProfilePage, settingsProfilePage }, value) => {
      await viewProfilePage.clickSettingsButton();

      await settingsProfilePage.assertEmailHasValue(value);
    },
  },
  {
    title: 'profile picture URL',
    field: 'Profile Picture',
    value: user.profilePictureUrl,
    assert: async ({ viewProfilePage }, value) => {
      await viewProfilePage.assertProfilePictureHasUrl(value);
    },
  },

  {
    title: 'short bio',
    field: 'Bio',
    value: user.bio,
    assert: async ({ viewProfilePage }, value) => {
      await viewProfilePage.assertBioIsVisible(value, value);
    },
  },
];

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

testParameters.forEach(({ value, title, field, assert }) => {
  test(`Update ${title}`, async ({
    headerPage,
    viewProfilePage,
    settingsProfilePage,
    page,
  }) => {
    await headerPage.clickProfileLink();
    await viewProfilePage.clickSettingsButton();
    await settingsProfilePage.fillField(field, value);
    await settingsProfilePage.fillField(field, value);
    await settingsProfilePage.fillField(field, value);
    await settingsProfilePage.clickUpdateButton();

    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(5000);

    await assert({ viewProfilePage, settingsProfilePage }, value);
  });
});

test(`Update password`, async ({
  headerPage,
  viewProfilePage,
  settingsProfilePage,
  homePage,
  signInPage,
  user,
}) => {
  await headerPage.clickProfileLink();
  await viewProfilePage.clickSettingsButton();
  await settingsProfilePage.fillField('New Password', user.newPassword);
  await settingsProfilePage.clickUpdateButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.newPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
