import { testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.urlPictureField = page.getByPlaceholder('URL of profile picture');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
    this.buttonUpdateSettings = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.buttonLogOut = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'Your Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async editUsernameField(username) {
    await this.step('Update username from settings', async () => {
      await this.usernameField.fill(username);
    });
  }

  async editEmailField(email) {
    await this.step('Update email from settings', async () => {
      await this.emailField.fill(email);
    });
  }

  async editPasswordField(password) {
    await this.step('Update password from settings', async () => {
      await this.newPasswordField.fill(password);
    });
  }

  async addUrlPictureField(link) {
    await this.step('Add profile picture URL from settings', async () => {
      await this.urlPictureField.fill(link);
    });
  }

  async addShortBioField(text) {
    await this.step('Add short bio from settings', async () => {
      await this.shortBioField.fill(text);
    });
  }

  async clickButtonUpdateSettings() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.buttonUpdateSettings.click();
    });
  }

  async clickButtonLogOut() {
    await this.step(`Click the 'LogOut' button`, async () => {
      await this.buttonLogOut.click();
    });
  }
}
