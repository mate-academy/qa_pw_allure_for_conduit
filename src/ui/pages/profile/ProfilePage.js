import { expect, testStep } from '../../../common/helpers/pw';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.editProfileSettingsLink = page.getByRole('link', {
      name: 'Edit Profile Settings',
    });
    this.profilePictureImage = page.locator('img.user-img');
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  usernameHeading(username) {
    return this.page.getByRole('heading', { name: username });
  }

  bioText(bio) {
    return this.page.getByText(bio);
  }

  async open(username) {
    await this.step(`Open the '${username}' profile page`, async () => {
      await this.page.goto(`/profile/${username}`);
    });
  }

  async assertProfilePageIsOpened() {
    await this.step(`Assert the profile page is opened`, async () => {
      await expect(this.editProfileSettingsLink).toBeVisible();
    });
  }

  async assertUsernameIsVisible(username) {
    await this.step(
      `Assert the '${username}' username is visible`,
      async () => {
        await expect(this.usernameHeading(username)).toBeVisible();
      },
    );
  }

  async assertProfilePictureHasSrc(url) {
    await this.step(
      `Assert the profile picture has the '${url}' src`,
      async () => {
        await expect(this.profilePictureImage).toHaveAttribute('src', url);
      },
    );
  }

  async assertBioIsVisible(bio) {
    await this.step(`Assert the '${bio}' bio is visible`, async () => {
      await expect(this.bioText(bio)).toBeVisible();
    });
  }
}
