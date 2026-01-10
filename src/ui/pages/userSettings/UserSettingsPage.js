import { expect, testStep } from '../../../common/helpers/pw';

export class UserSettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.pictureUrlField = page.getByPlaceholder('URL of profile picture');
    this.usernameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.logoutButton = page.getByRole('button', { name: 'Or click here to logout' });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'User Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillPictureUrlField(url) {
    await this.step(`Fill the 'Picture URL' field`, async () => {
      await this.pictureUrlField.fill(url);
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill the 'Bio' field`, async () => {
      await this.bioField.fill(bio);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await this.step(`Fill the 'Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click({ force: true });
    });
  }

  async clickLogoutButton() {
    await this.step(`Click the 'Logout' button`, async () => {
      await this.logoutButton.click();
    });
  }

  async assertUsernameFieldHasValue(username) {
    await this.step(`Assert the 'Username' field has value '${username}'`, async () => {
      await expect(this.usernameField).toHaveValue(username);
    });
  }

  async assertEmailFieldHasValue(email) {
    await this.step(`Assert the 'Email' field has value '${email}'`, async () => {
      await expect(this.emailField).toHaveValue(email);
    });
  }

  async assertBioFieldHasValue(bio) {
    await this.step(`Assert the 'Bio' field has value '${bio}'`, async () => {
      await expect(this.bioField).toHaveValue(bio);
    });
  }

  async assertPictureUrlFieldHasValue(url) {
    await this.step(`Assert the 'Picture URL' field has value '${url}'`, async () => {
      await expect(this.pictureUrlField).toHaveValue(url);
    });
  }
}
