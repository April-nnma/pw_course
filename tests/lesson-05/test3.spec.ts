import { test } from "@playwright/test";
test("Product", async ({ page }) => {
  await test.step("Navigate to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  //Click
  await test.step("Todo", async () => {
    await page.locator('//a[text()="Bài học 3: Todo page"]').click();
  });

  //Add 100 todo
  await test.step("To-Do List", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
      await page.locator('//button[@id="add-task"]').click();
    }
  });
  //Delete
  await test.step("Delete odd items", async () => {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
    for (let i = 1; i <= 99; i += 2) {
      await page.locator(`//button[@id="todo-${i}-delete"]`).click();
    }
  });
});
