import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { GROUP_FIELD_TYPE, REPEAT_FIELD_TYPE } from '../../../constants';
import Group from '../../../containers/fields/group/Group';
import Repeat from '../../../containers/fields/group/Repeat';
import BaseTypeEvaluator, { FieldElement, FieldParentTreeName } from '../Base';

/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
  choices: any;
  csvList: any;
  defaultLanguage: string;
  fieldElements: FieldElement[];
  fieldParentTreeName: string;
  isAppearanceApplicable: boolean;
}

class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
  public render() {
    const {
      choices,
      csvList,
      fieldElements,
      fieldParentTreeName,
      defaultLanguage,
      isAppearanceApplicable,
    } = this.props;
    return (
      <Row>
        {fieldElements.map(fieldElement => (
          <Col
            key={'group_' + fieldElement.name}
            className={'groupTypeEvaluator'}
            md={this.getAppearanceValue(fieldElement, isAppearanceApplicable)}
          >
            {this.typeEvaluator(
              choices,
              csvList,
              fieldElement,
              fieldParentTreeName,
              defaultLanguage
            )}
          </Col>
        ))}
      </Row>
    );
  }

  /** returns jsx components based on field types
   * @param {any} choices - the form choices
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} - the field parent hierarchical name
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  private typeEvaluator(
    choices: any,
    csvList: any,
    fieldElement: FieldElement,
    fieldParentTreeName: FieldParentTreeName,
    defaultLanguage: string
  ): React.ReactElement {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return (
          <div>
            <Group
              choices={choices}
              fieldElement={fieldElement}
              fieldParentTreeName={fieldParentTreeName}
              defaultLanguage={defaultLanguage}
              csvList={csvList}
            />
          </div>
        );
      case REPEAT_FIELD_TYPE:
        return (
          <div>
            <Repeat
              choices={choices}
              fieldElement={fieldElement}
              fieldParentTreeName={fieldParentTreeName}
              defaultLanguage={defaultLanguage}
              csvList={csvList}
            />
          </div>
        );
      default:
        return (
          <BaseTypeEvaluator
            choices={choices}
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
            csvList={csvList}
          />
        );
    }
  }

  private getAppearanceValue = (
    fieldElement: FieldElement,
    isAppearanceApplicable: boolean
  ): number => {
    if (
      isAppearanceApplicable &&
      fieldElement.control &&
      fieldElement.control.appearance
    ) {
      if (/^w(\d+)\b/i.test(fieldElement.control.appearance)) {
        const processedStringArray = fieldElement.control.appearance.match(
          /^w(\d+)\b/i
        );
        const processedString = processedStringArray[0].replace('w', '');
        const result = isNaN(processedString)
          ? 12
          : parseInt(processedString, 10);
        return result;
      }
    }
    return 12;
  };
}

export default GroupTypeEvaluator;
