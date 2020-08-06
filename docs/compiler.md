# Compiler

The codebase can be found in `src/utils/compiler.ts`.

## Default export method

The `evalutor` is the default export method. It takes an expression, **tokenizes** the expression using main `tokenizer` method and **parses** the generated tokens using main `parser` method and returns the **parsed value** as **evaluated value**. 

### Function Parameters

|name | typical types | Description |
|--|--|--|
|expression| string|expression that needs to be evaluated|
|tmpUserInput| object| the variable key-value json, (current user input json)|
|tmpFormItemProperty|object|the name key-value json (current option list) |
|tmpCurrentHierarchicalName| string|the node at which the evaluater is called |

## Tokenizer

The root tokenizer method goes by the name `tokenizer`.

```js
/**
 * tokenizer is primary method that takes the expression and convert them to appropiate tokens.
 * Throws syntax error if expression is not appropiate or could not be tokenized properly
 * @param {string} input - should be of string for valid cases
 * @returns array of tokens
 */
function tokenizer(input: any) {
```

The `input` parameter is where the expression is passed. If there is no unknown character, it will return a set of tokens; otherwise will throw a `js error`.

### Tokenizer utility/helper methods

The root method calls a set of utility tokenizer helper methods. The purpose of each of these individual tokenizer methods is to tokenize a particular pattern of tokens, which later can be parsed by the root parser. The precedence of these utility methods is determined by the following code:

```js
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
```
> The above code resides just above the root `tokenizer` method definition.


> The **precedence** is determined by **position** of the methods in the array. Example: `tokenizeIf` has higer precedence over `tokenizeDivide` since its index is lower.

All the tokenizer utiliy methods, like `tokenizeNot`, has a generalize structure. They take the same set of parameters (`input` and `current`), and return `tokenizeReturnObject`. 

The `tokenizeReturn` can be best described as an array of length two. The first element returns how many characters are consumed or matched with the pattern. Based on this, the root tokenizer changes its current postion. Secondly, the last or next element is a valid `token object` if it matches; otherwise `null`. The default `token object` has two keys: `type` and `value`. The `type` refers to token type and `value` refers to the raw value.

### Cases to understand more about the `tokenizeReturn` object

#### No match

Say, we have the following expression

```
1 and 2
```

Now, say the root tokenizer calls the `tokenizeIf` method. It has **nothing to tokenize**, and so in a case like this, the value of `tokenizeReturnObject` will be

```json
[0, null]
```

meaning

* `0` characters consumed
*  no valid token and so `null`

#### Matched

The case will be different for `tokenizeAnd`. It will return the following:

```json
[3, { "type": 'and', "value": 'and' }]
```

meaning

* 3 characters will be consumed
* token of type `and` and raw value is also `and`

#### Matched but return no token

The `skipWhiteSpace` is an outlier of this. If matched, it will return

```json
[1, null]
```

### **Core Algorithm**

For the case of easier understanding, we have an `expression` like below:

```js
1 + 2
```

1. First, the root tokenizer will take the `expression` and will set its positon to `0`.

>*position*

```js
    1 + 2
    ^
```

>*tokens*

```
    []
```

2. It will start calling out the tokenizer utility methods from the precedence array, starting from `skipWhiteSpace` to `tokenizeName`.

3. Methods like `skipWhiteSpace` will not be matched and will return `[0, null]` until `tokenizeNumber`.

4. The `tokenizeNumber` will return a valid token and will consume a character, `'1'`. So, now the position of root tokenizer will change and it will move from `0` to `1` 

>*position*

```js
    1 + 2
    ^
```

>*tokens*


```json
    [number]
```

5. In addition, the calling procedure will break and the root tokenizer will start to call from start again. In simple terms, it will not call the next method, `tokenizeDecimal`, since `tokenizeNumber` returns a valid token and consumes character. It will again start calling from top, i.e `skipWhiteSpace`.

6. Now, unlike the first time, `skipWhiteSpace` will be matched this time. And so there will be a change on the position but not on `tokens` array.


>*position*

```js
    1 + 2
      ^
```
>*tokens*

```json
    [number]
```


7. The same thing, like no `5`, will repeat and will go on until it reaches the end of the expression and the tokenization process is complete. 

**At the end, the expression and tokens will be like below**

>*position*

```js
    1 + 2
        ^
```

>*tokens*

```json
    [number, plus, number]
```

### Precedence is important !!!

The powerful tokenizer utility/helper methods need to be at a lower precedence than their weaker ones. For example,

#### <img src="./images/cross.png" width="25" height="20"> Incorrect use of precedence 

```diff
const tokenizers = [
  skipWhiteSpace,
  tokenizeParenOpen,
  tokenizeParenClose,
  tokenizeIf,
  tokenizeOr,
- tokenizeAnd,
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
- tokenizeName,
+ tokenizeName,
+ tokenizeAnd,
];
```
Having the `tokenizeName` at a higher precedence than `tokenizeAnd` will result in a situation where the root `tokenizer` will never need to call `tokenizerAnd`. This is because the pattern `"and"` will always be parsed as token `name` rather than `and`. 

## Parser

The root parser method goes by the name `parser`.

```js
/**
 * the main parser that parses the series of tokens generated by the tokenizer.
 * Throws syntax error if not parsed
 * @param {any} leftOutput - the initial output or output of previous left side tokens
 * @param {any} tokens - the set or array of tokens need to be parsed
 * @param {any} pos - the start position of the parser
 * @returns parsed value of the set of tokens
 */
function parser(leftOutput: any, tokens: any, pos: any) {
```

The `leftOutput` parameter is used to initialize a predefined parsed value. The `tokens` is where the set of generated tokens are passed and the `pos` is used to set the initial position of the parser, default is `0`.

> Example of `lefOutput`: say, we pass a value of `2` as `leftOutput` and `[]` as `tokens` and `0` as position, we will get a parsed return value of `2`.

### Parser utility/helper methods

Like the root tokenizer, the root parser also calls a set of utility parser helper methods. 
Each **utility parser helper** consumes a set of consecutive tokens and produces a parsed value or output.

Like the tokenizer helper methods, the parser helper methods also have a generic structure.
It takes the following parameters: `output` (the parsed output of previous tokens), `tokens` (the array of tokens) and `position` (the current position of the root parser). The return can be best described as `parserReturnObject` which has value `[numberOfTokensConsumed,updatedParsedValue]` if matched; otherwise, `[0, null]`.


### Precedence of parser utility/helper methods

The precedence of these utility methods can be best described as:

```js
// precedence of the parser methods
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
```

### Algorithm

The algorithm is of similar nature as tokenizer. Instead of generating tokens, it keeps updating parsed value while consuming the tokens and incrementing the parser position.