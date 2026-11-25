import { testStep, expect } from "../../common/helpers/pw";

export class UserPage{
    constructor(page, userId = 0) {
        this.page= page;
        this.userId = userId;
        this.usernameHeading = (newUsername) => page
        .locator('h4', { hasText : newUsername });

        this.pictureIcon = page.getByAltText("User's profile image");

        this.bioText = (bio) => page.getByText(bio);

    }

    async step(title, stepToRun) {
        return await testStep(title, stepToRun, this.userId);
    }

    async assertUsernameHeadingHasCorrectText(newUsername, text) {
        await this.step(`Assert that username heading has correct text`, async() => {
            await expect(this.usernameHeading(newUsername)).toContainText(text);
        });
    }

    async assertPictureIconHasCorrectLink(url) {
        await this.step(`Assert that picture icon has correct link`, async() => {
            await expect(this.pictureIcon).toHaveAttribute('src', url);
        });
    }

    async assertBioHasCorrectText(expectedBio) {
        await this.step(`Assert that bio has correct text`, async() => {
            await expect(this.bioText(expectedBio)).toHaveText(expectedBio);
        });
    }
}