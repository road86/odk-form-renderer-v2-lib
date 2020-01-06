import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, assignOptionListAction, removeErrorInputId } from '../../../../../store/ducks/formState';
/** props interface for the SelectOne component */
export interface SelectOneRadioProps {
    choices: any;
    csvList: any;
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: string;
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
declare class SelectOneRadio extends React.Component<SelectOneRadioProps> {
    render(): JSX.Element | null;
    /** sets the value of Radio Button field element in store
     * @param {any} event - the onchange input event
     * @param {any} fieldName - the input name
     */
    private onChangeHandlerRadio;
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */
    private getProcessedString;
    /** generates unique radio button options using CSV
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
/** connect SelectOne Radio component to the redux store */
declare const ConnectedSelectOneRadio: import("react-redux").ConnectedComponent<typeof SelectOneRadio, Pick<SelectOneRadioProps, "choices" | "csvList" | "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedSelectOneRadio;
