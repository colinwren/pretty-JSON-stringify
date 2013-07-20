var _ = require('lodash');
var quote;
var indent;

module.exports = function(obj, options) {
  options = options || {};
  var indentSpace = options.indent || '  ';
  var initialIndent = options.initialIndent || 0;

  quote = (options.quote === '"' || options.quote === 'double') ? '"' : '\'';
  indent = function (nest) {
    return multStr(indentSpace, nest);
  }

  return indent(initialIndent) + processValue(obj, initialIndent);
}


function printObj(obj, nest) {
  var buffer = _.map(obj, function(value, key) {
    return indent(nest + 1) + key + ': ' + processValue(value, nest + 1);
  });

  return '{\n' + buffer.join(',\n') + '\n' + indent(nest) + '}';
}

function printArray(array, nest) {
  var buffer = _.map(array, function(value) {
    return indent(nest + 1) + processValue(value, nest + 1);
  });
  return '[\n' + buffer.join(',\n') + '\n' + indent(nest) + ']';
}

function processValue(value, nest) {
  if (_.isArray(value)) {
    return printArray(value, nest);

  } else if (_.isObject(value)) {
    return printObj(value, nest);

  } else if (_.isString(value)) {
    return quote  + value + quote;

  } else {
    return value;
  }
}

function multStr(str, num) {
  return new Array(num + 1).join(str);
}
