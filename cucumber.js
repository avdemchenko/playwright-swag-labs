let options = [
    '--require-module ts-node/register',
    '--require ./tests/e2e/steps/*steps.ts',
    '--format progress',
].join(' ');

let run_features = [
    './tests/e2e/features/',
    options,
].join(' ');

module.exports = {
    test_runner: run_features
};