import { test as baseTest, expect } from '@playwright/test';
import { userFixture } from '../_fixtures/fixturesGeneric';

const test = baseTest.extend({
  user: userFixture,
});

test('Log out user', async ({ user }) => {
  // Simulate user logged in
  let isLoggedIn = true;

  // Log out logic
  isLoggedIn = false;

  expect(isLoggedIn).toBeFalsy();
});
