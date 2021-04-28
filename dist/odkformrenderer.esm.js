import { createStyles, useTheme, Accordion, AccordionSummary, AccordionDetails, MuiThemeProvider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React__default, { createElement, Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faMinusCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Alert, FormGroup, Label, Input, Button, FormText, Form, Row, Col, Container } from 'reactstrap';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import SeamlessImmutable from 'seamless-immutable';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash-es';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

var theme =
/*#__PURE__*/
createMuiTheme({
  palette: {
    primary: {
      main: '#649A6A',
      dark: '#8ac390'
    },
    secondary: {
      main: '#D2AB16',
      light: '#EBFDED',
      dark: '#AD8C0F'
    },
    // error: {
    //   main: '#f44336',
    // },
    // warning: {
    //   main: '#ff9800',
    // },
    //table stripe
    info: {
      dark: '#F5F4F4',
      main: '#EBFDED',
      light: '#F9F9F9'
    },
    // success: {
    //   main: '#4caf50',
    // },
    text: {
      primary: '#EBFDED',
      secondary: '#000000',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  },
  typography: {
    h1: {
      fontWeight: 700,
      // lineHeight: 0.35,
      fontSize: 30
    },
    h2: {
      fontWeight: 500,
      fontSize: 20
    },
    h3: {
      fontWeight: 400,
      fontSize: 18
    },
    h4: {
      fontWeight: 700,
      // lineHeight: 0.35,
      fontSize: 26
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      // lineHeight: 1.18,
      fontSize: 16
    },
    caption: {
      fontFamily: 'Roboto',
      fontWeight: 600,
      // lineHeight: 0.18,
      fontSize: 16
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      // lineHeight: 0.18,
      fontSize: 16
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      // lineHeight: 0.18,
      fontSize: 16
    }
  },
  //menu
  overrides: {
    MuiListItem: {
      root: {
        paddingTop: 12,
        paddingBottom: 12,
        color: '#666666',
        '&:hover': {
          // backgroundColor: '#EBFDED',
          textDecoration: 'none'
        },
        '&:selected': {
          color: '#222222',
          textDecoration: 'none'
        }
      }
    },
    MuiInputLabel: {
      outlined: {
        color: '#222222'
      }
    },
    MuiInputBase: {
      root: {
        color: '#222222'
      }
    },
    MuiStepIcon: {
      active: {
        color: '#649A6A'
      }
    },
    MuiStepLabel: {
      label: {
        color: '#649A6A'
      }
    },
    MuiStepConnector: {
      line: {
        color: '#EBFDED'
      }
    },
    MuiTypography: {
      root: {
        fontStyle: 'normal'
      }
    },
    MuiTextField: {
      root: {
        backgroundColor: '#EBFDED',
        borderRadius: 5
      }
    },
    // MuiTableCell: {
    //   root: {
    //     fontSize: 16,
    //     lineHeight: 0.21,
    //     fontWeight: 400,
    //     whiteSpace: 'nowrap',
    //   },
    // },
    // MuiSelect: {
    //   icon: {
    //     fill: '#666666',
    //   },
    // },
    // MuiFormLabel: {
    //   root: {
    //     color: '#666666',
    //   },
    // },
    MuiButton: {
      root: {
        height: 40
      },
      label: {
        fontWeight: 400,
        // fontSize: 16,
        // lineHeight: 0.18,
        // color: '#EBFDED',
        fontFamily: 'Roboto'
      },
      containedPrimary: {
        color: '#FFFFFF'
      }
    },
    MuiRadio: {
      root: {
        color: '#EBFDED'
      }
    },
    MuiSelect: {
      select: {
        color: '#222222'
      }
    }
  }
});

var KbAlert =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(KbAlert, _React$Component);

  function KbAlert() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = KbAlert.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        headerText = _this$props.headerText,
        bodyText = _this$props.bodyText,
        handleToggle = _this$props.handleToggle,
        isOpen = _this$props.isOpen,
        color = _this$props.color;
    return createElement(Alert, {
      color: color,
      isOpen: isOpen,
      toggle: handleToggle
    }, createElement("h4", {
      className: "alert-heading"
    }, headerText), createElement("p", null, bodyText));
  };

  return KbAlert;
}(Component);

var DropDown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropDown, _React$Component);

  function DropDown() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** pass the selected value to the parent class
     * @param {any} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.onChangeSelect(event.value);
    };

    return _this;
  }

  var _proto = DropDown.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var options = [];
    var languageOptions = [].concat(this.props.languages);
    languageOptions.map(function (elem) {
      options.push({
        label: elem.label,
        value: elem.value
      });
    });
    var selectedValue;
    options.map(function (elem) {
      if (elem.value === _this2.props.defaultLanguage) {
        selectedValue = elem;
      }
    });
    return createElement(Select, {
      multi: false,
      options: options,
      className: 'col-md-2 dropDown',
      placeholder: "Language",
      onChange: this.onChangeHandler,
      value: selectedValue || ''
    });
  };

  return DropDown;
}(Component);

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
var FILE_FIELD_TYPE = 'file';
var NOTE_FIELD_TYPE = 'note';
var SELECT_ONE_FIELD_TYPE = 'select one';
var SELECT_ALL_FIELD_TYPE = 'select all that apply';
var CALCULATE_FIELD_TYPE = 'calculate'; // Required Properties

var REQUIRED_FIELD_MSG = 'This field is required';
var REQUIRED_SYMBOL = '*';

/** The initial store */

var store =
/*#__PURE__*/
createStore(reducer,
/*#__PURE__*/
composeWithDevTools());

var actualExpression;
var currentHierarchicalName = '';
var formItemProperty = {};
var userInput = {};
/**
 * tokenizeCharacter is a type of util method
 * @param {any} type - the type that will be returned if matches
 * @param {any} value - the actual value of the tokenize character
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */

function tokenizeCharacter(type, value, input, current) {
  return value === input[current] ? [1, {
    type: type,
    value: value
  }] : [0, null];
}
/**
 * tokenizeParenOpen returns tokenizeReturnObject for character (
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeParenOpen(input, current) {
  return tokenizeCharacter('paren', '(', input, current);
}
/**
 * tokenizeBrakeOpen returns tokenizeReturnObject for character [
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeBrakeOpen(input, current) {
  return tokenizeCharacter('brac', '[', input, current);
}
/**
 * tokenizeBrakeClose returns tokenizeReturnObject for character ]
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeBrakeClose(input, current) {
  return tokenizeCharacter('brac', ']', input, current);
}
/**
 * tokenizeParenClose returns tokenizeReturnObject for character )
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeParenClose(input, current) {
  return tokenizeCharacter('paren', ')', input, current);
}
/**
 * tokenizeEqual returns tokenizeReturnObject for character =
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeEqual(input, current) {
  return tokenizeCharacter('equal', '=', input, current);
}
/**
 * tokenizePlus returns tokenizeReturnObject for character +
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizePlus(input, current) {
  return tokenizeCharacter('plus', '+', input, current);
}
/**
 * tokenizeMinus returns tokenizeReturnObject for character -
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeMinus(input, current) {
  return tokenizeCharacter('minus', '-', input, current);
}
/**
 * tokenizeMultiply returns tokenizeReturnObject for character *
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeMultiply(input, current) {
  return tokenizeCharacter('multiply', '*', input, current);
}
/**
 * tokenizeDivide returns tokenizeReturnObject for character /
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeDivide(input, current) {
  return tokenizeCharacter('divide', '/', input, current);
}
/**
 * tokenizeLessThan returns tokenizeReturnObject for character <
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeLessThan(input, current) {
  return tokenizeCharacter('lessThan', '<', input, current);
}
/**
 * tokenizeGreaterThan returns tokenizeReturnObject for character >
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeGreaterThan(input, current) {
  return tokenizeCharacter('greaterThan', '>', input, current);
}
/**
 * tokenizeNot returns tokenizeReturnObject for character !
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeNot(input, current) {
  if (input[current] == '!') {
    return tokenizeCharacter('not', '!', input, current);
  } else if (input[current] == 'n') {
    if (input[current + 1] && input[current + 1] == 'o' && input[current + 2] && input[current + 2] == 't') {
      var type = 'not';
      var value = '!';
      return [3, {
        type: type,
        value: value
      }];
    }
  }

  return [0, null];
}
/**
 * tokenizeComma returns tokenizeReturnObject for character ,
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeComma(input, current) {
  return tokenizeCharacter('comma', ',', input, current);
}
/**
 * tokenizeDot returns tokenizeReturnObject for character .
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


function tokenizeDot(input, current) {
  return tokenizeCharacter('dot', '.', input, current);
}
/**
 * tokenizePattern is a type of util method
 * @param {any} type - the type that will be returned if matches
 * @param {any} pattern - the pattern that will be matched for tokenization
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


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
/**
 * tokenizeString returns tokenizeReturnObject for strings. example: 'abc12' , "test1", "afgkj dafgk"
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */


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
/**
 * tokenizeFunction returns tokenizeReturnObject for functions. Example: round( , substring(
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject; value contains function name if matched
 */


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

    if (value == 'not') {
      return [0, null];
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
/**
 * tokenizeNumber returns tokenizeReturnObject for discrete numbers. Example: 123 , 02113
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


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
/**
 * tokenizeDecimal returns tokenizeReturnObject for decimal numbers. Example: 12.3 , 0.2113
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


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
/**
 * tokenizeVariable returns tokenizeReturnObject for variables. Example syntax: ${Iamvariable} , #{urvariable}
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


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
/**
 * tokenizeOr returns tokenizeReturnObject for syntax or
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


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
/**
 * tokenizeIf returns tokenizeReturnObject for word if
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


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
/**
 * tokenizeAnd returns tokenizeReturnObject for word and
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


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
/**
 * tokenizeDiv returns tokenizeReturnObject of type divide for word div
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


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
/**
 * tokenizeName returns tokenizeReturnObject of type name for regex [a-z_]+
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject
 */


function tokenizeName(input, current) {
  return tokenizePattern('name', /[a-z_]/i, input, current);
}
/**
 * skipWhiteSpace removes space and iterates the position of compiler
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns tokenizeReturnObject that consumes characters without returning type
 */


function skipWhiteSpace(input, current) {
  return /\s/.test(input[current]) ? [1, null] : [0, null];
}
/**
 * Precedence of the tokenizer methods
 * If new tokenizer method is created, please add inside tokenizers with correct precedence
 */


var tokenizers = [skipWhiteSpace, tokenizeParenOpen, tokenizeParenClose, tokenizeIf, tokenizeOr, tokenizeAnd, tokenizeVariable, tokenizeString, tokenizeFunction, tokenizeEqual, tokenizePlus, tokenizeMinus, tokenizeMultiply, tokenizeDivide, tokenizeDiv, tokenizeLessThan, tokenizeGreaterThan, tokenizeNot, tokenizeBrakeOpen, tokenizeBrakeClose, tokenizeDot, tokenizeComma, tokenizeNumber, tokenizeDecimal, tokenizeName];
/**
 * tokenizer is primary method that takes the expression and convert them to appropiate tokens.
 * Throws syntax error if expression is not appropiate or could not be tokenized properly
 * @param {string} input - should be of string for valid cases
 * @returns array of tokens
 */

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
}
/**
 * kbSelected parses the function selected and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


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


function kbChoice(funcName, params, _paramsTokens) {
  if (funcName === 'jr:choice-name') {
    var tmpHierchicalName = currentHierarchicalName.split('/');
    var i;
    var parent = '';

    for (i = 0; i < tmpHierchicalName.length - 1;) {
      // tslint:disable-next-line: triple-equals
      if (tmpHierchicalName[i] == 'repeat') {
        i += 3;
      } else {
        // path.push(parent + tmpHierchicalName[i + 1]);
        parent = parent + tmpHierchicalName[i + 1] + '/';
        i += 2;
      }
    }

    var state = store.getState();
    var variableName = parent + params[params.length - 1].replace(/[^a-zA-Z ]/g, '');

    if (variableName in state.optionList) {
      for (var key in state.optionList[variableName]) {
        if (state.optionList[variableName][key].name === params[0]) {
          return [true, state.optionList[variableName][key].label[state.language]];
        }
      }
    }
  }

  return [false, null];
}
/**
 * kbToday parses the function today and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


function kbToday(funcName, _params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'today') {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return [true, d];
  }

  return [false, null];
}
/**
 * kbRound parses the function round and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


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
}
/**
 * kbRegex parses the function regex and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


function kbRegex(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'regex') {
    var regex = RegExp(params[1]);
    return [true, regex.test(params[0])];
  }

  return [false, null];
}
/**
 * kbCountSelected parses the function count-selected and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


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
}
/**
 * kbInt parses the function int and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


function kbInt(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'int') {
    if (typeof params[0] === 'string') {
      return [true, parseInt(params[0], 10)];
    }
  }

  return [false, null];
}
/**
 * kbCoalesce parses the function coalesce and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


function kbCoalesce(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'coalesce') {
    if (!params[0] && params[0] !== 0) {
      return [true, params[1]];
    }

    return [true, params[0]];
  }

  return [false, null];
}
/**
 * kbPosition parses the function position and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


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
/**
 * sumValuesOverJsn is a utility method for kbSum
 * @param sum - initial sum value
 * @param jsnObj - variable name and value in json object
 * @param variableName - variable name
 * @returns the calculated sum
 */


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
}
/**
 * kbSum parses the function sum and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


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
}
/**
 * kbConcat parses the function concat and returns functionParseReturnObject
 * @param funcName - the function name of the token
 * @param params - calculated value of the params tokens
 * @param _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


function kbConcat(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'concat') {
    if (params && params.length > 0) {
      var concatStr = ''; // tslint:disable-next-line: prefer-for-of

      for (var i = 0; i < params.length; i += 1) {
        if (params[i] == null) {
          // continue;
          // return [false, null];
          concatStr += '';
        } else {
          concatStr += params[i];
        }
      }

      return [true, concatStr];
    }
  }

  return [false, null];
}
/**
 * kbSubstr parses the function substr and returns functionParseReturnObject
 * @param {any} funcName - the function name of the token
 * @param {any} params - calculated value of the params tokens
 * @param {any} _paramsTokens - orginal param tokens
 * @returns functionParseReturnObject
 */
// tslint:disable-next-line: variable-name


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
/**
 * outerScopedVariables is a utility method that returns same variable values based on outerscope
 * @param {any} variableName - variable name
 * @param {any} variableValue - variable value upto now
 * @param {any} tmpUserInput - variable key-value storage
 * @returns parsed scoped variable value
 */


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
/**
 * parseMostClosestScopedVariable returns the closest scoped parsed variable value
 * @param {any} variableName - the variable name
 * @returns the parsed variable value
 */


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
      parent = parent + tmpHierchicalName[i + 1] + '/';
      i += 2;
    }
  }

  return variableValue;
}
/**
 * parseDot parses the dot
 * @returns parsed value
 */


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
}
/**
 * parseLiterals parse a set of tokens, starting from number, string, decimal, variable, name, dot
 * @param {any} _tmpOutput - the parsed value of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the position of parser
 * @returns parserReturnObject
 */
// tslint:disable-next-line: variable-name


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

    if (formItemProperty && tokens[current].value in formItemProperty) {
      return [1, formItemProperty[tokens[current].value]];
    }

    return [1, null];
  }

  if (tokens[current].type === 'dot') {
    return [1, parseDot()];
  }

  return [0, null];
}
/**
 * parseFuntion parses the functions present in expression
 * @param {any} _output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */
// tslint:disable-next-line: variable-name


function parseFunction(_output, tokens, current) {
  // precedence of functions
  var possibleFunctions = [kbSelected, kbCountSelected, kbChoice, kbToday, kbRegex, kbInt, kbCoalesce, kbPosition, kbSum, kbConcat, kbSubstr, kbRound];

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
}
/**
 * parseIf parses the if present in expression
 * @param {any} _output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */
// tslint:disable-next-line: variable-name


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
          var tmpVal = parser(null, tmpTokens, 0); // console.log(tmpTokens, tmpVal);

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
/**
 * parseNot parses the not present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
/**
 * parseAnd parses the and present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
/**
 * parseOr parses the or present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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

    if (newOutput != null || output != null) {
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
/**
 * parseEqual parses the equal present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
/**
 * parseLessThan parses the less than or equal present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
/**
 * parseGreaterThan parses the greater than or equal present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
}
/**
 * parseParen parses the paren present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */
// tslint:disable-next-line: variable-name


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
/**
 * parseDivide parses the divide present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
/**
 * parseMultiply parses the multiply present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
/**
 * parsePlus parses the addition present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
/**
 * parseMinus parses the minus present in expression
 * @param {any} output - the parsed output of previous tokens
 * @param {any} tokens - the array of tokens
 * @param {any} current - the current position of the parser
 * @returns parserReturnObject
 */


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
} // precedence of the parser methods


var parsers = [parseIf, parseParen, parseLiterals, parseDivide, parseMultiply, parsePlus, parseMinus, parseLessThan, parseGreaterThan, parseEqual, parseAnd, parseOr, parseNot, parseFunction];
/**
 * the main parser that parses the series of tokens generated by the tokenizer.
 * Throws syntax error if not parsed
 * @param {any} leftOutput - the initial output or output of previous left side tokens
 * @param {any} tokens - the set or array of tokens need to be parsed
 * @param {any} pos - the start position of the parser
 * @returns parsed value of the set of tokens
 */

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
      } // console.log(current);


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
/**
 * odk wrapper evaluator, default method that will be exported, parses expressions
 * @param {any} expression - expression that needs to be evaluated
 * @param {any} tmpUserInput - the variable key-value json, (current user input json)
 * @param {any} tmpFormItemProperty - the name key-value json (current option list)
 * @param {any} tmpCurrentHierarchicalName - the node at which the evaluater is called
 * @returns evaluated value
 */


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

  var placesOfCustomizationsRequiredList = labelText.match(/\[(.*?)\]/g); // to calculate - i.e, [${departure_date_from_bangladesh}]

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
  } else {
    // to calculate - i.e, ${departure_date_from_bangladesh}
    var matchList = labelText.match(/\${(.*[^}])[\}?]$/g);

    if (matchList) {
      matchList.forEach(function (tmpPlace) {
        var customizedName = evaluator(tmpPlace, fieldTreeName);

        if (customizedName != null && customizedName !== undefined) {
          labelText = labelText.replace(tmpPlace, customizedName);
        } else {
          labelText = labelText.replace(tmpPlace, '');
        }
      });
    }
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
/** MEDIA_LIST_ASSIGNED action type */

var MEDIA_LIST_ADDED = 'odk/reducer/form/MEDIA_LIST_ADDED';
/** REMOVE_FROM_MEDIA_LIST action type */

var REMOVE_FROM_MEDIA_LIST = 'odk/reducer/form/REMOVE_FROM_MEDIA_LIST';
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
var SET_FORM_SUBMIT_STATUS = 'odk/reducer/form/SET_FORM_SUBMIT_STATUS';
var SET_LANGUAGE = 'odk/reducer/form/SET_LANGUAGE';
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
 * @param {any} optionList - the option list that will be assigned
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
/** Adds media object to the proper field name
 * @param {any} mediaObject - the media object that will be added
 * @return {AddMediaListAction} - an action to assign media object to a field in the redux store
 */

var addMediaListAction = function addMediaListAction(mediaObject) {
  return {
    mediaObject: mediaObject,
    type: MEDIA_LIST_ADDED
  };
};
/** Resets the redux store state to initial state
 * @return {ResetStoreAction} - an action to reset the redux store state
 */

var resetStoreAction = function resetStoreAction() {
  return {
    type: RESET_STORE
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
/** sets the language to redux store
 * @param {string} language - the user input obj
 * @returns {SetLanguage} - an action to set user input to redux store
 */

var setUserLanguage = function setUserLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language: language
  };
};
/** sets the form submit info to redux store
 * @param {boolean} isFormSubmitted - the form submit info variable
 * @returns {SetFormSubmitInfo} - an action to set form submit info to redux store
 */

var setFormSubmitStatus = function setFormSubmitStatus(isFormSubmitted) {
  return {
    isFormSubmitted: isFormSubmitted,
    type: SET_FORM_SUBMIT_STATUS
  };
};
/** initial form state */

var initialState =
/*#__PURE__*/
SeamlessImmutable({
  errors: [],
  isFormSubmitted: false,
  mediaList: {},
  optionList: {},
  userInput: {},
  language: 'English'
});
/** the form reducer function */

function reducer(state, action) {
  var _extends2;

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

    case MEDIA_LIST_ADDED:
      var modifiedMediaList = _extends({}, state.getIn(['mediaList']).asMutable({
        deep: true
      }), (_extends2 = {}, _extends2[action.mediaObject.name] = action.mediaObject, _extends2));

      var newMediaState = state.asMutable({
        deep: true
      });
      return SeamlessImmutable(_extends({}, newMediaState, {
        mediaList: modifiedMediaList
      }));

    case REMOVE_FROM_MEDIA_LIST:
      if (state.getIn(['mediaList']).asMutable({
        deep: true
      }).hasOwnProperty(action.fieldTreeName)) ;

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

    case SET_FORM_SUBMIT_STATUS:
      return SeamlessImmutable(_extends({}, state, {
        isFormSubmitted: action.isFormSubmitted
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
  return getValueFromUserInputObj(state != undefined && state.getIn(['userInput']).asMutable({
    deep: true
  }), fieldTreeName);
}
/** get option list by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} value if the element name is found else null
 */

function getOptionList(state, fieldTreeName) {
  return getValueFromUserInputObj(state != undefined && state.getIn(['optionList']).asMutable({
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
  return evaluater(expression, state != undefined && state.userInput, null, fieldTreeName);
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
  return state != undefined && state.errors.includes(fieldTreeName);
}
/** check if the field elements under group are empty or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if empty; otherwise, false
 */

function isGroupFieldsEmpty(state, fieldTreeName) {
  return checkGroupedValuesForEmpty(state != undefined && state.userInput, fieldTreeName);
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
  return state != undefined && state.errors && state.errors.length ? false : true;
}
/** get the userInput object from store
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} the current userInputObject
 */

function getUserInputFromStore(state) {
  return state != undefined && state.getIn(['userInput']).asMutable({
    deep: true
  });
}
/** get the userInput object from store
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} the current isFormSubmitted
 */

function getFormSubmitStatus(state) {
  return state != undefined && state.isFormSubmitted;
}
/** get the file if present in store
 * @param {Partial<Store>} state - the redux store
 * @param {string} fileName - the fileName
 * @return {any} - the file or null
 */

function getFileObject(state, fileName) {
  var fileObject = state.getIn(['mediaList', fileName]);
  return fileObject ? state.getIn(['mediaList', fileName]) : null;
}
/** get all the files
 * @param {Partial<Store>} state - the redux store
 * @return {any} - the files or empty object
 */

function getAllFileObjects(state) {
  return state != undefined && state.getIn(['mediaList']);
}

var GroupStyle = function GroupStyle(theme) {
  var _drawerPaperClose, _drawerClose;

  return createStyles({
    root: {
      color: theme.palette.common.white,
      '&.MuiAccordionSummary-root': {
        borderTop: "5px solid " + theme.palette.primary.dark,
        color: theme.palette.primary.dark + " !important",
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white
        },
        '&.Mui-expanded': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white
        }
      }
    },
    toolbarIcon: _extends({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar, {
      '& button': {
        color: '#FFF'
      }
    }),
    drawerPaperClose: (_drawerPaperClose = {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7)
    }, _drawerPaperClose[theme.breakpoints.up('sm')] = {
      width: theme.spacing(9)
    }, _drawerPaperClose.background = theme.palette.primary.dark, _drawerPaperClose),
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    listItem: {
      width: '94%',
      background: theme.palette.primary.main,
      color: '#FFF',
      marginTop: '2px',
      marginLeft: '8px',
      marginRight: '2px',
      borderRadius: '3px',
      '&:hover': {
        background: theme.palette.primary.light
      }
    },
    listItemIcon: {
      color: '#FFF'
    },
    listItemActive: {
      width: '94%',
      background: theme.palette.primary.light,
      color: '#FFF',
      marginTop: '2px',
      marginLeft: '8px',
      marginRight: '2px',
      borderRadius: '3px',
      '&:hover': {
        background: theme.palette.primary.light
      }
    },
    nested: {
      paddingLeft: theme.spacing(4),
      color: '#FFF'
    },
    navlogo: {
      width: '40%',
      margin: '0 auto',
      padding: 3,
      backgroundColor: '#FFF',
      borderRadius: 5
    },
    listParent: {
      color: theme.palette.common.white,
      '&.MuiListItem-root': {
        color: theme.palette.common.white,
        '&.Mui-selected': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main
        },
        '&:hover': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.dark
        }
      }
    },
    drawerClose: (_drawerClose = {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp
      }),
      width: theme.spacing(7) + 1
    }, _drawerClose[theme.breakpoints.up('sm')] = {
      width: theme.spacing(7) + 1
    }, _drawerClose.background = theme.palette.primary.dark, _drawerClose),
    drawerOpen: {
      '&:hover': {
        overflowY: 'auto'
      },
      overflowY: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp
      })
    }
  });
};

function Group(props) {
  var choices = props.choices,
      csvList = props.csvList,
      fieldElement = props.fieldElement,
      fieldParentTreeName = props.fieldParentTreeName,
      defaultLanguage = props.defaultLanguage,
      isComponentRender = props.isComponentRender;
  var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
  var isAppearanceApplicable = false;

  if (fieldElement.control && fieldElement.control.appearance) {
    if (/^w(\d+)\b/i.test(fieldElement.control.appearance)) {
      isAppearanceApplicable = true;
    }
  }

  var theme = useTheme();
  var useStyles = makeStyles(GroupStyle(theme));
  var classNames = useStyles();

  if (isComponentRender && (fieldElement.control.bodyless ? fieldElement.control.bodyless === false : true)) {
    return createElement(Accordion, {
      defaultExpanded: true
    }, createElement(AccordionSummary, {
      className: classNames.root,
      expandIcon: createElement(ExpandMoreIcon, null)
    }, createElement(Typography, null, fieldLabel)), createElement(AccordionDetails, null, createElement(FormGroup, null, createElement(Label, {
      className: "groupLabel"
    }, fieldLabel), fieldElement.children && createElement(ConnectedGroupTypeEvaluator, {
      choices: choices,
      fieldElements: fieldElement.children,
      fieldParentTreeName: fieldParentTreeName + "group/" + fieldElement.name + "/",
      defaultLanguage: defaultLanguage,
      csvList: csvList,
      isAppearanceApplicable: isAppearanceApplicable
    }))));
  }

  if (props.isErrorsIncludeGroupFieldsSelector(fieldParentTreeName + "group/" + fieldElement.name + "/")) {
    props.removeGroupFieldsFromErrorsActionCreator(fieldParentTreeName + "group/" + fieldElement.name + "/");
  }

  if (!props.isGroupFieldsEmptySelector(fieldParentTreeName + fieldElement.name)) {
    props.emptyGroupFieldsActionCreator(fieldParentTreeName + fieldElement.name);
  }

  return null;
}
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
connect(mapStateToProps, mapDispatchToProps)(Group);

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
        choices = _this$props2.choices,
        csvList = _this$props2.csvList,
        defaultLanguage = _this$props2.defaultLanguage,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        repeatIndex = _this$props2.repeatIndex,
        unControlFlag = _this$props2.unControlFlag;
    var isAppearanceApplicable = false;

    if (fieldElement.control && fieldElement.control.appearance) {
      if (/^w(\d+)\b/i.test(fieldElement.control.appearance)) {
        isAppearanceApplicable = true;
      }
    }

    return React__default.createElement("div", {
      className: 'groupFormFieldBody'
    }, fieldElement.children && React__default.createElement(ConnectedGroupTypeEvaluator, {
      choices: choices,
      fieldElements: fieldElement.children,
      fieldParentTreeName: fieldParentTreeName + 'repeat/' + fieldElement.name + '/' + repeatIndex + '/',
      defaultLanguage: defaultLanguage,
      csvList: csvList,
      isAppearanceApplicable: isAppearanceApplicable
    }), unControlFlag === false ? React__default.createElement("div", {
      className: 'minusIconWrapper'
    }, React__default.createElement("span", {
      onClick: this.handleChange
    }, React__default.createElement(FontAwesomeIcon, {
      icon: "minus-circle",
      className: 'minusIcon'
    }))) : null);
  };

  return SingleRepeat;
}(React__default.Component);

var ControlledRepeat =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ControlledRepeat, _React$Component);

  function ControlledRepeat() {
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

  var _proto = ControlledRepeat.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        choices = _this$props2.choices,
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

      return createElement(FormGroup, {
        className: 'groupBody'
      }, createElement(Label, null, fieldLabel), fieldValue && // tslint:disable-next-line: variable-name
      fieldValue.map(function (_elm, index) {
        return createElement("div", {
          className: "repeat-fields-body",
          key: 'repeat' + index
        }, createElement(SingleRepeat, {
          choices: choices,
          defaultLanguage: defaultLanguage,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          fieldValue: fieldValue,
          repeatIndex: index,
          assignmentHandler: assignFieldValueActionCreator,
          removeHandler: removeGroupFieldsFromErrorsActionCreator,
          removeOptionHandler: removeOptionListFromActionCreator,
          csvList: csvList,
          unControlFlag: false
        }));
      }), createElement("div", null, createElement("span", {
        onClick: this.addAnotherRepeat
      }, createElement(FontAwesomeIcon, {
        icon: "plus-circle",
        className: 'plusIcon'
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

  return ControlledRepeat;
}(Component);
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

var ConnectedControlledRepeat =
/*#__PURE__*/
connect(mapStateToProps$1, mapDispatchToProps$1)(ControlledRepeat);

var UncontrolledRepeat =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(UncontrolledRepeat, _React$Component);

  function UncontrolledRepeat() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = UncontrolledRepeat.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        choices = _this$props.choices,
        csvList = _this$props.csvList,
        fieldValue = _this$props.fieldValue,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage,
        isComponentRender = _this$props.isComponentRender,
        optionList = _this$props.optionList,
        assignFieldValueActionCreator = _this$props.assignFieldValueActionCreator,
        removeGroupFieldsFromErrorsActionCreator = _this$props.removeGroupFieldsFromErrorsActionCreator,
        removeOptionListFromActionCreator = _this$props.removeOptionListFromActionCreator;
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (!fieldValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, []);
      }

      var noOfJrCount = 0;

      if (fieldElement.control) {
        var jrCount = 'jr:count';
        var res = fieldElement.control[jrCount];

        if (/^[0-9]*$/i.test(res)) {
          noOfJrCount = parseInt(res, 10);
        } else {
          var value = this.props.getEvaluatedExpressionSelector(res, fieldParentTreeName + fieldElement.name);

          if (value) {
            noOfJrCount = parseInt(value, 10);
          }
        }
      }

      if (fieldValue && fieldValue.length === 0 && noOfJrCount === 0 && this.props.isErrorsIncludeGroupFieldsSelector(fieldParentTreeName + 'repeat/' + fieldElement.name + '/')) {
        this.props.removeGroupFieldsFromErrorsActionCreator(fieldParentTreeName + 'repeat/' + fieldElement.name + '/');
      }

      if (fieldValue && fieldValue.length > 0 && noOfJrCount === 0) {
        this.removeFromError();
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, []);
      }

      if (optionList && _.size(optionList) > noOfJrCount && noOfJrCount === 0) {
        this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + this.props.fieldElement.name, []);
      }

      if (noOfJrCount > 0) {
        var newFieldValue = [].concat(fieldValue);

        if (fieldValue && fieldValue.length < noOfJrCount) {
          var iterate = noOfJrCount - fieldValue.length;

          for (var j = 0; j < iterate; j++) {
            newFieldValue.push({});
          }
        }

        if (fieldValue && fieldValue.length > noOfJrCount) {
          var _iterate = fieldValue.length - noOfJrCount;

          for (var i = 0; i < _iterate; i++) {
            newFieldValue.pop();
          }

          this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, newFieldValue);
          this.removeFromError();
        }

        if (optionList && _.size(optionList) > noOfJrCount) {
          var _iterate2 = _.size(optionList) - noOfJrCount;

          this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + this.props.fieldElement.name, Array.prototype.slice.call(optionList, _iterate2));
          this.removeFromError();
        }

        return createElement(FormGroup, {
          className: 'groupBodyUnControlled'
        }, createElement(Label, null, fieldLabel), newFieldValue && // tslint:disable-next-line: variable-name
        newFieldValue.map(function (_elm, index) {
          return createElement("div", {
            className: "repeat-fields-body",
            key: 'repeat' + index
          }, createElement(SingleRepeat, {
            choices: choices,
            defaultLanguage: defaultLanguage,
            fieldElement: fieldElement,
            fieldParentTreeName: fieldParentTreeName,
            fieldValue: fieldValue,
            repeatIndex: index,
            assignmentHandler: assignFieldValueActionCreator,
            removeHandler: removeGroupFieldsFromErrorsActionCreator,
            removeOptionHandler: removeOptionListFromActionCreator,
            csvList: csvList,
            unControlFlag: true
          }));
        }));
      } else {
        return null;
      }
    } else {
      this.removeFromError();

      if (fieldValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);
      }

      return null;
    }
  };

  _proto.removeFromError = function removeFromError() {
    if (this.props.isErrorsIncludeGroupFieldsSelector(this.props.fieldParentTreeName + 'repeat/' + this.props.fieldElement.name + '/')) {
      this.props.removeGroupFieldsFromErrorsActionCreator(this.props.fieldParentTreeName + 'repeat/' + this.props.fieldElement.name + '/');
    }
  };

  return UncontrolledRepeat;
}(Component);
/** Map props to state  */


var mapStateToProps$2 = function mapStateToProps(state, parentProps) {
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
    isGroupFieldsEmptySelector: isGroupFieldsEmptySelector,
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$2 = {
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors,
  removeOptionListFromActionCreator: RemoveFromOptionList
};
/** connect Repeat component to the redux store */

var ConnectedUncontrolledRepeat =
/*#__PURE__*/
connect(mapStateToProps$2, mapDispatchToProps$2)(UncontrolledRepeat);

var Repeat =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Repeat, _React$Component);

  function Repeat() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Repeat.prototype;

  _proto.render = function render() {
    var fieldElement = this.props.fieldElement;

    if (fieldElement.control && fieldElement.control['jr:count']) {
      return createElement(ConnectedUncontrolledRepeat, Object.assign({}, this.props));
    }

    return createElement(ConnectedControlledRepeat, Object.assign({}, this.props));
  };

  return Repeat;
}(Component);

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

      if (calculatedValue && fieldValue !== calculatedValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, calculatedValue);
      }

      return createElement("div", null, createElement(Input, {
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
}(Component);
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
/** connect Calculate component to the redux store */

var ConnectedCalculate =
/*#__PURE__*/
connect(mapStateToProps$3, mapDispatchToProps$3)(Calculate);

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
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement(Input, {
        type: "date",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: defaultValue,
        readOnly: isReadonly
      }), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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
}(Component);
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

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
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
/** connect KbDate component to the redux store */

var ConnectedDate =
/*#__PURE__*/
connect(mapStateToProps$4, mapDispatchToProps$4)(KbDate);

var DateTime =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DateTime, _React$Component);

  function DateTime() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.handleChange = function (name) {
      return function (value) {
        var modifiedDate = new Date(value);
        var timeZoneOffset = modifiedDate.getTimezoneOffset() / 60;
        modifiedDate.setHours(modifiedDate.getHours() + timeZoneOffset);

        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + name, value !== '' ? modifiedDate : null);
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
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      var modifiedDate = null;

      if (fieldValue) {
        modifiedDate = new Date(fieldValue);
        var timeZoneOffset = modifiedDate.getTimezoneOffset() / 60;
        modifiedDate.setHours(modifiedDate.getHours() - timeZoneOffset);
      }

      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement("br", null), createElement(DatePicker, {
        name: fieldElement.name,
        selected: fieldValue ? modifiedDate : null,
        onChange: this.handleChange(fieldElement.name),
        showTimeSelect: true,
        timeFormat: "h:m aa",
        timeIntervals: 15,
        timeCaption: "time",
        dateFormat: "MM/dd/yyyy h:mm aa",
        placeholderText: "mm/dd/yyyy h:m aa",
        className: "form-control",
        readOnly: isReadonly
      }), createElement("br", null), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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
}(Component);
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

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
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
/** connect Date Time component to the redux store */

var ConnectedDateTime =
/*#__PURE__*/
connect(mapStateToProps$5, mapDispatchToProps$5)(DateTime);

var Decimal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Decimal, _React$Component);

  function Decimal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.setState(_extends({}, _this.state, {
        fieldValue: event.currentTarget.value || '',
        isFocused: true
      }));
    };

    _this.onBlurHandler = function (event) {
      _this.setState(_extends({}, _this.state, {
        fieldValue: event.currentTarget.value || '',
        isFocused: false
      }));

      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? parseFloat(event.currentTarget.value) : null);
    };

    _this.state = {
      fieldValue: '',
      isFocused: false
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
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
    var isRequiredViolated = isRequired && (fieldValue === null || fieldValue === '' || fieldValue === undefined);
    var isConstraintViolated = fieldValue !== '' && fieldValue !== null && fieldValue !== undefined && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
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

      if (typeof this.props.fieldValue === 'string') {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, parseFloat(this.props.fieldValue));
      }

      var modifiedValue;
      {
        fieldValue === 0 ? modifiedValue = '0' : modifiedValue = fieldValue;
      }
      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);

      if (fieldElement.bind && fieldElement.bind.calculate) {
        var calculatedValue = '';
        calculatedValue = this.props.getEvaluatedExpressionSelector(fieldElement.bind.calculate, fieldParentTreeName + fieldElement.name);

        if (fieldValue && calculatedValue !== fieldValue) {
          this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, calculatedValue);
        }

        modifiedValue = calculatedValue;
      }

      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement(Input, {
        type: "number",
        step: "any",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        onBlur: this.onBlurHandler,
        value: this.state.isFocused ? this.state.fieldValue || '' : modifiedValue || '',
        readOnly: isReadonly
      }), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
    } else {
      if (this.state.isFocused) {
        this.setState(_extends({}, this.state, {
          isFocused: false
        }));
      }

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
}(Component);
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

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
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
/** connect Decimal component to the redux store */

var ConnectedDecimal =
/*#__PURE__*/
connect(mapStateToProps$6, mapDispatchToProps$6)(Decimal);

var FilePreview =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FilePreview, _React$Component);

  function FilePreview() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FilePreview.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldName = _this$props.fieldName,
        fieldValue = _this$props.fieldValue,
        assignFieldValueActionCreator = _this$props.assignFieldValueActionCreator;

    var removeHandler = function removeHandler() {
      assignFieldValueActionCreator(fieldName, null);
    };

    return React__default.createElement(React__default.Fragment, null, React__default.createElement("p", {
      className: "text-muted"
    }, "Uploaded File Name: ", React__default.createElement("strong", {
      className: "text-primary"
    }, " ", fieldValue, " ")), React__default.createElement(Button, {
      size: "sm",
      color: "danger",
      onClick: removeHandler
    }, "Remove File"));
  };

  return FilePreview;
}(React__default.Component);
/** Map props to state  */


var mapStateToProps$7 = function mapStateToProps(state, parentProps) {
  var fieldValue = parentProps.fieldValue;
  var result = {
    fileObject: getFileObject(state, fieldValue)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$7 = {
  assignFieldValueActionCreator: assignFieldValueAction
};
/** connect FilePreview component to the redux store */

var ConnectedFilePreview =
/*#__PURE__*/
connect(mapStateToProps$7, mapDispatchToProps$7)(FilePreview);

var File =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(File, _React$Component);

  function File() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      if (event.target.files[0]) {
        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.target.name, event.target.files[0].name);

        _this.props.addMediaListActionCreator(event.target.files[0]);
      } else {
        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.target.name, null);
      }
    };

    return _this;
  }

  var _proto = File.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), fieldValue ? createElement(ConnectedFilePreview, {
        fieldName: fieldParentTreeName + fieldElement.name,
        fieldValue: fieldValue
      }) : fieldElement.type === PHOTO_FIELD_TYPE ? createElement(Input, {
        type: "file",
        accept: "image/*",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        readOnly: isReadonly
      }) : createElement(Input, {
        type: "file",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        readOnly: isReadonly
      }), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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

  return File;
}(Component);
/** Map props to state  */


var mapStateToProps$8 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$8 = {
  addErrorInputIdActionCreator: addErrorInputId,
  addMediaListActionCreator: addMediaListAction,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect File component to the redux store */

var ConnectedFile =
/*#__PURE__*/
connect(mapStateToProps$8, mapDispatchToProps$8)(File);

var Integer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Integer, _React$Component);

  function Integer(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.setState(_extends({}, _this.state, {
        fieldValue: event.currentTarget.value || '',
        isFocused: true
      }));
    };

    _this.onBlurHandler = function (event) {
      _this.setState(_extends({}, _this.state, {
        fieldValue: event.currentTarget.value || '',
        isFocused: false
      }));

      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? parseInt(event.currentTarget.value, 10) : null);
    };

    _this.state = {
      fieldValue: '',
      isFocused: false
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
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
    var isRequiredViolated = isRequired && (fieldValue === null || fieldValue === '' || fieldValue === undefined);
    var isConstraintViolated = fieldValue !== '' && fieldValue !== null && fieldValue !== undefined && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var modifiedFieldLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, fieldLabel, fieldParentTreeName + fieldElement.name);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);
    var modifiedConstraintLabel = customizeLabelsWithPreviousInputs(getEvaluatedExpressionSelector, constraintLabel, fieldParentTreeName + fieldElement.name) || '';
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

      if (typeof this.props.fieldValue === 'string') {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, parseInt(this.props.fieldValue, 10));
      }

      var modifiedValue;
      {
        fieldValue === 0 ? modifiedValue = '0' : modifiedValue = fieldValue;
      }
      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);

      if (fieldElement.bind && fieldElement.bind.calculate) {
        var calculatedValue = '';
        calculatedValue = this.props.getEvaluatedExpressionSelector(fieldElement.bind.calculate, fieldParentTreeName + fieldElement.name);

        if (fieldValue && calculatedValue !== fieldValue) {
          this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, calculatedValue);
        }

        modifiedValue = calculatedValue;
      }

      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement(Input, {
        type: "number",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        onBlur: this.onBlurHandler,
        value: this.state.isFocused ? this.state.fieldValue || '' : modifiedValue || '',
        readOnly: isReadonly
      }), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
    } else {
      if (this.state.isFocused) {
        this.setState(_extends({}, this.state, {
          isFocused: false
        }));
      }

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
}(Component);
/** Map props to state  */


var mapStateToProps$9 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$9 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Integer component to the redux store */

var ConnectedInteger =
/*#__PURE__*/
connect(mapStateToProps$9, mapDispatchToProps$9)(Integer);

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

      return createElement(FormGroup, null, createElement(Label, null, fieldLabel), isRequired && createElement(Label, {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL), fieldElement.hint && createElement(FormText, {
        className: "hintText"
      }, fieldHint), isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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

  return Note;
}(Component);
/** Map props to state  */


var mapStateToProps$a = function mapStateToProps(state, parentProps) {
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


var mapDispatchToProps$a = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Note component to the redux store */

var ConnectedNote =
/*#__PURE__*/
connect(mapStateToProps$a, mapDispatchToProps$a)(Note);

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

        if (values && values.length > 0) {
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
      var csv = _this.props.csvList;
      csvName = csvName.substring(1, csvName.length - 1) + '.csv';

      if (csv[csvName]) {
        var modifiedName = csvName.replace(/'/g, '');
        options = _this.props.csvList[modifiedName] || [];
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          var filterResult = [];
          tempOptions.forEach(function (elm) {
            filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);
          });
          var j = 0;
          filterResult.map(function () {
            options.map(function (option) {
              if (option[nameOfKey] === filterResult[j]) {
                finalRes.push(option);
              }
            });
            j = j + 1;
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
    var _this2 = this;

    var _this$props = this.props,
        choices = _this$props.choices,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      if (fieldElement.control && fieldElement.control.appearance && /search\([^\)|(]+\)/i.test(fieldElement.control.appearance)) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
        this.setOptionList(resultOptions);
      } else if (fieldElement.itemset) {
        if (choices && choices[fieldElement.itemset.trim()]) {
          _.forEach(choices[fieldElement.itemset.trim()], function (elem) {
            if (fieldElement.choice_filter && _this2.props.getEvaluatedExpressionSelectorForSelect(fieldElement.choice_filter, fieldParentTreeName + fieldElement.name, elem)) {
              var childrenLabel = getFieldLabelText(elem, defaultLanguage);
              options.push({
                label: childrenLabel,
                value: elem.name
              });
            }
          });

          var optionsArray = [];

          if (options) {
            options.map(function (elem) {
              var elemObj = {};
              var name = 'name';
              var label = 'label';
              elemObj[name] = elem.value;
              elemObj[label] = elem.label;
              optionsArray.push(elemObj);
            });
          }

          this.setOptionList(optionsArray);
        }
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

      if (typeof this.props.fieldValue === 'string') {
        var seperatedValues = fieldValue.split(' ');
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, seperatedValues);
      }

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement("div", {
        key: fieldElement.name,
        className: "selectAllDropDown"
      }, createElement(Select, {
        isMulti: true,
        name: fieldElement.name,
        options: options,
        onChange: this.onChangeHandler(fieldElement.name),
        value: selectedValues || []
      })), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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
}(Component);
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

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
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
/** connect SelectOne Dropdown component to the redux store */

var ConnectedSelectAllDropDown =
/*#__PURE__*/
connect(mapStateToProps$b, mapDispatchToProps$b)(SelectAllDropDown);

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
      var csv = _this.props.csvList;
      csvName = csvName.substring(1, csvName.length - 1) + '.csv';

      if (csv[csvName]) {
        var modifiedName = csvName.replace(/'/g, '');
        options = _this.props.csvList[modifiedName] || [];
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          var filterResult = [];
          tempOptions.forEach(function (elm) {
            filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);
          });
          var j = 0;
          filterResult.map(function () {
            options.map(function (option) {
              if (option[nameOfKey] === filterResult[j]) {
                finalRes.push(option);
              }
            });
            j = j + 1;
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
        choices = _this$props2.choices,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        fieldValue = _this$props2.fieldValue,
        isComponentRender = _this$props2.isComponentRender,
        getEvaluatedExpressionSelector = _this$props2.getEvaluatedExpressionSelector,
        getFormSubmitStatusSelector = _this$props2.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props2.isPresentInErrorSelector,
        defaultLanguage = _this$props2.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      var childrenArray = [];

      if (fieldElement.children) {
        fieldElement.children.map(function (elem) {
          var elemObj = {};
          var name = 'name';
          var label = 'label';
          elemObj[name] = elem.name;
          elemObj[label] = elem.label;
          childrenArray.push(elemObj);
        });
      }

      var values = [];

      if (fieldElement.control && fieldElement.control.appearance && /search\([^\)|(]+\)/i.test(fieldElement.control.appearance)) {
        values = [];
        options = [];
        var tmpValueArray = [];
        var isNotIncluded = false;
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });

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

        if (!_.isEqual(this.props.optionList, _extends({}, resultOptions))) {
          this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, resultOptions);
        }

        values = [].concat(resultOptions);
      } else if (fieldElement.itemset) {
        values = [];
        options = [];
        var _tmpValueArray = [];
        var optionsArray = [];
        var _isNotIncluded = false;

        if (choices && choices[fieldElement.itemset.trim()]) {
          _.forEach(choices[fieldElement.itemset.trim()], function (elem) {
            if (fieldElement.choice_filter && _this2.props.getEvaluatedExpressionSelectorForSelect(fieldElement.choice_filter, fieldParentTreeName + fieldElement.name, elem)) {
              var childrenLabel = getFieldLabelText(elem, defaultLanguage);
              options.push({
                label: childrenLabel,
                value: elem.name
              });
            }
          });
        }

        if (fieldValue && fieldValue.length > 0) {
          var _optionsValueArray = [];
          options.map(function (elem) {
            if (elem.value) {
              _optionsValueArray.push(elem.value);
            }
          });

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

            if (!_optionsValueArray.includes(_row)) {
              _isNotIncluded = true;
            } else {
              _tmpValueArray.push(_row);
            }
          }
        }

        if (fieldValue && fieldValue.length > 0 && _isNotIncluded) {
          this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, _tmpValueArray || []);
        }

        if (options) {
          options.map(function (elem) {
            var elemObj = {};
            var name = 'name';
            var label = 'label';
            elemObj[name] = elem.value;
            elemObj[label] = elem.label;
            optionsArray.push(elemObj);
          });
        }

        if (!_.isEqual(this.props.optionList, _extends({}, optionsArray))) {
          this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, optionsArray);
        }

        values = [].concat(optionsArray);
      } else {
        values = [];
        options = [];

        if (fieldElement.children) {
          fieldElement.children.map(function (elem) {
            return options.push({
              label: elem.label,
              value: elem.name
            });
          });
        }

        if (!_.isEqual(this.props.optionList, _extends({}, childrenArray))) {
          this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, childrenArray);
        }

        values = [].concat(childrenArray);
      }

      var selectedValues = [];

      if (fieldValue && fieldValue.length > 0) {
        options.map(function (elem) {
          for (var _iterator3 = fieldValue, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var _row2 = _ref3;

            if (elem.value === _row2) {
              selectedValues.push(elem.value);
            }
          }
        });
      }

      var flagInline = false;

      if (fieldElement.control && fieldElement.control.appearance) {
        fieldElement.control.appearance.split(' ').forEach(function (tmpStyle) {
          if (!flagInline && tmpStyle === 'horizontal-compact') {
            flagInline = true;
          }
        });
      }

      if (typeof this.props.fieldValue === 'string') {
        var seperatedValues = fieldValue.split(' ');
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, seperatedValues);
      }

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      return createElement("div", null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement(Form, {
        key: "selectAll"
      }, values.map(function (elem, index) {
        return createElement(FormGroup, {
          key: index,
          check: true,
          inline: flagInline
        }, createElement(Label, {
          check: true
        }, createElement(Input, {
          key: fieldElement.name + '-' + index,
          type: "checkbox",
          name: fieldElement.name,
          value: elem.name || [],
          onChange: _this2.onChangeHandlerCheckBox,
          readOnly: isReadonly,
          checked: selectedValues.includes(elem.name)
        }), ' ', getFieldLabelText(elem, defaultLanguage)));
      })), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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
}(Component);
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

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
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

var ConnectedSelectAllRadio =
/*#__PURE__*/
connect(mapStateToProps$c, mapDispatchToProps$c)(SelectAllRadio);

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
      return createElement(ConnectedSelectAllDropDown, Object.assign({}, this.props));
    }

    return createElement(ConnectedSelectAllRadio, Object.assign({}, this.props));
  };

  return SelectAll;
}(Component);

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
      var csv = _this.props.csvList;
      csvName = csvName.substring(1, csvName.length - 1) + '.csv';

      if (csv[csvName]) {
        var modifiedName = csvName.replace(/'/g, '');
        options = _this.props.csvList[modifiedName] || [];
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          var filterResult = '';
          tempOptions.forEach(function (elm) {
            filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);
          });
          options = options.filter(function (option) {
            return option[nameOfKey] === filterResult;
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
    var _this2 = this;

    var _this$props = this.props,
        choices = _this$props.choices,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      if (fieldElement.control && fieldElement.control.appearance && /search\([^\)|(]+\)/i.test(fieldElement.control.appearance)) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
        this.setOptionList(resultOptions);
      } else if (fieldElement.itemset) {
        if (choices && choices[fieldElement.itemset.trim()]) {
          _.forEach(choices[fieldElement.itemset.trim()], function (elem) {
            if (fieldElement.choice_filter && _this2.props.getEvaluatedExpressionSelectorForSelect(fieldElement.choice_filter, fieldParentTreeName + fieldElement.name, elem)) {
              var childrenLabel = getFieldLabelText(elem, defaultLanguage);
              options.push({
                label: childrenLabel,
                value: elem.name
              });
            }
          });

          this.setOptionList(choices[fieldElement.itemset.trim()]);
        }
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
      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement("div", {
        key: fieldElement.name,
        className: "selectOneDropDown"
      }, createElement(Select, {
        multi: false,
        name: fieldElement.name,
        options: options,
        value: selectedValue || '',
        onChange: this.onChangeHandler(fieldElement.name)
      })), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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
}(Component);
/** Map props to state  */


var mapStateToProps$d = function mapStateToProps(state, parentProps) {
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

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector,
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$d = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne component to the redux store */

var ConnectedSelectOneDropDown =
/*#__PURE__*/
connect(mapStateToProps$d, mapDispatchToProps$d)(SelectOneDropDown);

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
      var csv = _this.props.csvList;
      csvName = csvName.substring(1, csvName.length - 1) + '.csv';

      if (csv[csvName]) {
        var modifiedName = csvName.replace(/'/g, '');
        options = _this.props.csvList[modifiedName] || [];
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          var filterResult = '';
          tempOptions.forEach(function (elm) {
            filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);
          });
          options = options.filter(function (option) {
            return option[nameOfKey] === filterResult;
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
        choices = _this$props.choices,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      var childrenArray = [];

      if (fieldElement.children) {
        fieldElement.children.map(function (elem) {
          var elemObj = {};
          var name = 'name';
          var label = 'label';
          elemObj[name] = elem.name;
          elemObj[label] = elem.label;
          childrenArray.push(elemObj);
        });
      }

      var values = [];

      if (fieldElement.control && fieldElement.control.appearance && /search\([^\)|(]+\)/i.test(fieldElement.control.appearance)) {
        values = [];

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

        values = [].concat(resultOptions);
      } else if (fieldElement.itemset) {
        var choiceOptions = [];
        values = [];

        if (choices && choices[fieldElement.itemset.trim()]) {
          _.forEach(choices[fieldElement.itemset.trim()], function (elem) {
            if (fieldElement.choice_filter && _this2.props.getEvaluatedExpressionSelectorForSelect(fieldElement.choice_filter, fieldParentTreeName + fieldElement.name, elem)) {
              var childrenLabel = getFieldLabelText(elem, defaultLanguage);
              choiceOptions.push({
                label: childrenLabel,
                name: elem.name
              });
            }
          });

          if (fieldValue) {
            var _optionsValueArray = [];
            choiceOptions.map(function (elem) {
              if (elem.name) {
                _optionsValueArray.push(elem.name);
              }
            });

            if (!_optionsValueArray.includes(fieldValue)) {
              this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, '');
            }
          }

          if (!_.isEqual(this.props.optionList, _extends({}, choiceOptions))) {
            this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, choiceOptions);
          }

          values = [].concat(choiceOptions);
        }
      } else {
        values = [];

        if (!_.isEqual(this.props.optionList, _extends({}, childrenArray))) {
          this.props.assignOptionListActionCreator(this.props.fieldParentTreeName + fieldElement.name, childrenArray);
        }

        values = [].concat(childrenArray);
      }

      var flagInline = false;

      if (fieldElement.control && fieldElement.control.appearance) {
        fieldElement.control.appearance.split(' ').forEach(function (tmpStyle) {
          if (!flagInline && tmpStyle === 'horizontal-compact') {
            flagInline = true;
          }
        });
      }

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      return createElement("div", null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement(Form, {
        key: "selectOne"
      }, values.map(function (elem, index) {
        return createElement(FormGroup, {
          key: index,
          check: true,
          inline: flagInline
        }, createElement(Label, {
          check: true
        }, createElement(Input, {
          key: fieldElement.name + '-' + index,
          type: "radio",
          name: fieldElement.name,
          value: elem.name,
          onChange: _this2.onChangeHandlerRadio(fieldElement.name),
          readOnly: isReadonly,
          checked: elem.name === fieldValue
        }), ' ', getFieldLabelText(elem, defaultLanguage)));
      })), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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
}(Component);
/** Map props to state  */


var mapStateToProps$e = function mapStateToProps(state, parentProps) {
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

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector,
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$e = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne Radio component to the redux store */

var ConnectedSelectOneRadio =
/*#__PURE__*/
connect(mapStateToProps$e, mapDispatchToProps$e)(SelectOneRadio);

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
      return createElement(ConnectedSelectOneDropDown, Object.assign({}, this.props));
    }

    return createElement(ConnectedSelectOneRadio, Object.assign({}, this.props));
  };

  return SelectOne;
}(Component);

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Text, _React$Component);

  function Text(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.setState(_extends({}, _this.state, {
        fieldValue: event.currentTarget.value || '',
        isFocused: true
      }));
    };

    _this.onBlurHandler = function (event) {
      _this.setState(_extends({}, _this.state, {
        fieldValue: event.currentTarget.value || '',
        isFocused: false
      }));

      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value || '');
    };

    _this.state = {
      fieldValue: '',
      isFocused: false
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
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);

      if (fieldElement.bind && fieldElement.bind.calculate) {
        var calculatedValue = '';
        calculatedValue = this.props.getEvaluatedExpressionSelector(fieldElement.bind.calculate, fieldParentTreeName + fieldElement.name);

        if (calculatedValue && calculatedValue !== fieldValue) {
          this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, calculatedValue);
        }

        return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
          className: "requiredTextSteric"
        }, REQUIRED_SYMBOL)), createElement(Input, {
          type: "text",
          name: fieldElement.name,
          onChange: this.onChangeHandler,
          onBlur: this.onBlurHandler,
          value: this.state.isFocused ? this.state.fieldValue || '' : calculatedValue || '',
          readOnly: isReadonly
        }), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
          icon: "exclamation-circle",
          className: "errorSign"
        }), fieldElement.hint && createElement(Label, {
          className: "hintText"
        }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
          className: "requiredText"
        }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
          className: "constraintText"
        }, modifiedConstraintLabel));
      } else {
        return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
          className: "requiredTextSteric"
        }, REQUIRED_SYMBOL)), createElement(Input, {
          type: "text",
          name: fieldElement.name,
          onChange: this.onChangeHandler,
          onBlur: this.onBlurHandler,
          value: this.state.isFocused ? this.state.fieldValue || '' : fieldValue || '',
          readOnly: isReadonly
        }), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
          icon: "exclamation-circle",
          className: "errorSign"
        }), fieldElement.hint && createElement(Label, {
          className: "hintText"
        }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
          className: "requiredText"
        }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
          className: "constraintText"
        }, modifiedConstraintLabel));
      }
    } else {
      if (this.state.isFocused) {
        this.setState(_extends({}, this.state, {
          isFocused: false
        }));
      }

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
}(Component);
/** Map props to state  */


var mapStateToProps$f = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$f = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Text component to the redux store */

var ConnectedText =
/*#__PURE__*/
connect(mapStateToProps$f, mapDispatchToProps$f)(Text);

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
        getFormSubmitStatusSelector = _this$props.getFormSubmitStatusSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isFormSubmitted = getFormSubmitStatusSelector;
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

      var isError = isPresentInErrorSelector(fieldParentTreeName + fieldElement.name);
      return createElement(FormGroup, null, createElement(Label, null, modifiedFieldLabel, ' ', isRequired && createElement("span", {
        className: "requiredTextSteric"
      }, REQUIRED_SYMBOL)), createElement(Input, {
        type: "time",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: fieldValue || '',
        readOnly: isReadonly
      }), isFormSubmitted && isError && createElement(FontAwesomeIcon, {
        icon: "exclamation-circle",
        className: "errorSign"
      }), fieldElement.hint && createElement(Label, {
        className: "hintText"
      }, hintLabel), isFormSubmitted && isRequiredViolated && createElement(Label, {
        className: "requiredText"
      }, REQUIRED_FIELD_MSG), isConstraintViolated && createElement(Label, {
        className: "constraintText"
      }, modifiedConstraintLabel));
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
}(Component);
/** Map props to state  */


var mapStateToProps$g = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var getFormSubmitStatusSelector = getFormSubmitStatus(state);
  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector: getFormSubmitStatusSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$g = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect KbTime component to the redux store */

var ConnectedTime =
/*#__PURE__*/
connect(mapStateToProps$g, mapDispatchToProps$g)(KbTime);

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
        choices = _this$props.choices,
        csvList = _this$props.csvList,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage;
    return this.typeEvaluator(choices, csvList, fieldElement, fieldParentTreeName, defaultLanguage);
  }
  /** returns jsx components based on field types
   * @param {any} choices - the choices of form definition
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} fieldParentTreeName - the field parent hierchical name
   * @return {React.ReactElement} - jsx base components
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(choices, csvList, fieldElement, fieldParentTreeName, defaultLanguage) {
    switch (fieldElement.type) {
      case TEXT_FIELD_TYPE:
        return createElement(ConnectedText, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DATE_FIELD_TYPE:
        return createElement(ConnectedDate, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case TIME_FIELD_TYPE:
        return createElement(ConnectedTime, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DATE_TIME_FIELD_TYPE:
        return createElement(ConnectedDateTime, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case INTEGER_FIELD_TYPE:
        return createElement(ConnectedInteger, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DECIMAL_FIELD_TYPE:
        return createElement(ConnectedDecimal, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case NOTE_FIELD_TYPE:
        return createElement(ConnectedNote, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case CALCULATE_FIELD_TYPE:
        return createElement(ConnectedCalculate, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case SELECT_ONE_FIELD_TYPE:
        return createElement(SelectOne, {
          choices: choices,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        });

      case SELECT_ALL_FIELD_TYPE:
        return createElement(SelectAll, {
          choices: choices,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        });

      case PHOTO_FIELD_TYPE:
        return createElement(ConnectedFile, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case FILE_FIELD_TYPE:
        return createElement(ConnectedFile, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      default:
        return createElement("div", {
          style: {
            display: 'none'
          }
        }, "Other ", fieldElement.type, " ", fieldElement.name);
    }
  };

  return BaseTypeEvaluator;
}(Component);

var GroupTypeEvaluator =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(GroupTypeEvaluator, _React$Component);

  function GroupTypeEvaluator() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.getAppearanceValue = function (fieldElement, fieldParentTreeName, isAppearanceApplicable) {
      var isRender = shouldComponentBeRelevant(fieldElement, fieldParentTreeName, _this.props.getEvaluatedExpressionSelector);

      if (!isRender) {
        return 0;
      }

      if (isRender && isAppearanceApplicable && fieldElement.control && fieldElement.control.appearance) {
        if (/^w(\d+)\b/i.test(fieldElement.control.appearance)) {
          var processedStringArray = fieldElement.control.appearance.match(/^w(\d+)\b/i);
          var processedString = processedStringArray[0].replace('w', '');
          var result = isNaN(processedString) ? 12 : parseInt(processedString, 10);
          return result;
        }
      }

      return 12;
    };

    return _this;
  }

  var _proto = GroupTypeEvaluator.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        choices = _this$props.choices,
        csvList = _this$props.csvList,
        fieldElements = _this$props.fieldElements,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage,
        isAppearanceApplicable = _this$props.isAppearanceApplicable;
    return createElement(Row, {
      className: "groupTypeEvaluatorRow"
    }, fieldElements.map(function (fieldElement) {
      var value = _this2.getAppearanceValue(fieldElement, fieldParentTreeName, isAppearanceApplicable);

      return createElement(Col, {
        key: "group_" + fieldElement.name,
        className: "groupTypeEvaluator",
        md: value,
        hidden: value === 0
      }, _this2.typeEvaluator(choices, csvList, fieldElement, fieldParentTreeName, defaultLanguage));
    }));
  }
  /** returns jsx components based on field types
   * @param {any} choices - the form choices
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} - the field parent hierarchical name
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(choices, csvList, fieldElement, fieldParentTreeName, defaultLanguage) {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return createElement("div", null, createElement(ConnectedGroup, {
          choices: choices,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        }));

      case REPEAT_FIELD_TYPE:
        return createElement("div", null, createElement(Repeat, {
          choices: choices,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        }));

      default:
        return createElement(BaseTypeEvaluator, {
          choices: choices,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage,
          csvList: csvList
        });
    }
  };

  return GroupTypeEvaluator;
}(Component);
/** Map props to state  */


var mapStateToProps$h = function mapStateToProps(state) {
  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var result = {
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector
  };
  return result;
};
/** connect GroupTypeEvaluator component to the redux store */


var ConnectedGroupTypeEvaluator =
/*#__PURE__*/
connect(mapStateToProps$h)(GroupTypeEvaluator);

library.add(faPlusCircle, faMinusCircle, faExclamationCircle);

var App =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(App, _React$Component);

  function App(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleSelect = function (languageName) {
      _this.setState({
        defaultLanguage: languageName
      });

      _this.props.setUserLanguageAction(_this.props.defaultLanguage);
    }; // tslint:disable-next-line: variable-name


    _this.handleClick = function (_event) {
      var _this$props = _this.props,
          handleSubmit = _this$props.handleSubmit,
          isNoErrors = _this$props.isNoErrors,
          userInputObj = _this$props.userInputObj,
          mediaList = _this$props.mediaList;

      if (isNoErrors) {
        handleSubmit(userInputObj, mediaList);
      } else {
        handleSubmit('Field Violated', mediaList);

        _this.setState({
          isSubmissionError: true
        });

        _this.props.setFormSubmitStatusAction(true);

        window.scrollTo(0, 0);
      }
    };

    _this.toggleStateValue = function () {
      _this.setState({
        isSubmissionError: false
      });
    };

    return _this;
  }

  var _proto = App.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props2 = this.props,
        userInputJson = _this$props2.userInputJson,
        userInputObj = _this$props2.userInputObj;
    this.props.resetStoreActionCreator();

    if (userInputJson && userInputJson !== userInputObj) {
      this.props.setUserInputAction(userInputJson);
    }

    this.props.setUserLanguageAction(this.props.defaultLanguage);
    this.setState({
      defaultLanguage: this.props.defaultLanguage,
      isSubmissionError: false
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        csvList = _this$props3.csvList,
        fieldElements = _this$props3.fieldElements,
        formTitle = _this$props3.formTitle,
        languageOptions = _this$props3.languageOptions,
        choices = _this$props3.choices;

    var _ref = this.state || this.props,
        defaultLanguage = _ref.defaultLanguage;

    var props = {
      choices: choices,
      csvList: csvList,
      defaultLanguage: defaultLanguage,
      fieldElements: fieldElements,
      fieldParentTreeName: '',
      isAppearanceApplicable: false,
      languageOptions: languageOptions
    };
    return createElement(Container, {
      className: "form-container"
    }, createElement(Row, {
      className: 'form-title formTitle'
    }, createElement(Col, null, createElement("h3", {
      className: "headerText"
    }, formTitle)), createElement(DropDown, {
      languages: languageOptions,
      onChangeSelect: this.handleSelect,
      defaultLanguage: defaultLanguage
    })), this.state && this.state.isSubmissionError && createElement(KbAlert, {
      color: 'danger',
      isOpen: this.state.isSubmissionError,
      handleToggle: this.toggleStateValue,
      headerText: 'Oh snap! You got an error!',
      bodyText: 'Please make sure the required fields are not missing and there are no errors'
    }), createElement(Row, {
      className: "formFieldBody"
    }, createElement(Col, null, createElement(ConnectedGroupTypeEvaluator, Object.assign({}, props)), createElement(Row, {
      className: "welcome-box",
      style: {
        padding: 10
      }
    }, createElement(Col, null, createElement(Button, {
      className: "btn btn-success",
      onClick: this.handleClick
    }, "Submit"))))));
  };

  return App;
}(Component);
/** Map props to state  */


var mapStateToProps$i = function mapStateToProps(state) {
  var result = {
    isNoErrors: isErrorsArrayEmpty(state),
    mediaList: getAllFileObjects(state),
    userInputObj: getUserInputFromStore(state)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$h = {
  resetStoreActionCreator: resetStoreAction,
  setFormSubmitStatusAction: setFormSubmitStatus,
  setUserInputAction: setUserInputObj,
  setUserLanguageAction: setUserLanguage
};
/** connect Decimal component to the redux store */

var ConnectedApp =
/*#__PURE__*/
connect(mapStateToProps$i, mapDispatchToProps$h)(App);

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
        languageOptions = _this$props.languageOptions,
        handleSubmit = _this$props.handleSubmit;
    var props = {
      choices: formDefinitionJson.choices || {},
      csvList: csvList,
      defaultLanguage: defaultLanguage,
      fieldElements: formDefinitionJson.children,
      formTitle: formDefinitionJson.title,
      handleSubmit: handleSubmit,
      languageOptions: languageOptions,
      userInputJson: userInputJson
    };
    return createElement(Provider, {
      store: store
    }, createElement(MuiThemeProvider, {
      theme: theme
    }, createElement(ConnectedApp, Object.assign({}, props))));
  };

  return OdkFormRenderer;
}(Component);

export default OdkFormRenderer;
//# sourceMappingURL=odkformrenderer.esm.js.map
