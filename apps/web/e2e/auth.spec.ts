import { expect, test } from "@playwright/test";

import { signIn } from "./helpers";

test("visiting signed out redirects to the sign-in page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Your name" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Email" })).toBeVisible();
});

test("signing in shows the student's name and email", async ({ page }) => {
  await signIn(page, "Jordan Lee", "jordan.lee@example.com");
  // Identity appears in the header…
  await expect(page.getByRole("banner").getByText("Jordan Lee")).toBeVisible();
  await expect(page.getByRole("banner").getByText("jordan.lee@example.com")).toBeVisible();
  // …and on the welcome panel.
  await expect(page.getByText("Signed in as jordan.lee@example.com")).toBeVisible();
});

test("post-login home offers AMC 8, AMC 10, and AMC 12 assessments", async ({ page }) => {
  await signIn(page, "Morgan Diaz", "morgan@example.com");
  await expect(page.getByRole("link", { name: "Take an AMC 8 assessment" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Take an AMC 10 assessment" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Take an AMC 12 assessment" })).toBeVisible();

  await page.getByRole("link", { name: "Take an AMC 10 assessment" }).click();
  await expect(page.getByRole("heading", { name: "Assessments" })).toBeVisible();
  await expect(page.getByText("Showing AMC 10 assessments")).toBeVisible();
  await expect(page.getByRole("heading", { name: "AMC 10 Mock Exam #1" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AMC 8 Mock Exam #1" })).toBeHidden();

  await page.getByRole("link", { name: "Show all" }).click();
  await expect(page.getByRole("heading", { name: "AMC 8 Mock Exam #1" })).toBeVisible();
});

test("signing out returns to the sign-in page and locks the app", async ({ page }) => {
  await signIn(page, "Sam Field", "sam@example.com");
  await page.getByRole("button", { name: "Sign out" }).click();
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();

  // The session cookie is gone: protected routes bounce back to login.
  await page.goto("/assessment");
  await expect(page).toHaveURL(/\/login$/);
});

test("a deep link is restored after signing in", async ({ page }) => {
  await page.goto("/roadmap");
  await expect(page).toHaveURL(/\/login$/);

  await page.getByRole("textbox", { name: "Your name" }).fill("Ali Novak");
  await page.getByRole("textbox", { name: "Email" }).fill("ali@example.com");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page.getByRole("heading", { name: "Roadmap" })).toBeVisible();
});

test("the session survives a page reload", async ({ page }) => {
  await signIn(page, "Robin Vale", "robin@example.com");
  await page.reload();
  await expect(page.getByRole("heading", { name: "Welcome, Robin Vale" })).toBeVisible();
});
