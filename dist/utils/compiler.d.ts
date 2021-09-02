/**
 * odk wrapper evaluator, default method that will be exported, parses expressions
 * @param {any} expression - expression that needs to be evaluated
 * @param {any} tmpUserInput - the variable key-value json, (current user input json)
 * @param {any} tmpFormItemProperty - the name key-value json (current option list)
 * @param {any} tmpCurrentHierarchicalName - the node at which the evaluater is called
 * @returns evaluated value
 */
export default function evaluater(expression: string, tmpUserInput: any, tmpFormItemProperty: any, tmpCurrentHierarchicalName: string): any;
