import { test as base } from '@playwright/test';

export const test = base.extend({
  user: async ({}, use) => {
    // Provide a fresh user object for each test
    const user = {
      username: '',
      email: '',
      password: '',
      bio: '',
      profilePicture: '',
    };

    await use(user);
  },
});

export { expect } from '@playwright/test';
