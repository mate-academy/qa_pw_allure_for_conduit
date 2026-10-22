import { expect, testStep } from '../../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.urlPictureField = page.getByPlaceholder('URL of profile picture');
    this.bioField = page.getByPlaceholder('Short bio about you');
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

  async reload() {
    await this.step(`Reload the page`, async () => {
      await this.page.reload();
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
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

  async fillUrlPictureField(value) {
    await this.step(`Fill the 'Url of profile picture' field`, async () => {
      await this.urlPictureField.fill(value);
    });
  }

  async fillBioField(text) {
    await this.step(`Fill the 'Bio' field`, async () => {
      await this.bioField.fill(text);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
      await this.page.waitForURL(/\/profile\//);
    });
  }

  async clickLogoutButton() {
    await this.step(`Click the 'Logout' button`, async () => {
      await this.logoutButton.click();
    });
  }

  async assertUsernameFieldHasValue(username) {
    await this.step(`Assert the 'Username' field has value`, async () => {
      await expect(this.usernameField).toHaveValue(username);
    });
  }

  async assertEmailFieldHasValue(email) {
    await this.step(`Assert the 'Email' field has value`, async () => {
      await expect(this.emailField).toHaveValue(email);
    });
  }

  async assertBioFieldHasValue(bio) {
    await this.step(`Assert the 'Bio' field has value`, async () => {
      await expect(this.bioField).toHaveValue(bio);
    });
  }

  async assertUrlPictureFieldHasValue(value) {
    await this.step(
      `Assert the 'Url of picture profile' field has value`,
      async () => {
        await expect(this.urlPictureField).toHaveValue(value);
      },
    );
  }
}
