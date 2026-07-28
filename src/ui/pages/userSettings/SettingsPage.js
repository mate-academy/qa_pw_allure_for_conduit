import { expect, testStep } from '../../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.settingsHeading = page.getByRole('heading', {
      name: 'Your Settings',
    });
    this.profilePictureUrlField = page.getByPlaceholder(
      'URL of profile picture',
    );
    this.userNameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.logoutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.userNameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillNewPasswordField(password) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.newPasswordField.fill(password);
    });
  }

  async fillProfilePictureUrlField(url) {
    await this.step(`Fill the 'Profile picture URL' field`, async () => {
      await this.profilePictureUrlField.fill(url);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill the 'Bio' field`, async () => {
      await this.bioField.fill(bio);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogoutButton() {
    await this.step(`Click the logout button`, async () => {
      await this.logoutButton.click();
    });
  }

  async assertSettingsPageIsOpened() {
    await this.step(`Assert the 'Settings' page is opened`, async () => {
      await expect(this.settingsHeading).toBeVisible();
    });
  }

  async assertEmailFieldHasValue(email) {
    await this.step(
      `Assert the 'Email' field has the '${email}' value`,
      async () => {
        await expect(this.emailField).toHaveValue(email);
      },
    );
  }
}
