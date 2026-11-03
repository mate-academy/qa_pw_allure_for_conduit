import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.urlProfileField = page.getByPlaceholder('URL of profile picture');
    this.usernameField = page.getByPlaceholder('Username');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('New Password');
    this.buttonUpdate = page.getByRole('button', { name: 'Update Settings' });
    this.buttonLogout = page.getByRole('button', 
      { name: 'Or click here to logout.' });
    this.settingsLink = page.getByRole('link', { name: '  Settings' });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillURLProfileField(url) {
    await this.step(`Fill the 'URL of profile picture'`, async () => {
      await this.urlProfileField.fill(url);
    });
  }

  async fillUsernameField(name) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(name);
    });
  }

  async fillShortBioField(value) {
    await this.step(`Fill the 'Short bio about you' field`, async () => {
      await this.shortBioField.fill(value);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickUpdateButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.buttonUpdate.click();
    });
  }

  async clickLogoutButton() {
    await this.step(`Click the 'Or click here to logout.' button`, async () => {
      await this.buttonLogout.click();
    });
  }

  async clickSettingsLink() {
    await this.step(`Click the 'Settings' link`, async () => {
      await this.settingsLink.click();
    });
  }

  async assertEmailHasValue(value) {
    await this.step(`Assert the 'Email' field has the '${value}' value`, 
      async () => {
        await expect(this.emailField).toHaveValue(value);
    });
  }
}