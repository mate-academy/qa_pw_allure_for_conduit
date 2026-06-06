import { expect, testStep } from '../../common/helpers/pw';

export class HomePage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.yourFeedTab = page.getByText('Your Feed');
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.globalFeed = page.getByText('Global Feed');
  }
async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open() {
    await this.step(`Open 'Your Feed' page`, async () => {
      await this.page.goto('/');
    });
  }

  async assertYourFeedTabIsVisible(){
    await this.step(`Your Feed Tab is visible`, async() => {
    await expect (this.yourFeedTab).toContainText('Your Feed');

    });
  }

  async assertGlobalFeedTabIsVisible(){
    await this.step(`Global Feed Tab is visible`, async() => {
    await expect (this.globalFeed).toContainText('Global Feed');
    });
  }


  async clickNewArticleLink(){
    await this.step(`Click New Article Link`, async() => {
    await this.newArticleLink.click();

    });
  }
}

