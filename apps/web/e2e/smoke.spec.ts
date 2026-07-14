import { expect, test } from "@playwright/test";

test("home page shows the brand and navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "MathPrep Academy" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();
});

test("navigation reaches the assessment hub and roadmap", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Main" })
    .getByRole("link", { name: "Assessments" })
    .click();
  await expect(page.getByRole("heading", { name: "Assessments" })).toBeVisible();

  await page
    .getByRole("navigation", { name: "Main" })
    .getByRole("link", { name: "Roadmap" })
    .click();
  await expect(page.getByRole("heading", { name: "Roadmap" })).toBeVisible();
});
