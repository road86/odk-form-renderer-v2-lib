import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, assignOptionListAction, removeErrorInputId } from '../../../../../store/ducks/formState';
/** props interface for the SelectAll Radio component */
export interface SelectAllRadioProps {
    choices: any;
    csvList: any;
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: string[];
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    assignOptionListActionCreator: typeof assignOptionListAction;
    getEvaluatedExpressionSelector: any;
    getEvaluatedExpressionSelectorForSelect: any;
    isComponentRender: boolean;
    isPresentInErrorSelector: any;
    addErrorInputIdActionCreator: typeof addErrorInputId;
    removeErrorInputIdActionCreator: typeof removeErrorInputId;
    defaultLanguage: string;
    optionList: object;
}
export interface Options {
    label: any;
    value: string;
}
declare class SelectAllRadio extends React.Component<SelectAllRadioProps> {
    render(): JSX.Element | null;
    /** sets the value of field element in store
     * @param {any} event - the onchange event
     */
    private onChangeHandlerCheckBox;
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */
    private getProcessedString;
    /** generates unique dropdown options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */
    private extractAndFilterOptions;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
}
/** connect SelectOne Radio component to the redux store */
declare const ConnectedSelectAllRadio: import("react-redux").ConnectedComponent<typeof SelectAllRadio, Pick<SelectAllRadioProps, "choices" | "csvList" | "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedSelectAllRadio;
