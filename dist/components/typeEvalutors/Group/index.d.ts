import * as React from 'react';
import { FieldElement } from '../Base';
/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
    choices: any;
    csvList: any;
    defaultLanguage: string;
    fieldElements: FieldElement[];
    fieldParentTreeName: string;
    isAppearanceApplicable: boolean;
    getEvaluatedExpressionSelector: any;
}
declare class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
    render(): JSX.Element;
    /** returns jsx components based on field types
     * @param {any} choices - the form choices
     * @param {FieldElement} fieldElement - the field element object
     * @param {FieldParentTreeName} - the field parent hierarchical name
     * @return {React.ReactElement} - jsx group components/ base evaluator component
     */
    private typeEvaluator;
    private getAppearanceValue;
}
/** connect GroupTypeEvaluator component to the redux store */
declare const ConnectedGroupTypeEvaluator: import("react-redux").ConnectedComponent<typeof GroupTypeEvaluator, Pick<GroupTypeEvaluatorProps, "choices" | "csvList" | "defaultLanguage" | "fieldElements" | "fieldParentTreeName" | "isAppearanceApplicable">>;
export default ConnectedGroupTypeEvaluator;
