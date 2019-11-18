import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../../components/typeEvalutors/Base';
import GroupTypeEvaluator from '../../../../../components/typeEvalutors/Group';

export interface SingleRepeatProps {
  csvList: any;
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: any;
  defaultLanguage: string;
  repeatIndex: number;
  assignmentHandler: any;
  removeHandler: any;
}

class SingleRepeat extends React.Component<SingleRepeatProps> {
  public render() {
    const {
      csvList,
      defaultLanguage,
      fieldElement,
      fieldParentTreeName,
      repeatIndex,
    } = this.props;
    return (
      <div>
        <div>
          <span onClick={this.handleChange}>
            <FontAwesomeIcon icon="minus-circle" />
          </span>
        </div>
        {fieldElement.children && (
          <GroupTypeEvaluator
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
          />
        )}
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
    } = this.props;
    let newFieldValue: any[] = [...fieldValue];
    newFieldValue = newFieldValue.filter(
      // tslint:disable-next-line: variable-name
      (_elem, index) => index !== repeatIndex
    );
    assignmentHandler(fieldParentTreeName + fieldElement.name, newFieldValue);
    removeHandler(fieldParentTreeName + 'repeat/' + fieldElement.name + '/');
  };
}

export default SingleRepeat;
