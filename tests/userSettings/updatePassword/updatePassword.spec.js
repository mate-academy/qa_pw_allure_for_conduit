import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Update password from settings', async ({
  page,
  user,
  userSettingsPage,
  signInPage,
  homePage,
}) => {
  const newPassword = `${user.password}New123!`;

  await signUpUser(page, user);

  await userSettingsPage.open();
  await userSettingsPage.fillPasswordField(newPassword);

  const responsePromise = page.waitForResponse(
    response =>
      response.request().method() === 'PUT' &&
      response.url().includes('/api/user'),
  );

  await userSettingsPage.clickUpdateSettingsButton();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Update password request failed: ${response.status()}
     ${await response.text()}`,
  ).toBeTruthy();

  await page.context().clearCookies();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(newPassword);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
