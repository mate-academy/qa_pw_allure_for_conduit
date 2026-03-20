import { expect, testStep } from '../../../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.passwordField = page.getByRole('textbox', { name: 'New Password' });
    this.imageUrlField = page.getByRole('textbox', 
      { name: 'URL of profile picture' });
    this.shortBioField = page.getByRole('textbox', 
      { name: 'Short bio about you' });
    this.updateSettingButton = page.getByRole('button', 
      { name: 'Update Settings'});
    this.logoutButton = page.getByRole('button', 
      { name: 'Or click here to logout.'});
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async fillUsernameField(username) {
    await this.step(`Fill username field with ${username}`, async() => {
      await this.usernameField.clear();
      await this.usernameField.fill(username);
    })
  }

  async fillEmailField(email) {
    await this.step(`Fill email field with ${email}`, async() => {
      await this.emailField.clear();
      await this.emailField.fill(email);
    })
  }

  async assertEmailHasCorrectText(email) {
    await this.step(`Assert email field has text ${email}`, async() => {
      await expect(this.emailField).toHaveValue(email.toLowerCase());
    })
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click 'Update Settings' button`, async() => {
      await this.updateSettingButton.click();
    })
  }

  async fillPasswordField(password) {
    await this.step('Fill password field', async() => {
      await this.passwordField.fill(password);
    })
  }

  async fillImageUrlField(url) {
    await this.step(`Fill image url field with ${url}`, async() => {
      await this.imageUrlField.clear();
      await this.imageUrlField.fill(url);
    })
  }

  async assertImageUrlFieldHasCorrectValue(url) {
    await this.step(`Assert image url field has value ${url}`, async() => {
      await expect(this.imageUrlField).toHaveValue(url);
    })
  }

  async fillShortBioField(text) {
    await this.step(`Fill short bio field with ${text}`, async() => {
      await this.shortBioField.clear();
      await this.shortBioField.fill(text);
    })
  }

  async clickUsernameLink(username) {
    await this.step(`Click 'Username link' button`, async() => {
      
      await this.page.getByRole('link', { name: username }).click();
      await this.page.reload({waitUntil: 'commit'});
    })
  }

  async clickLogoutButton() {
    await this.step(`Click 'Logout' button`, async() => {
      await this.logoutButton.click();
    })
  }

}
