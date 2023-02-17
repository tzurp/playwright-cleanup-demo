import base, { expect } from "@playwright/test";
import type { PlaywrightCleanup, DetailedLogOptions } from "playwright-cleanup";
import { playwrightCleanup } from "playwright-cleanup";

const test = base.extend<PlaywrightCleanup & DetailedLogOptions>({
  detailedLogOptions: [true, { option: true }], cleanup: playwrightCleanup.cleanup
});

test('test playwright-cleanup2', async ({ page, cleanup }) => {
  await page.goto('https://playwright.dev/');

  console.log("Create user2");
  cleanup.addCleanup(() => console.log("Removing user2"));

  console.log("Create account2");
  cleanup.addCleanup(() => {throw new Error("Intentional cleanup error!"); console.log("Removing account2")});
  
  console.log("Add cash $2000");
  cleanup.addCleanup(() => console.log("Removing $2000"));

  expect(5 == (3 + 2));
});
