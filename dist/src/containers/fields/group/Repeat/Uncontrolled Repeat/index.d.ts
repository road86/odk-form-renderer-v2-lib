import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../../components/typeEvalutors/Base';
import { assignFieldValueAction, assignOptionListAction, emptyGroupFields, RemoveFromOptionList, removeGroupFieldsFromErrors } from '../../../../../store/ducks/formState';
export interface UncontrolledRepeatProps {
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
    optionList: object;
    emptyGroupFieldsActionCreator: typeof emptyGroupFields;
    removeGroupFieldsFromErrorsActionCreator: typeof removeGroupFieldsFromErrors;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    assignOptionListActionCreator: typeof assignOptionListAction;
    removeOptionListFromActionCreator: typeof RemoveFromOptionList;
}
declare class UncontrolledRepeat extends React.Component<UncontrolledRepeatProps> {
    render(): JSX.Element | null;
    private removeFromError;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    defaultLanguage: string;
}
/** connect Repeat component to the redux store */
declare const ConnectedUncontrolledRepeat: import("react-redux").ConnectedComponent<typeof UncontrolledRepeat, Pick<UncontrolledRepeatProps, "choices" | "csvList" | "defaultLanguage" | "fieldElement" | "fieldParentTreeName"> & ParentProps>;
export default ConnectedUncontrolledRepeat;
