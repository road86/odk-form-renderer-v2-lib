import * as React from 'react';
import Select from 'react-select';

export interface DropDownProps {
  languages: any;
  onChangeSelect: any;
}

export interface Options {
  label: any;
  value: string;
}

class DropDown extends React.Component<DropDownProps> {
  public render() {
    const options: Options[] = [];
    const languageOptions = [...this.props.languages];
    languageOptions.map((elem: any) => {
      options.push({ label: elem.label, value: elem.value });
    });

    return (
      <Select
        multi={false}
        options={options}
        className={'col-md-2 dropDown'}
        placeholder="Language"
        onChange={this.onChangeHandler}
      />
    );
  }

  /** pass the selected value to the parent class
   * @param {any} event - the onchange input event
   */
  private onChangeHandler = (event: any) => {
    this.props.onChangeSelect(event.value);
  };
}

export default DropDown;
