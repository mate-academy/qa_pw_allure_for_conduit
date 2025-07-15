import { test } from '../../_fixtures/fixtures'
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { UserSettingsPage } from '../../../src/ui/pages/user/UserSettingsPage';
import { UserProfilePage } from '../../../src/ui/pages/user/UserProfilePage';


const userData = generateNewUserData();
const updateUserProfileParameters = [
  { operationUpdate: 'email', data: userData.email},
  { operationUpdate: 'password', data: userData.password },
  { operationUpdate: 'username', data: userData.username },
];

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user, 1);
});

updateUserProfileParameters.forEach(({ operationUpdate, data }) => {
  
  test(`Update user ${operationUpdate} from settings`, async ({
    homePage,
    page,
  }) => {

    await homePage.clickSettingsLink();
    const userSettingsPage = new UserSettingsPage(page);
    const userProfilePage = new UserProfilePage(page);

    if (operationUpdate === 'email') {
      await userSettingsPage.updateEmail(data);
    } else if (operationUpdate === 'password') {
      await userSettingsPage.updatePassword(data);
    } else if (operationUpdate === 'username') {
      await userSettingsPage.updateUserName(data);
    }
    await userSettingsPage.clickUpdateSettingsButton();
    await userProfilePage.assertUserNameIsVisible();
  });
})
