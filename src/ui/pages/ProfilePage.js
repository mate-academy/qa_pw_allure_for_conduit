import { expect, testStep } from '../../common/helpers/pw';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.userInfoSection = page.locator('.profile-page .user-info');
    this.userImage = this.userInfoSection.getByRole('img', {
      name: `User's profile image`,
    });
    this.settingsLink = page
      .locator('.navbar')
      .getByRole('link', { name: 'Settings' });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async assertUsernameIsShown(username) {
    await this.step(`Assert username is shown`, async () => {
      await expect(this.userInfoSection.getByText(username)).toBeVisible();
    });
  }

  async assertBioIsShown(bio) {
    await this.step(`Assert bio is shown`, async () => {
      await expect(this.userInfoSection.getByText(bio)).toBeVisible();
    });
  }

  async assertImageIsShown(imageUrl) {
    await this.step(`Assert image is shown`, async () => {
      await expect(this.userImage).toHaveAttribute('src', imageUrl);
    });
  }

  async clickSettigsLink() {
    await this.step(`Click the 'Settings' link`, async () => {
      await this.settingsLink.click();
    });
  }
}
