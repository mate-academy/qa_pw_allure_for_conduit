import { expect, testStep } from '../../../common/helpers/pw';

export class SettingsProfilePage {
  constructor(page) {
    this.page = page;
    this.newPasswordField = page.getByPlaceholder('New Password');

    this.updateButton = page.getByRole('button', {
      name: 'Update',
    });
    this.emailField = page.getByPlaceholder('Email');
    this.logOutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
  }
  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  fieldLocator(fieldName) {
    return this.page.getByPlaceholder(`${fieldName}`);
  }

  async assertEmailHasValue(email) {
    await expect(this.emailField).toHaveValue(email);
  }

  async fillField(fieldName, credentials) {
    await this.step(`Fill 'New Password field'`, async () => {
      await this.fieldLocator(fieldName).fill(credentials);
    });
  }

  async clickUpdateButton() {
    await this.step(`Click 'Update Article' button`, async () => {
      await this.updateButton.click();
    });
  }

  async clickLogOutButton() {
    await this.step(`Click 'Log Out' button`, async () => {
      await this.logOutButton.click();
    });
  }
}
