import { expect, testStep } from '../../common/helpers/pw';

export class HomePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.yourFeedTab = page.getByText('Your Feed');
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.signInLink = page.getByRole('link', {name: 'Sign in'});
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

  async clickSignInLink() {
    await this.step(`Click the 'Sign In' link`, async () => {
      await this.signInLink.click();
    });
  }

  async assertYourFeedTabIsVisible() {
    await this.step(`Assert the 'Your Feed' tab is visible`, async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }

  async assertYourFeedTabIsHidden() {
    await this.step(`Assert the 'Your Feed' tab is hidden`, async () => {
      await expect(this.yourFeedTab).toBeHidden();
    });
  }
}
