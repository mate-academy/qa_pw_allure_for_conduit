import { test, expect } from '../_fixtures/fixturesGeneric';

test('Add short bio from settings', async ({ user }) => {
  const shortBio = 'Hello, I am a test user!';
  user.bio = shortBio;

  expect(user.bio).toBe(shortBio);
});
