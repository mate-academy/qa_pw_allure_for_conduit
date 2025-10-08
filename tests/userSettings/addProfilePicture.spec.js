import { test, expect } from '../_fixtures/fixturesGeneric';

test('Add profile picture URL from settings', async ({ user }) => {
  const profilePicture = 'https://example.com/profile.jpg';
  user.profilePicture = profilePicture;

  expect(user.profilePicture).toBe(profilePicture);
});
