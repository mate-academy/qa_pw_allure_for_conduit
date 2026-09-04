import { expect, testStep } from '../../common/helpers/pw';

export class HeaderPage {
  constructor(page) {
    this.page = page;
    this.profileLink = page.getByRole('link', { name: 'your profile image' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
  }

  async assertUserIsLoggedOut() {
    await expect(this.signInLink).toBeVisible();

    await expect(this.signUpLink).toBeVisible();
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickProfileLink() {
    await this.step(`Click 'Profile Link' button`, async () => {
      await this.profileLink.click();
    });
  }
}
