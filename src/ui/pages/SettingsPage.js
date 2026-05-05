import { testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.userNameField = page.getByPlaceholder('Username');
    this.userPasswordField = page.getByPlaceholder('Password');
    this.userEmailField = page.getByPlaceholder('Email');
    this.userBioField = page.getByPlaceholder('Short bio about you');
    this.userImageField = page.getByPlaceholder('URL of profile picture');
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

  async fillUsernameField(username) {
    await this.step(`Fill username field`, async () => {
      await this.userNameField.fill(username);
    });
  }
  async fillPasswordField(password) {
    await this.step(`Fill password field`, async () => {
      await this.userPasswordField.fill(password);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill email field`, async () => {
      await this.userEmailField.fill(email);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill bio field`, async () => {
      await this.userBioField.fill(bio);
    });
  }

  async fillImageField(imageUrl) {
    await this.step(`Fill image field`, async () => {
      await this.userImageField.fill(imageUrl);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click Update Settings button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogoutButton() {
    await this.step(`Click Logout button`, async () => {
      await this.logoutButton.click();
    });
  }
}
