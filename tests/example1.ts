import base, { expect } from "@playwright/test";
import type { PlaywrightCleanup, DetailedLogOptions } from "playwright-cleanup";
import { playwrightCleanup } from "playwright-cleanup";

const test = base.extend<PlaywrightCleanup & DetailedLogOptions>({
  detailedLogOptions: [true, { option: true }], cleanup: playwrightCleanup.cleanup
});


test('test playwright-cleanup1', async ({ page, cleanup }) => {
  await page.goto('https://playwright.dev/');

  console.log("Create user1");
  cleanup.addCleanup(() => console.log("Removing user1"));

  console.log("Create account1");
  cleanup.addCleanup(() => console.log("Removing account1"));

  await page.waitForTimeout(1000);

  console.log("Add cash $1000");
  cleanup.addCleanup(() => console.log("Removing $1000"));

  expect(5 == (3 + 2));
});
