import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, removeErrorInputId } from '../../../../store/ducks/formState';
/** props interface for the KbDate component */
export interface DateProps {
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
declare class KbDate extends React.Component<DateProps> {
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
/** connect KbDate component to the redux store */
declare const ConnectedDate: import("react-redux").ConnectedComponent<typeof KbDate, Pick<DateProps, "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedDate;
