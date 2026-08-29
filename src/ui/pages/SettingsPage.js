import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.imageLinkField = page.getByPlaceholder('URL of profile picture');
    this.usernameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', { 
      name: 'Update Settings' 
    });
    this.logoutButton = page.getByRole('button', { 
      name: 'Or click here to logout.' 
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillImageLinkField(imageLink) {
    await this.step(`Fill the 'Image Link' field`, async () => {
      await this.imageLinkField.fill(imageLink);
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

  async fillNewPasswordField(newPassword) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.newPasswordField.fill(newPassword);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
      await this.page.waitForURL('**/profile/**');
    });
  }

  async clickLogoutButton() {
    await this.step(`Click the 'Logout' button`, async () => {
      await this.logoutButton.click();
    });
  }

    async assertURLIsUpdated(url) {
    await this.step(`Assert the URL is displayed`, async () => {
      await expect(this.imageLinkField).toHaveValue(url);
    });
  }

    async assertUsernameIsDisplayed(username) {
    await this.step(`Assert the username is displayed`, async () => {
      await expect(this.page.locator('h4')).toContainText(username);
    });
  }

    async assertBioIsDisplayed(bio) {
    await this.step(`Assert the bio is displayed`, async () => {
      await expect(this.bioField).toHaveValue(bio);
    });
  }

    async assertEmailIsDisplayed(email) {
    await this.step(`Assert the email is displayed`, async () => {
      await expect(this.emailField).toHaveValue(email);
    });
  }

    async assertNewPasswordIsDisplayed(newPassword) {
    await this.step(`Assert the new password is displayed`, async () => {
      await expect(this.newPasswordField).toHaveValue(newPassword);
    });
  }
}