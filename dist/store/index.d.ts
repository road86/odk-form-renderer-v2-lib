import { Store } from 'redux';
import { FormState } from './ducks/formState';
/** The initial store */
declare const store: Store & FormState;
export default store;
