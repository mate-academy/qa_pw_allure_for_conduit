import { expect, testStep } from '../../common/helpers/pw';

export class HomePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.yourFeedTab = page.getByText('Your Feed');
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.setingButton = page.getByRole('link', { name: '  Settings' });
    this.NewUserNameEditing = page.getByPlaceholder('Username');
    this.userName = page.getByRole('heading', { name: '' });
    this.newEmailFieldSeting = page.getByPlaceholder('Email');
    this.newPasswordFieldSetting = page.getByPlaceholder('New Password');
    this.updateButton = page.getByRole('button', { name: 'Update Settings' });
    this.urlProfilePicture = page.getByPlaceholder('URL of profile picture');
    this.shortBioField = page.getByPlaceholder('Short bio about you');
    this.shortBioInHomePage = page.getByText('My name si Vasia');
    this.logOutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
    this.conduitLogo = page.getByRole('heading', { name: 'conduit' });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async clickNewArticleLink() {
    await this.step(`Click the 'New Article' link`, async () => {
      await this.newArticleLink.click();
    });
  }

  async assertYourFeedTabIsVisible() {
    await this.step(`Assert the 'Your Feed' tab is visible`, async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }

  async clickSetingButton() {
    await this.step(`Click seting button`, async () => {
      await this.setingButton.click();
    });
  }

  async editingUserNameInSeting() {
    await this.step(`Fiil new user name is input field`, async () => {
      await this.NewUserNameEditing.fill('torin_dwarf');
    });
  }

  async assertUserNameCorect() {
    await this.step(`View new user name`, async () => {
      await expect(this.userName).toContainText('torin_dwarf');
    });
  }
  async editingEmailUser(email) {
    await this.step(`Editing new user email in input field`, async () => {
      await this.newEmailFieldSeting.fill(email);
    });
  }
  async fillNewPasswordInSeting() {
    await this.step(`Fill new password in input field`, async () => {
      await this.newPasswordFieldSetting.fill('12345678qwertyui');
    });
  }
  async clickUpdateSettingButton() {
    await this.step(`Click update setting button`, async () => {
      await this.updateButton.click();
    });
  }
  async fillUrlProfilePicture() {
    await this.step(`Fill erl picture`, async () => {
      await this.urlProfilePicture.fill(
        'https://ru.pinterest.com/pin/httpsavatarkorukartinka5710--431782683021329005/',
      );
    });
  }
  async fillShortBioFromSetting() {
    await this.step(` Fill short bio from setting`, async () => {
      await this.shortBioField.fill('My name si Vasia');
    });
  }
  async assertShortBioVisible() {
    await this.step(`Assert short bio visible in home page`, async () => {
      await expect(this.shortBioInHomePage).toBeVisible();
    });
  }
  async clickLogUotButton() {
    await this.step(`Click log Out Button`, async () => {
      await this.logOutButton.click();
    });
  }
  async assertConduitLogoIsVisible() {
    await this.step(` Assert Conduit logo is Visible`, async () => {
      await expect(this.conduitLogo).toBeVisible();
    });
  }
  async reloadPage() {
    await this.page.reload();
  }
}
