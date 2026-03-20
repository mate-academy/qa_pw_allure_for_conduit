import { expect, testStep } from '../../../common/helpers/pw'

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;

  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async assertUsernameIsVisible(username) {
    await this.step(`Username ${username} is visible`, async () => {
      
      await expect(this.page.getByRole('link', 
        {name: username})).toBeVisible();
    })
  }

  async assertShortBioIsVisible(text) {
    await this.step(`Assert 'Short bio' field is visible`, async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    })
  }
}
