import * as React from 'react';
/** interface for kobo field element */
export interface FieldElement {
    name: string;
    type: string;
    children?: any[];
    bind?: object;
    label?: string | object;
}
/** props interface for BaseTypeEvaluator component */
export interface BaseTypeEvaluatorProps {
    fieldElement: FieldElement;
}
declare class BaseTypeEvaluator extends React.Component<BaseTypeEvaluatorProps> {
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    /** returns jsx components based on field types
     * @param {FieldElement} fieldElement - the field element object
     * @return {React.ReactElement} - jsx base components
     */
    private typeEvaluator;
}
export default BaseTypeEvaluator;
