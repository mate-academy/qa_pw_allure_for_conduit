import { testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.pageTitle = page.getByRole('heading', { name: 'Your Settings' });
    this.avatar = page.getByPlaceholder('URL of profile picture');
    this.usernameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder(/Password/);
    this.logOutButton = page.getByRole('button', { name: /logout/ });
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click on the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogOutButton() {
    await this.step(`Click on the 'Log out' button`, async () => {
      await this.logOutButton.click();
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillAvatarField(url) {
    await this.step(`Fill the 'Avatar' field`, async () => {
      await this.avatar.fill(url);
    });
  }

  async fillPasswordField(password) {
    await this.step(`Fill the 'Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill the 'Bio' field`, async () => {
      await this.bioField.fill(bio);
    });
  }
}
