import { test as base } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export const test = base.extend<{}, { cleanAllureResults: void }>({
  cleanAllureResults: [
    async ({}, use) => {
      const resultsPath = path.resolve(__dirname, '../../allure-results');

      if (fs.existsSync(resultsPath)) {
        fs.rmSync(resultsPath, { recursive: true, force: true });
        console.log(`Deleted folder: ${resultsPath}`);
      } else {
        console.log(`Folder does not exist: ${resultsPath}`);
      }

      await use(undefined); // proceed to tests
    },
    { auto: true, scope: 'worker' },
  ],
});
