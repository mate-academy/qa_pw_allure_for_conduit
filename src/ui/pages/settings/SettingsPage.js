import { expect, testStep } from '../../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;

    this.urlInput = page.getByPlaceholder('URL of profile picture');
    this.updateBtn = page.getByRole('button', { name: 'Update Settings' });
    this.editProfileSettingsLink = page.getByRole('link'
      , { name: /Edit Profile Settings/i });
this.bioTextarea = page.getByPlaceholder('Short bio about you'); 
    this.navbarAvatar  = page.locator('img.user-pic').first();
    this.profileAvatar = page.locator('img.user-img').first();
    this.logoutBtn = page.getByRole('button', {
      name: 'Or click here to logout.',
      exact: true,
    });
    this.profileHeaderUsername = page.locator('h4');
  
  }

  navProfileLink(username) {
    const u = encodeURIComponent(username);
    return this.page.locator(`nav.navbar a.nav-link[href="/profile/${u}"]`);
  }

  async openFromProfile(username) {
    await testStep(`Open Settings from Profile`, async () => {
      await this.navProfileLink(username).click();
      await this.page.waitForURL(/\/profile\//);

      await this.editProfileSettingsLink.click();
      await this.page.waitForURL(/\/settings$/);
    }, this.userId);
      await this.page.waitForTimeout(2000);
  }

  async setProfileImageUrl(url) { 
    await testStep('Set profile image URL', async () => {
      await this.urlInput.fill(url);
    }, this.userId);
  }

  async openProfile(username) {
    await testStep(`Open Profile page`, async () => {
      await this.navProfileLink(username).click();
      await this.page.waitForURL(/\/profile\//);
    }, this.userId);
  }

  async assertNavbarAvatar(url) {
    await testStep(`Assert navbar avatar updated`, async () => {
      await expect(this.navbarAvatar)
      .toHaveAttribute('src', url, { timeout: 10000 });
    }, this.userId);
  }

  async logout() {
    await testStep(`Log out`, async () => {
      await this.logoutBtn.click();
    }, this.userId);
  }

  async assertProfileAvatar(url) {
    await testStep(`Assert profile page avatar updated`, async () => {
      await expect(this.profileAvatar)
      .toHaveAttribute('src', url, { timeout: 10000 });
    }, this.userId);
  }

  async assertProfileUrlValue(url) {
    await testStep(`Assert Settings shows saved URL`, async () => {
      await this.page.goto('/settings');
      await expect(this.urlInput).toHaveValue(url);
    }, this.userId);
  }

  async setShortBio(bio) {
    await testStep(`Set short bio and save`, async () => {
        await this.bioTextarea.fill(bio);
    }, this.userId);
  }

  async updateSettings(){
    await this.updateBtn.click();
  }

  async assertProfileBio(bio) {
    await testStep(`Assert profile bio text`, async () => {
      await expect(this.page.locator('.user-info p'))
      .toHaveText(bio, { timeout: 10_000 });
    }, this.userId);
  }

  async setEmail(email) {
    await testStep(`Fill 'Email' with ${email}`, async () => {
      await this.page.getByPlaceholder('Email').fill(email);
    }, this.userId);
  }

  async setUsername(username) {
    await testStep(`Fill 'Username' with ${username}`, async () => {
      await this.page.getByPlaceholder('Username').fill(username);
    }, this.userId);
  }

  async assertSettingsEmailValue(email) {
    await testStep(`Assert email value is '${email}'`, async () => {
      await expect(this.page.getByPlaceholder('Email')).toHaveValue(email);
    }, this.userId);
  }

  async setNewPassword(password) {
    await testStep(`Fill 'New Password'`, async () => {
      await this.page.getByPlaceholder('New Password').fill(password);
    }, this.userId);
  }

  async assertProfileUsername(expectedUsername) {
    await testStep(`Assert profile page header shows '${expectedUsername}'`
      , async () => {
      await expect(this.profileHeaderUsername).toHaveText(expectedUsername);
    }, this.userId);
  }


}