import { test } from '../../_fixtures/fixtures';
import { SignInPage } from '../../../src/ui/pages/auth/SignInPage';
import { HomePage } from '../../../src/ui/pages/HomePage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

let signInPage;
let homePage;

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages, user }) => {
  await signUpUser(pages[0], user);

  signInPage = new SignInPage(pages[1]);
  homePage = new HomePage(pages[1]);
});

test('Successful `Sign in` flow test', async ({ user }) => {
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
