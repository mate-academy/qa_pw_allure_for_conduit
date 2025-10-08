import { test, expect } from '../_fixtures/fixturesGeneric';
import { UserSettingsPage } from '../../src/ui/pages/user/UserSettingsPage';

test('Add short bio from settings', async ({ page, user }) => {
  const settingsPage = new UserSettingsPage(page);
  await settingsPage.goto();

  const shortBio = 'Hello, I am a test user!';
  await settingsPage.updateBio(shortBio);

  // Assert bio updated
  const currentBio = await settingsPage.getBio();
  expect(currentBio).toBe(shortBio);
});
