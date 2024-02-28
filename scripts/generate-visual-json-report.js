const { promisify } = require('util');
const { readdir, writeFile } = require('fs');
const { join: joinPath, relative } = require('path');

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const reportDir = joinPath(__dirname, '..', 'reports');
const lokiDir = joinPath(__dirname, '..', '.loki');
const actualDir = joinPath(lokiDir, 'current');
const expectedDir = joinPath(lokiDir, 'reference');
const diffDir = joinPath(lokiDir, 'difference');

(async function main() {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(joinPath(reportDir, 'screenshot.json'), JSON.stringify({
    newItems: [],
    deletedItems: [],
    passedItems: [],
    failedItems: diffs,
    expectedItems: diffs,
    actualItems: diffs,
    diffItems: diffs,
    actualDir: relative(lokiDir, actualDir),
    expectedDir: relative(lokiDir, expectedDir),
    diffDir: relative(lokiDir, diffDir),
  }));
}());
