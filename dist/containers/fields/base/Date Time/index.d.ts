import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, removeErrorInputId } from '../../../../store/ducks/formState';
import 'react-datepicker/dist/react-datepicker.css';
/** props interface for the date Time component */
export interface DateTimeProps {
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
declare class DateTime extends React.Component<DateTimeProps> {
    render(): JSX.Element | null;
    private handleChange;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
}
/** connect Date Time component to the redux store */
declare const ConnectedDateTime: import("react-redux").ConnectedComponent<typeof DateTime, Pick<DateTimeProps, "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedDateTime;
