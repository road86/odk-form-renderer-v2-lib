![store](./images/store.svg)

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
  mediaList: object;
}
```
### Brief description of the store major keys

#### userInput

The `userInput` key contains the most updated form field values.

#### errors

The `errors` hold the list of field names that have input values missing when required or violating form constraints. If the form successfully passes all the constraints or does not have any required missing values, the `errors` key will be an empty array with no field names. And form submission will only be successful if this key is empty.

#### optionList 

The `optionList` holds all the options of single select and multiple select presents in the forms at the time of rendered. It add or removes any options based on user input of fields.

#### isFormSubmitted

The initial value of this key is `false`. It acts as a utility flag on whether to show required or constraint messages If a form gets submitted and the submission is not successful, the flag is assigned `true`.

#### mediaList

The mediaList stores the file objects that are uploaded to the form. It saves in a dictionary where keys represent file name and values represent the file object.

### Action Creatorers

#### `assignFieldValueAction`

The method returns an action that is used to set user input value to respective fields in `userInput` key based on field names.

Brief Info:

 * param {string} fieldTreeName - the extended field name
 * param {any} fieldValue - the value that will be assigned
 * return {AssignFieldValueAction} - an action to assign value to a field in the redux store

 > The extended name is a name that is created by appending the parent names with base name using `/` separator. It preserves the tree structure, meaning the hierchical positon. Sometimes, this convention of naming is also referred as `fieldTreeName`.

#### `assignOptionListAction`

The method returns an action that is used to set option list value to respective fields in `optionList` key based on field names.

Brief Info:

* @param {string} fieldTreeName - the extended field name
* @param {any} fieldValue - the option list that will be assigned
* @return {AssignOptionListAction} - an action to assign option List to a field in the redux store

#### `RemoveFromOptionList`

The method returns an action that is used to remove the existing option list.

Brief Info:

* @param fieldTreeName - the field tree name
* @returns {RemoveFromOptionList} - an action to remove input id for errors

#### `resetStoreAction`

 The method returns an action that is used to reset the state of the store to its initial state.

Brief Info:

* @return {ResetStoreAction} - an action to reset the redux store state

#### `addErrorInputId`

The method returns an action that adds a field name to the error list. This action is usually called when a required field that has no value or on a field that has a current value that is violating any constraint.

Brief Info:
* @param fieldTreeName - the field tree name
* @returns {AddErrorInputId} - an action to add input id for errors

#### `removeErrorInputId`

The method returns an action that removes the existing field name from the error list. This action creator is usually called when the form field is no longer empty if required or contains a value that violates the field constraint.

Brief Info:

* @param fieldTreeName - the field tree name
* @returns {RemoveErrorInputId} - an action to remove input id for errors


#### `emptyGroupFields`

The method returns an action that empties the group field values given a specific group field name. It is usually called when the existing rendered group element is no longer required and has populated values. 

Brief Info:

* @param fieldTreeName - the group field tree name
* @returns {RemoveErrorInputId} - an action to empty the group field values

#### `removeGroupFieldsFromErrors`

The method returns an action that removes the field names exist under a passed group field name from the error list. 

Brief Info:

* @param {string} fieldTreeName - the group field tree name
* @returns {RemoveGroupFieldsFromErrors} - an action to remove group field names from errors

#### `setUserInputObj`

The method returns an action that is used to set passed object to the `userInput` state of the store.

Brief Info:

* @param {any} userInputObj - the user input obj
* @returns {SetUserInputObj} - an action to set user input to redux store

#### `setFormSubmitStatus`

The method returns an action that is used to set the flag of the `isFormSubmitted`.

Brief Info:

* @param {boolean} isFormSubmitted - the form submit info variable
* @returns {SetFormSubmitInfo} - an action to set form submit info to redux store

#### `addMediaListAction`

The method returns an action that is used to add media/file object to the `mediaList` key.

Brief Info:

* @param {any} mediaObject - the media object that will be added
* @return {AddMediaListAction} - an action to assign media object to a field in the redux store

> The `removeFromMediaListAction` is not functional. May need to be implemented in the future if a use case rises.

### Selectors

Selectors retrieve data from the store state. The following table shows the list of selectors currently available.

|Name|Description|
|--|--|
|`getFieldValue`| The method returns the field value from the `userInput` key of the store based on the passed field tree name. |
|`getOptionList`| The method returns the option list from the `optionList` key of the store based on the passed field tree name. |
|`getEvaluatedExpression`| The method is a wrapper method that encapsulates the redux state data and compiler into one unit. |
|`getEvaluatedExpressionForSelect`| The method is a special wrapper method that encapsulates the redux state data and compiler into one unit while exposing the option list parameter.|
|`isPresentInError`| The method checks whether the passed field element is in the error list key |
|`isGroupFieldsEmpty`| The method checks whether the fields under the passed group field name is empty or not |
| `isErrorsIncludeGroupFields` | The method checks whether the field names under the passed group field name are present in the error list or not |
| `isErrorsArrayEmpty` | The method checks whether the error list is empty or not. |
| `getUserInputFromStore` | The method returns the `userInput` key value. |
| `getFormSubmitStatus` | The method returns the flag value of isFormSubmitted |
| `getFileObject` | The method returns a file object given the file name |
|`getAllFileObjects` | The method returns all the file objects present in the store |

For more information or details on selectors, please check inside the file `src/store/ducks/formState.ts`.