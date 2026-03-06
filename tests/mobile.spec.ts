
import { test } from '@playwright/test';

// iPhone 13 Viewport
test.use({ viewport: { width: 390, height: 844 } });

test('Mobile Mobile Functional Walkthrough', async ({ page }) => {
    // 1. Visit Homepage
    await page.goto('http://localhost:3000');
    // Wait to see landing
    await page.waitForTimeout(2000);

    // 2. Open Menu
    const menuButton = page.locator('button[aria-label="Toggle Menu"]');
    await menuButton.click();
    // Wait to see menu
    await page.waitForTimeout(2000);

    // 3. Click "Our Story"
    await page.getByText('Our Story').first().click();
    // Wait for scroll
    await page.waitForTimeout(2000);

    // 4. Scroll to Process
    const processSection = page.locator('#process');
    await processSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    // Try to horizontal scroll process steps
    // This simulates dragging on touch screen
    const processContainer = page.locator('#process .overflow-x-auto').first();
    if (await processContainer.isVisible()) {
        await processContainer.evaluate((el) => el.scrollBy({ left: 300, behavior: 'smooth' }));
        await page.waitForTimeout(1000);
        await processContainer.evaluate((el) => el.scrollBy({ left: 300, behavior: 'smooth' }));
        await page.waitForTimeout(1000);
    }

    // 5. Scroll directly to Farmers
    const farmersSection = page.locator('#farmers');
    await farmersSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    const farmersContainer = page.locator('#farmers .overflow-x-auto').first();
    if (await farmersContainer.isVisible()) {
        await farmersContainer.evaluate((el) => el.scrollBy({ left: 300, behavior: 'smooth' }));
        await page.waitForTimeout(1000);
    }

    // 6. Go to Products via Menu again
    await menuButton.click();
    await page.waitForTimeout(1000);
    await page.getByText('Products').last().click();
    await page.waitForTimeout(2000);

    const productSection = page.locator('#products');
    await productSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    console.log('Walkthrough Finished');
});
