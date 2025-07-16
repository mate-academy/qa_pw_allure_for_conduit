import { expect, test } from '@playwright/test';


export class UserProfilePage {

  constructor(page) {
    this.page = page;
    this.userProfileName = page.getByAltText('User\'s profile');
    this.userBIO = page.locator('//div/p');

  }

  async assertUserNameContainText(userName) {
    await test.step(`assert user name contain text ${userName}`, async () =>{
      await expect(this.userProfileName).toContainText(userName);
    });
  }

  async assertUserNameIsVisible() {
    await test.step('Assert user name is visible on profile page', async () =>{
      await expect(this.userProfileName).toBeVisible();
    });
  }

  async assertUserBIOContainText(userBIOtext) {
    await test.step(`assert user name contain BIO ${userBIOtext}`, async () =>{
      await expect(this.userBIO).toContainText(userBIOtext);
    });
  }

}
