'use strict';

var _ = require('lodash');

// Wrap string in single or double quotes based on user input
var quoteWrap;

// Create indent to specified nest level
var createIndent;

// Take an object or array and return stringified JSON that is styled based on
// user input
module.exports = function (obj, options) {
  options = options || {};
  var initialIndent = options.initialIndent || 0;

  // Create utility functions based on options
  quoteWrap = wrap((options.quote === '"' || options.quote === 'double') ? '"' : '\'');
  createIndent = prefix(options.indent || '  ');

  return processValue(obj, initialIndent);
};

// Process value based on its type
function processValue(value, nest) {
  if (_.isArray(value)) {
    return printArray(value, nest);

  } else if (_.isObject(value)) {
    return printObj(value, nest);

  } else if (_.isString(value)) {
    return quoteWrap(value);

  } else {
    return value;
  }
}

// Stringify object
function printObj(obj, nest) {
  var buffer = _.map(obj, function (value, key) {
    return createIndent(nest + 1) + key + ': ' + processValue(value, nest + 1);
  });

  return '{\n' + buffer.join(',\n') + '\n' + createIndent(nest) + '}';
}

// Stringify array
function printArray(array, nest) {
  var buffer = _.map(array, function (value) {
    return createIndent(nest + 1) + processValue(value, nest + 1);
  });

  return '[\n' + buffer.join(',\n') + '\n' + createIndent(nest) + ']';
}

function prefix(space) {
  return function (nest) {
    return new Array(nest + 1).join(space);
  };
}

function wrap(character) {
  return function (str) {
    return character + str + character;
  };
}
