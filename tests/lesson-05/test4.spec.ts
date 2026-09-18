import { test } from "@playwright/test";

test("Product", async ({ page }) => {
  await test.step("Navigate to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  //lesson 4
  await test.step("Personal ", async () => {
    await page.getByRole("link", { name: "Bài học 4: Personal notes" }).click();
  });

  //1
  await test.step("content 1", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("click");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //2
  await test.step("content 2", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("fill");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //3
  await test.step("content 3", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("type");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //4
  await test.step("content 4", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("hover");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //5
  await test.step("content 5", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("check");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //6
  await test.step("content 6", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("uncheck");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //7
  await test.step("content 7", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("selectOption");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //8
  await test.step("content 8", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("press");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //9
  await test.step("content 9", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("dblclick");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //10
  await test.step("content 10", async () => {
    await page.getByRole("textbox", { name: "Title:" }).fill("dragAndDrop");
    await page
      .getByRole("textbox", { name: "Content:" })
      .fill(
        "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
      );
    await page.getByRole("button", { name: "Add Note" }).click();
  });

  //search
  await test.step("Search Notes", async () => {
    const searchNotes = "một hoặc nhiều";
    await page
      .getByRole("textbox", { name: "Search Notes:" })
      .fill(searchNotes);
  });
});
