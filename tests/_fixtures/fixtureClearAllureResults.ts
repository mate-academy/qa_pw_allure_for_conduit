import { test as base } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export const test = base.extend<{}, { cleanAllureResults: void }>({
  cleanAllureResults: [
    async ({}, use) => {
      const allureResultsDir = path.resolve(process.cwd(), 'allure-results');

      if (fs.existsSync(allureResultsDir)) {
        fs.rmSync(allureResultsDir, { recursive: true, force: true });
      }

      await use();
    },
    { scope: 'worker', auto: true },
  ],
});

export { expect } from '@playwright/test';
