import { expect, test } from '@playwright/test';

export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.profilePicture = page.getByRole('img', { name: "User's profile image" });
    this.editProfileSettingsButton = page.getByRole('link', { name: 'Edit Profile Settings' });
  }

  async clickEditProfileSettingsButton() {
    await test.step(`Click the 'Edit Profile Settings' button`, async () => {
      await this.editProfileSettingsButton.click();
    });
  }

  async assertUsernameIsVisible(username) {
    await test.step('Assert username is visible in the Profile Page', async () => {
      const thisUsername = this.page.getByRole('heading', { name: `${username}` });

      await this.page.waitForURL(`/profile/${username}`);
      await expect(thisUsername).toBeVisible();
    });
  }

  async assertBioIsVisible(bio) {
    await test.step('Assert bio is visible in the Profile Page', async () => {
      const thisBio = this.page.getByText(bio);

      await expect(thisBio).toBeVisible();
    });
  }
  
  async assertProfilePictureIsVisible(username, expectedUrl) {
    await test.step('Assert profile picture is visible in the Profile Page', async () => {
        await this.page.waitForURL(`/profile/${username}`);
        await expect.poll(async () => {
            await this.page.reload();
            return await this.profilePicture.getAttribute('src');
          },
          {
            message: `Profile image src should be "${expectedUrl}"`,
            timeout: 30000,
            intervals: [500, 1000, 2000],
          }
        ).toBe(expectedUrl);
    });
  }  
}