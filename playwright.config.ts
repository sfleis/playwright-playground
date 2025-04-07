import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration to ensure the login state is persisted across tests.
 */
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'https://practicesoftwaretesting.com/', // Base URL for navigation in tests
    actionTimeout: 10000, // Timeout for actions
    navigationTimeout: 10000, // Timeout for navigation
    trace: 'on-first-retry', // Collect trace on retry
  },

  projects: [
    {
      name: 'setup',
      testMatch: 'tests/auth.setup.ts', // Ensure setup test runs first
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'], // Use Chrome desktop device settings
        storageState: 'playwright/.auth/user.json', // Use saved authentication state
      },
      dependencies: ['setup'], // Ensure setup test runs before this project
    },
  
  ],

  // Optional: Additional config for a dev server
  // webServer: {
  //   command: 'npm run start', 
  //   url: 'http://127.0.0.1:3000', 
  //   reuseExistingServer: !process.env.CI, 
  // },

  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
});
