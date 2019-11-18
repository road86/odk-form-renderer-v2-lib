import * as React from 'react';
import {
  CALCULATE_FIELD_TYPE,
  DATE_FIELD_TYPE,
  DATE_TIME_FIELD_TYPE,
  DECIMAL_FIELD_TYPE,
  INTEGER_FIELD_TYPE,
  NOTE_FIELD_TYPE,
  PHOTO_FIELD_TYPE,
  SELECT_ALL_FIELD_TYPE,
  SELECT_ONE_FIELD_TYPE,
  TEXT_FIELD_TYPE,
} from '../../../constants';
import Calculate from '../../../containers/fields/base/Calculate';
import KbDate from '../../../containers/fields/base/Date';
import DateTime from '../../../containers/fields/base/Date Time';
import Decimal from '../../../containers/fields/base/Decimal';
import Integer from '../../../containers/fields/base/Integer';
import Note from '../../../containers/fields/base/Note';
import Photo from '../../../containers/fields/base/Photo';
import SelectAll from '../../../containers/fields/base/Select All';
import SelectOne from '../../../containers/fields/base/Select One';
import Text from '../../../containers/fields/base/Text';

/** type of fieldParentTreeName */
export type FieldParentTreeName = string;

/** interface for bind property */
interface BindProperty {
  calculate?: string;
  relevant?: string;
  readonly?: string;
  appearance?: string;
  required?: string;
  constraint?: string;
  'jr:constraintMsg'?: { [key: string]: string } | string;
}

/** interface for kobo field element */
export interface FieldElement {
  name: string;
  type: string;
  children?: any[];
  bind?: BindProperty;
  label?: { [key: string]: string } | string;
  default?: any;
  control?: any;
  hint?: any;
}

/** props interface for BaseTypeEvaluator component */
export interface BaseTypeEvaluatorProps {
  csvList: any;
  defaultLanguage: string;
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
}

class BaseTypeEvaluator extends React.Component<BaseTypeEvaluatorProps> {
  public render() {
    const {
      csvList,
      fieldElement,
      fieldParentTreeName,
      defaultLanguage,
    } = this.props;
    return this.typeEvaluator(
      csvList,
      fieldElement,
      fieldParentTreeName,
      defaultLanguage
    );
  }

  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} fieldParentTreeName - the field parent hierchical name
   * @return {React.ReactElement} - jsx base components
   */
  private typeEvaluator(
    csvList: any,
    fieldElement: FieldElement,
    fieldParentTreeName: FieldParentTreeName,
    defaultLanguage: string
  ): React.ReactElement {
    switch (fieldElement.type) {
      case TEXT_FIELD_TYPE:
        return (
          <Text
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
      case DATE_FIELD_TYPE:
        return (
          <KbDate
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
      case DATE_TIME_FIELD_TYPE:
        return (
          <DateTime
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
      case INTEGER_FIELD_TYPE:
        return (
          <Integer
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
      case DECIMAL_FIELD_TYPE:
        return (
          <Decimal
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
      case NOTE_FIELD_TYPE:
        return (
          <Note
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
      case CALCULATE_FIELD_TYPE:
        return (
          <Calculate
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
      case SELECT_ONE_FIELD_TYPE:
        return (
          <SelectOne
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
            csvList={csvList}
          />
        );
      case SELECT_ALL_FIELD_TYPE:
        return (
          <SelectAll
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
            csvList={csvList}
          />
        );
      case PHOTO_FIELD_TYPE:
        return (
          <Photo
            fieldElement={fieldElement}
            defaultLanguage={defaultLanguage}
          />
        );
      default:
        return (
          <div>
            Other {fieldElement.type} {fieldElement.name}
          </div>
        );
    }
  }
}

export default BaseTypeEvaluator;
