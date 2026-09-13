import { expect, testStep } from '../../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.profilePictureUrlField = page.getByPlaceholder(
      'URL of profile picture',
    );
    this.usernameField = page.getByPlaceholder('Username');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
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
    await this.step(`Open the 'Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }

  async fillProfilePictureUrlField(url) {
    await this.step(`Fill the 'URL of profile picture' field`, async () => {
      await this.profilePictureUrlField.fill(url);
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

  async fillNewPasswordField(password) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.newPasswordField.fill(password);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
      // eslint-disable-next-line playwright/no-networkidle
      await this.page.waitForLoadState('networkidle');
    });
  }

  async clickLogOutButton() {
    await this.step(`Click the 'Or click here to logout.' button`, async () => {
      await this.logOutButton.click();
    });
  }

  async assertUsernameFieldHasValue(username) {
    await this.step(
      `Assert the 'Username' field has value '${username}'`,
      async () => {
        await expect(this.usernameField).toHaveValue(username);
      },
    );
  }

  async assertEmailFieldHasValue(email) {
    await this.step(
      `Assert the 'Email' field has value '${email}'`,
      async () => {
        await expect(this.emailField).toHaveValue(email);
      },
    );
  }

  async assertProfilePictureUrlFieldHasValue(url) {
    await this.step(
      `Assert the 'URL of profile picture' field has value '${url}'`,
      async () => {
        await expect(this.profilePictureUrlField).toHaveValue(url);
      },
    );
  }

  async assertBioFieldHasValue(bio) {
    await this.step(
      `Assert the 'Short bio about you' field has value '${bio}'`,
      async () => {
        await expect(this.bioField).toHaveValue(bio);
      },
    );
  }
}