# Playwright Playground

This repository contains automated tests for the Practice Software Testing project

## Prerequisites

- Playwright: Automated browser testing tool.
- Node.js: Ensure you have Node.js installed to run the tests.

## How to Run the Tests

- Clone the Repository: Begin by cloning this repository to your local machine.
- Install Dependencies: Install the necessary dependencies using npm or yarn.

### Headless Mode

Run Tests (Headless Mode): To run the tests in headless mode (default), use the following command. This will run the tests in the Chromium browser and display the results in the terminal.

```bash
npx playwright test
```

### UI Mode

Run Tests with UI Mode: For a better developer experience, use the UI mode to watch tests interactively. This allows you to walk through each step and visually track the test execution.

```bash
npx playwright test --ui
```

### Headed Mode

Run Tests in Headed Mode: To see the tests run in a "headed" mode (with a visible browser window), use the command below. This mode allows you to observe how the automation interacts with the Luma webshop.

```bash
npx playwright test --headed
```

#### Enjoy Testing!
