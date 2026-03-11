import { test, expect } from '@playwright/test';

test('homepage has title and description', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Pridor Solutions/);
});
