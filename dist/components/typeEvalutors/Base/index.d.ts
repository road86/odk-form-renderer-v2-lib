import * as React from 'react';
/** type of fieldParentTreeName */
export declare type FieldParentTreeName = string;
/** interface for bind property */
interface BindProperty {
    calculate?: string;
    relevant?: string;
    readonly?: string;
    appearance?: string;
    required?: string;
    constraint?: string;
    'jr:constraintMsg'?: {
        [key: string]: string;
    } | string;
}
/** interface for kobo field element */
export interface FieldElement {
    name: string;
    type: string;
    children?: any[];
    bind?: BindProperty;
    label?: {
        [key: string]: string;
    } | string;
    default?: any;
    control?: any;
    hint?: any;
    itemset?: string;
    choice_filter?: string;
}
/** props interface for BaseTypeEvaluator component */
export interface BaseTypeEvaluatorProps {
    choices: any;
    csvList: any;
    defaultLanguage: string;
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
}
declare class BaseTypeEvaluator extends React.Component<BaseTypeEvaluatorProps> {
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    /** returns jsx components based on field types
     * @param {any} choices - the choices of form definition
     * @param {FieldElement} fieldElement - the field element object
     * @param {FieldParentTreeName} fieldParentTreeName - the field parent hierchical name
     * @return {React.ReactElement} - jsx base components
     */
    private typeEvaluator;
}
export default BaseTypeEvaluator;
