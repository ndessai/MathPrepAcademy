import { expect, test } from "@playwright/test";

import { signIn } from "./helpers";

test("the app shows the brand and asks visitors to sign in", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "MathPrep Academy" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
});

test("navigation reaches the assessment hub and roadmap after sign-in", async ({ page }) => {
  await signIn(page, "Smoke Tester", "smoke@example.com");
  await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();

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
