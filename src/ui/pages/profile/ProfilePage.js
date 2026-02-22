import {expect, testStep } from '../../../common/helpers/pw';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.profileHeader = page.locator('.user-info');
    this.profileUsername = this.profileHeader.locator('h4');
    this.profileBio = this.profileHeader.locator('p');
    this.profileImage = this.profileHeader.getByRole('img').first();
  }

  async step(title, stepToRun) {
      return await testStep(title, stepToRun, this.userId);
    }



  async assertProfileImage(url) {
    await this.step(`Assert profile picture URL matches expected`, async () => {
      const src = await this.profileImage.getAttribute('src');
      expect(src).toContain(url);
  });
}
  
    async assertProfileUsernameField(username) {
        await this.step(`Assert profile username equals expected`, async () => {
          await expect(this.profileUsername).toHaveText(username);
        });
      }
  
    async assertProfileBio(bio) {
        await this.step(`Assert profile short bio equals expected`, async () => {
          await expect(this.profileBio).toHaveText(bio);
        });
      }
  


}