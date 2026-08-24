import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.logOutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
    this.emailField = page.getByPlaceholder('Email');
    this.usernameField = page.getByPlaceholder('Username');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.profilePictureField = page.getByPlaceholder('URL of profile picture');
    this.bioField = page.getByPlaceholder('Short bio about you');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async waitForOpened() {
    await this.step(`Wait for the 'Settings' page to open`, async () => {
      await this.page.waitForURL('/settings');
    });
  }

  async clickLogOutButton() {
    await this.step(`Click the 'Or click here to logout.' button`, async () => {
      await this.logOutButton.click();
    });
  }

  async clearEmailField() {
    await this.step(`Remove input from 'Email' field`, async () => {
      await this.emailField.clear();
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async assertEmailFieldWasUpdated(updatedEmail) {
    await this.step(
      `Assert the 'Email' field was updated to '${updatedEmail}'`,
      async () => {
        await expect(this.emailField).toHaveValue(updatedEmail);
      },
    );
  }

  async clearUsernameField() {
    await this.step(`Remove input from 'Username' field`, async () => {
      await this.usernameField.clear();
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async assertUsernameFieldWasUpdated(updatedUsername) {
    await this.step(
      `Assert the 'Username' field was updated to '${updatedUsername}'`,
      async () => {
        await expect(this.usernameField).toHaveValue(updatedUsername);
      },
    );
  }

  async fillNewPasswordField(newPassword) {
    await this.step(`Fill the 'New Password' field`, async () => {
      await this.newPasswordField.fill(newPassword);
    });
  }

  async fillProfilePictureField(imageUrl) {
    await this.step('Add URL of profile picture', async () => {
      await this.profilePictureField.fill(imageUrl);
    });
  }

  async assertProfilePictureFieldWasAdded(imageUrl) {
    await this.step(
      `Assert the '${imageUrl}' of profile picture was added`,
      async () => {
        await expect(this.profilePictureField).toHaveValue(imageUrl);
      },
    );
  }

  async fillBioField(bioText) {
    await this.step('Add short bio about the user', async () => {
      await this.bioField.fill(bioText);
    });
  }

  async assertBioTextWasAdded(bioText) {
    await this.step(
      `Assert the short bio about the user was added`,
      async () => {
        await expect(this.bioField).toHaveValue(bioText);
      },
    );
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }
}
