import { SignInPage } from '../../pages/auth/SignInPage';
import { HomePage } from '../../pages/HomePage';
import { testStep } from '../../../common/helpers/pw';

export async function signInUser(page, user, userId = 0) {
  await testStep(
    `Sign in user`,
    async () => {
      const signInPage = new SignInPage(page, userId);
      const homePage = new HomePage(page, userId);

      await homePage.clickSignInButton();

      await signInPage.submitSignInForm(user);

      await homePage.assertYourFeedTabIsVisible();
    },
    userId,
  );
}
