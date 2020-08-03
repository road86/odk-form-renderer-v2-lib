# Codebase Walkthrough 

The library code resides in the `src/` directory and the root file is ‘src/index.tsx’.   

 

If you take a glance at the `src/` folder, it should look something like below 

``` 

src/ 
|── App/ 
|── components/ 
|── containers/ 
|── store/ 
|── utils/ 
|── constants.tsx 
|── index.tsx 
|── setupTests.ts 
|── typings.d.ts 

``` 

## Files and Folders inside `src/` 

### `index.tsx` 

The root file which contains the default component that will be exported after installing the library. 

### `typings.d.ts` 

The `typings.d.ts` contain type definition for modular `CSS` to work. 

### `setupTests.ts` 

The root/config file that is used to setup unit testing of the library. 

> Currently, the unit test code is not enough. To make it successful or better, we need to write more test codes. Also, it may or may not fail some tests. Some things may not have been updated in test codes. 

### `constants.tsx` 

Should have been named `constants.ts` instead of `constants.tsx` since it does not contain any react component. It contains the global variables used throughout the codebase. Mostly, this involves field types and default message texts. 

### `App/` 

The `App/index.tsx` contains the app component (main component), a direct descendent of the `src/index.tsx`. It contains handlers and methods required to be associated with the root component. Moreover, it is connected with the redux `store`.  

### `store/` 

The `store/index.tsx` creates and initializes the store that is used by the library.   

``` 
store/
|── ducks/ 
|   |── formstate.ts 
|   ... 
|── index.tsx 
... 
``` 
Other than that, the `ducks/` folder contain all the reducers with actions and selectors. 

>Currently, there is only one reducer which resides inside  `formstate.ts` .

### `utils/`

```
utils/
|── compiler.ts
|── helpers.ts
```
 The `compiler.ts` contains the default evaluator method that is required mostly to evaluate odk syntax expressions.

 The `helpers.ts` contain the utility methods that need/can be shared among many components.

### `components/`

Mostly, contain the reusable react components. Notable ones are `typeEvalutors\Base\index.tsx` and `typeEvalutors\Group\index.tsx` which calls the base or group related field component based on field type.

### `containers/`

These are components that are connected with the redux store. Presently, there are only `fields` components: `base` and `group` (`Group` and `Repeat`) typed components.

