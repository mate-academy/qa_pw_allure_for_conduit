import { test } from '@playwright/test';

export class SettingsPage {
  constructor(page) {
    this.page = page;
    this.profileUrl = page.getByPlaceholder('URL of profile picture');
    this.profileBio = page.getByPlaceholder('Short bio about you');
    this.UsernameField = page.getByPlaceholder('Username');
    this.EmailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
    this.logoutButton = page.getByRole('button', { name: 'Or click here to logout.' });
  }

  async fillProfileUrlField(url) {
    await test.step(`Fill the 'URL or profile picture' field`, async () => {
      await this.profileUrl.fill(url);
    });
  }

  async fillBioField(bio) {
    await test.step(`Fill the 'Short bio about you' field`, async () => {
      await this.profileBio.fill(bio);
    });
  }

  async fillUsernameField(username) {
    await test.step(`Fill the 'Username' field`, async () => {
      await this.UsernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await test.step(`Fill the 'Email' field`, async () => {
      await this.EmailField.fill(email);
    });
  }

  async fillNewPasswordField(password) {
    await test.step(`Fill the 'New Password' field`, async () => {
      await this.newPasswordField.fill(password);
    });
  }

  async clickUpdateSettingsButton() {
    await test.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogoutButton() {
    await test.step(`Click the 'Or click here to logout' button`, async () => {
      await this.logoutButton.click();
    });
  }
}