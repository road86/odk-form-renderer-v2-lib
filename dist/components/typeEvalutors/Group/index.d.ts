import * as React from 'react';
import { FieldElement } from '../Base';
/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
    fieldElements: FieldElement[];
}
declare class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
    render(): JSX.Element;
    /** returns jsx components based on field types
     * @param {FieldElement} fieldElement - the field element object
     * @return {React.ReactElement} - jsx group components/ base evaluator component
     */
    private typeEvaluator;
}
export default GroupTypeEvaluator;
