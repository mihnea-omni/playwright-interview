# interview-playwright-typescript

End-to-end tests written with [Playwright](https://playwright.dev) and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org) 18 or newer (comes with npm)

## Install

```bash
npm install
npx playwright install chromium
```

The second command downloads the Chromium browser the tests run in. Run `npx playwright install` with no argument to get every browser.

## Run the tests

```bash
npx playwright test                       # run all tests (headless)
npx playwright test tests/login.spec.ts   # run a single file
npx playwright test --headed              # watch the browser while tests run
npx playwright test --ui                  # interactive UI mode
npx playwright test --debug               # step through with the inspector
```

## View the report

An HTML report is written to `playwright-report/` after each run. To open it:

```bash
npx playwright show-report
```

## Project layout

- `tests/` holds the test specs (`*.spec.ts`)
- `playwright.config.ts` holds the Playwright configuration (Chromium project, HTML reporter, retries on CI)
