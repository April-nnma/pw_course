import { test } from "@playwright/test";

test("Registration", async ({ page }) => {
  //navigate
  await test.step("Navigate to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  //lesson1
  await test.step("Bài học 1: Register Page", async () => {
    await page
      .getByRole("link", {
        name: "Bài học 1: Register Page (có đủ các element)",
      })
      .click();
  });

  //Username
  await test.step("Username", async () => {
    await page
      .getByRole("textbox", { name: "Username:" })
      .pressSequentially("Hello", { delay: 30 });
  });

  //Email
  await test.step("Email", async () => {
    await page
      .getByRole("textbox", { name: "Email:" })
      .pressSequentially("abc@gmail.com", { delay: 20 });
  });

  //Gender
  await test.step("Gender", async () => {
    await page.getByRole("radio", { name: "Female" }).check();
  });

  //Hobbies
  await test.step("Hobbies", async () => {
    await page.getByRole("checkbox", { name: "Reading" }).check();
    await page.getByRole("checkbox", { name: "Traveling" }).check();
    await page.getByRole("checkbox", { name: "Cooking" }).check();
  });

  //Interests
  await test.step("Interests", async () => {
    await page.getByRole("option", { name: "Music" }).click();
  });

  //Country
  await test.step("Country", async () => {
    await page
      .getByRole("combobox", { name: "Country:" })
      .selectOption("Canada");
  });

  //DOB
  await test.step("DOB", async () => {
    await page.getByLabel("Date of Birth:").fill("2001-01-01");
  });

  //choose file
  await test.step("Choose file", async () => {
    await page
      .getByRole("button", { name: "Profile Picture:" })
      .setInputFiles("tests/data-test/image.png");
  });

  //Biography
  await test.step("Biography", async () => {
    await page
      .getByRole("textbox", { name: "Biography" })
      .pressSequentially("Hello World!", { delay: 50 });
  });

  //Rate Us
  await test.step("Rate", async () => {
    await page.getByRole("slider", { name: "Rate Us:" }).fill("8");
  });

  //Newsletter
  await test.step("Newsletter", async () => {
    await page.getByRole("checkbox", { name: "Subscribe" }).check();
  });

  //Button register
  await test.step("Submit", async () => {
    await page.getByRole("button", { name: "Register" }).click();
  });
});
