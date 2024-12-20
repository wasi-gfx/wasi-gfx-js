import { Fixture } from "./cts/src/common/framework/fixture";
import { Logger } from "./cts/src/common/internal/logging/logger";
import { LiveTestCaseResult } from "./cts/src/common/internal/logging/result";
import { parseQuery } from "./cts/src/common/internal/query/parseQuery";
import { TestQuerySingleCase } from "./cts/src/common/internal/query/query";
import { TestGroup } from "./cts/src/common/internal/test_group";

import { declareGlobals } from "./globals";
import { specs } from "./spec-list";

const log = new Logger();
const query = "webgpu:api,operation,adapter,requestAdapter:requestAdapter:powerPreference=%22_undef_%22;forceFallbackAdapter=true";
const webgpuQuery = parseQuery(query);


export const run = {
  async run() {
    declareGlobals();
    runTests();
  },
};

async function runTests() {
  for(const [name, spec] of Object.entries(specs)) {
    console.log(`Running spec ${ name }:\n`);

    let responses: LiveTestCaseResult[] = [];
    for (const tests of (spec as TestGroup<Fixture>).iterate()) {
      for (const test of tests.iterate(null)) {
        const [rec, res] = log.record(test.toString());

        await test.run(
          rec,
          (webgpuQuery as TestQuerySingleCase),
          []
        );

        responses.push(res);
      }
    }
    logResults(responses);
  }
}


function logResults(results: LiveTestCaseResult[]) {
  let notrunCount = 0;
  let runningCount = 0;
  let warnCount = 0;
  let passCount = 0;
  let skipCount = 0;
  let failCount = 0;

  for(const result of results) {
    const logs = result.logs?.map(log => {
      return `${ log.message }\n${ log.stack }`;
    });
    console.log(`== ${result.status} ==\n${logs}`);
    switch (result.status) {
      case "notrun":
        notrunCount++;
        break;
      case "running":
        runningCount++;
        break;
      case "warn":
        warnCount++;
        break;
      case "pass":
        passCount++;
        break;
      case "skip":
        skipCount++;
        break;
      case "fail":
        failCount++;
        break;
    }
  }
  console.log(`${notrunCount} not run\n${runningCount} running\n${warnCount} warn\n${passCount} pass\n${skipCount} skip\n${failCount} fail\n\n\n`);
}
