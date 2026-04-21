import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('New Password');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.imageField = page.getByPlaceholder('URL of profile picture');
    this.updateSettingsButton = page.getByRole(
      'button', {name: 'Update Settings'});
    this.logoutButton = page.getByRole(
      'button', {name: 'Or click here to logout.'});
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async fillUsernameField(username) {
    await this.step(`Fill username field with new username`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillPasswordField(password) {
    await this.step(`Fill password Field with new email`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill email field with new email`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill bio field with new bio`, async () => {
      await this.bioField.fill(bio);
    });
  }

  async fillImageField(url) {
    await this.step(`Fill image Field with new bio`, async () => {
      await this.imageField.fill(url);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' Button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogoutButton() {
    await this.step(`Click the 'logout' Button`, async () => {
      await this.logoutButton.click();
    });
  }

  async assertEmailFieldHasNewEmail(email) {
    await this.step(`assert email field have new email`, async() => {
      await expect(this.emailField).toHaveValue(email);
    });
  }
}