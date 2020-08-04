let actualExpression: string;
let currentHierarchicalName: string = '';
let formItemProperty: any = {};
let userInput: any = {};

/**
 * tokenizeCharacter is a type of util method
 * @param {any} type - the type that will be returned if matches
 * @param {any} value - the actual value of the tokenize character
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */
function tokenizeCharacter(type: any, value: any, input: any, current: any) {
  return value === input[current] ? [1, { type, value }] : [0, null];
}

/**
 * tokenizeParenOpen returns tokenizeReturnObject for character (
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */
function tokenizeParenOpen(input: any, current: any) {
  return tokenizeCharacter('paren', '(', input, current);
}

/**
 * tokenizeBrakeOpen returns tokenizeReturnObject for character [
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */
function tokenizeBrakeOpen(input: any, current: any) {
  return tokenizeCharacter('brac', '[', input, current);
}

/**
 * tokenizeBrakeClose returns tokenizeReturnObject for character ]
 * @param {any} input - the input expression, valid cases involve only string type
 * @param {any} current - the position of the compiler at the input expression
 * @returns - tokenizeReturnObject
 */
function tokenizeBrakeClose(input: any, current: any) {
  return tokenizeCharacter('brac', ']', input, current);
}

function tokenizeParenClose(input: any, current: any) {
  return tokenizeCharacter('paren', ')', input, current);
}

function tokenizeEqual(input: any, current: any) {
  return tokenizeCharacter('equal', '=', input, current);
}

function tokenizePlus(input: any, current: any) {
  return tokenizeCharacter('plus', '+', input, current);
}

function tokenizeMinus(input: any, current: any) {
  return tokenizeCharacter('minus', '-', input, current);
}

function tokenizeMultiply(input: any, current: any) {
  return tokenizeCharacter('multiply', '*', input, current);
}

function tokenizeDivide(input: any, current: any) {
  return tokenizeCharacter('divide', '/', input, current);
}

function tokenizeLessThan(input: any, current: any) {
  return tokenizeCharacter('lessThan', '<', input, current);
}

function tokenizeGreaterThan(input: any, current: any) {
  return tokenizeCharacter('greaterThan', '>', input, current);
}

function tokenizeNot(input: any, current: any) {
  return tokenizeCharacter('not', '!', input, current);
}

function tokenizeComma(input: any, current: any) {
  return tokenizeCharacter('comma', ',', input, current);
}

function tokenizeDot(input: any, current: any) {
  return tokenizeCharacter('dot', '.', input, current);
}

function tokenizePattern(type: any, pattern: any, input: any, current: any) {
  let char = input[current];
  let consumedChars = 0;
  if (pattern.test(char)) {
    let value = '';
    while (char && pattern.test(char)) {
      value += char;
      consumedChars += 1;
      char = input[current + consumedChars];
    }
    return [consumedChars, { type, value }];
  }
  return [0, null];
}

function tokenizeString(input: any, current: any) {
  if (input[current] === '"' || input[current] === "'") {
    const matchQuote = input[current];
    let value = '';
    let consumedChars = 0;
    consumedChars += 1;
    let char = input[current + consumedChars];
    while (char !== matchQuote) {
      if (char === undefined) {
        throw new TypeError('unterminated string ');
      }
      value += char;
      consumedChars += 1;
      char = input[current + consumedChars];
    }
    return [consumedChars + 1, { type: 'string', value }];
  }
  return [0, null];
}

function tokenizeFunction(input: any, current: any) {
  if (/[a-z_]/i.test(input[current])) {
    let value = '';
    let consumedChars = 0;
    // consumedChars ++;
    let char = input[current + consumedChars];
    while (char && /[:a-z0-9_-]/i.test(char)) {
      if (char === undefined) {
        throw new TypeError('unterminated string ');
      }
      value += char;
      consumedChars += 1;
      char = input[current + consumedChars];
    }
    while (char && /\s/.test(char)) {
      consumedChars += 1;
      char = input[current + consumedChars];
    }
    if (char && char === '(') {
      return [consumedChars, { type: 'function', value }];
    }
  }
  return [0, null];
}

function tokenizeNumber(input: any, current: any) {
  if (/[0-9]/i.test(input[current])) {
    let value = '';
    let consumedChars = 0;
    // consumedChars ++;
    let char = input[current + consumedChars];
    while (/[0-9]/i.test(char)) {
      if (char === undefined) {
        throw new TypeError('unterminated string ');
      }
      value += char;
      consumedChars += 1;
      char = input[current + consumedChars];
    }
    if (char !== '.') {
      return [consumedChars, { type: 'number', value }];
    }
  }
  return [0, null];
}

function tokenizeDecimal(input: any, current: any) {
  if (/[0-9.]/i.test(input[current])) {
    let value = '';
    let consumedChars = 0;
    // consumedChars ++;
    let char = input[current + consumedChars];
    while (/[0-9]/i.test(char)) {
      if (char === undefined) {
        throw new TypeError('unterminated string ');
      }
      value += char;
      consumedChars += 1;
      char = input[current + consumedChars];
    }
    if (char === '.') {
      value += char;
      consumedChars += 1;
      char = input[current + consumedChars];
      if (/[0-9]/i.test(char)) {
        while (/[0-9]/i.test(char)) {
          if (char === undefined) {
            throw new TypeError('unterminated string ');
          }
          value += char;
          consumedChars += 1;
          char = input[current + consumedChars];
        }
        return [consumedChars, { type: 'decimal', value }];
      }
    }
  }
  return [0, null];
}

function tokenizeVariable(input: any, current: any) {
  if (input[current] === '#' || input[current] === '$') {
    if (input[current + 1] && input[current + 1] === '{') {
      let value = '';
      let consumedChars = 1;
      consumedChars += 1;
      let char = input[current + consumedChars];
      while (char !== '}') {
        if (char === undefined) {
          throw new TypeError('unterminated string ');
        }
        value += char;
        consumedChars += 1;
        char = input[current + consumedChars];
      }
      return [consumedChars + 1, { type: 'variable', value }];
    }
  }
  return [0, null];
}

function tokenizeOr(input: any, current: any) {
  if (input[current] === 'o') {
    if (input[current + 1] && input[current + 1] === 'r') {
      if (
        input[current + 2] === undefined ||
        /[0-9\s]/.test(input[current + 2])
      ) {
        return [2, { type: 'or', value: 'or' }];
      }
    }
  }
  return [0, null];
}

function tokenizeIf(input: any, current: any) {
  if (input[current] === 'i') {
    if (input[current + 1] && input[current + 1] === 'f') {
      if (
        input[current + 2] === undefined ||
        !/[a-z]i/.test(input[current + 2])
      ) {
        return [2, { type: 'if', value: 'if' }];
      }
    }
  }
  return [0, null];
}

function tokenizeAnd(input: any, current: any) {
  if (input[current] === 'a') {
    if (input[current + 1] && input[current + 1] === 'n') {
      if (input[current + 2] && input[current + 2] === 'd') {
        if (
          input[current + 3] === undefined ||
          /[0-9\s]/.test(input[current + 3])
        ) {
          return [3, { type: 'and', value: 'and' }];
        }
      }
    }
  }
  return [0, null];
}

function tokenizeDiv(input: any, current: any) {
  if (input[current] === 'd') {
    if (input[current + 1] && input[current + 1] === 'i') {
      if (input[current + 2] && input[current + 2] === 'v') {
        if (
          input[current + 3] === undefined ||
          /[0-9\s]/.test(input[current + 3])
        ) {
          return [3, { type: 'divide', value: '/' }];
        }
      }
    }
  }
  return [0, null];
}

function tokenizeName(input: any, current: any) {
  return tokenizePattern('name', /[a-z_]/i, input, current);
}

function skipWhiteSpace(input: any, current: any) {
  return /\s/.test(input[current]) ? [1, null] : [0, null];
}

const tokenizers = [
  skipWhiteSpace,
  tokenizeParenOpen,
  tokenizeParenClose,
  tokenizeIf,
  tokenizeOr,
  tokenizeAnd,
  tokenizeVariable,
  tokenizeString,
  tokenizeFunction,
  tokenizeEqual,
  tokenizePlus,
  tokenizeMinus,
  tokenizeMultiply,
  tokenizeDivide,
  tokenizeDiv,
  tokenizeLessThan,
  tokenizeGreaterThan,
  tokenizeNot,
  tokenizeBrakeOpen,
  tokenizeBrakeClose,
  tokenizeDot,
  tokenizeComma,
  tokenizeNumber,
  tokenizeDecimal,
  tokenizeName,
];

function tokenizer(input: any) {
  let current: number = 0;
  const tokens: any = [];
  while (current < input.length) {
    let tokenized = false;
    tokenizers.forEach(tokenizerFn => {
      if (tokenized) {
        return;
      }
      const [consumedChars, token]: any = tokenizerFn(input, current);
      if (consumedChars !== 0) {
        tokenized = true;
        current += consumedChars;
      }
      if (token) {
        tokens.push(token);
      }
    });
    if (!tokenized) {
      throw new TypeError(
        `I dont know what this character is: ${input[current]}`
      );
    }
  }
  return tokens;
}

// tslint:disable-next-line: variable-name
function kbSelected(funcName: any, params: any, _paramsTokens: any) {
  if (funcName === 'selected') {
    let tmp = false;
    if (Array.isArray(params[0])) {
      params[0].forEach((element: any) => {
        // tslint:disable-next-line: triple-equals
        tmp = tmp || element == params[1];
      });
      return [true, tmp];
    }
    // tslint:disable-next-line: triple-equals
    return [true, params[0] == params[1]];
  }
  return [false, null];
}

// tslint:disable-next-line: variable-name
function kbToday(funcName: any, _params: any, _paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'today') {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return [true, d];
  }
  return [false, null];
}

// tslint:disable-next-line: variable-name
function kbRound(funcName: any, params: any, _paramsTokens: any) {
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

// tslint:disable-next-line: variable-name
function kbRegex(funcName: any, params: any, _paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'regex') {
    const regex = RegExp(params[1]);
    return [true, regex.test(params[0])];
  }
  return [false, null];
}

// tslint:disable-next-line: variable-name
function kbCountSelected(funcName: any, params: any, _paramsTokens: any) {
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

// tslint:disable-next-line: variable-name
function kbInt(funcName: any, params: any, _paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'int') {
    if (typeof params[0] === 'string') {
      return [true, parseInt(params[0], 10)];
    }
  }
  return [false, null];
}

// tslint:disable-next-line: variable-name
function kbCoalesce(funcName: any, params: any, _paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'coalesce') {
    if (!params[0] && params[0] !== 0) {
      return [true, params[1]];
    }
    return [true, params[0]];
  }
  return [false, null];
}

// tslint:disable-next-line: variable-name
function kbPosition(funcName: any, _params: any, _paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'position') {
    if (currentHierarchicalName) {
      const tmpName = currentHierarchicalName.split('/');
      if (tmpName.length > 2) {
        return [true, parseInt(tmpName[tmpName.length - 2], 10) + 1];
      }
    }
  }
  return [false, null];
}

function sumValuesOverJsn(sum: any, jsnObj: any, variableName: any) {
  if (Array.isArray(jsnObj)) {
    let i;
    for (i = 0; i < jsnObj.length; i += 1) {
      sum = sumValuesOverJsn(sum, jsnObj[i], variableName);
    }
  } else if (typeof jsnObj === 'object') {
    for (const key in jsnObj) {
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

// tslint:disable-next-line: variable-name
function kbSum(funcName: any, _params: any, paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'sum') {
    let sumValue = null;
    if (
      paramsTokens &&
      paramsTokens.length > 0 &&
      paramsTokens[0] &&
      paramsTokens[0].length > 0 &&
      paramsTokens[0][0].type === 'variable'
    ) {
      sumValue = sumValuesOverJsn(0, userInput, paramsTokens[0][0].value);
    }
    return [true, sumValue];
  }
  return [false, null];
}

// tslint:disable-next-line: variable-name
function kbConcat(funcName: any, params: any, _paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'concat') {
    if (params && params.length > 0) {
      let concatStr = '';
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < params.length; i += 1) {
        if (params[i] == null) {
          return [false, null];
        }
        concatStr += params[i];
      }
      return [true, concatStr];
    }
  }
  return [false, null];
}

// tslint:disable-next-line: variable-name
function kbSubstr(funcName: any, params: any, _paramsTokens: any) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'substr') {
    if (params && params.length > 0) {
      if (params[0] && params[1] !== null) {
        if (params[2] !== null && params[2] < params[0].length) {
          const subStr = params[0].substring(params[1], params[2]);
          return [true, subStr];
        }
        return [true, params[0].substring(params[1])];
      }
    }
  }
  return [false, null];
}

function outerScopedVariables(
  variableName: any,
  variableValue: any,
  tmpUserInput: any
): any {
  // tslint:disable-next-line: forin
  for (const key in tmpUserInput) {
    const nodeNames = key.split('/');
    const variableNameFromKey = nodeNames[nodeNames.length - 1];
    if (variableNameFromKey === variableName) {
      return tmpUserInput[key];
    }
    if (typeof tmpUserInput[key] === 'object') {
      if (variableValue == null) {
        variableValue = outerScopedVariables(
          variableName,
          variableValue,
          tmpUserInput[key]
        );
      }
    }
  }
  return variableValue;
}

function parseMostClosestScopedVariable(variableName: any) {
  const tmpHierchicalName = currentHierarchicalName.split('/');
  let i;
  const tmpUserInput = userInput;
  let variableValue = null;
  variableValue = outerScopedVariables(
    variableName,
    variableValue,
    tmpUserInput
  );
  let parent = '';
  for (i = 0; i < tmpHierchicalName.length - 1; ) {
    // tslint:disable-next-line: triple-equals
    if (tmpHierchicalName[i] == 'repeat') {
      i += 1;
      const index = parseInt(tmpHierchicalName[i + 1], 10);
      variableValue = outerScopedVariables(
        variableName,
        variableValue,
        tmpUserInput[parent + tmpHierchicalName[i]][index]
      );
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
  const tmpHierchicalName = currentHierarchicalName.split('/');
  let i;
  let tmpUserInput = userInput;
  let parent = '';
  const path = [];
  for (i = 0; i < tmpHierchicalName.length - 1; ) {
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

// tslint:disable-next-line: variable-name
function parseLiterals(_tmpOutput: any, tokens: any, current: any) {
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

// tslint:disable-next-line: variable-name
function parseFunction(_output: any, tokens: any, current: any) {
  const possibleFunctions = [
    kbSelected,
    kbCountSelected,
    kbToday,
    kbRegex,
    kbInt,
    kbCoalesce,
    kbPosition,
    kbSum,
    kbConcat,
    kbSubstr,
    kbRound,
  ];
  if (tokens[current].type === 'function') {
    const funcName = tokens[current].value;
    const arrayOfParams: any = [];
    const arrayOfOriginalTokens: any = [];
    let i = 1;
    if (
      tokens[current + i].type === 'paren' &&
      tokens[current + i].value === '('
    ) {
      const tmpQueue = [];
      tmpQueue.push(1);
      i += 1;
      let tmpTokens = [];
      while (tokens[current + i] && tmpQueue.length) {
        tmpTokens.push(tokens[current + i]);
        if (
          tokens[current + i].type === 'paren' &&
          tokens[current + i].value === ')'
        ) {
          tmpQueue.pop();
        }
        if (
          tokens[current + i].type === 'paren' &&
          tokens[current + i].value === '('
        ) {
          tmpQueue.push(1);
        }
        if (tokens[current + i].type === 'comma' && tmpQueue.length === 1) {
          tmpTokens.pop();
          const tmpVal = parser(null, tmpTokens, 0);
          arrayOfParams.push(tmpVal);
          arrayOfOriginalTokens.push(tmpTokens);
          tmpTokens = [];
        }
        i += 1;
      }
      i -= 1;

      if (
        tokens[current + i].type === 'paren' &&
        tokens[current + i].value === ')'
      ) {
        tmpTokens.pop();
        const tmpVal = parser(null, tmpTokens, 0);
        arrayOfParams.push(tmpVal);
        arrayOfOriginalTokens.push(tmpTokens);
        let parsedFn = false;
        let parsedVal = null;
        possibleFunctions.forEach(functionFn => {
          if (parsedFn) {
            return;
          }
          [parsedFn, parsedVal] = functionFn(
            funcName,
            arrayOfParams,
            arrayOfOriginalTokens
          );
        });
        if (parsedFn) {
          return [i + 1, parsedVal];
        }
      }
    }
  }
  return [0, null];
}

// tslint:disable-next-line: variable-name
function parseIf(_output: any, tokens: any, current: any) {
  if (tokens[current].type === 'if') {
    const arrayOfParams = [];
    let i = 1;
    if (
      tokens[current + i].type === 'paren' &&
      tokens[current + i].value === '('
    ) {
      const tmpQueue = [];
      tmpQueue.push(1);
      i += 1;
      let tmpTokens = [];
      while (tokens[current + i] && tmpQueue.length) {
        tmpTokens.push(tokens[current + i]);
        if (
          tokens[current + i].type === 'paren' &&
          tokens[current + i].value === ')'
        ) {
          tmpQueue.pop();
        }
        if (
          tokens[current + i].type === 'paren' &&
          tokens[current + i].value === '('
        ) {
          tmpQueue.push(1);
        }
        if (tokens[current + i].type === 'comma' && tmpQueue.length === 1) {
          tmpTokens.pop();
          const tmpVal = parser(null, tmpTokens, 0);
          arrayOfParams.push(tmpVal);
          tmpTokens = [];
        }
        i += 1;
      }
      i -= 1;

      if (
        tokens[current + i].type === 'paren' &&
        tokens[current + i].value === ')'
      ) {
        tmpTokens.pop();
        const tmpVal = parser(null, tmpTokens, 0);
        arrayOfParams.push(tmpVal);
        if (arrayOfParams.length % 2 === 0) {
          let j;
          for (j = 0; j < arrayOfParams.length; j += 2) {
            if (arrayOfParams[j]) {
              return [i + 1, arrayOfParams[j + 1]];
            }
          }
        } else {
          let j;
          for (j = 0; j < arrayOfParams.length - 1; j += 2) {
            if (arrayOfParams[j]) {
              return [i + 1, arrayOfParams[j + 1]];
            }
          }
          return [i + 1, arrayOfParams[arrayOfParams.length - 1]];
        }
      }
    }
  }
  return [0, null];
}

function parseNot(output: any, tokens: any, current: any) {
  if (tokens[current].type === 'not') {
    let tmpTokens;
    let i = 1;
    if (tokens[current + i].type === 'equal' && output != null) {
      tmpTokens = [];
      i += 1;
      const terminatingTokens = ['and', 'or'];
      while (
        tokens[current + i] &&
        terminatingTokens.indexOf(tokens[current + i].type) === -1
      ) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }
      let newOutput;
      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0);
        // tslint:disable-next-line: triple-equals
        return [i, output != newOutput];
      }
    } else {
      let parsed = false;
      const possibleParsers = [
        parseLiterals,
        parseMinus,
        parseParen,
        parseFunction,
      ];
      let consumedTokens;
      let newOutput;
      possibleParsers.forEach(parserFn => {
        if (parsed) {
          return;
        }
        if (parserFn === parseMinus) {
          [consumedTokens, newOutput] = parserFn(null, tokens, current + 1);
        } else {
          [consumedTokens, newOutput] = parserFn(output, tokens, current + 1);
        }
        if (consumedTokens !== 0) {
          parsed = true;
          i += consumedTokens;
        }
      });
      if (parsed) {
        return [i, !newOutput];
      }
    }
  }
  return [0, null];
}

function parseAnd(output: any, tokens: any, current: any): any {
  if (tokens[current].type === 'and' && output != null) {
    const tmpTokens = [];
    let i = 1;
    let newOutput = null;
    if (
      tokens[current + i].type === 'paren' &&
      tokens[current + i].value === '('
    ) {
      let consumedChars;
      [consumedChars, newOutput] = parseParen(null, tokens, current + i);
      i += consumedChars;
    } else {
      const terminatingTokens = ['and', 'or'];
      while (
        tokens[current + i] &&
        terminatingTokens.indexOf(tokens[current + i].type) === -1
      ) {
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
        let consumedChars = 0;
        [consumedChars, newOutput] = parseAnd(newOutput, tokens, current + i);
        i += consumedChars;
      }
      return [i, newOutput];
    }
  }
  return [0, null];
}

function parseOr(output: any, tokens: any, current: any) {
  if (tokens[current].type === 'or' && output != null) {
    const tmpTokens = [];
    let i = 1;
    let newOutput = null;
    if (
      tokens[current + i].type === 'paren' &&
      tokens[current + i].value === '('
    ) {
      let consumedChars;
      [consumedChars, newOutput] = parseParen(null, tokens, current + i);
      i += consumedChars;
    } else {
      const terminatingTokens = ['and', 'or'];
      while (
        tokens[current + i] &&
        terminatingTokens.indexOf(tokens[current + i].type) === -1
      ) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }
      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0);
      }
    }
    if (newOutput != null) {
      if (tokens[current + i] && tokens[current + i].type === 'and') {
        let consumedChars = 0;
        [consumedChars, newOutput] = parseAnd(newOutput, tokens, current + i);
        i += consumedChars;
      }
      return [i, output || newOutput];
    }
  }
  return [0, null];
}

function parseEqual(output: any, tokens: any, current: any) {
  if (tokens[current].type === 'equal' && output != null) {
    const tmpTokens = [];
    let i = 1;
    const terminatingTokens = ['and', 'or'];
    while (
      tokens[current + i] &&
      terminatingTokens.indexOf(tokens[current + i].type) === -1
    ) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }
    let newOutput;
    if (tmpTokens.length) {
      newOutput = parser(null, tmpTokens, 0);
      // tslint:disable-next-line: triple-equals
      return [i, output == newOutput];
    }
  }
  return [0, null];
}

function parseLessThan(output: any, tokens: any, current: any) {
  if (tokens[current].type === 'lessThan' && output != null) {
    let flagLessThanOrEqual = false;
    const tmpTokens = [];
    let i = 1;
    if (tokens[current + i].type === 'equal') {
      i += 1;
      flagLessThanOrEqual = true;
    }
    const terminatingTokens = ['and', 'or'];
    while (
      tokens[current + i] &&
      terminatingTokens.indexOf(tokens[current + i].type) === -1
    ) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }
    let newOutput;
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

function parseGreaterThan(output: any, tokens: any, current: any) {
  if (tokens[current].type === 'greaterThan' && output != null) {
    let flagGreaterThanOrEqual = false;
    const tmpTokens = [];
    let i = 1;
    if (tokens[current + i].type === 'equal') {
      i += 1;
      flagGreaterThanOrEqual = true;
    }
    const terminatingTokens = ['and', 'or'];
    while (
      tokens[current + i] &&
      terminatingTokens.indexOf(tokens[current + i].type) === -1
    ) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }
    let newOutput;
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

// tslint:disable-next-line: variable-name
function parseParen(_output: any, tokens: any, current: any) {
  if (tokens[current].type === 'paren' && tokens[current].value === '(') {
    const tmpQueue = [];
    tmpQueue.push(1);
    let i = 1;
    const tmpTokens = [];
    while (tokens[current + i] && tmpQueue.length) {
      tmpTokens.push(tokens[current + i]);
      if (
        tokens[current + i].type === 'paren' &&
        tokens[current + i].value === ')'
      ) {
        tmpQueue.pop();
      }
      if (
        tokens[current + i].type === 'paren' &&
        tokens[current + i].value === '('
      ) {
        tmpQueue.push(1);
      }
      i += 1;
    }
    i -= 1;

    if (
      tokens[current + i].type === 'paren' &&
      tokens[current + i].value === ')'
    ) {
      tmpTokens.pop();
      const tmpVal = parser(null, tmpTokens, 0);
      return [i + 1, tmpVal];
    }
  }
  return [0, null];
}

function parseDivide(output: any, tokens: any, current: any) {
  if (output != null && tokens[current].type === 'divide') {
    const possibleTokens = [
      'number',
      'decimal',
      'minus',
      'paren',
      'variable',
      'function',
    ];
    if (
      current < tokens.length &&
      possibleTokens.indexOf(tokens[current + 1].type) !== -1
    ) {
      let parsed = false;
      let ct: any = null;
      const possibleParsers = [
        parseLiterals,
        parseMinus,
        parseParen,
        parseFunction,
      ];
      possibleParsers.forEach(parserFn => {
        if (parsed) {
          return;
        }
        let consumedTokens;
        let newOutput: any;
        if (parserFn === parseMinus) {
          [consumedTokens, newOutput] = parserFn(null, tokens, current + 1);
        } else {
          [consumedTokens, newOutput] = parserFn(output, tokens, current + 1);
        }
        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
        }
        const precedentParsers = [parseDivide, parseMultiply];
        let preParsed = false;
        let preOutput;
        precedentParsers.forEach(preParseFn => {
          if (preParsed) {
            return;
          }
          if (tokens[current]) {
            [consumedTokens, preOutput] = preParseFn(
              newOutput,
              tokens,
              current
            );
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

function parseMultiply(output: any, tokens: any, current: any) {
  if (output != null && tokens[current].type === 'multiply') {
    const possibleTokens = [
      'number',
      'decimal',
      'minus',
      'paren',
      'variable',
      'function',
    ];
    if (
      current < tokens.length &&
      possibleTokens.indexOf(tokens[current + 1].type) !== -1
    ) {
      let parsed = false;
      let ct: any = null;
      const possibleParsers = [
        parseLiterals,
        parseMinus,
        parseParen,
        parseFunction,
      ];
      possibleParsers.forEach(parserFn => {
        if (parsed) {
          return;
        }
        let consumedTokens;
        let newOutput: any;
        if (parserFn === parseMinus) {
          [consumedTokens, newOutput] = parserFn(null, tokens, current + 1);
        } else {
          [consumedTokens, newOutput] = parserFn(output, tokens, current + 1);
        }
        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
        }
        const precedentParsers = [parseDivide, parseMultiply];
        let preParsed = false;
        let preOutput;
        precedentParsers.forEach(preParseFn => {
          if (preParsed) {
            return;
          }
          if (tokens[current]) {
            [consumedTokens, preOutput] = preParseFn(
              newOutput,
              tokens,
              current
            );
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

function parsePlus(output: any, tokens: any, current: any) {
  if (output != null && tokens[current].type === 'plus') {
    const possibleTokens = [
      'number',
      'decimal',
      'string',
      'minus',
      'paren',
      'variable',
      'function',
    ];
    if (
      current < tokens.length &&
      possibleTokens.indexOf(tokens[current + 1].type) !== -1
    ) {
      let parsed = false;
      let ct: any = null;
      const possibleParsers = [
        parseLiterals,
        parseMinus,
        parseParen,
        parseFunction,
      ];
      possibleParsers.forEach(parserFn => {
        if (parsed) {
          return;
        }
        let consumedTokens;
        let newOutput: any;
        if (parserFn === parseMinus) {
          [consumedTokens, newOutput] = parserFn(null, tokens, current + 1);
        } else {
          [consumedTokens, newOutput] = parserFn(output, tokens, current + 1);
        }
        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
          const precedentParsers = [parseDivide, parseMultiply];
          let preParsed = false;
          let preOutput;
          precedentParsers.forEach(preParseFn => {
            if (preParsed) {
              return;
            }
            if (tokens[current]) {
              [consumedTokens, preOutput] = preParseFn(
                newOutput,
                tokens,
                current
              );
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

function parseMinus(output: any, tokens: any, current: any) {
  if (tokens[current].type === 'minus') {
    const possibleTokens = [
      'number',
      'decimal',
      'paren',
      'variable',
      'function',
    ];
    if (
      current < tokens.length &&
      possibleTokens.indexOf(tokens[current + 1].type) !== -1
    ) {
      let parsed = false;
      let ct: any = null;
      const possibleParsers = [parseLiterals, parseParen, parseFunction];
      possibleParsers.forEach(parserFn => {
        if (parsed) {
          return;
        }
        let [consumedTokens, newOutput] = parserFn(output, tokens, current + 1);
        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
          const precedentParsers = [parseDivide, parseMultiply];
          let preParsed = false;
          let preOutput;
          precedentParsers.forEach(preParseFn => {
            if (preParsed) {
              return;
            }
            if (tokens[current]) {
              [consumedTokens, preOutput] = preParseFn(
                newOutput,
                tokens,
                current
              );
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
            if (
              Object.prototype.toString.call(newOutput) === '[object Date]' &&
              Object.prototype.toString.call(output) === '[object Date]'
            ) {
              if (!isNaN(output.getTime()) && !isNaN(newOutput.getTime())) {
                output -= newOutput;
                output = Math.ceil(output / (1000 * 60 * 60 * 24));
              } else {
                output = NaN;
              }
            } else if (
              Object.prototype.toString.call(newOutput) === '[object Date]' ||
              Object.prototype.toString.call(output) === '[object Date]'
            ) {
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

const parsers = [
  parseIf,
  parseParen,
  parseLiterals,
  parseDivide,
  parseMultiply,
  parsePlus,
  parseMinus,
  parseLessThan,
  parseGreaterThan,
  parseEqual,
  parseAnd,
  parseOr,
  parseNot,
  parseFunction,
];

function parser(leftOutput: any, tokens: any, pos: any) {
  let current = pos;
  let output = leftOutput;
  while (current < tokens.length) {
    let parsed = false;
    parsers.forEach(parserFn => {
      if (parsed) {
        return;
      }
      const [consumedTokens, newOutput] = parserFn(output, tokens, current);
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
      console.log('syntax error');
      // tslint:disable-next-line: no-console
      console.log(actualExpression);
      return null;
    }
  }
  return output;
}

export default function evaluater(
  expression: string,
  tmpUserInput: any,
  tmpFormItemProperty: any,
  tmpCurrentHierarchicalName: string
) {
  if (!tmpUserInput) {
    tmpUserInput = {};
  }
  currentHierarchicalName = tmpCurrentHierarchicalName;
  actualExpression = expression;
  userInput = tmpUserInput;
  formItemProperty = tmpFormItemProperty;
  return parser(null, tokenizer(expression), 0);
}
