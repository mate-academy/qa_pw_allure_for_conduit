import { test } from '@playwright/test';


export class UserSettingsPage {

  constructor(page) {

    this.page = page;
    this.UrlField = page.getByPlaceholder('URL of profile picture');
    this.userNameField = page.getByPlaceholder('Username');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole(
      'button', {name: 'Update Settings'}
    );
    this.logoutButton = page.getByRole(
      'button', {name: 'Or click here to logout.'}
    );
  }

  async clickUpdateSettingsButton() {
    await test.step('Click update settings button', async () => {
      await this.updateSettingsButton.click();
    });
  }

  async clickLogoutButton() {
    await test.step('Click logout button', async () => {
      await this.logoutButton.click();
    });
  }

  async addBio(bioText) {
    await test.step(`Add bio text ${bioText}`, async () => {
      await this.shortBioField.fill(bioText);

    });
  }

  async addURLprofilePicture(url) {
    await test.step(`Add url ${url}`, async () => {
      await this.UrlField.fill(url);
    });
  }

  async updateUserName(userName) {
    await test.step(`Add user name ${userName}`, async () => {
      await this.userNameField.fill('');
      await this.userNameField.fill(userName);
    });
  }

  async updatePassword(password) {
    await test.step(`Add password ${password}`, async () => {
      await this.newPasswordField.fill('');
      await this.newPasswordField.fill(password);
    });
  }

  async updateEmail(email) {
    await test.step(`Add email ${email}`, async () => {
      await this.emailField.fill('');
      await this.emailField.fill(email);
    });
  }
  async clickNewArticleLink() {
    await this.step(`Click the 'New Article' link`, async () => {
      await this.newArticleLink.click();
    });
  }
}
