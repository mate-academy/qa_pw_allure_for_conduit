import { expect, testStep } from '../../../common/helpers/pw';

export class ViewProfilePage {
  constructor(page) {
    this.page = page;
    this.articleDescription = page
      .locator('p')
      .filter({ hasText: 'Article description:' });
    this.settingsButton = page.getByRole('link', {
      name: ' Edit Profile Settings',
    });
    this.profileImage = page.getByAltText("User's profile image");
    this.username = page.locator('h4');
    this.bio = page.locator('p');
  }

  nameLocator(text) {
    return this.page.getByRole('heading', { name: `${text}` });
  }
  bioLocator(text) {
    return this.page.getByText(`${text}`);
  }

  async assertUsernameIsVisible(text, username) {
    await expect(this.nameLocator(text)).toHaveText(username);
  }

  async assertBioIsVisible(text, bio) {
    await expect(this.bioLocator(text)).toHaveText(bio);
  }

  async assertProfilePictureHasUrl(url) {
    await expect(this.profileImage).toHaveAttribute('src', url);
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async assertArticleDescription(title) {
    await this.step(`Assert the article has correct description`, async () => {
      await expect(this.articleDescription).toContainText(title);
    });
  }

  async clickSettingsButton() {
    await this.step(`Click 'Settings button'`, async () => {
      await this.settingsButton.click();
    });
  }
}
