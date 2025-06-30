import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.settigsLink = page.getByRole('link', {name: ' Settings'});
    this.updateSettingsButton = page.getByRole('button', {name: 'Update Settings'});
    this.urlOfProfilePicture = page.getByPlaceholder('URL of profile picture');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
  }
  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickSettigsLink() {
    await this.step(`Click the 'Settings' link`, async () => {
      await this.settigsLink.click();
    });
  }

  async clickUpdateSettigsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async fillUrlProfilePictureField(url) {
    await this.step(`Fill the 'URL of profile picture' field`, async () => {
      await this.urlOfProfilePicture.fill(url);
    });
  }

  async fillShortBioField(bio) {
    await this.step(`Fill the 'short bio' field`, async () => {
      await this.shortBioField.fill(bio);
    });
  }
}
