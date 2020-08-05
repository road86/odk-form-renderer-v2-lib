# Walkthrough through Redux store

## Store

The store is initialized in `src/store.tsx` and added in `src/index.tsx` file.

## Reducer

Currently, there is one single reducer, that resides in the `src/ducks/formstate.ts`.

### State of the store
The state of the store can be best represented as below:

```js
export interface FormState {
  userInput: object;
  errors: string[];
  optionList: object;
  isFormSubmitted: boolean;
}
```
### Brief description of the major keys

#### userInput

The `userInput` key contains the most updated form field values.

#### errors

The `errors` hold the list of field names that have input values missing when required or violating form constraints. If the form successfully passes all the constraints or does not have any required missing values, the `errors` key will be an empty array with no field names. And form submission will only be successful if this key is empty.

#### optionList 

The `optionList` holds all the options of single select and multiple select presents in the forms at the time of rendered. It add or removes any options based on user input of fields.

#### isFormSubmitted

The initial value of this key is `false`. It acts as a utility flag on whether to show required or constraint messages If a form gets submitted and the submission is not successful, the flag is assigned `true`.