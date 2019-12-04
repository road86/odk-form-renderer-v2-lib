'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('bootstrap/dist/css/bootstrap.min.css');
var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactstrap = require('reactstrap');
var SeamlessImmutable = _interopDefault(require('seamless-immutable'));
var reactFontawesome = require('@fortawesome/react-fontawesome');
var DatePicker = _interopDefault(require('react-datepicker'));
require('react-datepicker/dist/react-datepicker.css');
var _ = _interopDefault(require('lodash'));
var Select = _interopDefault(require('react-select'));
var redux = require('redux');
var reduxDevtoolsExtension = require('redux-devtools-extension');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

// Field Types
var GROUP_FIELD_TYPE = 'group';
var REPEAT_FIELD_TYPE = 'repeat';
var TEXT_FIELD_TYPE = 'text';
var DATE_FIELD_TYPE = 'date';
var DATE_TIME_FIELD_TYPE = 'dateTime';
var TIME_FIELD_TYPE = 'time';
var INTEGER_FIELD_TYPE = 'integer';
var DECIMAL_FIELD_TYPE = 'decimal';
var PHOTO_FIELD_TYPE = 'photo';
var NOTE_FIELD_TYPE = 'note';
var SELECT_ONE_FIELD_TYPE = 'select one';
var SELECT_ALL_FIELD_TYPE = 'select all that apply';
var CALCULATE_FIELD_TYPE = 'calculate'; // Required Properties

var REQUIRED_FIELD_MSG = 'This field is required';
var REQUIRED_SYMBOL = '*';

var actualExpression;
var currentHierarchicalName = '';
var formItemProperty = {};
var userInput = {};

function tokenizeCharacter(type, value, input, current) {
  return value === input[current] ? [1, {
    type: type,
    value: value
  }] : [0, null];
}

function tokenizeParenOpen(input, current) {
  return tokenizeCharacter('paren', '(', input, current);
}

function tokenizeBrakeOpen(input, current) {
  return tokenizeCharacter('brac', '[', input, current);
}

function tokenizeBrakeClose(input, current) {
  return tokenizeCharacter('brac', ']', input, current);
}

function tokenizeParenClose(input, current) {
  return tokenizeCharacter('paren', ')', input, current);
}

function tokenizeEqual(input, current) {
  return tokenizeCharacter('equal', '=', input, current);
}

function tokenizePlus(input, current) {
  return tokenizeCharacter('plus', '+', input, current);
}

function tokenizeMinus(input, current) {
  return tokenizeCharacter('minus', '-', input, current);
}

function tokenizeMultiply(input, current) {
  return tokenizeCharacter('multiply', '*', input, current);
}

function tokenizeDivide(input, current) {
  return tokenizeCharacter('divide', '/', input, current);
}

function tokenizeLessThan(input, current) {
  return tokenizeCharacter('lessThan', '<', input, current);
}

function tokenizeGreaterThan(input, current) {
  return tokenizeCharacter('greaterThan', '>', input, current);
}

function tokenizeNot(input, current) {
  return tokenizeCharacter('not', '!', input, current);
}

function tokenizeComma(input, current) {
  return tokenizeCharacter('comma', ',', input, current);
}

function tokenizeDot(input, current) {
  return tokenizeCharacter('dot', '.', input, current);
}

function tokenizePattern(type, pattern, input, current) {
  var _char = input[current];
  var consumedChars = 0;

  if (pattern.test(_char)) {
    var value = '';

    while (_char && pattern.test(_char)) {
      value += _char;
      consumedChars += 1;
      _char = input[current + consumedChars];
    }

    return [consumedChars, {
      type: type,
      value: value
    }];
  }

  return [0, null];
}

function tokenizeString(input, current) {
  if (input[current] === '"' || input[current] === "'") {
    var matchQuote = input[current];
    var value = '';
    var consumedChars = 0;
    consumedChars += 1;
    var _char2 = input[current + consumedChars];

    while (_char2 !== matchQuote) {
      if (_char2 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char2;
      consumedChars += 1;
      _char2 = input[current + consumedChars];
    }

    return [consumedChars + 1, {
      type: 'string',
      value: value
    }];
  }

  return [0, null];
}

function tokenizeFunction(input, current) {
  if (/[a-z_]/i.test(input[current])) {
    var value = '';
    var consumedChars = 0; // consumedChars ++;

    var _char3 = input[current + consumedChars];

    while (_char3 && /[:a-z0-9_-]/i.test(_char3)) {
      if (_char3 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char3;
      consumedChars += 1;
      _char3 = input[current + consumedChars];
    }

    while (_char3 && /\s/.test(_char3)) {
      consumedChars += 1;
      _char3 = input[current + consumedChars];
    }

    if (_char3 && _char3 === '(') {
      return [consumedChars, {
        type: 'function',
        value: value
      }];
    }
  }

  return [0, null];
}

function tokenizeNumber(input, current) {
  if (/[0-9]/i.test(input[current])) {
    var value = '';
    var consumedChars = 0; // consumedChars ++;

    var _char4 = input[current + consumedChars];

    while (/[0-9]/i.test(_char4)) {
      if (_char4 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char4;
      consumedChars += 1;
      _char4 = input[current + consumedChars];
    }

    if (_char4 !== '.') {
      return [consumedChars, {
        type: 'number',
        value: value
      }];
    }
  }

  return [0, null];
}

function tokenizeDecimal(input, current) {
  if (/[0-9.]/i.test(input[current])) {
    var value = '';
    var consumedChars = 0; // consumedChars ++;

    var _char5 = input[current + consumedChars];

    while (/[0-9]/i.test(_char5)) {
      if (_char5 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char5;
      consumedChars += 1;
      _char5 = input[current + consumedChars];
    }

    if (_char5 === '.') {
      value += _char5;
      consumedChars += 1;
      _char5 = input[current + consumedChars];

      if (/[0-9]/i.test(_char5)) {
        while (/[0-9]/i.test(_char5)) {
          if (_char5 === undefined) {
            throw new TypeError('unterminated string ');
          }

          value += _char5;
          consumedChars += 1;
          _char5 = input[current + consumedChars];
        }

        return [consumedChars, {
          type: 'decimal',
          value: value
        }];
      }
    }
  }

  return [0, null];
}

function tokenizeVariable(input, current) {
  if (input[current] === '#' || input[current] === '$') {
    if (input[current + 1] && input[current + 1] === '{') {
      var value = '';
      var consumedChars = 1;
      consumedChars += 1;
      var _char6 = input[current + consumedChars];

      while (_char6 !== '}') {
        if (_char6 === undefined) {
          throw new TypeError('unterminated string ');
        }

        value += _char6;
        consumedChars += 1;
        _char6 = input[current + consumedChars];
      }

      return [consumedChars + 1, {
        type: 'variable',
        value: value
      }];
    }
  }

  return [0, null];
}

function tokenizeOr(input, current) {
  if (input[current] === 'o') {
    if (input[current + 1] && input[current + 1] === 'r') {
      if (input[current + 2] === undefined || /[0-9\s]/.test(input[current + 2])) {
        return [2, {
          type: 'or',
          value: 'or'
        }];
      }
    }
  }

  return [0, null];
}

function tokenizeIf(input, current) {
  if (input[current] === 'i') {
    if (input[current + 1] && input[current + 1] === 'f') {
      if (input[current + 2] === undefined || !/[a-z]i/.test(input[current + 2])) {
        return [2, {
          type: 'if',
          value: 'if'
        }];
      }
    }
  }

  return [0, null];
}

function tokenizeAnd(input, current) {
  if (input[current] === 'a') {
    if (input[current + 1] && input[current + 1] === 'n') {
      if (input[current + 2] && input[current + 2] === 'd') {
        if (input[current + 3] === undefined || /[0-9\s]/.test(input[current + 3])) {
          return [3, {
            type: 'and',
            value: 'and'
          }];
        }
      }
    }
  }

  return [0, null];
}

function tokenizeDiv(input, current) {
  if (input[current] === 'd') {
    if (input[current + 1] && input[current + 1] === 'i') {
      if (input[current + 2] && input[current + 2] === 'v') {
        if (input[current + 3] === undefined || /[0-9\s]/.test(input[current + 3])) {
          return [3, {
            type: 'divide',
            value: '/'
          }];
        }
      }
    }
  }

  return [0, null];
}

function tokenizeName(input, current) {
  return tokenizePattern('name', /[a-z]/i, input, current);
}

function skipWhiteSpace(input, current) {
  return /\s/.test(input[current]) ? [1, null] : [0, null];
}

var tokenizers = [skipWhiteSpace, tokenizeParenOpen, tokenizeParenClose, tokenizeIf, tokenizeOr, tokenizeAnd, tokenizeVariable, tokenizeString, tokenizeFunction, tokenizeEqual, tokenizePlus, tokenizeMinus, tokenizeMultiply, tokenizeDivide, tokenizeDiv, tokenizeLessThan, tokenizeGreaterThan, tokenizeNot, tokenizeBrakeOpen, tokenizeBrakeClose, tokenizeDot, tokenizeComma, tokenizeNumber, tokenizeDecimal, tokenizeName];

function tokenizer(input) {
  var current = 0;
  var tokens = [];

  var _loop = function _loop() {
    var tokenized = false;
    tokenizers.forEach(function (tokenizerFn) {
      if (tokenized) {
        return;
      }

      var _tokenizerFn = tokenizerFn(input, current),
          consumedChars = _tokenizerFn[0],
          token = _tokenizerFn[1];

      if (consumedChars !== 0) {
        tokenized = true;
        current += consumedChars;
      }

      if (token) {
        tokens.push(token);
      }
    });

    if (!tokenized) {
      throw new TypeError("I dont know what this character is: " + input[current]);
    }
  };

  while (current < input.length) {
    _loop();
  }

  return tokens;
} // tslint:disable-next-line: variable-name


function kbSelected(funcName, params, _paramsTokens) {
  if (funcName === 'selected') {
    var tmp = false;

    if (Array.isArray(params[0])) {
      params[0].forEach(function (element) {
        // tslint:disable-next-line: triple-equals
        tmp = tmp || element == params[1];
      });
      return [true, tmp];
    } // tslint:disable-next-line: triple-equals


    return [true, params[0] == params[1]];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbToday(funcName, _params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'today') {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return [true, d];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbRound(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'round') {
    if (params[0] && params[1]) {
      if (typeof params[0] === 'number' && typeof params[1] === 'number') {
        return [true, params[0].toFixed(params[1])];
      }

      if (typeof params[0] === 'string' && typeof params[1] === 'number') {
        return [true, parseFloat(params[0]).toFixed(params[1])];
      }
    }
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbRegex(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'regex') {
    var regex = RegExp(params[1]);
    return [true, regex.test(params[0])];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbCountSelected(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'count-selected') {
    if (params[0] && Array.isArray(params[0])) {
      return [true, params[0].length];
    }

    if (params[0] && typeof params[0] !== 'object') {
      return [true, 1];
    }

    return [true, 0];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbInt(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'int') {
    if (typeof params[0] === 'string') {
      return [true, parseInt(params[0], 10)];
    }
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbCoalesce(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'coalesce') {
    if (!params[0] && params[0] !== 0) {
      return [true, params[1]];
    }

    return [true, params[0]];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbPosition(funcName, _params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'position') {
    if (currentHierarchicalName) {
      var tmpName = currentHierarchicalName.split('/');

      if (tmpName.length > 2) {
        return [true, parseInt(tmpName[tmpName.length - 2], 10) + 1];
      }
    }
  }

  return [false, null];
}

function sumValuesOverJsn(sum, jsnObj, variableName) {
  if (Array.isArray(jsnObj)) {
    var i;

    for (i = 0; i < jsnObj.length; i += 1) {
      sum = sumValuesOverJsn(sum, jsnObj[i], variableName);
    }
  } else if (typeof jsnObj === 'object') {
    for (var key in jsnObj) {
      if (typeof jsnObj[key] === 'object') {
        sum = sumValuesOverJsn(sum, jsnObj[key], variableName);
      } else if (key === variableName) {
        if (typeof jsnObj[key] === 'string') {
          sum += parseFloat(jsnObj[key]);
        }

        if (typeof jsnObj[key] === 'number') {
          sum += jsnObj[key];
        }
      }
    }
  }

  return sum;
} // tslint:disable-next-line: variable-name


function kbSum(funcName, _params, paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'sum') {
    var sumValue = null;

    if (paramsTokens && paramsTokens.length > 0 && paramsTokens[0] && paramsTokens[0].length > 0 && paramsTokens[0][0].type === 'variable') {
      sumValue = sumValuesOverJsn(0, userInput, paramsTokens[0][0].value);
    }

    return [true, sumValue];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbConcat(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'concat') {
    if (params && params.length > 0) {
      var concatStr = ''; // tslint:disable-next-line: prefer-for-of

      for (var i = 0; i < params.length; i += 1) {
        if (params[i] == null) {
          return [false, null];
        }

        concatStr += params[i];
      }

      return [true, concatStr];
    }
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbSubstr(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'substr') {
    if (params && params.length > 0) {
      if (params[0] && params[1] !== null) {
        if (params[2] !== null && params[2] < params[0].length) {
          var subStr = params[0].substring(params[1], params[2]);
          return [true, subStr];
        }

        return [true, params[0].substring(params[1])];
      }
    }
  }

  return [false, null];
}

function outerScopedVariables(variableName, variableValue, tmpUserInput) {
  // tslint:disable-next-line: forin
  for (var key in tmpUserInput) {
    var nodeNames = key.split('/');
    var variableNameFromKey = nodeNames[nodeNames.length - 1];

    if (variableNameFromKey === variableName) {
      return tmpUserInput[key];
    }

    if (typeof tmpUserInput[key] === 'object') {
      if (variableValue == null) {
        variableValue = outerScopedVariables(variableName, variableValue, tmpUserInput[key]);
      }
    }
  }

  return variableValue;
}

function parseMostClosestScopedVariable(variableName) {
  var tmpHierchicalName = currentHierarchicalName.split('/');
  var i;
  var tmpUserInput = userInput;
  var variableValue = null;
  variableValue = outerScopedVariables(variableName, variableValue, tmpUserInput);
  var parent = '';

  for (i = 0; i < tmpHierchicalName.length - 1;) {
    // tslint:disable-next-line: triple-equals
    if (tmpHierchicalName[i] == 'repeat') {
      i += 1;
      var index = parseInt(tmpHierchicalName[i + 1], 10);
      variableValue = outerScopedVariables(variableName, variableValue, tmpUserInput[parent + tmpHierchicalName[i]][index]);
      i += 2;
    } else {
      // path.push(parent + tmpHierchicalName[i + 1]);
      parent = parent + tmpHierchicalName[i + 1] + '/';
      i += 2;
    }
  }

  return variableValue;
}

function parseDot() {
  var tmpHierchicalName = currentHierarchicalName.split('/');
  var i;
  var tmpUserInput = userInput;
  var parent = '';
  var path = [];

  for (i = 0; i < tmpHierchicalName.length - 1;) {
    // tslint:disable-next-line: triple-equals
    if (tmpHierchicalName[i] == 'repeat') {
      i += 1;
      path.push(parent + tmpHierchicalName[i]);
      path.push(parseInt(tmpHierchicalName[i + 1], 10));
      parent = parent + tmpHierchicalName[i] + '/';
      i += 2;
    } else {
      // path.push(parent + tmpHierchicalName[i + 1]);
      parent = parent + tmpHierchicalName[i + 1] + '/';
      i += 2;
    }
  }

  path.push(parent + tmpHierchicalName[tmpHierchicalName.length - 1]);
  tmpUserInput = userInput.getIn(path);
  return tmpUserInput;
} // tslint:disable-next-line: variable-name


function parseLiterals(_tmpOutput, tokens, current) {
  if (tokens[current].type === 'number') {
    return [1, parseInt(tokens[current].value, 10)];
  }

  if (tokens[current].type === 'string') {
    return [1, tokens[current].value];
  }

  if (tokens[current].type === 'decimal') {
    return [1, parseFloat(tokens[current].value)];
  }

  if (tokens[current].type === 'variable') {
    return [1, parseMostClosestScopedVariable(tokens[current].value)];
  }

  if (tokens[current].type === 'name') {
    if (tokens[current].value.toLowerCase() === 'true') {
      return [1, true];
    }

    if (tokens[current].value.toLowerCase() === 'false') {
      return [1, false];
    }

    if (tokens[current].value in formItemProperty) {
      return [1, formItemProperty[tokens[current].value]];
    }

    return [1, null];
  }

  if (tokens[current].type === 'dot') {
    return [1, parseDot()];
  }

  return [0, null];
} // tslint:disable-next-line: variable-name


function parseFunction(_output, tokens, current) {
  var possibleFunctions = [kbSelected, kbCountSelected, kbToday, kbRegex, kbInt, kbCoalesce, kbPosition, kbSum, kbConcat, kbSubstr, kbRound];

  if (tokens[current].type === 'function') {
    var funcName = tokens[current].value;
    var arrayOfParams = [];
    var arrayOfOriginalTokens = [];
    var i = 1;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var tmpQueue = [];
      tmpQueue.push(1);
      i += 1;
      var tmpTokens = [];

      while (tokens[current + i] && tmpQueue.length) {
        tmpTokens.push(tokens[current + i]);

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
          tmpQueue.pop();
        }

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
          tmpQueue.push(1);
        }

        if (tokens[current + i].type === 'comma' && tmpQueue.length === 1) {
          tmpTokens.pop();
          var tmpVal = parser(null, tmpTokens, 0);
          arrayOfParams.push(tmpVal);
          arrayOfOriginalTokens.push(tmpTokens);
          tmpTokens = [];
        }

        i += 1;
      }

      i -= 1;

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
        tmpTokens.pop();

        var _tmpVal = parser(null, tmpTokens, 0);

        arrayOfParams.push(_tmpVal);
        arrayOfOriginalTokens.push(tmpTokens);
        var parsedFn = false;
        var parsedVal = null;
        possibleFunctions.forEach(function (functionFn) {
          if (parsedFn) {
            return;
          }

          var _functionFn = functionFn(funcName, arrayOfParams, arrayOfOriginalTokens);

          parsedFn = _functionFn[0];
          parsedVal = _functionFn[1];
        });

        if (parsedFn) {
          return [i + 1, parsedVal];
        }
      }
    }
  }

  return [0, null];
} // tslint:disable-next-line: variable-name


function parseIf(_output, tokens, current) {
  if (tokens[current].type === 'if') {
    var arrayOfParams = [];
    var i = 1;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var tmpQueue = [];
      tmpQueue.push(1);
      i += 1;
      var tmpTokens = [];

      while (tokens[current + i] && tmpQueue.length) {
        tmpTokens.push(tokens[current + i]);

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
          tmpQueue.pop();
        }

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
          tmpQueue.push(1);
        }

        if (tokens[current + i].type === 'comma' && tmpQueue.length === 1) {
          tmpTokens.pop();
          var tmpVal = parser(null, tmpTokens, 0);
          arrayOfParams.push(tmpVal);
          tmpTokens = [];
        }

        i += 1;
      }

      i -= 1;

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
        tmpTokens.pop();

        var _tmpVal2 = parser(null, tmpTokens, 0);

        arrayOfParams.push(_tmpVal2);

        if (arrayOfParams.length % 2 === 0) {
          var j;

          for (j = 0; j < arrayOfParams.length; j += 2) {
            if (arrayOfParams[j]) {
              return [i + 1, arrayOfParams[j + 1]];
            }
          }
        } else {
          var _j;

          for (_j = 0; _j < arrayOfParams.length - 1; _j += 2) {
            if (arrayOfParams[_j]) {
              return [i + 1, arrayOfParams[_j + 1]];
            }
          }

          return [i + 1, arrayOfParams[arrayOfParams.length - 1]];
        }
      }
    }
  }

  return [0, null];
}

function parseNot(output, tokens, current) {
  if (tokens[current].type === 'not') {
    var tmpTokens;
    var i = 1;

    if (tokens[current + i].type === 'equal' && output != null) {
      tmpTokens = [];
      i += 1;
      var terminatingTokens = ['and', 'or'];

      while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }

      var newOutput;

      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0); // tslint:disable-next-line: triple-equals

        return [i, output != newOutput];
      }
    } else {
      var parsed = false;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      var consumedTokens;

      var _newOutput;

      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        if (parserFn === parseMinus) {
          var _parserFn = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn[0];
          _newOutput = _parserFn[1];
        } else {
          var _parserFn2 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn2[0];
          _newOutput = _parserFn2[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          i += consumedTokens;
        }
      });

      if (parsed) {
        return [i, !_newOutput];
      }
    }
  }

  return [0, null];
}

function parseAnd(output, tokens, current) {
  if (tokens[current].type === 'and' && output != null) {
    var tmpTokens = [];
    var i = 1;
    var newOutput = null;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var consumedChars;

      var _parseParen = parseParen(null, tokens, current + i);

      consumedChars = _parseParen[0];
      newOutput = _parseParen[1];
      i += consumedChars;
    } else {
      var terminatingTokens = ['and', 'or'];

      while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }

      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0);
      }
    }

    if (newOutput != null) {
      newOutput = output && newOutput;

      if (tokens[current + i] && tokens[current + i].type === 'and') {
        var _consumedChars = 0;

        var _parseAnd = parseAnd(newOutput, tokens, current + i);

        _consumedChars = _parseAnd[0];
        newOutput = _parseAnd[1];
        i += _consumedChars;
      }

      return [i, newOutput];
    }
  }

  return [0, null];
}

function parseOr(output, tokens, current) {
  if (tokens[current].type === 'or' && output != null) {
    var tmpTokens = [];
    var i = 1;
    var newOutput = null;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var consumedChars;

      var _parseParen2 = parseParen(null, tokens, current + i);

      consumedChars = _parseParen2[0];
      newOutput = _parseParen2[1];
      i += consumedChars;
    } else {
      var terminatingTokens = ['and', 'or'];

      while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }

      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0);
      }
    }

    if (newOutput != null) {
      if (tokens[current + i] && tokens[current + i].type === 'and') {
        var _consumedChars2 = 0;

        var _parseAnd2 = parseAnd(newOutput, tokens, current + i);

        _consumedChars2 = _parseAnd2[0];
        newOutput = _parseAnd2[1];
        i += _consumedChars2;
      }

      return [i, output || newOutput];
    }
  }

  return [0, null];
}

function parseEqual(output, tokens, current) {
  if (tokens[current].type === 'equal' && output != null) {
    var tmpTokens = [];
    var i = 1;
    var terminatingTokens = ['and', 'or'];

    while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }

    var newOutput;

    if (tmpTokens.length) {
      newOutput = parser(null, tmpTokens, 0); // tslint:disable-next-line: triple-equals

      return [i, output == newOutput];
    }
  }

  return [0, null];
}

function parseLessThan(output, tokens, current) {
  if (tokens[current].type === 'lessThan' && output != null) {
    var flagLessThanOrEqual = false;
    var tmpTokens = [];
    var i = 1;

    if (tokens[current + i].type === 'equal') {
      i += 1;
      flagLessThanOrEqual = true;
    }

    var terminatingTokens = ['and', 'or'];

    while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }

    var newOutput;

    if (tmpTokens.length) {
      newOutput = parser(null, tmpTokens, 0);

      if (flagLessThanOrEqual) {
        return [i, output <= newOutput];
      }

      return [i, output < newOutput];
    }
  }

  return [0, null];
}

function parseGreaterThan(output, tokens, current) {
  if (tokens[current].type === 'greaterThan' && output != null) {
    var flagGreaterThanOrEqual = false;
    var tmpTokens = [];
    var i = 1;

    if (tokens[current + i].type === 'equal') {
      i += 1;
      flagGreaterThanOrEqual = true;
    }

    var terminatingTokens = ['and', 'or'];

    while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }

    var newOutput;

    if (tmpTokens.length) {
      newOutput = parser(null, tmpTokens, 0);

      if (flagGreaterThanOrEqual) {
        return [i, output >= newOutput];
      }

      return [i, output > newOutput];
    }
  }

  return [0, null];
} // tslint:disable-next-line: variable-name


function parseParen(_output, tokens, current) {
  if (tokens[current].type === 'paren' && tokens[current].value === '(') {
    var tmpQueue = [];
    tmpQueue.push(1);
    var i = 1;
    var tmpTokens = [];

    while (tokens[current + i] && tmpQueue.length) {
      tmpTokens.push(tokens[current + i]);

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
        tmpQueue.pop();
      }

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
        tmpQueue.push(1);
      }

      i += 1;
    }

    i -= 1;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
      tmpTokens.pop();
      var tmpVal = parser(null, tmpTokens, 0);
      return [i + 1, tmpVal];
    }
  }

  return [0, null];
}

function parseDivide(output, tokens, current) {
  if (output != null && tokens[current].type === 'divide') {
    var possibleTokens = ['number', 'decimal', 'minus', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var consumedTokens;
        var newOutput;

        if (parserFn === parseMinus) {
          var _parserFn3 = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn3[0];
          newOutput = _parserFn3[1];
        } else {
          var _parserFn4 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn4[0];
          newOutput = _parserFn4[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
        }

        var precedentParsers = [parseDivide, parseMultiply];
        var preParsed = false;
        var preOutput;
        precedentParsers.forEach(function (preParseFn) {
          if (preParsed) {
            return;
          }

          if (tokens[current]) {
            var _preParseFn = preParseFn(newOutput, tokens, current);

            consumedTokens = _preParseFn[0];
            preOutput = _preParseFn[1];
            ct += consumedTokens;

            if (consumedTokens !== 0) {
              preParsed = true;
              newOutput = preOutput;
            }
          }
        });

        if (newOutput != null) {
          output /= newOutput;
        }
      });

      if (parsed) {
        return [ct, output];
      }
    }
  }

  return [0, null];
}

function parseMultiply(output, tokens, current) {
  if (output != null && tokens[current].type === 'multiply') {
    var possibleTokens = ['number', 'decimal', 'minus', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var consumedTokens;
        var newOutput;

        if (parserFn === parseMinus) {
          var _parserFn5 = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn5[0];
          newOutput = _parserFn5[1];
        } else {
          var _parserFn6 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn6[0];
          newOutput = _parserFn6[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
        }

        var precedentParsers = [parseDivide, parseMultiply];
        var preParsed = false;
        var preOutput;
        precedentParsers.forEach(function (preParseFn) {
          if (preParsed) {
            return;
          }

          if (tokens[current]) {
            var _preParseFn2 = preParseFn(newOutput, tokens, current);

            consumedTokens = _preParseFn2[0];
            preOutput = _preParseFn2[1];
            ct += consumedTokens;

            if (consumedTokens !== 0) {
              preParsed = true;
              newOutput = preOutput;
            }
          }
        });

        if (newOutput != null) {
          output *= newOutput;
        }
      });

      if (parsed) {
        return [ct, output];
      }
    }
  }

  return [0, null];
}

function parsePlus(output, tokens, current) {
  if (output != null && tokens[current].type === 'plus') {
    var possibleTokens = ['number', 'decimal', 'string', 'minus', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var consumedTokens;
        var newOutput;

        if (parserFn === parseMinus) {
          var _parserFn7 = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn7[0];
          newOutput = _parserFn7[1];
        } else {
          var _parserFn8 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn8[0];
          newOutput = _parserFn8[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
          var precedentParsers = [parseDivide, parseMultiply];
          var preParsed = false;
          var preOutput;
          precedentParsers.forEach(function (preParseFn) {
            if (preParsed) {
              return;
            }

            if (tokens[current]) {
              var _preParseFn3 = preParseFn(newOutput, tokens, current);

              consumedTokens = _preParseFn3[0];
              preOutput = _preParseFn3[1];
              ct += consumedTokens;

              if (consumedTokens !== 0) {
                preParsed = true;
                newOutput = preOutput;
              }
            }
          });
        }

        if (newOutput != null) {
          output += newOutput;
        }
      });

      if (parsed) {
        return [ct, output];
      }
    }
  }

  return [0, null];
}

function parseMinus(output, tokens, current) {
  if (tokens[current].type === 'minus') {
    var possibleTokens = ['number', 'decimal', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var _parserFn9 = parserFn(output, tokens, current + 1),
            consumedTokens = _parserFn9[0],
            newOutput = _parserFn9[1];

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
          var precedentParsers = [parseDivide, parseMultiply];
          var preParsed = false;
          var preOutput;
          precedentParsers.forEach(function (preParseFn) {
            if (preParsed) {
              return;
            }

            if (tokens[current]) {
              var _preParseFn4 = preParseFn(newOutput, tokens, current);

              consumedTokens = _preParseFn4[0];
              preOutput = _preParseFn4[1];
              ct += consumedTokens;

              if (consumedTokens !== 0) {
                preParsed = true;
                newOutput = preOutput;
              }
            }
          });
        }

        if (newOutput) {
          if (output) {
            if (Object.prototype.toString.call(newOutput) === '[object Date]' && Object.prototype.toString.call(output) === '[object Date]') {
              if (!isNaN(output.getTime()) && !isNaN(newOutput.getTime())) {
                output -= newOutput;
                output = Math.ceil(output / (1000 * 60 * 60 * 24));
              } else {
                output = NaN;
              }
            } else if (Object.prototype.toString.call(newOutput) === '[object Date]' || Object.prototype.toString.call(output) === '[object Date]') {
              output = NaN;
            } else if (newOutput === '' || output === '') {
              output = NaN;
            } else {
              output -= newOutput;
            }
          } else {
            if (Object.prototype.toString.call(newOutput) === '[object Date]') {
              output = NaN;
            } else {
              output = -newOutput;
            }
          }
        } else {
          output = NaN;
        }
      });

      if (parsed) {
        if (output === '') {
          output = NaN;
        }

        return [ct, output];
      }
    }
  }

  return [0, null];
}

var parsers = [parseIf, parseParen, parseLiterals, parseDivide, parseMultiply, parsePlus, parseMinus, parseLessThan, parseGreaterThan, parseEqual, parseAnd, parseOr, parseNot, parseFunction];

function parser(leftOutput, tokens, pos) {
  var current = pos;
  var output = leftOutput;

  var _loop2 = function _loop2() {
    var parsed = false;
    parsers.forEach(function (parserFn) {
      if (parsed) {
        return;
      }

      var _parserFn10 = parserFn(output, tokens, current),
          consumedTokens = _parserFn10[0],
          newOutput = _parserFn10[1];

      if (consumedTokens !== 0) {
        parsed = true;
        current += consumedTokens;
      }

      if (newOutput != null) {
        output = newOutput;
      }
    });

    if (!parsed) {
      // throw new TypeError('syntax error');
      // tslint:disable-next-line: no-console
      console.log('syntax error'); // tslint:disable-next-line: no-console

      console.log(actualExpression);
      return {
        v: null
      };
    }
  };

  while (current < tokens.length) {
    var _ret = _loop2();

    if (typeof _ret === "object") return _ret.v;
  }

  return output;
}

function evaluater(expression, tmpUserInput, tmpFormItemProperty, tmpCurrentHierarchicalName) {
  if (!tmpUserInput) {
    tmpUserInput = {};
  }

  currentHierarchicalName = tmpCurrentHierarchicalName;
  actualExpression = expression;
  userInput = tmpUserInput;
  formItemProperty = tmpFormItemProperty;
  return parser(null, tokenizer(expression), 0);
}

/**
 * get the text from multilang obj based on language identifier,
 * @param {FieldElement} property - field multilang property or string
 * @return {string} - text value of the property based on language identifier, empty if not present
 */
function getTextFromProperty(property, languageIdentifier) {
  if (typeof property === 'string') {
    return property || '';
  }

  return property[languageIdentifier] || '';
}
/**
 * get the label text of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field label text
 */

function getFieldLabelText(fieldElement, languageIdentifier) {
  if (fieldElement.label) {
    return getTextFromProperty(fieldElement.label, languageIdentifier);
  }

  return '';
}
/**
 * get the label hint of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field label text
 */

function getHintLabelText(fieldElement, languageIdentifier) {
  if (fieldElement.hint) {
    return getTextFromProperty(fieldElement.hint, languageIdentifier);
  }

  return '';
}
/**
 * get the customised label text with previous input of the fieldElement
 * @param {any} evaluator - the getEvaluatedExpressionSelector Function
 * @param {string} labelText - the current Label Text
 * @param {string} fieldTreeName - the field tree name
 * @return {string | null} - field label text or null
 */

function customizeLabelsWithPreviousInputs(evaluator, labelText, fieldTreeName) {
  if (labelText === null || labelText === undefined) {
    return null;
  }

  var placesOfCustomizationsRequiredList = labelText.match(/\[(.*?)\]/g);

  if (placesOfCustomizationsRequiredList) {
    placesOfCustomizationsRequiredList.forEach(function (tmpPlace) {
      tmpPlace = tmpPlace.substring(1, tmpPlace.length - 1);
      var customizedName = evaluator(tmpPlace, fieldTreeName);
      var tmp = '[' + tmpPlace + ']';

      if (customizedName != null && customizedName !== undefined) {
        labelText = labelText.replace(tmp, customizedName);
      } else {
        labelText = labelText.replace(tmp, '');
      }
    });
  }

  return labelText;
}
/**
 * get the label text of the fieldElement constraint msg
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - constraint label text
 */

function getConstraintLabelText(fieldElement, languageIdentifier) {
  if (fieldElement.bind && fieldElement.bind['jr:constraintMsg']) {
    return getTextFromProperty(fieldElement.bind['jr:constraintMsg'], languageIdentifier);
  }

  return '';
}
/**
 * get the boolean result depending on the expression
 * @param {string} - required string
 * @returns {boolean} - true if required, otherwise false
 */

function requiredEvaluator(expression) {
  if (expression.toLowerCase() === 'yes' || expression === '1' || expression.toLowerCase() === 'true') {
    return true;
  } else {
    return false;
  }
}
/**
 * get the boolean result of fieldElement string
 * @param fieldElement
 * @return {boolean} - boolean value by calculating fieldElement required properties
 */


function isInputRequired(fieldElement) {
  var isRequired = false;

  if (fieldElement.bind) {
    if (fieldElement.bind.required) {
      if (typeof fieldElement.bind.required === 'string' && requiredEvaluator(fieldElement.bind.required)) {
        isRequired = true;
      }
    }
  }

  return isRequired;
}
/** evaluates whether a component be relevant or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the relevant expression
 * @returns {boolean} - true if relevant; otherwise, false;
 */

function shouldComponentBeRelevant(fieldElement, fieldParentTreeName, evaluateExpression) {
  if (fieldElement && fieldElement.bind && fieldElement.bind.relevant) {
    var isRelevant = evaluateExpression(fieldElement.bind.relevant, fieldParentTreeName + fieldElement.name);

    if (isRelevant) {
      return true;
    }

    return false;
  }

  return true;
}
/** evaluates whether a component be readonly or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the readonly expression
 * @returns {boolean} - true if readonly; otherwise, false;
 */

function shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, evaluateExpression) {
  if (fieldElement && fieldElement.bind && fieldElement.bind.readonly) {
    var isReadOnly = evaluateExpression(fieldElement.bind.readonly, fieldParentTreeName + fieldElement.name);

    if (isReadOnly) {
      return true;
    }

    return false;
  }

  return false;
}
/** evaluates whether the input violates constraint or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the expression
 * @returns {boolean} - true if violates; otherwise, false;
 */

function shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, evaluateExpression) {
  if (fieldElement && fieldElement.bind && fieldElement.bind.constraint) {
    var isConstraintViolated = !evaluateExpression(fieldElement.bind.constraint, fieldParentTreeName + fieldElement.name);

    if (isConstraintViolated) {
      return true;
    }

    return false;
  }

  return false;
}
/** returns the new user input object after assigning value of passed fieldTreeName
 * @param {any} userInputObj - the current user input object
 * @param {string} fieldTreeName - the field Tree name
 * @param {any} fieldValue - the value that needs to be assigned
 * @returns {any} - the new user input object after assignment
 */

function getModifiedUserInputObject(userInputObj, fieldTreeName, fieldValue) {
  var treeNodes = fieldTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  modifiedObj[parent + treeNodes[treeNodes.length - 1]] = fieldValue;
  return userInputObj;
}
/** Returns the filtered option list Array For Repeat property
 * @param {any} userInputObj - the current option list object
 * @param {string} fieldTreeName - the field Tree name
 * @param {any} repeatIndex - the repeat index to remove
 * @returns {any} - the new user filredred repear array after assignment
 */

function getModifiedOptionListForRepeat(userInputObj, fieldTreeName, repeatIndex) {
  var filteredRepeatArray = [];
  var optionListobj = userInputObj;
  Object.entries(optionListobj).forEach(function (key) {
    var keyNameOptionListobj = key[0];
    var keyValueOptionListobj = key[1];

    if (keyNameOptionListobj === fieldTreeName) {
      var repeatIndexString = String(repeatIndex);
      Object.entries(keyValueOptionListobj).map(function (keyRepeat) {
        var keyNameRepeatObject = keyRepeat[0];
        var keyValueRepeatValue = keyRepeat[1];

        if (keyNameRepeatObject !== repeatIndexString) {
          filteredRepeatArray.push(keyValueRepeatValue);
        }
      });
    }
  });
  return filteredRepeatArray;
}
/** returns the value from the user input object
 * @param {any} userInputObj - the user input object
 * @param {string} fieldTreeName - the field Tree name
 * @returns {any} - the value, present in user input object, of the fieldTreeName
 */

function getValueFromUserInputObj(userInputObj, fieldTreeName) {
  var treeNodes = fieldTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  return modifiedObj[parent + treeNodes[treeNodes.length - 1]];
}
/** evaluates whether the component is minimal or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @returns {boolean} - true if minimal; otherwise, false;
 */

function shouldComponentBeMinimal(fieldElement) {
  var isMinimal = false;

  if (fieldElement.control && fieldElement.control.appearance) {
    fieldElement.control.appearance.toString().includes('minimal') ? isMinimal = true : isMinimal = false;
  }

  return isMinimal;
}
/** returns the new user input object after emptying the desired grouped values
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - the new user input object after emptying the grouped values
 */

function emptyGroupedValues(userInputObj, groupTreeName) {
  var treeNodes = groupTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  Object.keys(modifiedObj).forEach(function (objKey) {
    if (objKey.startsWith(parent + treeNodes[treeNodes.length - 1])) {
      modifiedObj[objKey] = null;
    }
  });
  return userInputObj;
}
/** returns whether the grouped values are empty or not
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - true if empty; otherwise, false
 */

function checkGroupedValuesForEmpty(userInputObj, groupTreeName) {
  var treeNodes = groupTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  var isEmpty = true;
  Object.keys(modifiedObj).forEach(function (objKey) {
    if (objKey.startsWith(parent + treeNodes[treeNodes.length - 1])) {
      if (modifiedObj[objKey] !== null && modifiedObj[objKey] !== undefined && isEmpty) {
        isEmpty = false;
      }
    }
  });
  return isEmpty;
}

/** FIELD_VALUE_ASSIGNED action type */

var FIELD_VALUE_ASSIGNED = 'odk/reducer/form/FIELD_VALUE_ASSIGNED';
/** OPTION_LIST_ASSIGNED action type */

var OPTION_LIST_ASSIGNED = 'odk/reducer/form/OPTION_LIST_ASSIGNED';
/** REMOVE_FROM_OPTION_LIST action type */

var REMOVE_FROM_OPTION_LIST_REPEAT = 'odk/reducer/form/REMOVE_FROM_OPTION_LIST_REPEAT';
/** RESET_STORE action type */

var RESET_STORE = 'odk/reducer/form/RESET_STORE';
/** ADD_ERROR_INPUT_ID action type */

var ADD_ERROR_INPUT_ID = 'odk/reducer/form/ADD_ERROR_INPUT_ID';
/** REMOVE_ERROR_INPUT_ID action type */

var REMOVE_ERROR_INPUT_ID = 'odk/reducer/form/REMOVE_ERROR_INPUT_ID';
/** EMPTY_GROUP_FIELDS */

var EMPTY_GROUP_FIELDS = 'odk/reducer/form/EMPTY_GROUP_FIELDS';
/** REMOVE_GROUP_FIELDS_FROM_ERRORS */

var REMOVE_GROUP_FIELDS_FROM_ERRORS = 'odk/reducer/form/REMOVE_GROUP_FIELDS_FROM_ERRORS';
var SET_USER_INPUT_OBJ = 'odk/reducer/form/SET_USER_INPUT_OBJ';
/** Assigns the value to the proper field name
 * @param {string} fieldTreeName - the extended field name
 * @param {any} fieldValue - the value that will be assigned
 * @return {AssignFieldValueAction} - an action to assign value to a field in the redux store
 */

var assignFieldValueAction = function assignFieldValueAction(fieldTreeName, fieldValue) {
  return {
    fieldTreeName: fieldTreeName,
    fieldValue: fieldValue,
    type: FIELD_VALUE_ASSIGNED
  };
};
/** Assigns option list to the proper field name
 * @param {string} fieldTreeName - the extended field name
 * @param {any} fieldValue - the option list that will be assigned
 * @return {AssignOptionListAction} - an action to assign option List to a field in the redux store
 */

var assignOptionListAction = function assignOptionListAction(fieldTreeName, optionList) {
  return {
    fieldTreeName: fieldTreeName,
    optionList: optionList,
    type: OPTION_LIST_ASSIGNED
  };
};
/** Remove option list from Redux Store
 * @param fieldTreeName - the field tree name
 * @returns {RemoveFromOptionList} - an action to remove input id for errors
 */

var RemoveFromOptionList = function RemoveFromOptionList(fieldTreeName, repeatIndex) {
  return {
    fieldTreeName: fieldTreeName,
    repeatIndex: repeatIndex,
    type: REMOVE_FROM_OPTION_LIST_REPEAT
  };
};
/** add the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {AddErrorInputId} - an action to add input id for errors
 */

var addErrorInputId = function addErrorInputId(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: ADD_ERROR_INPUT_ID
  };
};
/** remove the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {RemoveErrorInputId} - an action to remove input id for errors
 */

var removeErrorInputId = function removeErrorInputId(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: REMOVE_ERROR_INPUT_ID
  };
};
/** empties the values of the fields of the group
 * @param fieldTreeName - the group field tree name
 * @returns {RemoveErrorInputId} - an action to empty the group field values
 */

var emptyGroupFields = function emptyGroupFields(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: EMPTY_GROUP_FIELDS
  };
};
/** removes the group field names from store errors obj
 * @param {string} fieldTreeName - the group field tree name
 * @returns {RemoveGroupFieldsFromErrors} - an action to remove group field names from errors
 */

var removeGroupFieldsFromErrors = function removeGroupFieldsFromErrors(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: REMOVE_GROUP_FIELDS_FROM_ERRORS
  };
};
/** sets the user input object to redux store
 * @param {any} userInputObj - the user input obj
 * @returns {SetUserInputObj} - an action to set user input to redux store
 */

var setUserInputObj = function setUserInputObj(userInputObj) {
  return {
    type: SET_USER_INPUT_OBJ,
    userInputObj: userInputObj
  };
};
/** initial form state */

var initialState =
/*#__PURE__*/
SeamlessImmutable({
  errors: [],
  optionList: {},
  userInput: {}
});
/** the form reducer function */

function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case FIELD_VALUE_ASSIGNED:
      var modifiedUserInputObj = getModifiedUserInputObject(state.getIn(['userInput']).asMutable({
        deep: true
      }), action.fieldTreeName, action.fieldValue);
      var stateM = state.asMutable({
        deep: true
      });
      return SeamlessImmutable(_extends({}, stateM, {
        userInput: modifiedUserInputObj
      }));

    case OPTION_LIST_ASSIGNED:
      var modifiedUserInputObjList = getModifiedUserInputObject(state.getIn(['optionList']).asMutable({
        deep: true
      }), action.fieldTreeName, action.optionList != null ? _extends({}, action.optionList) : null);
      var newState = state.asMutable({
        deep: true
      });
      return SeamlessImmutable(_extends({}, newState, {
        optionList: modifiedUserInputObjList
      }));

    case REMOVE_FROM_OPTION_LIST_REPEAT:
      var filteredRepeatArray = [];

      if (state.getIn(['optionList']).asMutable({
        deep: true
      }).hasOwnProperty(action.fieldTreeName)) {
        filteredRepeatArray = [].concat(getModifiedOptionListForRepeat(state.getIn(['optionList']).asMutable({
          deep: true
        }), action.fieldTreeName, action.repeatIndex));
        var modifiedOptionListRepeat = getModifiedUserInputObject(state.getIn(['optionList']).asMutable({
          deep: true
        }), action.fieldTreeName, _extends({}, filteredRepeatArray));
        var newStateForRepeat = state.asMutable({
          deep: true
        });
        return SeamlessImmutable(_extends({}, newStateForRepeat, {
          optionList: modifiedOptionListRepeat
        }));
      }

      return state;

    case RESET_STORE:
      return initialState;

    case ADD_ERROR_INPUT_ID:
      if (!state.errors.includes(action.fieldTreeName)) {
        return state.updateIn(['errors'], function (arr) {
          return arr.concat([action.fieldTreeName]);
        });
      }

      return state;

    case REMOVE_ERROR_INPUT_ID:
      if (state.errors.includes(action.fieldTreeName)) {
        return state.updateIn(['errors'], function (arr) {
          return arr.filter(function (elm) {
            return elm !== action.fieldTreeName;
          });
        });
      }

      return state;

    case EMPTY_GROUP_FIELDS:
      var mUserInputObj = emptyGroupedValues(state.getIn(['userInput']).asMutable({
        deep: true
      }), action.fieldTreeName);
      var mState = state.asMutable({
        deep: true
      });
      return SeamlessImmutable(_extends({}, mState, {
        userInput: mUserInputObj
      }));

    case REMOVE_GROUP_FIELDS_FROM_ERRORS:
      return state.updateIn(['errors'], function (arr) {
        return arr.filter(function (elm) {
          return !elm.startsWith(action.fieldTreeName);
        });
      });

    case SET_USER_INPUT_OBJ:
      return SeamlessImmutable(_extends({}, state, {
        userInput: action.userInputObj
      }));

    default:
      return state;
  }
} // selectors

/** get the value by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} value if the element name is found else null
 */

function getFieldValue(state, fieldTreeName) {
  return getValueFromUserInputObj(state.getIn(['userInput']).asMutable({
    deep: true
  }), fieldTreeName);
}
/** get option list by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} value if the element name is found else null
 */

function getOptionList(state, fieldTreeName) {
  return getValueFromUserInputObj(state.getIn(['optionList']).asMutable({
    deep: true
  }), fieldTreeName);
}
/** get the value of the evaluated expression
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */

function getEvaluatedExpression(state, expression, fieldTreeName) {
  return evaluater(expression, state.userInput, null, fieldTreeName);
}
/** get the value of the evaluated expression for Select One and Select All
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {any} options - the options that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */

function getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName) {
  return evaluater(expression, state.userInput, options, fieldTreeName);
}
/** check if the field element is present in the store
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {boolean} true if present; otherwise, false
 */

function isPresentInError(state, fieldTreeName) {
  return state.errors.includes(fieldTreeName);
}
/** check if the field elements under group are empty or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if empty; otherwise, false
 */

function isGroupFieldsEmpty(state, fieldTreeName) {
  return checkGroupedValuesForEmpty(state.userInput, fieldTreeName);
}
/** check if the field elements under group are present in errors or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if present; otherwise, false
 */

function isErrorsIncludeGroupFields(state, fieldTreeName) {
  var isPresent = false;
  state.errors.forEach(function (fTName) {
    if (fTName.startsWith(fieldTreeName) && !isPresent) {
      isPresent = true;
    }
  });
  return isPresent;
}
/** check if the errors array in store empty or not
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} true if empty; otherwise, false
 */

function isErrorsArrayEmpty(state) {
  return state.errors && state.errors.length ? false : true;
}
/** get the userInput object from store
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} the current userInputObject
 */

function getUserInputFromStore(state) {
  return state.getIn(['userInput']).asMutable({
    deep: true
  });
}

var Group =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Group, _React$Component);

  function Group() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Group.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        csvList = _this$props.csvList,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage,
        isComponentRender = _this$props.isComponentRender;
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), fieldElement.children && React.createElement(GroupTypeEvaluator, {
        fieldElements: fieldElement.children,
        fieldParentTreeName: fieldParentTreeName + 'group/' + fieldElement.name + '/',
        defaultLanguage: defaultLanguage,
        csvList: csvList
      }));
    } else {
      if (this.props.isErrorsIncludeGroupFieldsSelector(fieldParentTreeName + 'group/' + fieldElement.name + '/')) {
        this.props.removeGroupFieldsFromErrorsActionCreator(fieldParentTreeName + 'group/' + fieldElement.name + '/');
      }

      if (!this.props.isGroupFieldsEmptySelector(fieldParentTreeName + fieldElement.name)) {
        this.props.emptyGroupFieldsActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return null;
    }
  };

  return Group;
}(React.Component);
/** Map props to state  */


var mapStateToProps = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isGroupFieldsEmptySelector = function isGroupFieldsEmptySelector(fieldTreeName) {
    return isGroupFieldsEmpty(state, fieldTreeName);
  };

  var isErrorsIncludeGroupFieldsSelector = function isErrorsIncludeGroupFieldsSelector(fieldTreeName) {
    return isErrorsIncludeGroupFields(state, fieldTreeName);
  };

  var result = {
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isErrorsIncludeGroupFieldsSelector: isErrorsIncludeGroupFieldsSelector,
    isGroupFieldsEmptySelector: isGroupFieldsEmptySelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps = {
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors
};
/** connect Group component to the redux store */

var ConnectedGroup =
/*#__PURE__*/
reactRedux.connect(mapStateToProps, mapDispatchToProps)(Group);

var SingleRepeat =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SingleRepeat, _React$Component);

  function SingleRepeat() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this; // tslint:disable-next-line: variable-name

    _this.handleChange = function (_event) {
      var _this$props = _this.props,
          repeatIndex = _this$props.repeatIndex,
          fieldValue = _this$props.fieldValue,
          assignmentHandler = _this$props.assignmentHandler,
          fieldElement = _this$props.fieldElement,
          fieldParentTreeName = _this$props.fieldParentTreeName,
          removeHandler = _this$props.removeHandler,
          removeOptionHandler = _this$props.removeOptionHandler;
      var newFieldValue = [].concat(fieldValue);
      newFieldValue = newFieldValue.filter( // tslint:disable-next-line: variable-name
      function (_elem, index) {
        return index !== repeatIndex;
      });
      assignmentHandler(fieldParentTreeName + fieldElement.name, newFieldValue);
      removeHandler(fieldParentTreeName + 'repeat/' + fieldElement.name + '/');
      removeOptionHandler(fieldParentTreeName + fieldElement.name, repeatIndex);
    };

    return _this;
  }

  var _proto = SingleRepeat.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        csvList = _this$props2.csvList,
        defaultLanguage = _this$props2.defaultLanguage,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        repeatIndex = _this$props2.repeatIndex;
    return React__default.createElement("div", null, React__default.createElement("div", null, React__default.createElement("span", {
      onClick: this.handleChange
    }, React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: "minus-circle"
    }))), fieldElement.children && React__default.createElement(GroupTypeEvaluator, {
      fieldElements: fieldElement.children,
      fieldParentTreeName: fieldParentTreeName + 'repeat/' + fieldElement.name + '/' + repeatIndex + '/',
      defaultLanguage: defaultLanguage,
      csvList: csvList
    }));
  };

  return SingleRepeat;
}(React__default.Component);

var Repeat =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Repeat, _React$Component);

  function Repeat() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this; // tslint:disable-next-line: variable-name

    _this.addAnotherRepeat = function (_event) {
      var _this$props = _this.props,
          fieldValue = _this$props.fieldValue,
          fieldParentTreeName = _this$props.fieldParentTreeName,
          fieldElement = _this$props.fieldElement;
      var newFieldValue = [].concat(fieldValue);
      newFieldValue.push({});

      _this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, newFieldValue);
    };

    return _this;
  }

  var _proto = Repeat.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        csvList = _this$props2.csvList,
        fieldValue = _this$props2.fieldValue,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        defaultLanguage = _this$props2.defaultLanguage,
        isComponentRender = _this$props2.isComponentRender,
        assignFieldValueActionCreator = _this$props2.assignFieldValueActionCreator,
        removeGroupFieldsFromErrorsActionCreator = _this$props2.removeGroupFieldsFromErrorsActionCreator,
        removeOptionListFromActionCreator = _this$props2.removeOptionListFromActionCreator;
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (!fieldValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, [{}]);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), fieldValue && // tslint:disable-next-line: variable-name
      fieldValue.map(function (_elm, index) {
        return React.createElement("div", {
          className: "repeat-fields-body",
          key: 'repeat' + index
        }, React.createElement(SingleRepeat, {
          defaultLanguage: defaultLanguage,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          fieldValue: fieldValue,
          repeatIndex: index,
          assignmentHandler: assignFieldValueActionCreator,
          removeHandler: removeGroupFieldsFromErrorsActionCreator,
          removeOptionHandler: removeOptionListFromActionCreator,
          csvList: csvList
        }));
      }), React.createElement("div", null, React.createElement("span", {
        onClick: this.addAnotherRepeat
      }, React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: "plus-circle"
      }))));
    } else {
      if (this.props.isErrorsIncludeGroupFieldsSelector(fieldParentTreeName + 'repeat/' + fieldElement.name + '/')) {
        this.props.removeGroupFieldsFromErrorsActionCreator(fieldParentTreeName + 'repeat/' + fieldElement.name + '/');
      }

      if (fieldValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);
      }

      return null;
    }
  };

  return Repeat;
}(React.Component);
/** Map props to state  */


var mapStateToProps$1 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isGroupFieldsEmptySelector = function isGroupFieldsEmptySelector(fieldTreeName) {
    return isGroupFieldsEmpty(state, fieldTreeName);
  };

  var isErrorsIncludeGroupFieldsSelector = function isErrorsIncludeGroupFieldsSelector(fieldTreeName) {
    return isErrorsIncludeGroupFields(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isErrorsIncludeGroupFieldsSelector: isErrorsIncludeGroupFieldsSelector,
    isGroupFieldsEmptySelector: isGroupFieldsEmptySelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$1 = {
  assignFieldValueActionCreator: assignFieldValueAction,
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors,
  removeOptionListFromActionCreator: RemoveFromOptionList
};
/** connect Group component to the redux store */

var ConnectedRepeat =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$1, mapDispatchToProps$1)(Repeat);

var Calculate =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Calculate, _React$Component);

  function Calculate() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Calculate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var calculatedValue = '';

      if (fieldElement.bind && fieldElement.bind.calculate) {
        calculatedValue = this.props.getEvaluatedExpressionSelector(fieldElement.bind.calculate, fieldParentTreeName + fieldElement.name);
      }

      if (calculatedValue !== fieldValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, calculatedValue);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Input, {
        type: "hidden",
        name: fieldElement.name,
        value: calculatedValue || '',
        readOnly: isReadonly
      }));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Calculate;
}(React.Component);
/** Map props to state  */


var mapStateToProps$2 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$2 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Calculate component to the redux store */

var ConnectedCalculate =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$2, mapDispatchToProps$2)(Calculate);

var KbDate =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(KbDate, _React$Component);

  function KbDate() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? new Date(event.currentTarget.value) : null);
    };

    return _this;
  }

  var _proto = KbDate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var defaultValue = '';

      if (fieldValue && fieldValue !== '') {
        var modifiedDate = new Date(fieldValue);
        defaultValue = modifiedDate.toISOString().slice(0, 10);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "date",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: defaultValue,
        readOnly: isReadonly
      }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return KbDate;
}(React.Component);
/** Map props to state  */


var mapStateToProps$3 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$3 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect KbDate component to the redux store */

var ConnectedDate =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$3, mapDispatchToProps$3)(KbDate);

var DateTime =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DateTime, _React$Component);

  function DateTime() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.handleChange = function (name) {
      return function (value) {
        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + name, value !== '' ? new Date(value) : null);
      };
    };

    return _this;
  }

  var _proto = DateTime.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement("br", null), React.createElement(DatePicker, {
        name: fieldElement.name,
        selected: fieldValue ? new Date(fieldValue) : null,
        onChange: this.handleChange(fieldElement.name),
        showTimeSelect: true,
        timeFormat: "h:m aa",
        timeIntervals: 15,
        timeCaption: "time",
        dateFormat: "MM/dd/yyyy h:mm aa",
        placeholderText: "mm/dd/yyyy h:m aa",
        className: "form-control",
        readOnly: isReadonly
      }), React.createElement("br", null), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return DateTime;
}(React.Component);
/** Map props to state  */


var mapStateToProps$4 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$4 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Date Time component to the redux store */

var ConnectedDateTime =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$4, mapDispatchToProps$4)(DateTime);

var Decimal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Decimal, _React$Component);

  function Decimal() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? parseFloat(event.currentTarget.value) : null);
    };

    return _this;
  }

  var _proto = Decimal.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "number",
        step: "any",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: fieldValue || fieldValue === 0 ? fieldValue : '',
        readOnly: isReadonly
      }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Decimal;
}(React.Component);
/** Map props to state  */


var mapStateToProps$5 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$5 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Decimal component to the redux store */

var ConnectedDecimal =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$5, mapDispatchToProps$5)(Decimal);

var Integer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Integer, _React$Component);

  function Integer() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? parseInt(event.currentTarget.value, 10) : null);
    };

    return _this;
  }

  var _proto = Integer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "number",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: fieldValue || fieldValue === 0 ? fieldValue : '',
        readOnly: isReadonly
      }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Integer;
}(React.Component);
/** Map props to state  */


var mapStateToProps$6 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$6 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Integer component to the redux store */

var ConnectedInteger =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$6, mapDispatchToProps$6)(Integer);

var Note =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Note, _React$Component);

  function Note() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Note.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldElement.name, fieldElement["default"]);
      }

      var fieldHint = getHintLabelText(fieldElement, defaultLanguage);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), fieldElement.hint && React.createElement(reactstrap.FormText, null, fieldHint), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Note;
}(React.Component);
/** Map props to state  */


var mapStateToProps$7 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name) || '',
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$7 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Note component to the redux store */

var ConnectedNote =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$7, mapDispatchToProps$7)(Note);

var Photo =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Photo, _React$Component);

  function Photo() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(event.currentTarget.name, event.currentTarget.value);
    };

    return _this;
  }

  var _proto = Photo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldValue = _this$props.fieldValue,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
      type: "file",
      accept: "image/*",
      name: fieldElement.name,
      onChange: this.onChangeHandler,
      value: fieldValue
    }), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG));
  };

  return Photo;
}(React.Component);
/** Map props to state  */


var mapStateToProps$8 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement;
  var result = {
    fieldValue: getFieldValue(state, fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$8 = {
  assignFieldValueActionCreator: assignFieldValueAction
};
/** connect Photo component to the redux store */

var ConnectedPhoto =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$8, mapDispatchToProps$8)(Photo);

var SelectAllDropDown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectAllDropDown, _React$Component);

  function SelectAllDropDown() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** Sets the option list to the Redux Store
     * @param {any} optionObject - the option object to be processed
     */

    _this.setOptionList = function (optionObject) {
      var tempObjArray = [];
      optionObject.map(function (elem) {
        var elemObj = {};
        var name = 'name';
        var label = 'label';
        elemObj[name] = elem.name;
        elemObj[label] = elem.label;
        tempObjArray.push(elemObj);
      });

      if (!_.isEqual(_this.props.optionList, _extends({}, tempObjArray))) {
        _this.props.assignOptionListActionCreator(_this.props.fieldParentTreeName + _this.props.fieldElement.name, tempObjArray);
      }
    };
    /** sets the value of field element in store
     * @param {any} values - the onchange input values
     * @param {any} fieldName - the input name
     */


    _this.onChangeHandler = function (fieldName) {
      return function (values) {
        var selectedValues = [];
        var i = 0;

        if (values) {
          values.map(function () {
            if (!selectedValues.includes(values[i].value)) {
              selectedValues.push(values[i].value);
            }

            i++;
          });

          _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, selectedValues);
        } else {
          _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, null);
        }
      };
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique dropdown options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];
      var finalRes = [];

      if (csvName) {
        var modifiedName = csvName.replace(/'/g, '');
        options = [].concat(_this.props.csvList[modifiedName]);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            var j = 0;
            filterResult.map(function () {
              options.map(function (option) {
                if (option[nameOfKey] === filterResult[j]) {
                  finalRes.push(option);
                }
              });
              j = j + 1;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }

        options = [].concat(Array.from(new Set(finalRes)));
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectAllDropDown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === []);
    var isConstraintViolated = fieldValue && fieldValue !== [] && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];
      var options = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        var updatedFieldElement = fieldElement.control.appearance.toString().replace('minimal', '');

        if (/search\([^\)|(]+\)/i.test(updatedFieldElement)) {
          var processedStringArray = updatedFieldElement.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
        this.setOptionList(resultOptions);
      } else {
        if (fieldElement.children) {
          fieldElement.children.map(function (elem) {
            var childrenLabel = getFieldLabelText(elem, defaultLanguage);
            options.push({
              label: childrenLabel,
              value: elem.name
            });
          });
          this.setOptionList(fieldElement.children);
        }
      }

      var tmpValueArray = [];
      var isNotIncluded = false;

      if (fieldValue && fieldValue.length > 0) {
        var optionsValueArray = [];
        options.map(function (elem) {
          if (elem.value) {
            optionsValueArray.push(elem.value);
          }
        });

        for (var _iterator = fieldValue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var row = _ref;

          if (!optionsValueArray.includes(row)) {
            isNotIncluded = true;
          } else {
            tmpValueArray.push(row);
          }
        }
      }

      if (fieldValue && fieldValue.length > 0 && isNotIncluded) {
        this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, tmpValueArray || []);
      }

      var selectedValues = [];

      if (fieldValue && fieldValue.length > 0) {
        options.map(function (elem) {
          for (var _iterator2 = fieldValue, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var _row = _ref2;

            if (elem.value === _row) {
              selectedValues.push(elem);
            }
          }
        });
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(Select, {
        isMulti: true,
        name: fieldElement.name,
        options: options,
        onChange: this.onChangeHandler(fieldElement.name),
        value: selectedValues || []
      }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      if (this.props.optionList != null) {
        this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, null);
      }

      return null;
    }
  };

  return SelectAllDropDown;
}(React.Component);
/** Map props to state  */


var mapStateToProps$9 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector,
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$9 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne Dropdown component to the redux store */

var ConnectedSelectAllDropDown =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$9, mapDispatchToProps$9)(SelectAllDropDown);

var SelectAllRadio =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectAllRadio, _React$Component);

  function SelectAllRadio() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {any} event - the onchange event
     */

    _this.onChangeHandlerCheckBox = function (event) {
      var _this$props = _this.props,
          fieldValue = _this$props.fieldValue,
          fieldElement = _this$props.fieldElement,
          fieldParentTreeName = _this$props.fieldParentTreeName;
      var fieldName = fieldParentTreeName + fieldElement.name;

      if (event.target.checked) {
        if (fieldValue && fieldValue.length > 0 && !fieldValue.includes(event.target.value)) {
          _this.props.assignFieldValueActionCreator(fieldName, [].concat(fieldValue, [event.target.value]));
        } else {
          _this.props.assignFieldValueActionCreator(fieldName, [event.target.value]);
        }
      } else {
        if (fieldValue && fieldValue.length > 0 && fieldValue.includes(event.target.value)) {
          var newValue = fieldValue.filter(function (elm) {
            return elm !== event.target.value;
          });

          _this.props.assignFieldValueActionCreator(fieldName, newValue.length ? newValue : null);
        }
      }
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique dropdown options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];
      var finalRes = [];

      if (csvName) {
        var modifiedName = csvName.replace(/'/g, '');
        options = [].concat(_this.props.csvList[modifiedName]);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            var j = 0;
            filterResult.map(function () {
              options.map(function (option) {
                if (option[nameOfKey] === filterResult[j]) {
                  finalRes.push(option);
                }
              });
              j = j + 1;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }

        options = [].concat(Array.from(new Set(finalRes)));
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectAllRadio.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        fieldValue = _this$props2.fieldValue,
        isComponentRender = _this$props2.isComponentRender,
        getEvaluatedExpressionSelector = _this$props2.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props2.isPresentInErrorSelector,
        defaultLanguage = _this$props2.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === []);
    var isConstraintViolated = fieldValue && fieldValue !== [] && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];
      var options = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        var updatedFieldElement = fieldElement.control.appearance.toString().replace('minimal', '');

        if (/search\([^\)|(]+\)/i.test(updatedFieldElement)) {
          var processedStringArray = updatedFieldElement.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
        var tmpValueArray = [];
        var isNotIncluded = false;

        if (fieldValue && fieldValue.length > 0) {
          var optionsValueArray = [];
          options.map(function (elem) {
            if (elem.value) {
              optionsValueArray.push(elem.value);
            }
          });

          for (var _iterator = fieldValue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var row = _ref;

            if (!optionsValueArray.includes(row)) {
              isNotIncluded = true;
            } else {
              tmpValueArray.push(row);
            }
          }
        }

        if (fieldValue && fieldValue.length > 0 && isNotIncluded) {
          this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, tmpValueArray || []);
        }

        var selectedValues = [];

        if (fieldValue && fieldValue.length > 0) {
          options.map(function (elem) {
            for (var _iterator2 = fieldValue, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
              var _ref2;

              if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
              } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
              }

              var _row = _ref2;

              if (elem.value === _row) {
                selectedValues.push(elem.value);
              }
            }
          });
        }

        if (!_.isEqual(this.props.optionList, _extends({}, resultOptions))) {
          this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, resultOptions);
        }

        return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), resultOptions.map(function (elem, index) {
          return React.createElement("div", {
            key: index,
            className: "col-md-12"
          }, React.createElement(reactstrap.Input, {
            key: fieldElement.name + '-' + index,
            type: "checkbox",
            name: fieldElement.name,
            value: elem.name || [],
            onChange: _this2.onChangeHandlerCheckBox,
            readOnly: isReadonly,
            checked: selectedValues.includes(elem.name)
          }), ' ', getFieldLabelText(elem, defaultLanguage));
        }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
      } else {
        if (fieldElement.children) {
          var tempObjArray = [];
          fieldElement.children.map(function (elem) {
            var elemObj = {};
            var name = 'name';
            var label = 'label';
            elemObj[name] = elem.name;
            elemObj[label] = elem.label;
            tempObjArray.push(elemObj);
          });

          if (!_.isEqual(this.props.optionList, _extends({}, tempObjArray))) {
            this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, tempObjArray);
          }

          return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), fieldElement.children.map(function (elem, index) {
            return React.createElement("div", {
              key: index,
              className: "col-md-12"
            }, React.createElement(reactstrap.Input, {
              key: fieldElement.name + '-' + index,
              type: "checkbox",
              name: fieldElement.name,
              value: elem.name || [],
              onChange: _this2.onChangeHandlerCheckBox,
              readOnly: isReadonly
            }), ' ', getFieldLabelText(elem, defaultLanguage));
          }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
        } else {
          return null;
        }
      }
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      if (this.props.optionList != null) {
        this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, null);
      }

      return null;
    }
  };

  return SelectAllRadio;
}(React.Component);
/** Map props to state  */


var mapStateToProps$a = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector,
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$a = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne Radio component to the redux store */

var ConnectedSelectAllRadio =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$a, mapDispatchToProps$a)(SelectAllRadio);

var SelectAll =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectAll, _React$Component);

  function SelectAll() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SelectAll.prototype;

  _proto.render = function render() {
    var fieldElement = this.props.fieldElement;

    if (shouldComponentBeMinimal(fieldElement)) {
      return React.createElement(ConnectedSelectAllDropDown, Object.assign({}, this.props));
    }

    return React.createElement(ConnectedSelectAllRadio, Object.assign({}, this.props));
  };

  return SelectAll;
}(React.Component);

var SelectOneDropDown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectOneDropDown, _React$Component);

  function SelectOneDropDown() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** Sets the option list to the Redux Store
     * @param {any} optionObject - the option object to be processed
     */

    _this.setOptionList = function (optionObject) {
      var tempObjArray = [];
      optionObject.map(function (elem) {
        var elemObj = {};
        var name = 'name';
        var label = 'label';
        elemObj[name] = elem.name;
        elemObj[label] = elem.label;
        tempObjArray.push(elemObj);
      });

      if (!_.isEqual(_this.props.optionList, _extends({}, tempObjArray))) {
        _this.props.assignOptionListActionCreator(_this.props.fieldParentTreeName + _this.props.fieldElement.name, tempObjArray);
      }
    };
    /** sets the value of field element in store
     * @param {any} event - the onchange input event
     * @param {any} fieldName - the input name
     */


    _this.onChangeHandler = function (fieldName) {
      return function (event) {
        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, event.value || '');
      };
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique dropdown options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];

      if (csvName) {
        var modifiedName = csvName.replace(/'/g, '');
        options = [].concat(_this.props.csvList[modifiedName]);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            options = options.filter(function (option) {
              return option[nameOfKey] === filterResult;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectOneDropDown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];
      var options = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        var updatedFieldElement = fieldElement.control.appearance.toString().replace('minimal', '');

        if (/search\([^\)|(]+\)/i.test(updatedFieldElement)) {
          var processedStringArray = updatedFieldElement.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
        this.setOptionList(resultOptions);
      } else {
        if (fieldElement.children) {
          fieldElement.children.map(function (elem) {
            var childrenLabel = getFieldLabelText(elem, defaultLanguage);
            options.push({
              label: childrenLabel,
              value: elem.name
            });
          });
          this.setOptionList(fieldElement.children);
        }
      }

      if (fieldValue) {
        var optionsValueArray = [];
        options.map(function (elem) {
          if (elem.value) {
            optionsValueArray.push(elem.value);
          }
        });

        if (!optionsValueArray.includes(fieldValue)) {
          this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, '');
        }
      }

      var selectedValue;
      options.map(function (elem) {
        if (elem.value === fieldValue) {
          selectedValue = elem;
        }
      });
      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(Select, {
        multi: false,
        name: fieldElement.name,
        options: options,
        value: selectedValue || '',
        onChange: this.onChangeHandler(fieldElement.name)
      }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return SelectOneDropDown;
}(React.Component);
/** Map props to state  */


var mapStateToProps$b = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector,
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$b = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne component to the redux store */

var ConnectedSelectOneDropDown =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$b, mapDispatchToProps$b)(SelectOneDropDown);

var SelectOneRadio =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectOneRadio, _React$Component);

  function SelectOneRadio() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of Radio Button field element in store
     * @param {any} event - the onchange input event
     * @param {any} fieldName - the input name
     */

    _this.onChangeHandlerRadio = function (fieldName) {
      return function (event) {
        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, event.target.value || '');
      };
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique radio button options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];

      if (csvName) {
        var modifiedName = csvName.replace(/'/g, '');
        options = [].concat(_this.props.csvList[modifiedName]);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            options = options.filter(function (option) {
              return option[nameOfKey] === filterResult;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectOneRadio.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        if (/search\([^\)|(]+\)/i.test(fieldElement.control.appearance)) {
          var processedStringArray = fieldElement.control.appearance.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        if (fieldValue) {
          var optionsValueArray = [];
          resultOptions.map(function (elem) {
            if (elem.name) {
              optionsValueArray.push(elem.name);
            }
          });

          if (!optionsValueArray.includes(fieldValue)) {
            this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, '');
          }
        }

        if (!_.isEqual(this.props.optionList, _extends({}, resultOptions))) {
          this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, resultOptions);
        }

        return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), resultOptions.map(function (elem, index) {
          return React.createElement("div", {
            key: index,
            className: "col-md-12"
          }, React.createElement(reactstrap.Input, {
            key: fieldElement.name + '-' + index,
            type: "radio",
            name: fieldElement.name,
            value: elem.name,
            onChange: _this2.onChangeHandlerRadio(fieldElement.name),
            readOnly: isReadonly,
            checked: elem.name === fieldValue
          }), ' ', getFieldLabelText(elem, defaultLanguage));
        }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
      } else {
        if (fieldElement.children) {
          var tempObjArray = [];
          fieldElement.children.map(function (elem) {
            var elemObj = {};
            var name = 'name';
            var label = 'label';
            elemObj[name] = elem.name;
            elemObj[label] = elem.label;
            tempObjArray.push(elemObj);
          });

          if (!_.isEqual(this.props.optionList, _extends({}, tempObjArray))) {
            this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, tempObjArray);
          }

          return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), fieldElement.children.map(function (elem, index) {
            return React.createElement("div", {
              key: index,
              className: "col-md-12"
            }, React.createElement(reactstrap.Input, {
              key: fieldElement.name + '-' + index,
              type: "radio",
              name: fieldElement.name,
              value: elem.name,
              onChange: _this2.onChangeHandlerRadio(fieldElement.name),
              readOnly: isReadonly
            }), ' ', getFieldLabelText(elem, defaultLanguage));
          }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
        } else {
          return null;
        }
      }
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return SelectOneRadio;
}(React.Component);
/** Map props to state  */


var mapStateToProps$c = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector,
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$c = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne Radio component to the redux store */

var ConnectedSelectOneRadio =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$c, mapDispatchToProps$c)(SelectOneRadio);

var SelectOne =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectOne, _React$Component);

  function SelectOne() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SelectOne.prototype;

  _proto.render = function render() {
    var fieldElement = this.props.fieldElement;

    if (shouldComponentBeMinimal(fieldElement)) {
      return React.createElement(ConnectedSelectOneDropDown, Object.assign({}, this.props));
    }

    return React.createElement(ConnectedSelectOneRadio, Object.assign({}, this.props));
  };

  return SelectOne;
}(React.Component);

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Text, _React$Component);

  function Text() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value || '');
    };

    return _this;
  }

  var _proto = Text.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      if (fieldElement.bind && fieldElement.bind.calculate) {
        var calculatedValue = '';
        calculatedValue = this.props.getEvaluatedExpressionSelector(fieldElement.bind.calculate, fieldParentTreeName + fieldElement.name);

        if (calculatedValue !== fieldValue) {
          this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, calculatedValue);
        }

        return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
          type: "text",
          name: fieldElement.name,
          onChange: this.onChangeHandler,
          value: calculatedValue || '',
          readOnly: isReadonly
        }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), React.createElement(reactstrap.Label, null, hintLabel), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
      } else {
        return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
          type: "text",
          name: fieldElement.name,
          onChange: this.onChangeHandler,
          value: fieldValue || '',
          readOnly: isReadonly
        }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
      }
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Text;
}(React.Component);
/** Map props to state  */


var mapStateToProps$d = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$d = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Text component to the redux store */

var ConnectedText =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$d, mapDispatchToProps$d)(Text);

var KbTime =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(KbTime, _React$Component);

  function KbTime() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? event.currentTarget.value : null);
    };

    return _this;
  }

  var _proto = KbTime.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name);
    var hintLabel = getHintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, modifiedFieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "time",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: fieldValue || '',
        readOnly: isReadonly
      }), fieldElement.hint && React.createElement(reactstrap.Label, null, hintLabel), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, modifiedConstraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return KbTime;
}(React.Component);
/** Map props to state  */


var mapStateToProps$e = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$e = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect KbTime component to the redux store */

var ConnectedTime =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$e, mapDispatchToProps$e)(KbTime);

var BaseTypeEvaluator =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BaseTypeEvaluator, _React$Component);

  function BaseTypeEvaluator() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BaseTypeEvaluator.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        csvList = _this$props.csvList,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage;
    return this.typeEvaluator(csvList, fieldElement, fieldParentTreeName, defaultLanguage);
  }
  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} fieldParentTreeName - the field parent hierchical name
   * @return {React.ReactElement} - jsx base components
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(csvList, fieldElement, fieldParentTreeName, defaultLanguage) {
    switch (fieldElement.type) {
      case TEXT_FIELD_TYPE:
        return React.createElement(ConnectedText, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DATE_FIELD_TYPE:
        return React.createElement(ConnectedDate, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case TIME_FIELD_TYPE:
        return React.createElement(ConnectedTime, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DATE_TIME_FIELD_TYPE:
        return React.createElement(ConnectedDateTime, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case INTEGER_FIELD_TYPE:
        return React.createElement(ConnectedInteger, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DECIMAL_FIELD_TYPE:
        return React.createElement(ConnectedDecimal, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case NOTE_FIELD_TYPE:
        return React.createElement(ConnectedNote, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case CALCULATE_FIELD_TYPE:
        return React.createElement(ConnectedCalculate, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case SELECT_ONE_FIELD_TYPE:
        return React.createElement(SelectOne, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        });

      case SELECT_ALL_FIELD_TYPE:
        return React.createElement(SelectAll, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        });

      case PHOTO_FIELD_TYPE:
        return React.createElement(ConnectedPhoto, {
          fieldElement: fieldElement,
          defaultLanguage: defaultLanguage
        });

      default:
        return React.createElement("div", null, "Other ", fieldElement.type, " ", fieldElement.name);
    }
  };

  return BaseTypeEvaluator;
}(React.Component);

var GroupTypeEvaluator =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(GroupTypeEvaluator, _React$Component);

  function GroupTypeEvaluator() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = GroupTypeEvaluator.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        csvList = _this$props.csvList,
        fieldElements = _this$props.fieldElements,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage;
    return React.createElement("div", null, fieldElements.map(function (fieldElement) {
      return React.createElement("div", {
        key: 'group_' + fieldElement.name
      }, _this.typeEvaluator(csvList, fieldElement, fieldParentTreeName, defaultLanguage));
    }));
  }
  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} - the field parent hierarchical name
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(csvList, fieldElement, fieldParentTreeName, defaultLanguage) {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return React.createElement("div", null, React.createElement(ConnectedGroup, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        }));

      case REPEAT_FIELD_TYPE:
        return React.createElement("div", null, React.createElement(ConnectedRepeat, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        }));

      default:
        return React.createElement(BaseTypeEvaluator, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        });
    }
  };

  return GroupTypeEvaluator;
}(React.Component);

fontawesomeSvgCore.library.add(freeSolidSvgIcons.faPlusCircle, freeSolidSvgIcons.faMinusCircle);

var App =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(App, _React$Component);

  function App() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this; // tslint:disable-next-line: variable-name

    _this.handleClick = function (_event) {
      var _this$props = _this.props,
          handleSubmit = _this$props.handleSubmit,
          isNoErrors = _this$props.isNoErrors,
          userInputObj = _this$props.userInputObj;
      handleSubmit('submitted');

      if (isNoErrors) {
        handleSubmit(userInputObj);
      } else {
        handleSubmit('Field Violated');
      }
    };

    return _this;
  }

  var _proto = App.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props2 = this.props,
        userInputJson = _this$props2.userInputJson,
        userInputObj = _this$props2.userInputObj;

    if (userInputJson && userInputJson !== userInputObj) {
      this.props.setUserInputAction(userInputJson);
    }
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        csvList = _this$props3.csvList,
        defaultLanguage = _this$props3.defaultLanguage,
        fieldElements = _this$props3.fieldElements,
        formTitle = _this$props3.formTitle;
    var props = {
      csvList: csvList,
      defaultLanguage: defaultLanguage,
      fieldElements: fieldElements,
      fieldParentTreeName: ''
    };
    return React.createElement(reactstrap.Container, {
      className: "form-container"
    }, React.createElement(reactstrap.Row, {
      className: "form-title"
    }, React.createElement(reactstrap.Col, null, React.createElement("h3", null, formTitle))), React.createElement(GroupTypeEvaluator, Object.assign({}, props)), React.createElement(reactstrap.Row, {
      className: "welcome-box"
    }, React.createElement(reactstrap.Col, null, React.createElement(reactstrap.Button, {
      className: "btn btn-success",
      onClick: this.handleClick
    }, "Submit"))));
  };

  return App;
}(React.Component);
/** Map props to state  */


var mapStateToProps$f = function mapStateToProps(state) {
  var result = {
    isNoErrors: isErrorsArrayEmpty(state),
    userInputObj: getUserInputFromStore(state)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$f = {
  setUserInputAction: setUserInputObj
};
/** connect Decimal component to the redux store */

var ConnectedApp =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$f, mapDispatchToProps$f)(App);

/** The initial store */

var store =
/*#__PURE__*/
redux.createStore(reducer,
/*#__PURE__*/
reduxDevtoolsExtension.composeWithDevTools());

var OdkFormRenderer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(OdkFormRenderer, _React$Component);

  function OdkFormRenderer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = OdkFormRenderer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        csvList = _this$props.csvList,
        defaultLanguage = _this$props.defaultLanguage,
        formDefinitionJson = _this$props.formDefinitionJson,
        userInputJson = _this$props.userInputJson,
        handleSubmit = _this$props.handleSubmit;
    var props = {
      csvList: csvList,
      defaultLanguage: defaultLanguage,
      fieldElements: formDefinitionJson.children,
      formTitle: formDefinitionJson.title,
      handleSubmit: handleSubmit,
      userInputJson: userInputJson
    };
    return React.createElement(reactRedux.Provider, {
      store: store
    }, React.createElement(ConnectedApp, Object.assign({}, props)));
  };

  return OdkFormRenderer;
}(React.Component);

exports.default = OdkFormRenderer;
//# sourceMappingURL=odkformrenderer.cjs.development.js.map
