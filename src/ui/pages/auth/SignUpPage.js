import { expect, testStep } from '../../../common/helpers/pw';

export class SignUpPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.errorMessage = page.getByRole('list').nth(1);
    this.settingButton = page.getByRole('link', { name: 'Settings' })
    this.PictureField = page.getByRole('textbox', { name: 'URL of profile picture' }); 
    this.usernameUpdField = page.getByRole('textbox', { name: 'Username' }); 
    this.BioField = page.getByRole('textbox', { name: 'Short bio about you' }); 
    this.emailUpdField = page.getByRole('textbox', { name: 'Email' }); 
    this.passwordUpdField = page.getByRole('textbox', { name: 'Password' });
    this.updateButton = page.getByRole('button', { name: 'Update Settings' });
    this.logoutButton = page.getByRole('button', { name: 'Or click here to logout.' });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'Sign Up' page`, async () => {
      await this.page.goto('/user/register');
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

  async fillPasswordField(password) {
    await this.step(`Fill the 'Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSignUpButton() {
    await this.step(`Click the 'Sign up' button`, async () => {
      await this.signUpButton.click();
    });
  }

  async submitSignUpForm(user) {
    await this.step(`Fill the 'Sign up' form`, async () => {
      await this.fillUsernameField(user.username);
      await this.fillEmailField(user.email);
      await this.fillPasswordField(user.password);
      await this.clickSignUpButton();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await this.step(`Assert the '${messageText}' error is shown`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }

  async clickSettingButton() {
    await this.step(`Click the 'Setting' button`, async () => {
      await this.settingButton.click();
    });
  }

  async fillPictureField(picture) {
    await this.step(`Fill the 'Picture' field`, async () => {
      await this.PictureField.fill(picture);
    });
  }

  async fillUsernameUpdField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameUpdField.fill(username);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill the 'Bio' field`, async () => {
      await this.BioField.fill(bio);
    });
  }

  async fillEmailUpdField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailUpdField.fill(email);
    });
  }

  async fillPasswordUpdField(password) {
    await this.step(`Fill the 'Password' field`, async () => {
      await this.passwordUpdField.fill(password);
    });
  }

  async clickUpdateButton() {
    await this.step(`Click Update button`, async () => {
      await this.updateButton.click()
    })
  }

  async clickLogoutButton() {
    await this.step(`Click Logout button`, async () => {
      await this.logoutButton.click()
    })
  }
}
