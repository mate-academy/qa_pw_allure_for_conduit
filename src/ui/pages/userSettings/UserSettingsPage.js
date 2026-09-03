import { expect, testStep } from '../../../common/helpers/pw';

export class UserSettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;

    this.profilePictureUrlField = page.getByPlaceholder(
      'URL of profile picture',
    );
    this.usernameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('New Password');

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
    await this.step(`Open 'Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillProfilePictureUrlField(profilePictureUrl) {
    await this.step(`Fill the 'URL of profile picture' field`, async () => {
      await this.profilePictureUrlField.fill(profilePictureUrl);
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillBioField(bio) {
    await this.step(`Fill the 'Short bio about you' field`, async () => {
      await this.bioField.fill(bio);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      const updateUserResponsePromise = this.page.waitForResponse(
        response =>
          response.request().method() === 'PUT' &&
          response.url().endsWith('/user'),
      );

      await this.updateSettingsButton.click();

      const updateUserResponse = await updateUserResponsePromise;

      expect(updateUserResponse.ok()).toBeTruthy();
    });
  }

  async clickLogOutButton() {
    await this.step(`Click the 'Or click here to logout.' button`, async () => {
      await this.logOutButton.click();
    });
  }

  async assertUsernameFieldHasValue(username) {
    await this.step(`Assert the username was updated`, async () => {
      await expect(this.usernameField).toHaveValue(username);
    });
  }

  async assertEmailFieldHasValue(email) {
    await this.step(`Assert the email was updated`, async () => {
      await expect(this.emailField).toHaveValue(email);
    });
  }

  async assertProfilePictureUrlFieldHasValue(profilePictureUrl) {
    await this.step(`Assert the profile picture URL was added`, async () => {
      await expect(this.profilePictureUrlField).toHaveValue(profilePictureUrl);
    });
  }

  async assertBioFieldHasValue(bio) {
    await this.step(`Assert the short bio was added`, async () => {
      await expect(this.bioField).toHaveValue(bio);
    });
  }
}
