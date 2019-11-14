import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { assignFieldValueAction, emptyGroupFields, removeGroupFieldsFromErrors } from '../../../../store/ducks/formState';
export interface RepeatProps {
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
}
declare class Repeat extends React.Component<RepeatProps> {
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
declare const ConnectedRepeat: import("react-redux").ConnectedComponent<typeof Repeat, Pick<RepeatProps, "defaultLanguage" | "fieldElement" | "fieldParentTreeName"> & ParentProps>;
export default ConnectedRepeat;
