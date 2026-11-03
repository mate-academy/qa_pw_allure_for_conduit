import { expect, testStep } from '../../common/helpers/pw';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async assertUsernameIsVisible(username) {
    await this.step(`Assert the profile shows the '${username}' username`, 
      async () => {
      await expect(this.page.getByRole('heading', { name: username }))
      .toBeVisible();
    });
  }

  async assertBioIsVisible(value) {
    await this.step(`Assert the profile shows the '${value}' bio`, async () => {
      await expect(this.page.getByText(value)).toBeVisible();
    });
  }

  async assertImageIsVisible(url) {
    await this.step(`Assert the profile picture has the '${url}' URL`, 
      async () => {
      await expect(this.page.getByRole('img', 
        { name: 'User\'s profile image' })).toHaveAttribute('src', url);
    });
  }
}