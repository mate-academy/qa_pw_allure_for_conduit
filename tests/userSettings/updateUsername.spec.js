import { test, expect } from '../_fixtures/fixturesGeneric';

test('Update username from settings', async ({ user }) => {
  const newUsername = 'new_user_123';
  user.username = newUsername;

  expect(user.username).toBe(newUsername);
});
