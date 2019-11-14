import 'bootstrap/dist/css/bootstrap.min.css';
import { createElement, Component } from 'react';
import { connect, Provider } from 'react-redux';
import { FormGroup, Input, Container, Row, Col } from 'reactstrap';
import SeamlessImmutable from 'seamless-immutable';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

// Field Types
var GROUP_FIELD_TYPE = 'group';
var TEXT_FIELD_TYPE = 'text';
/* tslint:disable */

var DEMO_FORM_JSON = {
  default_language: 'English',
  id_string: 'capacity_building',
  children: [{
    name: 'start',
    type: 'start'
  }, {
    name: 'end',
    type: 'end'
  }, {
    name: 'username',
    type: 'username'
  }, {
    name: 'note',
    label: {
      English: 'Capacity Building Entry Field'
    },
    type: 'note'
  }, {
    name: 'event_name',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'Name of the event'
    },
    type: 'text'
  }, {
    children: [{
      name: '1',
      label: {
        English: 'Training'
      }
    }, {
      name: '2',
      label: {
        English: 'Workshop'
      }
    }, {
      name: '3',
      label: {
        English: 'Conference'
      }
    }, {
      name: '4',
      label: {
        English: 'Seminar'
      }
    }],
    name: 'event_type',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'Event Type'
    },
    type: 'select one'
  }, {
    children: [{
      name: '1',
      label: {
        English: 'In house Training'
      }
    }, {
      name: '2',
      label: {
        English: 'Out of Office'
      }
    }, {
      name: '3',
      label: {
        English: 'Training in Abroad'
      }
    }],
    name: 'training_type',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'Training Type'
    },
    type: 'select one'
  }, {
    children: [{
      name: '1',
      label: {
        English: 'Life skills / Social Skills'
      }
    }, {
      name: '2',
      label: {
        English: 'Gender Issues'
      }
    }, {
      name: '3',
      label: {
        English: 'Legal Issues'
      }
    }, {
      name: '4',
      label: {
        English: 'Skill based training'
      }
    }, {
      name: '5',
      label: {
        English: "Survivor'r rights"
      }
    }, {
      name: '6',
      label: {
        English: 'Burn Care Training'
      }
    }, {
      name: '7',
      label: {
        English: 'Mental health'
      }
    }, {
      name: '8',
      label: {
        English: 'Organization Development'
      }
    }, {
      name: '9',
      label: {
        English: 'HR management'
      }
    }, {
      name: '99',
      label: {
        English: 'Others'
      }
    }],
    name: 'capacity_building_subject',
    label: {
      English: 'Subject of capacity building'
    },
    type: 'select one'
  }, {
    name: 'capacity_building_subject_other',
    bind: {
      relevant: '${capacity_building_subject}=99',
      required: 'Yes'
    },
    label: {
      English: 'Specify the Subject of capacity building'
    },
    type: 'text'
  }, {
    name: 'duration',
    label: {
      English: 'Duration'
    },
    type: 'note'
  }, {
    name: 'event_start_date',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'Start Date'
    },
    type: 'date'
  }, {
    name: 'event_end_date',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'End Date'
    },
    type: 'date'
  }, {
    name: 'location',
    label: {
      English: 'Location'
    },
    type: 'note'
  }, {
    control: {
      appearance: "search('geo')"
    },
    children: [{
      name: 'division_code',
      label: {
        Bangla: 'division_name',
        English: 'division_name'
      }
    }],
    name: 'division',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'Division'
    },
    type: 'select one'
  }, {
    control: {
      appearance: "search('geo', 'matches', 'division_code', ${division})"
    },
    children: [{
      name: 'district_code',
      label: {
        Bangla: 'district_name',
        English: 'district_name'
      }
    }],
    name: 'district',
    bind: {
      relevant: '${division}',
      required: 'Yes'
    },
    label: {
      English: 'District'
    },
    type: 'select one'
  }, {
    control: {
      appearance: "search('geo', 'matches', 'district_code', ${district})"
    },
    children: [{
      name: 'upazila_code',
      label: {
        Bangla: 'upazila_name',
        English: 'upazila_name'
      }
    }],
    name: 'upazila',
    bind: {
      relevant: '${district}',
      required: 'Yes'
    },
    label: {
      English: 'Upazila'
    },
    type: 'select one'
  }, {
    control: {
      appearance: "search('geo', 'matches', 'upazila_code', ${upazila})"
    },
    children: [{
      name: 'union_code',
      label: {
        Bangla: 'union_name',
        English: 'union_name'
      }
    }],
    name: 'union',
    bind: {
      relevant: '${upazila}',
      required: 'Yes'
    },
    label: {
      English: 'Union'
    },
    type: 'select one'
  }, {
    children: [{
      name: '1',
      label: {
        English: '1'
      }
    }, {
      name: '2',
      label: {
        English: '2'
      }
    }, {
      name: '3',
      label: {
        English: '3'
      }
    }, {
      name: '4',
      label: {
        English: '4'
      }
    }, {
      name: '5',
      label: {
        English: '5'
      }
    }, {
      name: '6',
      label: {
        English: '6'
      }
    }, {
      name: '7',
      label: {
        English: '7'
      }
    }, {
      name: '8',
      label: {
        English: '8'
      }
    }, {
      name: '9',
      label: {
        English: '9'
      }
    }],
    name: 'ward',
    bind: {
      relevant: '${union}',
      required: 'Yes'
    },
    label: {
      English: 'Ward'
    },
    type: 'select one'
  }, {
    name: 'participant',
    label: {
      English: 'Participants'
    },
    type: 'note'
  }, {
    name: 'participant_male',
    bind: {
      'jr:constraintMsg': {
        English: 'Negative value not allowed'
      },
      required: 'Yes',
      constraint: '.>=0'
    },
    label: {
      English: 'Male'
    },
    type: 'integer'
  }, {
    name: 'participant_female',
    bind: {
      'jr:constraintMsg': {
        English: 'Negative value not allowed'
      },
      required: 'Yes',
      constraint: '.>=0'
    },
    label: {
      English: 'Female'
    },
    type: 'integer'
  }, {
    name: 'participant_girl',
    bind: {
      'jr:constraintMsg': {
        English: 'Negative value not allowed'
      },
      required: 'Yes',
      constraint: '.>=0'
    },
    label: {
      English: 'Girls'
    },
    type: 'integer'
  }, {
    name: 'participant_boy',
    bind: {
      'jr:constraintMsg': {
        English: 'Negative value not allowed'
      },
      required: 'Yes',
      constraint: '.>=0'
    },
    label: {
      English: 'Boys'
    },
    type: 'integer'
  }, {
    name: 'participant_trangender',
    bind: {
      'jr:constraintMsg': {
        English: 'Negative value not allowed'
      },
      required: 'Yes',
      constraint: '.>=0'
    },
    label: {
      English: 'Transgender'
    },
    type: 'integer'
  }, {
    name: 'particiapnt_total',
    bind: {
      readonly: 'TRUE',
      required: 'Yes',
      calculate: '${participant_male}+${participant_female}+${participant_girl}+${participant_boy}+${participant_trangender}'
    },
    label: {
      English: 'Total'
    },
    type: 'text'
  }, {
    children: [{
      name: '1',
      label: {
        English: 'ASF'
      }
    }, {
      name: '99',
      label: {
        English: 'Others'
      }
    }],
    name: 'organized_by',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'Organized by'
    },
    type: 'select one'
  }, {
    name: 'organized_by_other',
    bind: {
      relevant: '${organized_by}=99',
      required: 'Yes'
    },
    label: {
      English: 'Specify the organizer'
    },
    type: 'text'
  }, {
    name: 'funding_source',
    bind: {
      required: 'Yes'
    },
    label: {
      English: 'Funding Source'
    },
    type: 'text'
  }, {
    name: 'reporting_attachment',
    bind: {
      required: 'No'
    },
    label: {
      English: 'Report Attachment'
    },
    type: 'photo'
  }, {
    control: {
      bodyless: true
    },
    children: [{
      name: 'instanceID',
      bind: {
        readonly: 'true()',
        calculate: "concat('uuid:', uuid())"
      },
      type: 'calculate'
    }],
    name: 'meta',
    type: 'group'
  }],
  version: '1.0.1',
  type: 'survey',
  name: 'capacity_building',
  sms_keyword: 'capacity_building',
  title: 'Capacity Building'
};

/** FIELD_VALUE_ASSIGNED action type */

var FIELD_VALUE_ASSIGNED = 'odk/reducer/form/FIELD_VALUE_ASSIGNED';
/** RESET_STORE action type */

var RESET_STORE = 'odk/reducer/form/RESET_STORE';
/** Assigns the value to the proper field name
 * @param {string} fieldTreeName - the extended field name
 * @param {any} fieldValue - the value that will be assigned
 * @return {AssignFieldValueAction} - an action to assign value to a field in the redux store
 */

var assignFieldValueAction = function assignFieldValueAction(fieldTreeName, fieldValue) {
  return {
    fieldTreeName: fieldTreeName,
    fieldValue: fieldValue,
    type: FIELD_VALUE_ASSIGNED
  };
};
/** initial form state */

var initialState =
/*#__PURE__*/
SeamlessImmutable({
  errors: [],
  userInput: {}
});
/** the form reducer function */

function reducer(state, action) {
  var _tmpUserInput;

  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case FIELD_VALUE_ASSIGNED:
      var tmpUserInput = (_tmpUserInput = {}, _tmpUserInput[action.fieldTreeName] = action.fieldValue, _tmpUserInput);
      return SeamlessImmutable(_extends({}, state, {
        userInput: _extends({}, state.userInput, {}, tmpUserInput)
      }));

    case RESET_STORE:
      return initialState;

    default:
      return state;
  }
} // selectors

/** get the value by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @return {any | null} value if the element name is found else null
 */

function getFieldValue(state, fieldTreeName) {
  return state.userInput[fieldTreeName] || null;
}

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Text, _React$Component);

  function Text() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(event.currentTarget.name, event.currentTarget.value);
    };

    return _this;
  }

  var _proto = Text.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldValue = _this$props.fieldValue;
    return createElement(FormGroup, null, createElement(Input, {
      type: "text",
      name: fieldElement.name,
      onChange: this.onChangeHandler,
      value: fieldValue
    }));
  };

  return Text;
}(Component);
/** Map props to state  */


var mapStateToProps = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement;
  var result = {
    fieldValue: getFieldValue(state, fieldElement.name) || ''
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps = {
  assignFieldValueActionCreator: assignFieldValueAction
};
/** connect Text component to the redux store */

var ConnectedText =
/*#__PURE__*/
connect(mapStateToProps, mapDispatchToProps)(Text);

var BaseTypeEvaluator =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BaseTypeEvaluator, _React$Component);

  function BaseTypeEvaluator() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BaseTypeEvaluator.prototype;

  _proto.render = function render() {
    var fieldElement = this.props.fieldElement;
    return this.typeEvaluator(fieldElement);
  }
  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @return {React.ReactElement} - jsx base components
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(fieldElement) {
    switch (fieldElement.type) {
      case TEXT_FIELD_TYPE:
        return createElement(ConnectedText, {
          fieldElement: fieldElement
        });

      default:
        return createElement("div", null, "Other ", fieldElement.type, " ", fieldElement.name);
    }
  };

  return BaseTypeEvaluator;
}(Component);

var GroupTypeEvaluator =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(GroupTypeEvaluator, _React$Component);

  function GroupTypeEvaluator() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = GroupTypeEvaluator.prototype;

  _proto.render = function render() {
    var _this = this;

    var fieldElements = this.props.fieldElements;
    return createElement("div", null, fieldElements.map(function (fieldElement) {
      return createElement("div", {
        key: 'group_' + fieldElement.name
      }, _this.typeEvaluator(fieldElement));
    }));
  }
  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(fieldElement) {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return createElement("div", null, "GROUP ", fieldElement.type, " ", fieldElement.name);

      default:
        return createElement(BaseTypeEvaluator, {
          fieldElement: fieldElement
        });
    }
  };

  return GroupTypeEvaluator;
}(Component);

var App =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(App, _React$Component);

  function App() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.render = function render() {
    var props = {
      fieldElements: DEMO_FORM_JSON.children
    };
    return createElement(Container, {
      className: "form-container"
    }, createElement(Row, {
      className: "welcome-box"
    }, createElement(Col, null, createElement("h3", null, "Welcome to Odk Form Renderer"))), createElement(GroupTypeEvaluator, Object.assign({}, props)));
  };

  return App;
}(Component);

/** The initial store */

var store =
/*#__PURE__*/
createStore(reducer,
/*#__PURE__*/
composeWithDevTools());

var OdkFormRenderer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(OdkFormRenderer, _React$Component);

  function OdkFormRenderer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = OdkFormRenderer.prototype;

  _proto.render = function render() {
    return createElement(Provider, {
      store: store
    }, createElement(App, null));
  };

  return OdkFormRenderer;
}(Component);

export default OdkFormRenderer;
//# sourceMappingURL=odkformrenderer.esm.js.map
