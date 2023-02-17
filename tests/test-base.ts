import base from "@playwright/test";
import type { DetailedLogOptions, PlaywrightCleanup } from "playwright-cleanup";
import {playwrightCleanup} from "playwright-cleanup";

export const test = base.extend<PlaywrightCleanup & DetailedLogOptions>({
    detailedLogOptions: [true, { option: true }], cleanup: playwrightCleanup.cleanup
  });