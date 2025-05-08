import { expect, test } from "allure-playwright";

export class SettingsPage {
  constructor(page) {
    this.page = page;
    this.header = page.getByText('Your Settings');
    this.usernameField = page.getByPlaceholder('Username');
    this.submitButton = page.getByRole('button', { name: 'Update Settings' });
    this.passwordField = page.getByPlaceholder('Password');
    this.emailField = page.getByPlaceholder('Email');
    this.profilePictureUrlField = page.getByPlaceholder('URL of profile picture');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.logoutButton = this.page.getByRole('button', { name: 'Or click here to logout.' });
  }

  async clickLogoutButton() {
    await test.step('Click logout button', async () => {
      await this.logoutButton.click();
    });
  }

  async fillBioField(bio) {
    await test.step(`Fill bio field with: ${bio}`, async () => {
      await this.bioField.clear();
      await this.bioField.fill(bio);
    });
  }

  async fillProfilePictureUrl(url) {
    await test.step(`Fill profile picture URL field with: ${url}`, async () => {
      await this.profilePictureUrlField.clear();
      await this.profilePictureUrlField.fill(url);
    });
  }

  async fillEmail(email) {
    await test.step(`Fill email field with: ${email}`, async () => {
      await this.emailField.clear();
      await this.emailField.fill(email);
    });
  }

  async fillPassword(password) {
    await test.step(`Fill password field wih: ${password}`, async () => {
      await this.passwordField.clear();
      await this.passwordField.fill(password);
    });
  }

  async clickSubmitButton() {
    await test.step('Click submit button', async () => {
      await this.submitButton.click();
    });
  }

  async fillUsername(username) {
    await test.step(`Fill username field with: ${username}`, async () => {
      await this.usernameField.clear();
      await this.usernameField.fill(username);
    });
  }

  async open() {
    await test.step('Open settings page', async () => {
      await this.page.goto('/settings');
      await expect(this.header).toBeVisible();
    });
  }
}