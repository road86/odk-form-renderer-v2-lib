import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../../components/typeEvalutors/Base';
import GroupTypeEvaluator from '../../../../../components/typeEvalutors/Group';

export interface SingleRepeatProps {
  choices: any;
  csvList: any;
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: any;
  defaultLanguage: string;
  repeatIndex: number;
  assignmentHandler: any;
  removeHandler: any;
  removeOptionHandler: any;
  unControlFlag: boolean;
}

class SingleRepeat extends React.Component<SingleRepeatProps> {
  public render() {
    const {
      choices,
      csvList,
      defaultLanguage,
      fieldElement,
      fieldParentTreeName,
      repeatIndex,
      unControlFlag,
    } = this.props;
    let isAppearanceApplicable = false;
    if (fieldElement.control && fieldElement.control.appearance) {
      if (/^w(\d+)\b/i.test(fieldElement.control.appearance)) {
        isAppearanceApplicable = true;
      }
    }
    return (
      <div className={'groupFormFieldBody'}>
        {fieldElement.children && (
          <GroupTypeEvaluator
            choices={choices}
            fieldElements={fieldElement.children}
            fieldParentTreeName={
              fieldParentTreeName +
              'repeat/' +
              fieldElement.name +
              '/' +
              repeatIndex +
              '/'
            }
            defaultLanguage={defaultLanguage}
            csvList={csvList}
            isAppearanceApplicable={isAppearanceApplicable}
          />
        )}

        {unControlFlag === false ? (
          <div className={'minusIconWrapper'}>
            <span onClick={this.handleChange}>
              <FontAwesomeIcon icon="minus-circle" className={'minusIcon'} />
            </span>
          </div>
        ) : null}
      </div>
    );
  }

  // tslint:disable-next-line: variable-name
  private handleChange = (_event: React.MouseEvent<HTMLDivElement>) => {
    const {
      repeatIndex,
      fieldValue,
      assignmentHandler,
      fieldElement,
      fieldParentTreeName,
      removeHandler,
      removeOptionHandler,
    } = this.props;
    let newFieldValue: any[] = [...fieldValue];
    newFieldValue = newFieldValue.filter(
      // tslint:disable-next-line: variable-name
      (_elem, index) => index !== repeatIndex
    );
    assignmentHandler(fieldParentTreeName + fieldElement.name, newFieldValue);
    removeHandler(fieldParentTreeName + 'repeat/' + fieldElement.name + '/');
    removeOptionHandler(fieldParentTreeName + fieldElement.name, repeatIndex);
  };
}

export default SingleRepeat;
