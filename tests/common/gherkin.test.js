require('should');

const { it, describe } = require('mocha');

const linter = require('gherkin-lint/dist/linter.js');
const featureFinder = require('gherkin-lint/dist/feature-finder.js');
const configParser = require('gherkin-lint/dist/config-parser.js');

describe('Gherkin linter', () => {
  it('should lint gherkin files', () => {
    const config = configParser.getConfiguration(`${__dirname}/../../gherkin.json`);
    const files = featureFinder.getFeatureFiles([`${__dirname}/fixtures/features/*.feature`]);
    const results = linter.lint(files, config);

    results.should.not.be.empty();
  });
});
