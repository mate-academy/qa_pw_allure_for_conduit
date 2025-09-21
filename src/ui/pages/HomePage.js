import { expect, testStep } from '../../common/helpers/pw';

export class HomePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.yourFeedTab = page.getByText('Your Feed');
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.userProfileLink = page.getByRole('link', {name: 'your profile image'});
    this.settingsLink = page.getByRole('link', {name: 'Settings'});
    this.signinLink = page.getByRole('link', {name: 'Sign up'});
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickNewArticleLink() {
    await this.step(`Click the 'New Article' link`, async () => {
      await this.newArticleLink.click();
    });
  }

  async clickSettingsLink() {
    await this.step(`Click the 'Settings' link`, async () => {
      await this.settingsLink.click();
    });
  }

  async assertYourFeedTabIsVisible() {
    await this.step(`Assert the 'Your Feed' tab is visible`, async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }

  async assertSigninVisible() {
    await this.step(`Assert the sign in link visible`, async () => {
      await expect(this.signinLink).toBeVisible();
    });
  }

}
