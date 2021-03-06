import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Store } from 'redux';
import { CALCULATE_FIELD_TYPE, GROUP_FIELD_TYPE, REPEAT_FIELD_TYPE } from '../../../constants';
import Group from '../../../containers/fields/group/Group';
import Repeat from '../../../containers/fields/group/Repeat';
import { getEvaluatedExpression } from '../../../store/ducks/formState';
import { shouldComponentBeRelevant } from '../../../utils/helpers';
import BaseTypeEvaluator, { FieldElement, FieldParentTreeName } from '../Base';

/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
  choices: any;
  csvList: any;
  defaultLanguage: string;
  fieldElements: FieldElement[];
  fieldParentTreeName: string;
  isAppearanceApplicable: boolean;
  getEvaluatedExpressionSelector: any;
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
      <Row className="groupTypeEvaluatorRow">
        {fieldElements.map((fieldElement) => {
          const value: number = this.getAppearanceValue(
            fieldElement,
            fieldParentTreeName,
            isAppearanceApplicable,
          );
          return (
            <Col
              key={`group_${fieldElement.name}`}
              className={ value === 0 || fieldElement.type === CALCULATE_FIELD_TYPE ? "groupTypeEvaluator hideDiv" : "groupTypeEvaluator"}
              md={value}
              // hidden={value === 0}
            >
              {this.typeEvaluator(
                choices,
                csvList,
                fieldElement,
                fieldParentTreeName,
                defaultLanguage,
              )}
            </Col>
          );
        })}
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
    defaultLanguage: string,
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
    fieldParentTreeName: string,
    isAppearanceApplicable: boolean,
  ): number => {
    const isRender: boolean = shouldComponentBeRelevant(
      fieldElement,
      fieldParentTreeName,
      this.props.getEvaluatedExpressionSelector,
    );

    if (!isRender) {
      return 0;
    } if (
      isRender
      && isAppearanceApplicable
      && fieldElement.control
      && fieldElement.control.appearance
    ) {
      if (/^w(\d+)\b/i.test(fieldElement.control.appearance)) {
        const processedStringArray = fieldElement.control.appearance.match(
          /^w(\d+)\b/i,
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

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  getEvaluatedExpressionSelector: any;
}

/** Map props to state  */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const getEvaluatedExpressionSelector = (
    expression: string,
    fieldTreeName: string,
  ) => getEvaluatedExpression(state, expression, fieldTreeName);

  const result = {
    getEvaluatedExpressionSelector,
  };
  return result;
};

/** connect GroupTypeEvaluator component to the redux store */
const ConnectedGroupTypeEvaluator = connect(mapStateToProps)(
  GroupTypeEvaluator,
);

export default ConnectedGroupTypeEvaluator;
