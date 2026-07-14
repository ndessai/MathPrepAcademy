import { expect, test } from "@playwright/test";

import type { Page } from "@playwright/test";

async function chooseStudent(page: Page, name: string) {
  await page.getByRole("textbox", { name: "Student name" }).fill(name);
}

test("hub lists the mock exam, diagnostic, and topic quizzes", async ({ page }) => {
  await page.goto("/assessment");
  await expect(page.getByRole("heading", { name: "AMC 8 Mock Exam #1" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Quick Diagnostic" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Geometry Quiz" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Number Theory Quiz" })).toBeVisible();
});

test("start buttons unlock after entering a student name", async ({ page }) => {
  await page.goto("/assessment");
  const start = page.getByRole("button", { name: "Start Quick Diagnostic" });
  await expect(start).toBeDisabled();
  await chooseStudent(page, "Blake");
  await expect(start).toBeEnabled();
});

test("a student can take the Quick Diagnostic end to end and see a score report", async ({
  page,
}) => {
  await page.goto("/assessment");
  await chooseStudent(page, "Alex");
  await page.getByRole("button", { name: "Start Quick Diagnostic" }).click();

  // Test-taking screen: title, timer, and question 1 of 10.
  await expect(page.getByRole("heading", { name: "Quick Diagnostic" })).toBeVisible();
  await expect(page.getByRole("timer")).toBeVisible();
  await expect(page.getByText("Question 1 of 10")).toBeVisible();

  // Answer every question by picking choice A, using the palette to navigate.
  for (let i = 1; i <= 10; i++) {
    await page
      .getByRole("navigation", { name: "Question navigation" })
      .getByText(String(i), { exact: true })
      .click();
    await expect(page.getByText(`Question ${i} of 10`)).toBeVisible();
    await page.getByRole("group", { name: "Answer choices" }).getByRole("button").first().click();
  }
  await expect(page.getByText("10 answered")).toBeVisible();

  await page.getByRole("button", { name: "Submit answers" }).click();

  // Score report: headline score out of 10, topic table, and 10 reviewed questions.
  await expect(page.getByRole("heading", { name: "Score report" })).toBeVisible();
  await expect(page.getByLabel("Score")).toHaveText(/^\d+ \/ 10$/);
  await expect(page.getByText("Alex", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "By topic" })).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(10);
  await expect(page.getByText("Explanation").first()).toBeVisible();
});

test("submitting with unanswered questions asks for confirmation", async ({ page }) => {
  await page.goto("/assessment");
  await chooseStudent(page, "Casey");
  await page.getByRole("button", { name: "Start Arithmetic & Ratios Quiz" }).click();
  await expect(page.getByText("Question 1 of 6")).toBeVisible();

  let confirmMessage = "";
  page.once("dialog", (dialog) => {
    confirmMessage = dialog.message();
    void dialog.accept();
  });
  await page.getByRole("button", { name: "Submit answers" }).click();

  await expect(page.getByRole("heading", { name: "Score report" })).toBeVisible();
  expect(confirmMessage).toContain("6 unanswered");
  await expect(page.getByLabel("Score")).toHaveText("0 / 6");
  await expect(page.locator(".review-item.blank")).toHaveCount(6);
});

test("completed attempts appear in the student's history on the hub", async ({ page }) => {
  await page.goto("/assessment");
  await chooseStudent(page, "Drew");
  await page.getByRole("button", { name: "Start Probability Quiz" }).click();
  await expect(page.getByText("Question 1 of 6")).toBeVisible();

  page.once("dialog", (dialog) => void dialog.accept());
  await page.getByRole("button", { name: "Submit answers" }).click();
  await expect(page.getByRole("heading", { name: "Score report" })).toBeVisible();

  await page.getByRole("link", { name: "Back to assessments" }).click();
  await expect(page.getByRole("heading", { name: "Recent results for Drew" })).toBeVisible();
  await expect(page.getByText("Probability Quiz —")).toBeVisible();
  await page.getByRole("link", { name: "View report" }).first().click();
  await expect(page.getByRole("heading", { name: "Score report" })).toBeVisible();
});

test("mock exam serves 25 questions with a 40-minute clock", async ({ page }) => {
  await page.goto("/assessment");
  await chooseStudent(page, "Riley");
  await page.getByRole("button", { name: "Start AMC 8 Mock Exam #1" }).click();
  await expect(page.getByText("Question 1 of 25")).toBeVisible();
  await expect(page.getByRole("timer")).toHaveText(/^(39|40):\d{2}$/);
  // Math renders via KaTeX.
  await expect(page.locator(".katex").first()).toBeVisible();
});
