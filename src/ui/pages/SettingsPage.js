import { expect, testStep } from '../../common/helpers/pw';

export class SettingsPage {
    constructor(page, userId = 0) {
        this.page = page;
        this.userId = userId;
        this.usernameField = page.getByPlaceholder('Username');
        this.urlField = page.getByPlaceholder('URL of profile picture');
        this.bioField = page.getByPlaceholder('Short bio about you');
        this.emailField = page.getByPlaceholder('Email');
        this.passwordField = page.getByPlaceholder('New Password');
        this.updateSettingsButton = page
        .getByRole('button', { name : 'Update Settings'});

        this.logoutButton = page
        .getByRole('button', { name : 'Or click here to logout.'});
    }

    async step(title, stepToRun) {
        return await testStep(title, stepToRun, this.userId);
    }

    async fillNewUsername(newUsername) {
        await this.step(`Fill 'Username' field with new username`, async() => {
            await this.usernameField.fill(newUsername);
        });
    }

    async fillNewEmail(newEmail) {
        await this.step(`Fill 'Email' field with new email`, async() => {
            await this.emailField.fill(newEmail);
        });
    }

    async fillNewPassword(newPassword) {
        await this.step(`Fill 'Password' field with new password`, async() => {
            await this.passwordField.fill(newPassword);
        });
    }

    async fillBio(bio) {
        await this.step(`Fill 'Bio' field`, async() => {
            await this.bioField.fill(bio);
        });
    }

    async fillUrlPicture(url) {
        await this.step(`Fill 'URL of profile picture' field`, async() =>{
            await this.urlField.fill(url);
        });
    }

    async clickUpdateSettingsButton() {
        await this.step(`Click on the 'Update settings' button`, async() => {
            await this.updateSettingsButton.click();
        });
    }

    async assertEmailIsUpdated(newEmail) {
        await this.step(`Assert that email is updated`, async() => {
            await expect(this.emailField).toHaveValue(newEmail);
        });
    }

    async clickLogout() {
        await this.step(`Click on the 'Log out' button`, async() => {
            await this.logoutButton.click();
        });
    }
}