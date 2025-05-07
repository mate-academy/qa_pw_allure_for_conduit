import { expect, test } from "allure-playwright";

export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.header = page.getByRole('heading');
    this.profilePictures = this.page.getByRole('img', { name: 'User\'s profile image' });
  }

  async assertProfilePicturesHaveUrl(url) {
    await test.step(`Assert profile pictures have URL: ${url}`, async () => {
      const images = await this.profilePictures.all();
      for (const image of images) {
        await expect(image).toHaveAttribute('src', url);
      }
    });
  }

  async waitForUrlContainsUsername(username) {
    await test.step(`Wait for URL to contain ${username}`, async () => {
      await this.page.waitForURL('**/profile/' + username);
    });
  }

  async assertHeaderHasText(text) {
    await test.step(`Assert header has text: ${text}`, async () => {
      await expect(this.header).toHaveText(text);
    });
  }
}