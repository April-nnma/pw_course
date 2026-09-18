import { test } from "@playwright/test";

test("Todo List", async ({ page }) => {
  await test.step("Navigate to material playwright page", async () => {
    test.setTimeout(120000);
    await page.goto("https://material.playwrightvn.com/");
  });

  //lesson 3
  await test.step("Todo", async () => {
    await page.getByRole("link", { name: "Bài học 3: Todo page" }).click();
  });

  //Add 100 todo
  await test.step("To-Do List", async () => {
    for (let i = 1; i <= 100; i++) {
      await page
        .getByRole("textbox", { name: "Enter a new task" })
        .fill(`Todo ${i}`);
      await page.getByRole("button", { name: "Add task" }).click();
    }
  });
  
  //Delete
  await test.step("Delete odd items", async () => {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
    for (let i = 0; i < 50; i++) {
      await page.getByRole("button", { name: "Delete" }).nth(i).click();
    }
  });
});
