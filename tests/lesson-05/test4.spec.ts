import { test } from "@playwright/test";

test("Personal Notes", async ({ page }) => {
  const notes = [
    {
      title: "click",
      content:
        "Hàm click dùng để thực hiện click vào các phần tử trên trang web",
    },
    {
      title: "fill",
      content:
        "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web",
    },
    {
      title: "type",
      content:
        "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng",
    },
    {
      title: "hover",
      content:
        "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover",
    },
    {
      title: "check",
      content:
        "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
    },
    {
      title: "uncheck",
      content:
        "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
    },
    {
      title: "selectOption",
      content:
        "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
    },
    {
      title: "press",
      content:
        "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác",
    },
    {
      title: "dblclick",
      content:
        "Hàm dblclick dùng để thực hiện double click vào phần tử trên trang web",
    },
    {
      title: "dragAndDrop",
      content:
        "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
    },
  ];
  await test.step("Navigate to material playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Personal ", async () => {
    await page.getByRole("link", { name: "Bài học 4: Personal notes" }).click();
  });

  //Add 10 notes
  await test.step("Add 10 notes", async () => {
    for (const note of notes) {
      await page.getByRole("textbox", { name: "Title" }).fill(note.title);
      await page.getByRole("textbox", { name: "Content" }).fill(note.content);
      await page.getByRole("button", { name: "Add note" }).click();
    }
  });

  //Search
  await test.step("Search Notes", async () => {
    await page
      .getByRole("textbox", { name: "Search Notes: " })
      .fill("một hoặc nhiều");
  });
});
