'use strict';

var assert = require('assert');
var fs = require('fs');
var prettyStringify = require('../');

describe('prettyStringify()', function () {

  describe('Defaults', function () {
    it('should stringify with all the default options', function () {
      assert.equal(prettyStringify(sampleObject), fs.readFileSync('./test/fixtures/default.js', 'utf8'));
    });
  });

  describe('indent', function () {
    it('should indent strinfigied code with given indent string', function () {
      assert.equal(prettyStringify(sampleObject, {
        indent: '\t'
      }), fs.readFileSync('./test/fixtures/indent.js', 'utf8'));
    });
  });

  describe('initialIndent', function () {
    it('should strinfigy code with the specified base indentation level', function () {
      assert.equal(prettyStringify(sampleObject, {
        initialIndent: 2
      }), fs.readFileSync('./test/fixtures/initialIndent.js', 'utf8'));
    });
  });

  describe('quote', function () {
    it('should strinfigy code with the specified base indentation level', function () {
      assert.equal(prettyStringify(sampleObject, {
        quote: 'double'
      }), fs.readFileSync('./test/fixtures/quote.js', 'utf8'));
    });
  });
});

var sampleObject = {
  string: 'string',
  number: 9,
  nest: {
    array: [
      'value',
      'value',
      5,
      {
        1: 'one'
      }
    ]
  }
};
