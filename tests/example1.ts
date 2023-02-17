import { expect } from "@playwright/test";
import * as testbase from "./test-base";

const test = testbase.test;

test('test successful cleanup', async ({ page, cleanup }) => {
  await page.goto('https://playwright.dev/');

  console.log("Create user1");
  cleanup.addCleanup(() => console.log("Removing user1"));

  console.log("Create account1");
  cleanup.addCleanup(() => console.log("Removing account1"));

  await page.waitForTimeout(1000);

  console.log("Add cash $1000");
  cleanup.addCleanup(() => console.log("Removing $1000"));

  expect(5).toBe(3 + 2);
});
