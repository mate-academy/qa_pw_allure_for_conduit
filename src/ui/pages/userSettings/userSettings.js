import { testStep } from '../../../common/helpers/pw';

export class UserSettings {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.profilePictureSettingsField = page.getByPlaceholder('URL of profile picture');
    this.usernameSettingsField = page.getByPlaceholder('Username');
    this.bioSettingsField = page.getByPlaceholder('Short bio about you');
    this.emailSettingsField = page.getByPlaceholder('Email');
    this.newPasswordSettingsField = page.getByPlaceholder('New Password');
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.logOutButton = page.getByRole('button', { name: 'Or click here to logout.' });
    this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
  }

  async step(title, stepToRun) {
      return await testStep(title, stepToRun, this.userId);
    };

  async fillProfilePictureSettingsField(url) {
    await this.step(`Fill the 'Profile picture' field`, async () => {
      await this.profilePictureSettingsField.fill(url);
    });
  }

  async fillUsernameSettingsField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameSettingsField.fill(username);
    });
  }

  async fillBioSettingsField(bio) {
    await this.step(`Fill the 'Short bio about you' field`, async () => {
      await this.bioSettingsField.fill(bio);
    });
  }

  async fillEmailSettingsField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailSettingsField.fill(email);
    });
  }

  async fillNewPasswordSettingsField(password) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.newPasswordSettingsField.fill(password);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogOutButton() {
    await this.step(`Click the 'Logout' button`, async () => {
      await this.logOutButton.click();
    });
  }



  

}