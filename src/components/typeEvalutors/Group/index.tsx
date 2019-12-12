import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { GROUP_FIELD_TYPE, REPEAT_FIELD_TYPE } from '../../../constants';
import Group from '../../../containers/fields/group/Group';
import Repeat from '../../../containers/fields/group/Repeat';
import BaseTypeEvaluator, { FieldElement, FieldParentTreeName } from '../Base';

/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
  csvList: any;
  defaultLanguage: string;
  fieldElements: FieldElement[];
  fieldParentTreeName: string;
}

class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
  public render() {
    const {
      csvList,
      fieldElements,
      fieldParentTreeName,
      defaultLanguage,
    } = this.props;
    return (
      <Row>
        <Col md={12}>
          {fieldElements.map(fieldElement => (
            <div
              key={'group_' + fieldElement.name}
              className={'groupTypeEvaluator'}
            >
              {this.typeEvaluator(
                csvList,
                fieldElement,
                fieldParentTreeName,
                defaultLanguage
              )}
            </div>
          ))}
        </Col>
      </Row>
    );
  }

  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} - the field parent hierarchical name
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  private typeEvaluator(
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
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
            csvList={csvList}
          />
        );
    }
  }
}

export default GroupTypeEvaluator;
