import { testStep } from '../../common/helpers/pw';
import { expect } from '@playwright/test';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.userProfileImage = page.getByRole('img', {
      name: "User's profile image",
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open your profile page`, async () => {
      await this.page.goto('/profile');
    });
  }

  async assertUsernameVisible(username) {
    await this.step(`Verify username is visible: ${username}`, async () => {
      const usernameHeading = this.page.getByRole('heading', {
        name: username,
      });
      await expect(usernameHeading).toBeVisible();
    });
  }

  async assertProfileImageSrc(expectedUrl) {
    await this.step(
      `Verify user profile image source is: ${expectedUrl}`,
      async () => {
        await expect(this.userProfileImage).toHaveAttribute('src', expectedUrl);
      },
    );
  }

  async assertShortBioVisible(shortBio) {
    await this.step(`Verify short bio is visible: ${shortBio}`, async () => {
      const bioElement = this.page.getByText(shortBio);
      await expect(bioElement).toBeVisible();
    });
  }
}
