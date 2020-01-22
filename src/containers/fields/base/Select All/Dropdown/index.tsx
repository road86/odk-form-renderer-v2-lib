import _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../../components/typeEvalutors/Base';
import { REQUIRED_FIELD_MSG, REQUIRED_SYMBOL } from '../../../../../constants';
import {
  addErrorInputId,
  assignFieldValueAction,
  assignOptionListAction,
  getEvaluatedExpression,
  getEvaluatedExpressionForSelect,
  getFieldValue,
  getOptionList,
  isPresentInError,
  removeErrorInputId,
} from '../../../../../store/ducks/formState';
import {
  customizeLabelsWithPreviousInputs,
  getConstraintLabelText,
  getFieldLabelText,
  getHintLabelText,
  isInputRequired,
  shouldComponentBeRelevant,
  shouldInputViolatesConstraint,
} from '../../../../../utils/helpers';

/** props interface for the SelectAll Dropdown component */
export interface SelectAllDropDownProps {
  choices: any;
  csvList: any;
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: any;
  optionList: object;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  assignOptionListActionCreator: typeof assignOptionListAction;
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

class SelectAllDropDown extends React.Component<SelectAllDropDownProps> {
  public render() {
    const {
      choices,
      fieldElement,
      fieldParentTreeName,
      fieldValue,
      isComponentRender,
      getEvaluatedExpressionSelector,
      isPresentInErrorSelector,
      defaultLanguage,
    } = this.props;

    const isRequired = isInputRequired(fieldElement);
    const isRequiredViolated = isRequired && (!fieldValue || fieldValue === []);
    const isConstraintViolated =
      fieldValue &&
      fieldValue !== [] &&
      shouldInputViolatesConstraint(
        fieldElement,
        fieldParentTreeName,
        getEvaluatedExpressionSelector
      );
    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    const modifiedFieldLabel = customizeLabelsWithPreviousInputs(
      getEvaluatedExpressionSelector,
      fieldLabel,
      fieldParentTreeName + fieldElement.name
    );
    const constraintLabel = getConstraintLabelText(
      fieldElement,
      defaultLanguage
    );
    const modifiedConstraintLabel = customizeLabelsWithPreviousInputs(
      getEvaluatedExpressionSelector,
      constraintLabel,
      fieldParentTreeName + fieldElement.name
    );
    const hintLabel = getHintLabelText(fieldElement, defaultLanguage);
    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          fieldElement.default
        );
      }

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
      const options: Options[] = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        const updatedFieldElement: any = fieldElement.control.appearance
          .toString()
          .replace('minimal', '');
        if (/search\([^\)|(]+\)/i.test(updatedFieldElement)) {
          const processedStringArray = updatedFieldElement.match(
            /search\([^\)|(]+\)/i
          ) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (
        fieldElement.control &&
        fieldElement.control.appearance &&
        /search\([^\)|(]+\)/i.test(fieldElement.control.appearance)
      ) {
        resultOptions.map(elem =>
          options.push({ label: elem.label, value: elem.name })
        );
        this.setOptionList(resultOptions);
      } else if (fieldElement.itemset) {
        if (choices && choices[fieldElement.itemset.trim()]) {
          _.forEach(choices[fieldElement.itemset.trim()], (elem: any) => {
            if (
              fieldElement.choice_filter &&
              this.props.getEvaluatedExpressionSelectorForSelect(
                fieldElement.choice_filter,
                fieldParentTreeName + fieldElement.name,
                elem
              )
            ) {
              const childrenLabel: string = getFieldLabelText(
                elem,
                defaultLanguage
              );
              options.push({ label: childrenLabel, value: elem.name });
            }
          });

          const optionsArray: any = [];
          if (options) {
            options.map(elem => {
              const elemObj: any = {};
              const name: string = 'name';
              const label: string = 'label';
              elemObj[name] = elem.value;
              elemObj[label] = elem.label;
              optionsArray.push(elemObj);
            });
          }
          this.setOptionList(optionsArray);
        }
      } else {
        if (fieldElement.children) {
          fieldElement.children.map(elem => {
            const childrenLabel: string = getFieldLabelText(
              elem,
              defaultLanguage
            );

            options.push({ label: childrenLabel, value: elem.name });
          });
          this.setOptionList(fieldElement.children);
        }
      }

      const tmpValueArray: any = [];
      let isNotIncluded: boolean = false;
      if (fieldValue && fieldValue.length > 0) {
        const optionsValueArray: any = [];
        options.map(elem => {
          if (elem.value) {
            optionsValueArray.push(elem.value);
          }
        });

        for (const row of fieldValue) {
          if (!optionsValueArray.includes(row)) {
            isNotIncluded = true;
          } else {
            tmpValueArray.push(row);
          }
        }
      }

      if (fieldValue && fieldValue.length > 0 && isNotIncluded) {
        this.props.assignFieldValueActionCreator(
          this.props.fieldParentTreeName + fieldElement.name,
          tmpValueArray || []
        );
      }

      const selectedValues: any[] = [];
      if (fieldValue && fieldValue.length > 0) {
        options.map(elem => {
          for (const row of fieldValue) {
            if (elem.value === row) {
              selectedValues.push(elem);
            }
          }
        });
      }

      if (typeof this.props.fieldValue === 'string') {
        const seperatedValues: string[] = fieldValue.split(' ');
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          seperatedValues
        );
      }

      return (
        <FormGroup>
          <Label>{modifiedFieldLabel}</Label>
          {isRequired && (
            <Label className="requiredTextSteric">{REQUIRED_SYMBOL}</Label>
          )}
          <div key={fieldElement.name} className="selectAllDropDown">
            <Select
              isMulti={true}
              name={fieldElement.name}
              options={options}
              onChange={this.onChangeHandler(fieldElement.name)}
              value={selectedValues || []}
            />
          </div>
          {fieldElement.hint && <Label className="hintText">{hintLabel}</Label>}
          {isRequiredViolated && (
            <Label className="requiredText">{REQUIRED_FIELD_MSG}</Label>
          )}
          {isConstraintViolated && (
            <Label className="constraintText">{modifiedConstraintLabel}</Label>
          )}
        </FormGroup>
      );
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
      if (this.props.optionList != null) {
        this.props.assignOptionListActionCreator(
          this.props.fieldParentTreeName + fieldElement.name,
          null
        );
      }
      return null;
    }
  }

  /** Sets the option list to the Redux Store
   * @param {any} optionObject - the option object to be processed
   */
  private setOptionList = (optionObject: any) => {
    const tempObjArray: any = [];
    optionObject.map((elem: { name: any; label: any }) => {
      const elemObj: any = {};
      const name: string = 'name';
      const label: string = 'label';
      elemObj[name] = elem.name;
      elemObj[label] = elem.label;
      tempObjArray.push(elemObj);
    });

    if (!_.isEqual(this.props.optionList, { ...tempObjArray })) {
      this.props.assignOptionListActionCreator(
        this.props.fieldParentTreeName + this.props.fieldElement.name,
        tempObjArray
      );
    }
  };

  /** sets the value of field element in store
   * @param {any} values - the onchange input values
   * @param {any} fieldName - the input name
   */
  private onChangeHandler = (fieldName: any) => (values: any) => {
    const selectedValues: any = [];
    let i = 0;

    if (values) {
      values.map(() => {
        if (!selectedValues.includes(values[i].value)) {
          selectedValues.push(values[i].value);
        }
        i++;
      });

      this.props.assignFieldValueActionCreator(
        this.props.fieldParentTreeName + fieldName,
        selectedValues
      );
    } else {
      this.props.assignFieldValueActionCreator(
        this.props.fieldParentTreeName + fieldName,
        null
      );
    }
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

  /** generates unique dropdown options using CSV
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
    const finalRes: any[] = [];
    const csv: any = this.props.csvList;
    csvName = csvName.substring(1, csvName.length - 1) + '.csv';

    if (csv[csvName]) {
      const modifiedName = csvName.replace(/'/g, '');
      options = this.props.csvList[modifiedName] || [];
    }

    if (criteriaType && criteriaType.trim() === 'matches') {
      let i = 0;
      while (i < filterCriterias.length) {
        let nameOfKey = filterCriterias[i].trim();
        nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
        const interConnectedValue = filterCriterias[i + 1];
        const tempOptions = [...options];

        let filterResult: any = [];
        tempOptions.forEach(elm => {
          filterResult = this.props.getEvaluatedExpressionSelectorForSelect(
            interConnectedValue,
            this.props.fieldParentTreeName + this.props.fieldElement.name,
            elm
          );
        });

        let j = 0;
        filterResult.map(() => {
          options.map(option => {
            if (option[nameOfKey] === filterResult[j]) {
              finalRes.push(option);
            }
          });
          j = j + 1;
        });

        i = i + 2;
      }

      options = [...Array.from(new Set(finalRes))];
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
  fieldValue: string[];
  getEvaluatedExpressionSelector: any;
  getEvaluatedExpressionSelectorForSelect: any;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
  optionList: object;
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
    optionList: getOptionList(state, fieldParentTreeName + fieldElement.name),
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  assignOptionListActionCreator: assignOptionListAction,
  removeErrorInputIdActionCreator: removeErrorInputId,
};

/** connect SelectOne Dropdown component to the redux store */
const ConnectedSelectAllDropDown = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAllDropDown);

export default ConnectedSelectAllDropDown;
