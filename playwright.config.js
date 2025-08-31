// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [['list'], ['allure-playwright']],
  use: {
    baseURL: 'https://conduit.mate.academy',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // webServer: { command: 'npm run start', url: 'http://127.0.0.1:3000', reuseExistingServer: !process.env.CI },
});