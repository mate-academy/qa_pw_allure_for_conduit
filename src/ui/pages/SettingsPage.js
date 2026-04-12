import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.settingsTab = page.getByRole('link', { name: 'Settings' });
    this.passwordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.emailField = page.getByPlaceholder('Email');
    this.usernameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.profilePictureField = page.getByPlaceholder('URL of profile picture');
    this.logOutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickSettingsTab() {
    await this.step(`Click the 'Settings' tab`, async () => {
      await this.settingsTab.click();
    });
  }

  async clickLogOutButton() {
    await this.step(`Click the 'Logout' button`, async () => {
      await this.logOutButton.click();
    });
  }

  async fillNewPasswordField(password) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async fillNewEmail(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillUsername(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillBio(bio) {
    await this.step(`Fill the 'bio' field`, async () => {
      await this.bioField.fill(bio);
    });
  }

  async fillProfilePictre(url) {
    await this.step(`Fill the 'url' field`, async () => {
      await this.profilePictureField.fill(url);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async assertProfilePage(username) {
    await this.step(`Assert user returned to the profile page`, async () => {
      await expect(
        this.page.getByRole('heading', { name: `${username}` }),
      ).toBeVisible();
    });
  }
}
