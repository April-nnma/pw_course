import { test } from "@playwright/test";

test("Basic action", async ({ page }) => {
  await test.step("Navigate to material playwright web", async () => {
    //code step
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Click bai hoc 1", async () => {
    await page
      .locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]')
      .click();
  });
  await test.step("Input", async () => {
    //copy nguyên cái text
    await page.locator('//input[@id="username"]').fill("Anh Nguyen");
    //gõ từng chữ
    await page
      .locator('//input[@id="email"]')
      .pressSequentially("abc@gmail.com", { delay: 300 });
  });
  await test.step("Radio button or Checkbox", async () => {
    //xem gia tri hien tai co dang dc check hay ko
    let isCheckedMale = await page.locator('//input[@id="male"]').isChecked();
    console.log(isCheckedMale); //false

    //Check or Uncheck
    await page.locator('//input[@id="male"]').check(); // thực hiện action check
    isCheckedMale = await page.locator('//input[@id="male"]').isChecked();
    console.log(isCheckedMale); //true
  });
  await test.step("Dropdown", async () => {
    await page.locator('//select[@id="country"]').selectOption("Australia");
  });
  await test.step("Upload file", async () => {
    await page
      .locator('//input[@id ="profile"]')
      .setInputFiles("tests/data-test/data-test.txt");
  });
});
