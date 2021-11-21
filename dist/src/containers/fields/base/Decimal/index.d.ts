import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, removeErrorInputId } from '../../../../store/ducks/formState';
/** props interface for the decimal component */
export interface DecimalProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: any;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    getEvaluatedExpressionSelector: any;
    getFormSubmitStatusSelector: boolean;
    isComponentRender: boolean;
    isPresentInErrorSelector: any;
    addErrorInputIdActionCreator: typeof addErrorInputId;
    removeErrorInputIdActionCreator: typeof removeErrorInputId;
    defaultLanguage: string;
}
export interface DecimalState {
    fieldValue: string;
    isFocused: boolean;
}
declare class Decimal extends React.Component<DecimalProps, DecimalState> {
    constructor(props: DecimalProps);
    render(): JSX.Element | null;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */
    private onChangeHandler;
    private onBlurHandler;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
}
/** connect Decimal component to the redux store */
declare const ConnectedDecimal: import("react-redux").ConnectedComponent<typeof Decimal, Pick<DecimalProps, "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedDecimal;
