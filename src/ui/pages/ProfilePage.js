import { expect, testStep } from '../../common/helpers/pw';

export class ProfilePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async assertBio(bio) {
    await this.step(`Assert user returned to the profile page`, async () => {
      await expect(this.page.getByText(bio)).toBeVisible();
    });
  }

  async assertPictureAdded() {
    await this.step(`Assert user returned to the profile page`, async () => {
      await expect(
        this.page.getByRole('img', { name: "User's profile image" }),
      ).toBeVisible();
    });
  }
}
