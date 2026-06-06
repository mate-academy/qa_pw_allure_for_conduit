import { expect, testStep } from '../../common/helpers/pw';

export class ProfilePage {
  constructor(page, bio = '', username = '',userId = 0) {
    this.page = page;
    this.userId = userId;
    this.page = page;
    this.username = username  || '';
    this.bio = bio|| '';
    this.urlPictureField = page.getByRole('img', { name: "User's profile image" })



  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'Your Feed' page`, async () => {
      await this.page.goto(`/profile/${this.username}`)
    });
  }

  async assertUsernameIsVisible(username) {
  const usernameHeader = this.page.getByRole('heading', { name: username });
  await this.step(`Username '${username}' is visible`, async () => {
    await expect(usernameHeader).toBeVisible();
  });
}
async assertBioIsVisible(bio) {
  const bioText = this.page.getByText(bio);
  await this.step(`Bio '${bio}' is visible`, async () => {
    await expect(bioText).toBeVisible();
  });
}

async assertPictureURLIsVisible(fakeImageUrl) {
      await this.step('Picture URL is visible',async () => {
      await expect(this.urlPictureField).toBeVisible(fakeImageUrl);
      });
    }


}