import _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../../components/typeEvalutors/Base';
import { REQUIRED_FIELD_MSG, REQUIRED_SYMBOL } from '../../../../../constants';
import {
  addErrorInputId,
  assignFieldValueAction,
  getEvaluatedExpression,
  getEvaluatedExpressionForSelect,
  getFieldValue,
  isPresentInError,
  removeErrorInputId,
} from '../../../../../store/ducks/formState';
import {
  getConstraintLabelText,
  getFieldLabelText,
  isInputRequired,
  shouldComponentBeReadOnly,
  shouldComponentBeRelevant,
  shouldInputViolatesConstraint,
} from '../../../../../utils/helpers';

/** props interface for the SelectOne component */
export interface SelectOneRadioProps {
  csvList: any;
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: string;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  getEvaluatedExpressionSelector: any;
  getEvaluatedExpressionSelectorForSelect: any;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
  addErrorInputIdActionCreator: typeof addErrorInputId;
  removeErrorInputIdActionCreator: typeof removeErrorInputId;
  defaultLanguage: string;
}

export interface Options {
  label: any;
  value: string;
}

class SelectOneRadio extends React.Component<SelectOneRadioProps> {
  public render() {
    const {
      fieldElement,
      fieldParentTreeName,
      fieldValue,
      isComponentRender,
      getEvaluatedExpressionSelector,
      isPresentInErrorSelector,
      defaultLanguage,
    } = this.props;
    const isRequired = isInputRequired(fieldElement);
    const isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    const isConstraintViolated =
      fieldValue &&
      fieldValue !== '' &&
      shouldInputViolatesConstraint(
        fieldElement,
        fieldParentTreeName,
        getEvaluatedExpressionSelector
      );
    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    const constraintLabel = getConstraintLabelText(
      fieldElement,
      defaultLanguage
    );
    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          fieldElement.default
        );
      }
      const isReadonly = shouldComponentBeReadOnly(
        fieldElement,
        fieldParentTreeName,
        getEvaluatedExpressionSelector
      );
      if (
        (isRequiredViolated || isConstraintViolated) &&
        !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)
      ) {
        this.props.addErrorInputIdActionCreator(
          fieldParentTreeName + fieldElement.name
        );
      } else if (
        !isRequiredViolated &&
        !isConstraintViolated &&
        isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)
      ) {
        this.props.removeErrorInputIdActionCreator(
          fieldParentTreeName + fieldElement.name
        );
      }

      let resultOptions: any[] = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        if (/search\([^\)|(]+\)/i.test(fieldElement.control.appearance)) {
          const processedStringArray = fieldElement.control.appearance.match(
            /search\([^\)|(]+\)/i
          ) || [''];

          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        if (fieldValue) {
          const optionsValueArray: any = [];
          resultOptions.map(elem => {
            if (elem.name) {
              optionsValueArray.push(elem.name);
            }
          });

          if (!optionsValueArray.includes(fieldValue)) {
            this.props.assignFieldValueActionCreator(
              this.props.fieldParentTreeName + fieldElement.name,
              ''
            );
          }
        }
        return (
          <FormGroup>
            <Label>{fieldLabel}</Label>
            {isRequired && <Label>{REQUIRED_SYMBOL}</Label>}
            {resultOptions.map((elem, index) => (
              <div key={index} className="col-md-12">
                <Input
                  key={fieldElement.name + '-' + index}
                  type="radio"
                  name={fieldElement.name}
                  value={elem.name}
                  onChange={this.onChangeHandlerRadio(fieldElement.name)}
                  readOnly={isReadonly}
                  checked={elem.name === fieldValue}
                />{' '}
                {elem.label}
              </div>
            ))}
            {isRequiredViolated && <Label>{REQUIRED_FIELD_MSG}</Label>}
            {isConstraintViolated && <Label>{constraintLabel}</Label>}
          </FormGroup>
        );
      } else {
        if (fieldElement.children) {
          return (
            <FormGroup>
              <Label>{fieldLabel}</Label>
              {isRequired && <Label>{REQUIRED_SYMBOL}</Label>}
              {fieldElement.children.map((elem, index) => (
                <div key={index} className="col-md-12">
                  <Input
                    key={fieldElement.name + '-' + index}
                    type="radio"
                    name={fieldElement.name}
                    value={elem.name}
                    onChange={this.onChangeHandlerRadio(fieldElement.name)}
                    readOnly={isReadonly}
                  />{' '}
                  {elem.name}
                </div>
              ))}
              {isRequiredViolated && <Label>{REQUIRED_FIELD_MSG}</Label>}
              {isConstraintViolated && <Label>{constraintLabel}</Label>}
            </FormGroup>
          );
        } else {
          return null;
        }
      }
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          null
        );
        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(
            fieldParentTreeName + fieldElement.name
          );
        }
      }
      return null;
    }
  }
  /** sets the value of Radio Button field element in store
   * @param {any} event - the onchange input event
   * @param {any} fieldName - the input name
   */
  private onChangeHandlerRadio = (fieldName: any) => (event: any) => {
    this.props.assignFieldValueActionCreator(
      this.props.fieldParentTreeName + fieldName,
      event.target.value || ''
    );
  };

  /** converts apeearance text into array and pass them to further process
   * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
   */
  private getProcessedString = (stringWithSearchKeyWord: string) => {
    const processedStringArray = stringWithSearchKeyWord.match(
      /\([^\)]+\)/i
    ) || [''];
    let params = processedStringArray[0];

    if (params.length > 2) {
      params = params.substring(1, params.length - 1);
      const resultArray = params.split(',');
      let criteriaParams = [...resultArray];
      criteriaParams = criteriaParams.splice(2, criteriaParams.length);
      return this.extractAndFilterOptions(
        resultArray[0],
        resultArray[1] || null,
        criteriaParams || []
      );
    }
    return [];
  };

  /** generates unique radio button options using CSV
   * @param {string} csvName - the CSV file name
   * @param {string | null} criteriaType - criteria to match with previous user input
   * @param {any} filterCriterias - previous user input collections
   */
  private extractAndFilterOptions = (
    csvName: string,
    criteriaType: string | null,
    filterCriterias: any
  ) => {
    if (criteriaType) {
      criteriaType = criteriaType.trim();
      criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
    }

    let options: any[] = [];
    const distinctOptions: any[] = [];
    if (csvName) {
      options = [...this.props.csvList];
    }

    if (criteriaType && criteriaType.trim() === 'matches') {
      let i = 0;
      while (i < filterCriterias.length) {
        let nameOfKey = filterCriterias[i].trim();
        nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
        const interConnectedValue = filterCriterias[i + 1];
        const tempOptions = [...options];
        tempOptions.forEach(elm => {
          const filterResult = this.props.getEvaluatedExpressionSelectorForSelect(
            interConnectedValue,
            this.props.fieldParentTreeName + this.props.fieldElement.name,
            elm
          );
          options = options.filter(
            option => option[nameOfKey] === filterResult
          );
        });

        i = i + 2;
      }
    }

    if (options.length !== 0) {
      let labelColumnName: string = '';
      let valueColumnName: string = '';
      if (
        this.props.fieldElement.children &&
        this.props.fieldElement.children[0] &&
        this.props.fieldElement.children[0].name &&
        this.props.fieldElement.children[0].label
      ) {
        labelColumnName = getFieldLabelText(
          this.props.fieldElement.children[0],
          this.props.defaultLanguage
        );
        valueColumnName = this.props.fieldElement.children[0].name;
      }

      options.forEach(elem => {
        const tmpOpt: any = {};
        const label: string = 'label';
        const name: string = 'name';
        tmpOpt[label] = elem[labelColumnName].trim();
        tmpOpt[name] = elem[valueColumnName].trim();
        distinctOptions.push(tmpOpt);
      });
      return _.uniqBy(distinctOptions, 'name');
    }
    return [];
  };
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: string;
  getEvaluatedExpressionSelector: any;
  getEvaluatedExpressionSelectorForSelect: any;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
}

/** Interface to describe props from parent */
interface ParentProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  defaultLanguage: string;
}

/** Map props to state  */
const mapStateToProps = (
  state: Partial<Store>,
  parentProps: ParentProps
): DispatchedStateProps => {
  const { fieldElement, fieldParentTreeName } = parentProps;
  const getEvaluatedExpressionSelector = (
    expression: string,
    fieldTreeName: string
  ) => getEvaluatedExpression(state, expression, fieldTreeName);
  const getEvaluatedExpressionSelectorForSelect = (
    expression: string,
    fieldTreeName: string,
    options: any
  ) =>
    getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  const isPresentInErrorSelector = (fieldTreeName: string) =>
    isPresentInError(state, fieldTreeName);
  const result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(
      fieldElement,
      fieldParentTreeName,
      getEvaluatedExpressionSelector
    ),
    isPresentInErrorSelector,
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId,
};

/** connect SelectOne Radio component to the redux store */
const ConnectedSelectOneRadio = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOneRadio);

export default ConnectedSelectOneRadio;
