import { testStep } from '../../../src/common/helpers/pw';

export class UserSettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.profilePictureUrlField = page.getByPlaceholder(
      'URL of profile picture',
    );
    this.emailField = page.getByPlaceholder('Email');
    this.usernameField = page.getByPlaceholder('Username');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
    this.logoutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
  }

  async step(title, stepToRun) {
    await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'User Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillNewPasswordField(newPassword) {
    await this.step(`Fill 'New Password' field`, async () => {
      await this.newPasswordField.fill(newPassword);
    });
  }

  async fillProfilePictureUrlField(profilePictureUrl) {
    await this.step(`Fill 'URL of profile picture' field`, async () => {
      await this.profilePictureUrlField.fill(profilePictureUrl);
    });
  }

  async fillShortBioField(shortBio) {
    await this.step(`Fill 'Short Bio about you' field`, async () => {
      await this.shortBioField.fill(shortBio);
    });
  }

  async clickLogoutButton() {
    await this.step(`Click 'Logout' button`, async () => {
      await this.logoutButton.click();
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async assertRedirectedToProfilePage(username) {
    await this.step(`Assert redirected to profile page`, async () => {
      await this.page.waitForURL(`/profile/${username}`);
    });
  }
}
