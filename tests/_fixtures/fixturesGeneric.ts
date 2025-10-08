import { test as base } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parseTestTreeHierarchy } from '../../src/common/helpers/allureHelpers';

// Worker-scoped auto-cleanup for allure-results
export const cleanupAllureResults = base.extend({
  cleanupAllureResults: [
    async ({}, use) => {
      const resultsPath = path.resolve(__dirname, '../../allure-results');
      if (fs.existsSync(resultsPath)) {
        fs.rmSync(resultsPath, { recursive: true, force: true });
      }
      await use();
    },
    { scope: 'worker', auto: true }, // run automatically once per worker
  ],
});

// Allure test hierarchy fixture
export const addAllureTestHierarchy = base.extend({
  addAllureTestHierarchy: [
    async ({ testInfo }, use) => {
      if (!testInfo) {
        return await use(['', '', '']); // early return if testInfo missing
      }

      const hierarchy = parseTestTreeHierarchy(testInfo.file, console);
      await use(hierarchy);
    },
    { auto: true }, // always run
  ],
});

// User fixture with realistic default credentials
export const test = base.extend({
  user: async ({}, use) => {
    const user = {
      username: `user_${Date.now()}`,
      email: `user_${Date.now()}@example.com`,
      password: 'SuperSecret123!',
      bio: 'Hello, I am a test user!',
      profilePicture: 'https://example.com/profile.jpg',
    };
    await use(user);
  },
});

export { expect } from '@playwright/test';
