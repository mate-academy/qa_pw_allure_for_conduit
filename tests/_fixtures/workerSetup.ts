import { test as base } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export const test = base.extend({
  clearAllureResults: [
    async ({}, use) => {
      const allureDir = path.resolve(__dirname, '../../allure-results');
      if (fs.existsSync(allureDir)) {
        fs.rmSync(allureDir, { recursive: true, force: true });
      }
      await use();
    },
    { scope: 'worker', auto: true },
  ],
});
