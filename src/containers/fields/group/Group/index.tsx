import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import GroupTypeEvaluator from '../../../../components/typeEvalutors/Group';
import {
  emptyGroupFields,
  getEvaluatedExpression,
  isErrorsIncludeGroupFields,
  isGroupFieldsEmpty,
  removeGroupFieldsFromErrors,
} from '../../../../store/ducks/formState';
import {
  getFieldLabelText,
  shouldComponentBeRelevant,
} from '../../../../utils/helpers';
import GroupStyle from './styles';

export interface GroupProps {
  choices: any;
  csvList: any;
  defaultLanguage: string;
  fieldElement: FieldElement;
  fieldParentTreeName: string;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isGroupFieldsEmptySelector: any;
  isErrorsIncludeGroupFieldsSelector: any;
  emptyGroupFieldsActionCreator: typeof emptyGroupFields;
  removeGroupFieldsFromErrorsActionCreator: typeof removeGroupFieldsFromErrors;
}

function Group(props: GroupProps) {
  const {
    choices,
    csvList,
    fieldElement,
    fieldParentTreeName,
    defaultLanguage,
    isComponentRender,
  } = props;
  const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
  let isAppearanceApplicable = false;
  if (fieldElement.control && fieldElement.control.appearance) {
    if (/^w(\d+)\b/i.test(fieldElement.control.appearance)) {
      isAppearanceApplicable = true;
    }
  }
  const theme = useTheme();
  const useStyles = makeStyles(GroupStyle(theme));
  const classNames = useStyles();
  if (
    isComponentRender
    && (fieldElement.control.bodyless
      ? fieldElement.control.bodyless === false
      : true)
  ) {
    return (
      <Accordion>
        <AccordionSummary
          className={classNames.root}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{fieldLabel}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Label className="groupLabel">{fieldLabel}</Label>
            {fieldElement.children && (
              <GroupTypeEvaluator
                choices={choices}
                fieldElements={fieldElement.children}
                fieldParentTreeName={`${fieldParentTreeName}group/${fieldElement.name}/`}
                defaultLanguage={defaultLanguage}
                csvList={csvList}
                isAppearanceApplicable={isAppearanceApplicable}
              />
            )}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    );
  }

  if (
    props.isErrorsIncludeGroupFieldsSelector(
      `${fieldParentTreeName}group/${fieldElement.name}/`
    )
  ) {
    props.removeGroupFieldsFromErrorsActionCreator(
      `${fieldParentTreeName}group/${fieldElement.name}/`
    );
  }
  if (
    !props.isGroupFieldsEmptySelector(fieldParentTreeName + fieldElement.name)
  ) {
    props.emptyGroupFieldsActionCreator(
      fieldParentTreeName + fieldElement.name
    );
  }
  return null;
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isGroupFieldsEmptySelector: any;
  isErrorsIncludeGroupFieldsSelector: any;
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
  const isGroupFieldsEmptySelector = (fieldTreeName: string) =>
    isGroupFieldsEmpty(state, fieldTreeName);
  const isErrorsIncludeGroupFieldsSelector = (fieldTreeName: string) =>
    isErrorsIncludeGroupFields(state, fieldTreeName);
  const result = {
    getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(
      fieldElement,
      fieldParentTreeName,
      getEvaluatedExpressionSelector
    ),
    isErrorsIncludeGroupFieldsSelector,
    isGroupFieldsEmptySelector,
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors,
};

/** connect Group component to the redux store */
const ConnectedGroup = connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);

export default ConnectedGroup;
