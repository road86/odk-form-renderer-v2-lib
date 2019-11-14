import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, removeErrorInputId } from '../../../../store/ducks/formState';
/** props interface for the integer component */
export interface IntegerProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: any;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    getEvaluatedExpressionSelector: any;
    isComponentRender: boolean;
    isPresentInErrorSelector: any;
    addErrorInputIdActionCreator: typeof addErrorInputId;
    removeErrorInputIdActionCreator: typeof removeErrorInputId;
    defaultLanguage: string;
}
declare class Integer extends React.Component<IntegerProps> {
    render(): JSX.Element | null;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */
    private onChangeHandler;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
}
/** connect Integer component to the redux store */
declare const ConnectedInteger: import("react-redux").ConnectedComponent<typeof Integer, Pick<IntegerProps, "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedInteger;
