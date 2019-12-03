import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { emptyGroupFields, removeGroupFieldsFromErrors } from '../../../../store/ducks/formState';
export interface GroupProps {
    defaultLanguage: string;
    fieldElement: FieldElement;
    fieldParentTreeName: string;
    getEvaluatedExpressionSelector: any;
    isComponentRender: boolean;
    isGroupFieldsEmptySelector: any;
    isErrorsIncludeGroupFieldsSelector: any;
    emptyGroupFieldsActionCreator: typeof emptyGroupFields;
    removeGroupFieldsFromErrorsActionCreator: typeof removeGroupFieldsFromErrors;
}
declare class Group extends React.Component<GroupProps> {
    render(): JSX.Element | null;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    defaultLanguage: string;
}
/** connect Group component to the redux store */
declare const ConnectedGroup: import("react-redux").ConnectedComponent<typeof Group, Pick<GroupProps, "fieldElement" | "defaultLanguage" | "fieldParentTreeName"> & ParentProps>;
export default ConnectedGroup;
