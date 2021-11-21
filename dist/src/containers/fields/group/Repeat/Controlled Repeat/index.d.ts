import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../../components/typeEvalutors/Base';
import { assignFieldValueAction, emptyGroupFields, RemoveFromOptionList, removeGroupFieldsFromErrors } from '../../../../../store/ducks/formState';
export interface ControlledRepeatProps {
    choices: any;
    csvList: any;
    defaultLanguage: string;
    fieldElement: FieldElement;
    fieldValue: any;
    fieldParentTreeName: string;
    getEvaluatedExpressionSelector: any;
    isComponentRender: boolean;
    isGroupFieldsEmptySelector: any;
    isErrorsIncludeGroupFieldsSelector: any;
    emptyGroupFieldsActionCreator: typeof emptyGroupFields;
    removeGroupFieldsFromErrorsActionCreator: typeof removeGroupFieldsFromErrors;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    removeOptionListFromActionCreator: typeof RemoveFromOptionList;
}
declare class ControlledRepeat extends React.Component<ControlledRepeatProps> {
    render(): JSX.Element | null;
    private addAnotherRepeat;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    defaultLanguage: string;
}
/** connect Group component to the redux store */
declare const ConnectedControlledRepeat: import("react-redux").ConnectedComponent<typeof ControlledRepeat, Pick<ControlledRepeatProps, "choices" | "csvList" | "defaultLanguage" | "fieldElement" | "fieldParentTreeName"> & ParentProps>;
export default ConnectedControlledRepeat;
