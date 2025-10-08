import { test, expect } from '../_fixtures/fixturesGeneric';

test('Update email from settings', async ({ user }) => {
  const newEmail = 'new_email@example.com';
  user.email = newEmail;

  expect(user.email).toBe(newEmail);
});
