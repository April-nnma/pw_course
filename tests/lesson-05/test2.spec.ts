import { test } from "@playwright/test";

test("Product", async ({ page }) => {
  await test.step("Navigate to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  //Click bai 2
  await test.step("Click: Bài học 2: Product page", async () => {
    await page.locator('//a[text()="Bài học 2: Product page"]').click();
  });

  //Add product 1: 2prod
  await test.step("Product 1", async () => {
    // const button = page.locator('//button[@data-product-id="1"]');
    // await button.scrollIntoViewIfNeeded();
    // await page.pause();
    // await button.dblclick();
    await page.locator('//button[@data-product-id="1"]').dblclick();
  });

  //Add product 2: 3prod
  await test.step("Product 2", async () => {
    await page
      .locator('//button[@data-product-id="2"]')
      .click({ clickCount: 3 });
  });

  //Add product 3: 1prod
  await test.step("Product 3", async () => {
    await page.locator('//button[@data-product-id="3"]').click();
  });
});
