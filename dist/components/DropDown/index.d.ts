import * as React from 'react';
export interface DropDownProps {
    languages: any;
    onChangeSelect: any;
    defaultLanguage: string;
}
export interface Options {
    label: any;
    value: string;
}
declare class DropDown extends React.Component<DropDownProps> {
    render(): JSX.Element;
    /** pass the selected value to the parent class
     * @param {any} event - the onchange input event
     */
    private onChangeHandler;
}
export default DropDown;
