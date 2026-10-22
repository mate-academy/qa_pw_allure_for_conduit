import { expect, testStep } from '../../common/helpers/pw';

export class HomePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.yourFeedTab = page.getByText('Your Feed');
    this.globalFeedTab = page.getByText('Global Feed');
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.settingsButton = page.locator('.nav-link', { hasText: 'Settings' });
    this.userProfileButton = page.getByRole('link', {
      name: 'your profile image',
    });
    this.homeButton = page.getByRole('link', { name: 'Home' });
    this.signInButton = page.getByRole('link', { name: 'Sign in' });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickNewArticleLink() {
    await this.step(`Click the 'New Article' link`, async () => {
      await this.newArticleLink.click();
    });
  }

  async clickSettingsButton() {
    await this.step(`Click settings button`, async () => {
      await this.settingsButton.click();
    });
  }

  async clickHomeButton() {
    await this.step(`Click home button`, async () => {
      await this.homeButton.click();
    });
  }

  async clickUserProfileButton() {
    await this.step(`Click user profile button`, async () => {
      await this.userProfileButton.click();
    });
  }

  async assertYourFeedTabIsVisible() {
    await this.step(`Assert the 'Your Feed' tab is visible`, async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }

  async assertGlobalFeedTabIsVisible() {
    await this.step(`Assert the 'Global Feed' tab is visible`, async () => {
      await expect(this.globalFeedTab).toBeVisible();
    });
  }

  async assertSignInButtonIsVisible() {
    await this.step(`Assert the 'Sign In' button is visible`, async () => {
      await expect(this.signInButton).toBeVisible();
    });
  }
}
