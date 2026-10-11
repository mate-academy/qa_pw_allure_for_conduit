import { expect, testStep } from '../../../common/helpers/pw';

export class UserSettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;

    this.profilePictureField = page.getByPlaceholder('URL of profile picture');
    this.usernameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('New Password');

    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });

    this.logoutButton = page.getByRole('button', {
      name: /logout/i,
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step('Open User Settings page', async () => {
      await this.page.goto('/settings');
    });
  }

  async fillUsernameField(username) {
    await this.step('Fill Username field', async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await this.step('Fill Email field', async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await this.step('Fill New Password field', async () => {
      await this.passwordField.fill(password);
    });
  }

  async fillProfilePictureField(url) {
    await this.step('Fill Profile Picture URL field', async () => {
      await this.profilePictureField.fill(url);
    });
  }

  async fillBioField(bio) {
    await this.step('Fill Short Bio field', async () => {
      await this.bioField.fill(bio);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step('Click Update Settings button', async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogoutButton() {
    await this.step('Click Logout button', async () => {
      await this.logoutButton.click();
    });
  }

  async assertUsernameFieldHasValue(username) {
    await this.step('Assert username was updated', async () => {
      await expect(this.usernameField).toHaveValue(username);
    });
  }

  async assertEmailFieldHasValue(email) {
    await this.step('Assert email was updated', async () => {
      await expect(this.emailField).toHaveValue(email);
    });
  }

  async assertBioFieldHasValue(bio) {
    await this.step('Assert bio was updated', async () => {
      await expect(this.bioField).toHaveValue(bio);
    });
  }

  async assertProfilePictureFieldHasValue(url) {
    await this.step('Assert profile picture URL was updated', async () => {
      await expect(this.profilePictureField).toHaveValue(url);
    });
  }
}
