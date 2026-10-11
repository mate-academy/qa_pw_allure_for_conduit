import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Add short bio from settings', async ({
  page,
  user,
  userSettingsPage,
}) => {
  const newBio = 'QA Automation Engineer passionate about Playwright testing.';

  await signUpUser(page, user);

  await userSettingsPage.open();
  await userSettingsPage.fillBioField(newBio);

  const responsePromise = page.waitForResponse(
    response =>
      response.request().method() === 'PUT' &&
      response.url().includes('/api/user'),
  );

  await userSettingsPage.clickUpdateSettingsButton();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Update bio request failed: ${response.status()} ${await response.text()}`,
  ).toBeTruthy();

  await userSettingsPage.open();
  await userSettingsPage.assertBioFieldHasValue(newBio);
});
