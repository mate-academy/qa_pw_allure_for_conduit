import { testStep, expect } from '../../common/helpers/pw';

export class UserPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.username = page.getByRole('heading');
    this.userBio = page.locator('.user-info p');
    this.userImage = page.locator('.user-info img');

    this.editProfileButton = page.getByRole('link', {
      name: 'Edit Profile Settings',
    });
  }

  async assertProfilePictureIsCorrect(picture) {
    await testStep(`Assert the profile picture is correct`, async () => {
      const avatar = this.userImage;
      const isImageLoaded = await avatar.evaluate(img => {
        return img.complete && img.naturalWidth > 0;
      });

      await expect(avatar).toBeVisible();
      await expect(avatar).toHaveAttribute('src', picture);
      expect(isImageLoaded).toBeTruthy();
    });
  }

  async assertUsernameIsCorrect(username) {
    await testStep(`Assert the username has name '${username}'`, async () => {
      await expect(this.username).toContainText(username);
    });
  }

  async assertShortBioIsCorrect(shortBio) {
    await testStep(`Assert the short bio is correct`, async () => {
      await expect(this.userBio).toContainText(shortBio);
    });
  }

  async assertUserBioIsCorrect(userBio) {
    await testStep(
      `Assert the username has short bio '${userBio}'`,
      async () => {
        await expect(this.username).toContainText(userBio);
      },
    );
  }

  async clickOnEditProfileSettingsButton() {
    await testStep(`Click on the 'Edit Profile Settings' button`, async () => {
      await this.editProfileButton.click();
    });
  }
}
