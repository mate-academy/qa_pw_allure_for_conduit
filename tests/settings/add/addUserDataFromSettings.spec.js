import { test } from '../../_fixtures/fixtures';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { UserSettingsPage } from '../../../src/ui/pages/user/UserSettingsPage';
import { UserProfilePage } from '../../../src/ui/pages/user/UserProfilePage';


const userData = generateNewUserData();
const updateUserProfileParameters = [
  { operationUpdate: 'url', data: 'https://github.com/CodeMaksymGekalo'},
  { operationUpdate: 'bio', data: 'Hello, world, I\'m AQA' }
];

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user, 1);
});

updateUserProfileParameters.forEach(({ operationUpdate, data }) => {
  
  test(`Add user ${operationUpdate} from settings`, async ({
    homePage,
    page,
  }) => {

    await homePage.clickSettingsLink();
    const userSettingsPage = new UserSettingsPage(page);
    const userProfilePage = new UserProfilePage(page);

    if (operationUpdate === 'url') {
      await userSettingsPage.addURLprofilePicture(data);
    } else if (operationUpdate === 'bio') {
      await userSettingsPage.addBio(data);
    } 
    await userSettingsPage.clickUpdateSettingsButton();
    await userProfilePage.assertUserNameIsVisible();

  });
})
