import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.urlField = page.getByPlaceholder('URL of profile picture');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('New Password');
    this.usernameField = page.getByPlaceholder('Username');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.logoutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
  }

  async updateProfilePicture(pictureUrl) {
    await testStep(`Update profile picture`, async () => {
      await this.urlField.fill(pictureUrl);
    });
  }

  async updateUsername(username) {
    await testStep(`Update username to '${username}'`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async updateShortBio(shortBio) {
    await testStep(`Update the 'Short bio about you'`, async () => {
      await this.shortBioField.fill(shortBio);
    });
  }

  async updateEmail(email) {
    await testStep(`Update user email to '${email}'`, async () => {
      await this.emailField.fill(email);
      await this.emailField.blur();
    });
  }

  async updatePassword(password) {
    await testStep(`Update user Password to '${password}'`, async () => {
      await this.passwordField.fill(password);
      await this.passwordField.blur();
    });
  }

  async assertUserEmailIsCorrect(email) {
    await testStep(
      `Assert the email is correct: '${email.toLowerCase()}'`,
      async () => {
        await expect(this.emailField).toHaveValue(email.toLowerCase());
      },
    );
  }

  async clickOnUpdateSettingsButton() {
    await testStep(`Click on the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickOnLogoutButton() {
    await testStep(
      `Click on the 'Or click here to logout' button`,
      async () => {
        await this.logoutButton.click();
      },
    );
  }
}
