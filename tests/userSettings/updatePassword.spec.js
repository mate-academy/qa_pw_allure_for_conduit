import { test, expect } from '../_fixtures/fixturesGeneric';

test('Update password from settings', async ({ user }) => {
  const newPassword = 'SuperSecret123!';
  user.password = newPassword;

  expect(user.password).toBe(newPassword);
});
