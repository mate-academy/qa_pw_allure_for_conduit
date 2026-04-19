import { expect, test } from '@playwright/test';

export class SettingsPage {
  constructor(page) {
    this.page = page;
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.pictureField = page.getByPlaceholder('URL of profile picture');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.logoutButton = page.getByRole('button', {name: 'Logout'});
  }

  async clickUpdateSettingsButton() {
    await test.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogoutButton() {
    await test.step(`Click the 'Logout' button`, async () => {
      await this.logoutButton.click();
    })
  }

  async fillNewPasswordField(password) {
    await test.step(`Fill the 'New Password' field`, async () => {
      await this.newPasswordField.fill(password);
    });
  }

  async fillUsernameField(username) {
    await test.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await test.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPictureField(pictureUrl) {
    await test.step(`Fill the 'URL of profile picture' field`, async () => {
      await this.pictureField.fill(pictureUrl);
    });
  }

  async fillBioField(bio) {
    await test.step(`Fill the 'Bio' field`, async () => {
      await this.bioField.fill(bio);
    })
  }

  async assertEmailField(email) {
    await test.step(`Assert the 'Email' field value`, async () => {
      await expect(this.emailField).toHaveValue(email);
    });
  }

  async assertPictureUrlValue(pictureUrl) {
    await test.step(`Assert the 'Picture url' field value`, async () => {
      await expect(this.pictureField).toHaveValue(pictureUrl);
    });
  }

  async assertBioValue(bio) {
    await test.step("Assert the 'Bio' field value", async () => {
      await expect(this.bioField).toHaveValue(bio);
    });
  }
}
