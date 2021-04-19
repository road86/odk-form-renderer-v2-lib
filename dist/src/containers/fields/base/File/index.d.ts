import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { addErrorInputId, addMediaListAction, assignFieldValueAction, removeErrorInputId } from '../../../../store/ducks/formState';
/** props interface for the file component */
export interface FileProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: any;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    addMediaListActionCreator: typeof addMediaListAction;
    getEvaluatedExpressionSelector: any;
    getFormSubmitStatusSelector: boolean;
    isComponentRender: boolean;
    isPresentInErrorSelector: any;
    addErrorInputIdActionCreator: typeof addErrorInputId;
    removeErrorInputIdActionCreator: typeof removeErrorInputId;
    defaultLanguage: string;
}
declare class File extends React.Component<FileProps> {
    render(): JSX.Element | null;
    /** sets the value of field element in store
     * @param event - the onchange input event
     */
    private onChangeHandler;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
}
/** connect File component to the redux store */
declare const ConnectedFile: import("react-redux").ConnectedComponent<typeof File, Pick<FileProps, "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedFile;
