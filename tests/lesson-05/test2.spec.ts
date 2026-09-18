import { test } from "@playwright/test";

test("Product", async ({ page }) => {
  await test.step("Navigate to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  //lesson 2
  await test.step("Click: Bài học 2: Product page", async () => {
    await page.getByRole("link", { name: "Bài học 2: Product page" }).click();
  });

  //Add product 1: 2prod
  await test.step("Product 1", async () => {
    //await page.getByRole("button", { name: "Add to Cart" }).nth(0).dblclick();
    await page.getByRole("button", { name: "Add to Cart" }).first().dblclick();
  });

  //Add product 2: 3prod
  await test.step("Product 2", async () => {
    await page
      .getByRole("button", { name: "Add to Cart" })
      .nth(1)
      .click({ clickCount: 3 });
  });

  //Add product 3: 1prod
  await test.step("Product 3", async () => {
    //await page.getByRole("button", { name: "Add to Cart" }).nth(2).click();
    await page.getByRole("button", { name: "Add to Cart" }).last().click();
  });
});
