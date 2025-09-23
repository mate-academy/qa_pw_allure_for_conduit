import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.userProfileLink = page.getByRole('link', { name: 'Profile' });
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.urlOfProfilePicture = page.getByPlaceholder('URL of profile picture');
    this.bioField = page.getByPlaceholder('Short bio about you');
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickSettingsLink() {
    await this.step(`Click the 'Settings' link`, async () => {
      await this.settingsLink.click();
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

  async fillUrlOfProfilePictureField(url) {
    await this.step(`Fill the 'URL of profile picture' field`, async () => {
      await this.urlOfProfilePicture.fill(url);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill the 'Short bio about you' field`, async () => {
      await this.bioField.fill(bio);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async logout() {
    await this.step(`Click the 'Logout' button`, async () => {
      await this.page
        .getByRole('button', { name: 'Or click here to logout.' })
        .click();
    });
  }

  async assertUsernameValueIs(username) {
    await this.step(
      `Assert the 'Username' value is '${username}'`,
      async () => {
        await expect(this.userProfileLink).toHaveAttribute(
          'href',
          `/profile/${username}`,
        );
      },
    );
  }

  async assertEmailFieldValueIs(email) {
    await this.step(
      `Assert the 'Email' field value is '${email}'`,
      async () => {
        await expect(this.emailField).toHaveValue(email);
      },
    );
  }

  async assertUrlOfProfilePictureFieldValueIs(url) {
    await this.step(
      `Assert the 'URL of profile picture' field value is '${url}'`,
      async () => {
        await expect(this.urlOfProfilePicture).toHaveValue(url);
      },
    );
  }

  async assertBioFieldValueIs(bio) {
    await this.step(
      `Assert the 'Short bio about you' field value is '${bio}'`,
      async () => {
        await expect(this.bioField).toHaveValue(bio);
      },
    );
  }
}
