import { test, expect } from '@playwright/test';

test.describe('Regressão Visual', () => {
  test('Deve manter o layout do Dashboard consistente', async ({ page }) => {

    await page.goto('/');

    
    await page.waitForLoadState('networkidle');

    
    await page.addStyleTag({
      content: `
        * {
          animation: none !important;
          transition: none !important;
          caret-color: transparent !important;
        }
      `,
    });

    await page.addStyleTag({
      content: `
        [data-testid="dynamic-time"],
        [data-testid="dynamic-id"] {
          visibility: hidden;
        }
      `,
    });

    await expect(page).toHaveScreenshot('dashboard-page.png', {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixelRatio: 0.02,
    });
  });
});