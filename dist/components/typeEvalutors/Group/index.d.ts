import * as React from 'react';
import { FieldElement } from '../Base';
/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
    defaultLanguage: string;
    fieldElements: FieldElement[];
    fieldParentTreeName: string;
}
declare class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
    render(): JSX.Element;
    /** returns jsx components based on field types
     * @param {FieldElement} fieldElement - the field element object
     * @param {FieldParentTreeName} - the field parent hierarchical name
     * @return {React.ReactElement} - jsx group components/ base evaluator component
     */
    private typeEvaluator;
}
export default GroupTypeEvaluator;
