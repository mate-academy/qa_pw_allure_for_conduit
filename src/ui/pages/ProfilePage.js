import { expect, test } from '@playwright/test';

export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.profileLink = (username) => page.getByRole('link', { name: username });
    this.editProfileButton = page.getByRole('link',
      { name: 'Edit Profile Settings' });
    this.usernameText = page.getByRole('heading');
  }

  async waitPageLoaded(username) {
    await test.step(`Wait for 'Profile' page to be loaded`, async () => {
      await this.page.waitForURL(`/profile/${username}`, {
        waitUntil: 'domcontentloaded',
      });
    });
  }

  async clickProfileLink(username) {
    await test.step(`Click the 'Profile' link`, async () => {
      await this.profileLink(username).click();
    });
  }

  async clickEditProfileButton() {
    await test.step(`Click the 'Edit Profile Settings' button`, async () => {
      await this.editProfileButton.click();
    });
  }

  async assertUsernameValue(username) {
    await test.step(`Assert user has correct username`, async () => {
      await expect(this.usernameText).toHaveText(username);
    });
  }
}
