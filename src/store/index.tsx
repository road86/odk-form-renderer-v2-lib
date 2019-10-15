import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { FormState } from './ducks/formState';

/** The initial store */
const store: Store & FormState = createStore(reducer, composeWithDevTools());

export default store;
