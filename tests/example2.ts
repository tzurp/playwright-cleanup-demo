import { expect } from "@playwright/test";
import * as testbase from "./test-base";

const test = testbase.test;


test('test faulty cleanup', async ({ page, cleanup }) => {
  await page.goto('https://playwright.dev/');

  console.log("Create user2");
  cleanup.addCleanup(async() => { const invalidJson = '{ "name": "John", "age": }';
  await JSON.parse(invalidJson); });

  console.log("Create account2");
  cleanup.addCleanup(() => {throw new Error("Intentional cleanup error!"); console.log("Removing account2")});
  
  console.log("Add cash $2000");
  cleanup.addCleanup(() => console.log("Removing $2000"));

  expect(5).toBe(3 + 1);
});
