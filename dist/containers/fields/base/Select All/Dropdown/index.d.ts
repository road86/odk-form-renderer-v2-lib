import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, assignOptionListAction, removeErrorInputId } from '../../../../../store/ducks/formState';
/** props interface for the SelectAll Dropdown component */
export interface SelectAllDropDownProps {
    choices: any;
    csvList: any;
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: string[];
    optionList: object;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    assignOptionListActionCreator: typeof assignOptionListAction;
    getEvaluatedExpressionSelector: any;
    getEvaluatedExpressionSelectorForSelect: any;
    isComponentRender: boolean;
    isPresentInErrorSelector: any;
    addErrorInputIdActionCreator: typeof addErrorInputId;
    removeErrorInputIdActionCreator: typeof removeErrorInputId;
    defaultLanguage: string;
}
export interface Options {
    label: any;
    value: string;
}
declare class SelectAllDropDown extends React.Component<SelectAllDropDownProps> {
    render(): JSX.Element | null;
    /** Sets the option list to the Redux Store
     * @param {any} optionObject - the option object to be processed
     */
    private setOptionList;
    /** sets the value of field element in store
     * @param {any} values - the onchange input values
     * @param {any} fieldName - the input name
     */
    private onChangeHandler;
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
    defaultLanguage: string;
}
/** connect SelectOne Dropdown component to the redux store */
declare const ConnectedSelectAllDropDown: import("react-redux").ConnectedComponent<typeof SelectAllDropDown, Pick<SelectAllDropDownProps, "choices" | "csvList" | "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedSelectAllDropDown;
