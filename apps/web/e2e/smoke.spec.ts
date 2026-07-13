import { expect, test } from "@playwright/test";

test("home page shows the brand and navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "MathPrep Academy" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();
});

test("user can navigate to and start a placeholder assessment", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Main" })
    .getByRole("link", { name: "Assessment" })
    .click();
  await expect(page.getByRole("heading", { name: "Assessment" })).toBeVisible();

  await page.getByRole("button", { name: "Start assessment" }).click();
  await expect(page.getByText("What is 7 × 8?")).toBeVisible();
});

test("user can view the roadmap directly by URL", async ({ page }) => {
  await page.goto("/roadmap");
  await expect(page.getByRole("heading", { name: "Roadmap" })).toBeVisible();
});
