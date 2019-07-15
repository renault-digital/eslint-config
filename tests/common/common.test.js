require('should');

const { describe, it } = require('mocha');
const { Linter } = require('eslint');
const fs = require('fs');
const path = require('path');
const util = require('util');

const commonEslint = require('../../common');

const readFile = util.promisify(fs.readFile);
const linter = new Linter();

describe('eslintrc common', () => {
  it('should not accept file with more than 120 columns', async () => {
    const fixture = path.resolve(__dirname, './fixtures/columnLength.fixture.js');
    const testFile = await readFile(fixture, 'utf8');

    const res = linter.verify(testFile, commonEslint);

    res.should.not.be.empty();
    res[0].ruleId.should.be.equal('max-len');
  });

  it('should not accept comments with more than 120 columns', async () => {
    const fixture = path.resolve(__dirname, './fixtures/columnLengthWithComment.fixture.js');
    const testFile = await readFile(fixture, 'utf8');

    const res = linter.verify(testFile, commonEslint);

    res.should.not.be.empty();
    res[0].ruleId.should.be.equal('max-len');
  });

  it('should accept file with more than 120 columns that include url', async () => {
    const fixture = path.resolve(__dirname, './fixtures/columnLengthWithUrl.fixture.js');
    const testFile = await readFile(fixture, 'utf8');

    const res = linter.verify(testFile, commonEslint);

    res.should.be.empty();
  });
});
