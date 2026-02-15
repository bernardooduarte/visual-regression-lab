import { test, expect } from '@playwright/test';

test.describe('Regressão Visual', () => {
    test('Deve manter o layout do Dashboard consistente', async ({ page }) => {
        await page.goto('http://localhost:5173');

        const maskStyle = `
      [data-testid="dynamic-time"], 
      [data-testid="dynamic-id"] {
        visibility: hidden; /* Ou background: black */
      }
    `;
        await page.addStyleTag({ content: maskStyle });

        await expect(page).toHaveScreenshot('dashboard-page.png', {
            maxDiffPixelRatio: 0.02,
        });
    });
});
