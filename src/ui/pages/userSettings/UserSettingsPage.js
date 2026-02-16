import { testStep } from '../../../common/helpers/pw';

export class UserSettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.settingsButton = page.getByRole('link', { name: 'Settings' });
    this.profilePictureField = page.getByPlaceholder('URL of profile picture');
    this.userNameField = page.getByPlaceholder('Username');
    this.userBioField = page.getByPlaceholder('Short bio about you');
    this.userEmailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.logOutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open settings page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async updateUserName(newName) {
    await this.step(`Update user name`, async () => {
      await this.userNameField.fill(newName);
    });
  }

  async updateEmail(newEmail) {
    await this.step(`Update user email`, async () => {
      await this.userEmailField.fill(newEmail);
    });
  }

  async updateUserPassword(newPassword) {
    await this.step(`update user password`, async () => {
      await this.newPasswordField.fill(newPassword);
    });
  }

  async addProfilePicture(imageUrl) {
    await this.step(`Add profile picture`, async () => {
      await this.profilePictureField.fill(imageUrl);
    });
  }

  async addUserBio(newBio) {
    await this.step(`User bio`, async () => {
      await this.userBioField.fill(newBio);
    });
  }

  async clickUpdateButton() {
    await this.step(`Click update button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogOutButton() {
    await this.step(`Click log out`, async () => {
      await this.logOutButton.click();
    });
  }
}
