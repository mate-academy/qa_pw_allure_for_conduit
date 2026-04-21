import { expect, testStep } from '../../common/helpers/pw';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.settingsLink = page.getByRole('link', { name: 'Settings' }).first();
    this.userImage = page.getByAltText(`User's profile image`);
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  usernameLocator(username) {
    return this.page.getByRole('heading', {name: username});
  }

  bioLocator(bio) {
    return this.page.getByText(bio);
  }

  async clickSettingsLink() {
    await this.step(`Click the 'Settings' link`, async () => {
      await this.settingsLink.click();
    });
  }

  async assertUserHasCorrectUsername(username) {
    await this.step(`Assert user have ${username} username`, async() => {
      await expect(this.usernameLocator(username)).toBeVisible();
    })
  }

  async assertUserHasCorrectBio(bio) {
    await this.step(`Assert user have ${bio} bio`, async() => {
      await expect(this.bioLocator(bio)).toBeVisible();
    })
  }

  async assertUserHasCorrectImage(url) {
    await this.step(`Assert user have correct image`, async() => {
      await expect(this.userImage).toHaveAttribute('src', url);
    })
  }
}