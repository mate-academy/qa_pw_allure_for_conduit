import { expect, testStep } from '../../common/helpers/pw';

export class HomePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.yourFeedTab = page.getByText('Your Feed');
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.userProfileLink = page.getByRole('link', {
      name: 'your profile image',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickNewArticleLink() {
    await this.step(`Click the 'New Article' link`, async () => {
      await this.newArticleLink.click();
    });
  }

  async clickOnSettingsLink() {
    await this.step(`Click on the 'Settings' link`, async () => {
      await this.settingsLink.click();
    });
  }

  async assertYourFeedTabIsVisible() {
    await this.step(`Assert the 'Your Feed' tab is visible`, async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }

  async assertUserIsNotLoggedIn() {
    await this.step(`Assert the user is not logged in`, async () => {
      await expect(this.yourFeedTab).toBeHidden();
      await expect(this.userProfileLink).toBeHidden();
    });
  }
}
