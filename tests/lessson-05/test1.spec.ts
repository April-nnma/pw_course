import { test } from "@playwright/test";

test("Homework", async ({ page }) => {
  //navigate
  await test.step("Navigate to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  //click bai 1
  await test.step("Click: Bài học 1: Register Page", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });
  //Username
  await test.step("Username", async () => {
    await page.locator('//input[@id="username"]').fill("Hello");
  });
  //Email
  await test.step("Email", async () => {
    await page.locator('//input[@id="email"]').fill("abc@gmail.com");
  });
  //Female
  await test.step("Female", async () => {
    await page.locator('//input[@id="female"]').check();
  });
  //Hobbies
  await test.step("Hobbies", async () => {
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="cooking"]').check();
  });
  //Interests
  await test.step("Interets", async () => {
    await page.locator('//select[@id="interests"]').selectOption("Technology");
  });
  //Country
  await test.step("Country", async () => {
    await page.locator('//select[@id="country"]').selectOption("Australia");
  });
  //DOB
  await test.step("DOB", async () => {
    await page.locator('//input[@id="dob"]').fill("2001-01-01");
  });
  //choose file
  await test.step("Choose file", async () => {
    await page
      .locator('//input[@id = "profile"]')
      .setInputFiles("tests/data-test/image.png");
  });
  //Biography
  await test.step("Biography", async () => {
    await page
      .locator('//textarea[@id="bio"]')
      .pressSequentially("Hello World!", { delay: 300 });
  });
  //Button register
  await test.step("Submit", async () => {
    await page.locator('//button[@type="submit"]').click();
  });
});
