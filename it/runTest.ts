import * as path from "path";

import { runTests } from "@vscode/test-electron";

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, "../../");

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, "./suite/index");

    // Download VS Code, unzip it and run the integration test
    await runTests({
      // we use 1.53.0 rather than 1.43.0 because it's the first one
      // available to be downloaded. Latest also has the following issue:
      //https://github.com/microsoft/vscode/issues/148975
      version: "1.53.0",
      extensionDevelopmentPath,
      extensionTestsPath,
    });
  } catch (err) {
    console.error("Failed to run tests");
    console.error(err);
    process.exit(1);
  }
}

main();