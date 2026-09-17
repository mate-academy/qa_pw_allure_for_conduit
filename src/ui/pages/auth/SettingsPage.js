import { expect, test } from '@playwright/test';

export class SettingsPage {
  constructor(page) {
    this.page = page;
    this.profilePictureURLField = page.getByPlaceholder(
      'URL of profile picture',
    );
    this.userNameField = page.getByPlaceholder('Username');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
    this.newEmailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.logoutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
    this.settingsButton = page.getByRole('link', { name: '  Settings' });
  }

  async assertNewPasswordFieldIsVisible() {
    await test.step(`Assert the "New Password" field is visible`, async () => {
      await expect(this.newPasswordField).toBeVisible();
    });
  }
  async addProfilePictureURL(profilePictureURL) {
    await test.step(`Add the "URL of profile picture"`, async () => {
      await this.profilePictureURLField.fill(profilePictureURL);
    });
  }
  async updateUserNameField(userName) {
    await test.step(`Update the "User Name" field`, async () => {
      await this.userNameField.fill(userName);
    });
  }
  async fillShortBioField(shortBio) {
    await test.step(`Fill the "Short Bio" field`, async () => {
      await this.shortBioField.fill(shortBio);
    });
  }
  async updateNewEmailField(newEmail) {
    await test.step(`Update the "New Email" field`, async () => {
      await this.newEmailField.fill(newEmail);
    });
  }
  async updateNewPasswordField(newPassword) {
    await test.step(`Update the "New Password" field`, async () => {
      await this.newPasswordField.fill(newPassword);
    });
  }
  async clickUpdateSettingsButton() {
    await test.step('Click on "Update Settings" button', async () => {
      await this.updateSettingsButton.click();
    });
  }
  async clickSettingsButton() {
    await test.step('Click on "Settings" button', async () => {
      await this.settingsButton.click();
    });
  }
  async clickLogoutButton() {
    await test.step('Click on "Logout" button', async () => {
      await this.logoutButton.click();
    });
  }
  async assertLogoutButtonIsVisible() {
    await test.step(`Assert the "Logout" button is visible`, async () => {
      await expect(this.logoutButton).toBeVisible();
    });
  }

  async assertUserNameIsUpdated(newUserName) {
    await test.step(`Assert the "User Name" is updated`, async () => {
      await expect(this.userNameField).toHaveValue(newUserName);
    });
  }
  async assertProfilePictureURLFieldIsUpdated(newProfilePictureURLField) {
    await test.step(`Assert the "Profile Picture URL" is updated`, async () => {
      await expect(this.profilePictureURLField).toHaveValue(
        newProfilePictureURLField,
      );
    });
  }
  async assertShortBioIsUpdated(shortBio) {
    await test.step(`Assert the "Short Bio" is updated`, async () => {
      await expect(this.shortBioField).toHaveValue(shortBio);
    });
  }

  async assertEmailIsUpdated(newEmail) {
    await test.step(`Assert the "Email" is updated`, async () => {
      await expect(this.newEmailField).toHaveValue(newEmail);
    });
  }
  async assertNewPasswordIsUpdated(newPassword) {
    await test.step(`Assert the "New Password" is updated`, async () => {
      await expect(this.newPasswordField).toHaveValue(newPassword);
    });
  }
}
