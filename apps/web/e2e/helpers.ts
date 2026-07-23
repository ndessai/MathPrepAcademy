import { expect } from "@playwright/test";

import type { Page } from "@playwright/test";

/**
 * Sign in through the dev form (the API runs without a Google client id in
 * e2e, so the dev sign-in is always offered) and wait for the home page.
 */
export async function signIn(page: Page, name = "Test Student", email = "student@example.com") {
  await page.goto("/login");
  await page.getByRole("textbox", { name: "Your name" }).fill(name);
  await page.getByRole("textbox", { name: "Email" }).fill(email);
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page.getByRole("heading", { name: `Welcome, ${name}` })).toBeVisible();
}
