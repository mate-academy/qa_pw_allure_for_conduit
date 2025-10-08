import { test as base } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parseTestTreeHierarchy } from '../../src/common/helpers/allureHelpers';

export const test = base.extend({
  user: async ({}, use) => {
    const user = {
      username: '',
      email: '',
      password: '',
      bio: '',
      profilePicture: '',
    };
    await use(user);
  },

  logger: async ({}, use) => {
    await use(console);
  },

  // Worker-scoped fixture to clean allure-results
  cleanupAllureResults: [async ({}, use) => {
    const resultsPath = path.resolve('allure-results');
    if (fs.existsSync(resultsPath)) {
      await fs.promises.rm(resultsPath, { recursive: true, force: true });
      console.log('✅ Deleted existing allure-results folder');
    }
    await use(null);
  }, { scope: 'worker' }],

  // Fixture to add parentSuite/suite/subSuite for Allure
  addAllureTestHierarchy: async ({}, use, testInfo) => {
    const hierarchy = parseTestTreeHierarchy(testInfo.file);
    testInfo.annotations.push({ type: 'parentSuite', description: hierarchy[0] || '' });
    testInfo.annotations.push({ type: 'suite', description: hierarchy[1] || '' });
    testInfo.annotations.push({ type: 'subSuite', description: hierarchy[2] || '' });
    await use(null);
  },
});

export { expect } from '@playwright/test';
