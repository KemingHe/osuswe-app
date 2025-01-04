import {
  type Page,
  type PageScreenshotOptions,
  expect,
  test,
} from '@playwright/test';

import {
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_EMAIL_ROUTE,
  HOME_ROUTE,
} from '../constants/routeConstants';

const customPageLoadTimeout = { timeout: 30000 };
const additionalPageLoadTimeout: number = 1000;
// Allow max 0% deviation in pixel diff.
const customDiffPixelRatio = { maxDiffPixelRatio: 0 };
// Avoid screenshotting versioning components on page.
const customScreenshotOptions: PageScreenshotOptions = {
  style: '.no-screenshot{display:none !important}',
};

test.describe('OSUSWE App UI (for static pages) is consistent with latest screenshot on...', (): void => {
  test('homepage', async ({ page }: { page: Page }): Promise<void> => {
    await page.goto(HOME_ROUTE, customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });

  test('not found page', async ({ page }: { page: Page }): Promise<void> => {
    await page.goto('/404', customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });

  test('sign-in page', async ({ page }: { page: Page }): Promise<void> => {
    await page.goto(AUTH_SIGN_IN_ROUTE, customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });

  test('verify email page (default failure when verify code is not provided)', async ({
    page,
  }: { page: Page }): Promise<void> => {
    await page.goto(AUTH_VERIFY_EMAIL_ROUTE, customPageLoadTimeout);
    await page.waitForLoadState('networkidle', customPageLoadTimeout);
    await page.waitForTimeout(additionalPageLoadTimeout);

    const image = await page.screenshot(customScreenshotOptions);
    expect(image).toMatchSnapshot(customDiffPixelRatio);
  });
});
