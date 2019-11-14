'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('bootstrap/dist/css/bootstrap.min.css');
var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactstrap = require('reactstrap');
var SeamlessImmutable = _interopDefault(require('seamless-immutable'));
var reactFontawesome = require('@fortawesome/react-fontawesome');
var _ = _interopDefault(require('lodash'));
var Select = _interopDefault(require('react-select'));
var redux = require('redux');
var reduxDevtoolsExtension = require('redux-devtools-extension');

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
var REPEAT_FIELD_TYPE = 'repeat';
var TEXT_FIELD_TYPE = 'text';
var DATE_FIELD_TYPE = 'date';
var DATE_TIME_FIELD_TYPE = 'dateTime';
var INTEGER_FIELD_TYPE = 'integer';
var DECIMAL_FIELD_TYPE = 'decimal';
var PHOTO_FIELD_TYPE = 'photo';
var NOTE_FIELD_TYPE = 'note';
var SELECT_ONE_FIELD_TYPE = 'select one';
var SELECT_ALL_FIELD_TYPE = 'select all that apply'; // Required Properties

var REQUIRED_FIELD_MSG = 'This field is required';
var REQUIRED_SYMBOL = '*';
/* tslint:disable */

var DEMO_FORM_JSON = {
  "default_language": "English",
  "children": [{
    "name": "start",
    "type": "start"
  }, {
    "name": "end",
    "type": "end"
  }, {
    "name": "username",
    "type": "username"
  }, {
    "name": "note_owner_info",
    "label": {
      "Bangla": "Owner Information",
      "English": "Owner Information"
    },
    "type": "note"
  }, {
    "control": {
      "appearance": "w12"
    },
    "children": [{
      "control": {
        "appearance": "w6"
      },
      "name": "date",
      "bind": {
        "jr:constraintMsg": {
          "Bangla": "No future date",
          "English": "No future date"
        },
        "required": "Yes",
        "constraint": ".<=today()"
      },
      "label": {
        "Bangla": "\u09A4\u09BE\u09B0\u09BF\u0996",
        "English": "Date"
      },
      "type": "date"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "owner_name",
      "bind": {
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u09AE\u09BE\u09B2\u09BF\u0995\u09C7\u09B0 \u09A8\u09BE\u09AE",
        "English": "Owner's name"
      },
      "type": "text"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "Union-1",
          "English": "Union-1"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "Union-2",
          "English": "Union-2"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "Union-3",
          "English": "Union-3"
        }
      }],
      "name": "union_name",
      "bind": {
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u0987\u0989\u09A8\u09BF\u09DF\u09A8",
        "English": "Union"
      },
      "type": "select one"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "village",
      "bind": {
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u0997\u09CD\u09B0\u09BE\u09AE",
        "English": "Village"
      },
      "type": "text"
    }, {
      "control": {
        "appearance": "w6 numbers"
      },
      "name": "mobile",
      "bind": {
        "jr:constraintMsg": {
          "Bangla": "\u09E7\u09E7 \u09A1\u09BF\u099C\u09BF\u099F \u09AA\u09CD\u09B0\u09AC\u09C7\u09B6 \u0995\u09B0\u09C1\u09A8",
          "English": "Put 11 digit"
        },
        "constraint": "regex(., '^[0-9]{11}$')"
      },
      "label": {
        "Bangla": "\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0",
        "English": "Mobile number"
      },
      "type": "text"
    }],
    "name": "owner_info",
    "label": {
      "Bangla": "Owner Information",
      "English": "Owner Information"
    },
    "type": "group"
  }, {
    "control": {
      "appearance": "No"
    },
    "name": "note_patient_info",
    "label": {
      "Bangla": "Patient Information",
      "English": "Patient Information"
    },
    "type": "note"
  }, {
    "control": {
      "appearance": "w12"
    },
    "children": [{
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "Buffalo",
          "English": "Buffalo"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "Cat",
          "English": "Cat"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "Cattle",
          "English": "Cattle"
        }
      }, {
        "name": "4",
        "label": {
          "Bangla": "Dog",
          "English": "Dog"
        }
      }, {
        "name": "5",
        "label": {
          "Bangla": "Goat",
          "English": "Goat"
        }
      }, {
        "name": "6",
        "label": {
          "Bangla": "Horse",
          "English": "Horse"
        }
      }, {
        "name": "7",
        "label": {
          "Bangla": "Pig",
          "English": "Pig"
        }
      }, {
        "name": "8",
        "label": {
          "Bangla": "Sheep",
          "English": "Sheep"
        }
      }, {
        "name": "21",
        "label": {
          "Bangla": "Chicken",
          "English": "Chicken"
        }
      }, {
        "name": "22",
        "label": {
          "Bangla": "Duck",
          "English": "Duck"
        }
      }, {
        "name": "23",
        "label": {
          "Bangla": "Goose",
          "English": "Goose"
        }
      }, {
        "name": "24",
        "label": {
          "Bangla": "Moyana",
          "English": "Moyana"
        }
      }, {
        "name": "25",
        "label": {
          "Bangla": "Pegion",
          "English": "Pegion"
        }
      }, {
        "name": "26",
        "label": {
          "Bangla": "Quail",
          "English": "Quail"
        }
      }, {
        "name": "27",
        "label": {
          "Bangla": "Turkey",
          "English": "Turkey"
        }
      }, {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }],
      "name": "species",
      "bind": {
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u09AA\u09CD\u09B0\u09BE\u09A3\u09C0 \u09AA\u09CD\u09B0\u099C\u09BE\u09A4\u09BF",
        "English": "Species"
      },
      "type": "select one"
    }, {
      "name": "species_label",
      "bind": {
        "calculate": "jr:choice-name(${species},'${species}')"
      },
      "label": {
        "Bangla": "species_label"
      },
      "type": "calculate"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "species_other",
      "bind": {
        "relevant": "${species}=00",
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u09AA\u09CD\u09B0\u09BE\u09A3\u09C0 \u09AA\u09CD\u09B0\u099C\u09BE\u09A4\u09BF - \u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF",
        "English": "Species - Other"
      },
      "type": "text"
    }, {
      "name": "species_label_final",
      "bind": {
        "calculate": "if(${species}='00',${species_other},${species_label})"
      },
      "label": {
        "Bangla": "species_label_final"
      },
      "type": "calculate"
    }, {
      "name": "species_value",
      "bind": {
        "calculate": "if(${species}=1,'M1',if(${species}=2,'M2',if(${species}=3,'M3',if(${species}=4,'M4',if(${species}=5,'M5',if(${species}=6,'M6',if(${species}=7,'M7',if(${species}=8,'M8',if(${species}='00' and ${species_type_other}=1,'M_Other',if(${species}=21,'B',if(${species}=22,'B',if(${species}=23,'B',if(${species}=24,'B',if(${species}=25,'B',if(${species}=26,'B',if(${species}=27,'B',if(${species}='00' and ${species_type_other}=2,'B','')))))))))))))))))"
      },
      "label": {
        "Bangla": "species_value"
      },
      "type": "calculate"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "Mammal",
          "English": "Mammal"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "Bird",
          "English": "Bird"
        }
      }],
      "name": "species_type_other",
      "bind": {
        "relevant": "${species}=00",
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u09AA\u09CD\u09B0\u09BE\u09A3\u09BF\u09B8\u09AE\u09CD\u09AA\u09A6",
        "English": "Livestock"
      },
      "type": "select one"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "species_type",
      "bind": {
        "required": "No",
        "calculate": "if((${species}>0 and ${species}<21) or ${species_type_other}=1,1,if((${species}>20 and ${species}<50) or ${species_type_other}=2,2,''))"
      },
      "label": {
        "Bangla": "Livestock type",
        "English": "Livestock type"
      },
      "media": {
        "image": "species_type_other"
      },
      "type": "calculate"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "itemset": "species_breed_type",
      "name": "species_breed_type",
      "bind": {
        "relevant": "${species}=3 or ${species}=21",
        "required": "No"
      },
      "choice_filter": "myfilter=${species}",
      "label": {
        "Bangla": "\u09AA\u09CD\u09B0\u09BE\u09A3\u09BF\u09B0 \u09A7\u09B0\u09A3",
        "English": "Mammal Type / breed"
      },
      "type": "select one"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "Milk",
          "English": "Milk"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "Meat",
          "English": "Meat"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "Working",
          "English": "Working"
        }
      }, {
        "name": "4",
        "label": {
          "Bangla": "Hobby",
          "English": "Hobby"
        }
      }, {
        "name": "5",
        "label": {
          "Bangla": "Fiber/Wool",
          "English": "Fiber/Wool"
        }
      }, {
        "name": "6",
        "label": {
          "Bangla": "Multi-purpose",
          "English": "Multi-purpose"
        }
      }],
      "name": "species_rearing_purpose",
      "bind": {
        "relevant": "${species_type}=1",
        "required": "Yes"
      },
      "label": {
        "Bangla": "Purpose [${species_label_final}]",
        "English": "Purpose [${species_label_final}]"
      },
      "type": "select one"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "age_month",
      "bind": {
        "relevant": "${species_type}=1",
        "required": "No"
      },
      "label": {
        "Bangla": "[${species_label_final}] \u098F\u09B0 \u09AC\u09DF\u09B8 (\u09AE\u09BE\u09B8)",
        "English": "Age (Month) [${species_label_final}]"
      },
      "type": "decimal"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "age_week",
      "bind": {
        "relevant": "${species_type}=2",
        "required": "No"
      },
      "label": {
        "Bangla": "[${species_label_final}] \u098F\u09B0 \u09AC\u09DF\u09B8 (\u09B8\u09AA\u09CD\u09A4\u09BE\u09B9)",
        "English": "Age (Week) [${species_label_final}]"
      },
      "type": "decimal"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "\u09AA\u09C1\u09B0\u09C1\u09B7",
          "English": "Male"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "\u09AE\u09B9\u09BF\u09B2\u09BE",
          "English": "Female"
        }
      }],
      "name": "sex",
      "bind": {
        "relevant": "${species_type}=1",
        "required": "No"
      },
      "label": {
        "Bangla": "[${species_label_final}] \u098F\u09B0 \u09B2\u09BF\u0999\u09CD\u0997",
        "English": "Sex [${species_label_final}]"
      },
      "type": "select one"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "herd_flock_number",
      "bind": {
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u09AE\u09CB\u099F [${species_label_final}] \u098F\u09B0 \u09B8\u0982\u0996\u09CD\u09AF\u09BE",
        "English": "Number of [${species_label_final}] in the herd / flock"
      },
      "type": "integer"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "sick_number",
      "bind": {
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u0986\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 [${species_label_final}] \u098F\u09B0 \u09B8\u0982\u0996\u09CD\u09AF\u09BE",
        "English": "Number of sick [${species_label_final}]"
      },
      "type": "integer"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "dead_number",
      "bind": {
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u09AE\u09C3\u09A4 [${species_label_final}] \u098F\u09B0 \u09B8\u0982\u0996\u09CD\u09AF\u09BE",
        "English": "Number of dead [${species_label_final}]"
      },
      "type": "integer"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "disease_history",
      "bind": {
        "required": "No"
      },
      "label": {
        "Bangla": "\u09B0\u09CB\u0997\u09C7\u09B0 \u0987\u09A4\u09BF\u09B9\u09BE\u09B8",
        "English": "Disease History"
      },
      "type": "text"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "itemset": "clinical_sign",
      "name": "clinical_sign",
      "bind": {
        "required": "Yes"
      },
      "choice_filter": "myfilter=${species_type}",
      "label": {
        "Bangla": "\u09B0\u09CB\u0997\u09C7\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3",
        "English": "Clinical Sign"
      },
      "type": "select all that apply"
    }, {
      "name": "clinical_sign_other",
      "bind": {
        "relevant": "selected(${clinical_sign},'00')",
        "required": "Yes"
      },
      "label": {
        "Bangla": "\u09B0\u09CB\u0997\u09C7\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3 - \u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF",
        "English": "Clinical Sign - Other"
      },
      "type": "text"
    }],
    "name": "patient_info",
    "label": {
      "Bangla": "Patient Information",
      "English": "Patient Information"
    },
    "type": "group"
  }, {
    "control": {
      "appearance": "NO"
    },
    "name": "note_diagnostics",
    "label": {
      "Bangla": "Diagnostics",
      "English": "Diagnostics"
    },
    "type": "note"
  }, {
    "control": {
      "appearance": "w10"
    },
    "children": [{
      "control": {
        "appearance": "horizontal-compact"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "Microscopic",
          "English": "Microscopic"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "Rapid Test",
          "English": "Rapid Test"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "Postmortem examination",
          "English": "Postmortem examination"
        }
      }],
      "name": "test_tool",
      "bind": {
        "required": "yes"
      },
      "label": {
        "Bangla": "Test tool",
        "English": "Test tool"
      },
      "type": "select all that apply"
    }, {
      "control": {
        "appearance": "horizontal-compact"
      },
      "itemset": "microscopic",
      "name": "microscopic",
      "bind": {
        "relevant": "selected(${test_tool},'1')",
        "required": "Yes"
      },
      "choice_filter": "myfilter=${species_type}",
      "label": {
        "Bangla": "Microscopic",
        "English": "Microscopic"
      },
      "type": "select all that apply"
    }, {
      "name": "so_far_outside_fecal",
      "bind": {
        "calculate": "join(' ', ${microscopic_test_fecal})"
      },
      "type": "calculate"
    }, {
      "children": [{
        "name": "species_recode",
        "bind": {
          "calculate": "${species_type}"
        },
        "type": "calculate"
      }, {
        "name": "position_fecal",
        "bind": {
          "calculate": "position(..)"
        },
        "type": "calculate"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "itemset": "microscopic_test_fecal",
        "name": "microscopic_test_fecal",
        "bind": {
          "relevant": "selected(${microscopic},'1')",
          "required": "Yes"
        },
        "choice_filter": "myfilter=${species_recode} and not(selected(${so_far_outside_fecal}, name))",
        "label": {
          "Bangla": "\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09B8\u09CD\u0995\u09AA\u09BF\u0995 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE - \u09AE\u09B2",
          "English": "Microscopic test for faeces"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w2"
        },
        "name": "microscopic_test_fecal_other",
        "bind": {
          "relevant": "selected(${microscopic_test_fecal},'00')",
          "required": "Yes"
        },
        "label": {
          "Bangla": "Microscopic test for faeces - Other",
          "English": "Microscopic test for faeces - Other"
        },
        "type": "text"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "+",
            "English": "+"
          }
        }, {
          "name": "2",
          "label": {
            "Bangla": "++",
            "English": "++"
          }
        }, {
          "name": "3",
          "label": {
            "Bangla": "+++",
            "English": "+++"
          }
        }],
        "name": "microscopic_test_fecal_intensity",
        "bind": {
          "required": "Yes"
        },
        "label": {
          "Bangla": "Intensity",
          "English": "Intensity"
        },
        "type": "select one"
      }],
      "name": "fecal",
      "bind": {
        "relevant": "selected(${microscopic},'1')"
      },
      "label": {
        "Bangla": "Fecal Examination",
        "English": "Fecal Examination"
      },
      "type": "repeat"
    }, {
      "name": "so_far_outside_parasite",
      "bind": {
        "calculate": "join(' ', ${microscopic_test_parasite})"
      },
      "type": "calculate"
    }, {
      "children": [{
        "name": "position_parasite",
        "bind": {
          "calculate": "position(..)"
        },
        "type": "calculate"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "itemset": "microscopic_test_parasite",
        "name": "microscopic_test_parasite",
        "bind": {
          "relevant": "selected(${microscopic},'2')",
          "required": "Yes"
        },
        "choice_filter": "not(selected(${so_far_outside_parasite}, name))",
        "label": {
          "Bangla": "\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09B8\u09CD\u0995\u09AA\u09BF\u0995 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE - \u09B0\u0995\u09CD\u09A4",
          "English": "Microscopic test for blood parasites"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w2"
        },
        "name": "microscopic_test_parasite_other",
        "bind": {
          "relevant": "selected(${microscopic_test_parasite},'00')",
          "required": "Yes"
        },
        "label": {
          "Bangla": "Microscopic test for blood parasites - Other",
          "English": "Microscopic test for blood parasites - Other"
        },
        "type": "text"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "+",
            "English": "+"
          }
        }, {
          "name": "2",
          "label": {
            "Bangla": "++",
            "English": "++"
          }
        }, {
          "name": "3",
          "label": {
            "Bangla": "+++",
            "English": "+++"
          }
        }],
        "name": "microscopic_test_parasite_intensity",
        "bind": {
          "required": "Yes"
        },
        "label": {
          "Bangla": "Intensity",
          "English": "Intensity"
        },
        "type": "select one"
      }],
      "name": "parasite",
      "bind": {
        "relevant": "selected(${microscopic},'2')"
      },
      "label": {
        "Bangla": "Blood Parasite Examination",
        "English": "Blood Parasite Examination"
      },
      "type": "repeat"
    }, {
      "name": "so_far_outside_skin",
      "bind": {
        "calculate": "join(' ', ${microscopic_test_skin})"
      },
      "type": "calculate"
    }, {
      "children": [{
        "name": "position_skin",
        "bind": {
          "calculate": "position(..)"
        },
        "type": "calculate"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "itemset": "microscopic_test_skin",
        "name": "microscopic_test_skin",
        "bind": {
          "relevant": "selected(${microscopic},'3')",
          "required": "Yes"
        },
        "choice_filter": "not(selected(${so_far_outside_skin},name))",
        "label": {
          "Bangla": "\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09B8\u09CD\u0995\u09AA\u09BF\u0995 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE - \u09B8\u09CD\u0995\u09BF\u09A8 \u09B8\u09CD\u0995\u09CD\u09B0\u09BE\u09AC",
          "English": "Microscopic test for skin"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w2"
        },
        "name": "microscopic_test_skin_other",
        "bind": {
          "relevant": "selected(${microscopic_test_skin},'00')",
          "required": "Yes"
        },
        "label": {
          "Bangla": "Microscopic test for skin - Other",
          "English": "Microscopic test for skin - Other"
        },
        "type": "text"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "Positive",
            "English": "Positive"
          }
        }, {
          "name": "0",
          "label": {
            "Bangla": "Negative",
            "English": "Negative"
          }
        }],
        "name": "skin_positive_negative",
        "bind": {
          "required": "Yes"
        },
        "label": {
          "Bangla": "Result",
          "English": "Result"
        },
        "type": "select one"
      }],
      "name": "skin",
      "bind": {
        "relevant": "selected(${microscopic},'3')"
      },
      "label": {
        "Bangla": "Skin Examination",
        "English": "Skin Examination"
      },
      "type": "repeat"
    }, {
      "name": "so_far_outside_urine",
      "bind": {
        "calculate": "join(' ', ${microscopic_test_urine})"
      },
      "type": "calculate"
    }, {
      "children": [{
        "name": "position_urine",
        "bind": {
          "calculate": "position(..)"
        },
        "type": "calculate"
      }, {
        "name": "so_far_urine",
        "bind": {
          "calculate": "if (${position_urine} = 1, '~', substr(${so_far_outside_urine}, 0, string-length(${so_far_outside_urine}) - string-length(${microscopic_test_urine})))"
        },
        "type": "calculate"
      }, {
        "control": {
          "appearance": "w5 minimal"
        },
        "itemset": "microscopic_test_urine",
        "name": "microscopic_test_urine",
        "bind": {
          "relevant": "selected(${microscopic},'5')"
        },
        "choice_filter": "not(selected(${so_far_outside_urine},name))",
        "label": {
          "Bangla": "Microscopic test for urine",
          "English": "Microscopic test for urine"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w5 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "+",
            "English": "+"
          }
        }, {
          "name": "2",
          "label": {
            "Bangla": "++",
            "English": "++"
          }
        }, {
          "name": "3",
          "label": {
            "Bangla": "+++",
            "English": "+++"
          }
        }],
        "name": "urine_test_intensity",
        "bind": {
          "required": "Yes"
        },
        "label": {
          "Bangla": "Intensity",
          "English": "Intensity"
        },
        "type": "select one"
      }],
      "name": "urine",
      "bind": {
        "relevant": "selected(${microscopic},'5')"
      },
      "label": {
        "Bangla": "Urine Examination",
        "English": "Urine Examination"
      },
      "type": "repeat"
    }, {
      "name": "so_far_outside_ear",
      "bind": {
        "calculate": "join(' ', ${microscopic_test_ear})"
      },
      "type": "calculate"
    }, {
      "children": [{
        "name": "position_ear",
        "bind": {
          "calculate": "position(..)"
        },
        "type": "calculate"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "itemset": "microscopic_test_ear",
        "name": "microscopic_test_ear",
        "bind": {
          "relevant": "selected(${microscopic},'4')"
        },
        "choice_filter": "not(selected(${so_far_outside_ear},name))",
        "label": {
          "Bangla": "Microscopic test for Ear Test",
          "English": "Microscopic test for Ear"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w2 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "Yes",
            "English": "Yes"
          }
        }, {
          "name": "0",
          "label": {
            "Bangla": "No",
            "English": "No"
          }
        }],
        "name": "deafness_result",
        "bind": {
          "relevant": "selected(${microscopic_test_ear},'2')",
          "required": "yes"
        },
        "label": {
          "Bangla": "Deafness Result",
          "English": "Deafness Result"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "Positive",
            "English": "Positive"
          }
        }, {
          "name": "0",
          "label": {
            "Bangla": "Negative",
            "English": "Negative"
          }
        }],
        "name": "ear_positive_negative",
        "bind": {
          "relevant": "selected(${microscopic_test_ear},'1') or selected(${microscopic_test_ear},'3') or selected(${microscopic_test_ear},'4') or selected(${microscopic_test_ear},'5') or selected(${microscopic_test_ear},'6') or selected(${microscopic_test_ear},'7') or selected(${microscopic_test_ear},'8') or selected(${microscopic_test_ear},'00')",
          "required": "Yes"
        },
        "label": {
          "Bangla": "Result",
          "English": "Result"
        },
        "type": "select one"
      }],
      "name": "ear",
      "bind": {
        "relevant": "selected(${microscopic},'4')"
      },
      "label": {
        "Bangla": "Ear Examination",
        "English": "Ear Examination"
      },
      "type": "repeat"
    }, {
      "name": "so_far_outside_urine_strip",
      "bind": {
        "calculate": "join(' ', ${microscopic_test_urine_strip})"
      },
      "type": "calculate"
    }, {
      "children": [{
        "name": "position_urine_strip",
        "bind": {
          "calculate": "position(..)"
        },
        "type": "calculate"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "itemset": "microscopic_test_urine_strip",
        "name": "microscopic_test_urine_strip",
        "bind": {
          "relevant": "selected(${microscopic},'6')"
        },
        "choice_filter": "not(selected(${so_far_outside_urine_strip},name))",
        "label": {
          "Bangla": "Urine Strip tests",
          "English": "Urine Strip tests"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "Positive",
            "English": "Positive"
          }
        }, {
          "name": "0",
          "label": {
            "Bangla": "Negative",
            "English": "Negative"
          }
        }],
        "name": "urine_strip_test_positive_negative",
        "bind": {
          "required": "Yes"
        },
        "label": {
          "Bangla": "Result",
          "English": "Result"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w1 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "+",
            "English": "+"
          }
        }, {
          "name": "2",
          "label": {
            "Bangla": "++",
            "English": "++"
          }
        }, {
          "name": "3",
          "label": {
            "Bangla": "+++",
            "English": "+++"
          }
        }],
        "name": "urine_strip_test_intensity",
        "bind": {
          "relevant": "${urine_strip_test_positive_negative}=1",
          "required": "Yes"
        },
        "label": {
          "Bangla": "Intensity",
          "English": "Intensity"
        },
        "type": "select one"
      }],
      "name": "urine_strip",
      "bind": {
        "relevant": "selected(${microscopic},'6')"
      },
      "label": {
        "Bangla": "Urine Strip Test",
        "English": "Urine Strip Test"
      },
      "type": "repeat"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "Circulatory system",
          "English": "Circulatory system"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "Digestive system",
          "English": "Digestive system"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "Immune system",
          "English": "Immune system"
        }
      }, {
        "name": "4",
        "label": {
          "Bangla": "Integumetary system",
          "English": "Integumetary system"
        }
      }, {
        "name": "5",
        "label": {
          "Bangla": "Musculoskeletal system",
          "English": "Musculoskeletal system"
        }
      }, {
        "name": "6",
        "label": {
          "Bangla": "Nervous systems & important sensory organs",
          "English": "Nervous systems & important sensory organs"
        }
      }, {
        "name": "7",
        "label": {
          "Bangla": "Renal system",
          "English": "Renal system"
        }
      }, {
        "name": "8",
        "label": {
          "Bangla": "Reproductive system",
          "English": "Reproductive system"
        }
      }, {
        "name": "9",
        "label": {
          "Bangla": "Resporitory system",
          "English": "Resporitory system"
        }
      }],
      "name": "postmortem",
      "bind": {
        "relevant": "selected(${test_tool},'3') and ${species_type}=2",
        "required": "yes"
      },
      "label": {
        "Bangla": "Postmortem",
        "English": "\u09AA\u09CB\u09B8\u09CD\u099F \u09AE\u09B0\u09CD\u099F\u09C7\u09AE \u09A8\u09AE\u09C2\u09A8\u09BE\u09B0 \u09A7\u09B0\u09A8"
      },
      "type": "select all that apply"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "ENT",
          "English": "ENT"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "CU system",
          "English": "Respiratory system"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "GI tract",
          "English": "CU system"
        }
      }, {
        "name": "4",
        "label": {
          "Bangla": "H ... System",
          "English": "GI tract"
        }
      }, {
        "name": "5",
        "label": {
          "Bangla": "Integumetary skin and hair",
          "English": "Integumetary skin and hair"
        }
      }, {
        "name": "6",
        "label": {
          "Bangla": "MS system",
          "English": "MS system"
        }
      }, {
        "name": "7",
        "label": {
          "Bangla": "Neurologic system",
          "English": "Neurologic system"
        }
      }, {
        "name": "8",
        "label": {
          "Bangla": "Renal system",
          "English": "Renal system"
        }
      }, {
        "name": "9",
        "label": {
          "Bangla": "Reproductive Syste",
          "English": "H ... System"
        }
      }, {
        "name": "10",
        "label": {
          "Bangla": "Respiratory system",
          "English": "Reproductive Syste"
        }
      }, {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }, {
        "name": "1",
        "label": {
          "Bangla": "Organ-1",
          "English": "Organ-1"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "Organ-2",
          "English": "Organ-2"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "Organ-3",
          "English": "Organ-3"
        }
      }],
      "name": "postmortem_organ",
      "bind": {
        "relevant": "selected(${test_tool},'3') and ${species_type}=2",
        "required": "yes"
      },
      "label": {
        "Bangla": "Organ",
        "English": "Organ"
      },
      "type": "select all that apply"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "postmortem_mammal",
      "bind": {
        "relevant": "selected(${test_tool},'3') and ${species_type}=1"
      },
      "label": {
        "Bangla": "Postmortem - Mammal",
        "English": "Postmortem - Mammal"
      },
      "type": "text"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "itemset": "postmortem_findings_bird",
      "name": "postmortem_findings_bird",
      "bind": {
        "relevant": "selected(${test_tool},'3') and ${species_type}=2"
      },
      "choice_filter": "selected(${postmortem},myfilter)",
      "label": {
        "Bangla": "Postmortem Findings - Bird",
        "English": "Postmortem Findings - Bird"
      },
      "type": "select all that apply"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "1",
          "English": "1"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "2",
          "English": "2"
        }
      }],
      "name": "postmortem_findings_mammal",
      "bind": {
        "relevant": "selected(${test_tool},'3') and ${species_type}=1"
      },
      "label": {
        "Bangla": "Postmortem Findings - Mammal",
        "English": "Postmortem Findings - Mammal"
      },
      "type": "select all that apply"
    }, {
      "name": "so_far_outside_rapid_test",
      "bind": {
        "calculate": "join(' ', ${rapid_test})"
      },
      "type": "calculate"
    }, {
      "children": [{
        "name": "species_recode_2",
        "bind": {
          "calculate": "${species_type}"
        },
        "type": "calculate"
      }, {
        "name": "position_rapid_test",
        "bind": {
          "calculate": "position(..)"
        },
        "type": "calculate"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "itemset": "rapid_test_bird",
        "name": "rapid_test",
        "bind": {
          "relevant": "selected(${test_tool},'2')",
          "required": "Yes"
        },
        "choice_filter": "myfilter=${species_recode_2} and not(selected(${so_far_outside_rapid_test},name))",
        "label": {
          "Bangla": "Rapid test",
          "English": "Rapid test"
        },
        "type": "select one"
      }, {
        "control": {
          "appearance": "w2"
        },
        "name": "rapid_test_other",
        "bind": {
          "relevant": "selected(${rapid_test},'00')",
          "required": "Yes"
        },
        "label": {
          "Bangla": "Rapid test - Other",
          "English": "Rapid test - Animal - Other"
        },
        "type": "text"
      }, {
        "control": {
          "appearance": "w4 minimal"
        },
        "children": [{
          "name": "1",
          "label": {
            "Bangla": "Positive",
            "English": "Positive"
          }
        }, {
          "name": "0",
          "label": {
            "Bangla": "Negative",
            "English": "Negative"
          }
        }],
        "name": "rapid_test_result",
        "bind": {
          "relevant": "selected(${test_tool},'2')",
          "required": "Yes"
        },
        "label": {
          "Bangla": "\u09B0\u200D\u09CD\u09AF\u09BE\u09AA\u09BF\u09A1 \u099F\u09C7\u09B8\u09CD\u099F\u09C7\u09B0 \u09AB\u09B2\u09BE\u09AB\u09B2",
          "English": "Rapid test result"
        },
        "type": "select one"
      }],
      "name": "rapid",
      "bind": {
        "relevant": "selected(${test_tool},'2')"
      },
      "label": {
        "Bangla": "Rapid Test",
        "English": "Rapid Test"
      },
      "type": "repeat"
    }],
    "name": "diagnostic",
    "label": {
      "Bangla": "Diagnostics",
      "English": "Diagnostics"
    },
    "type": "group"
  }, {
    "name": "note_diagnosis_treatment",
    "label": {
      "Bangla": "Diagnosis and Treatment",
      "English": "Diagnosis and Treatment"
    },
    "type": "note"
  }, {
    "control": {
      "appearance": "w12"
    },
    "children": [{
      "control": {
        "appearance": "w6 minimal"
      },
      "itemset": "tentative_diagnosis",
      "name": "tentative_diagnosis",
      "choice_filter": "myfilter=${species_value}",
      "label": {
        "Bangla": "\u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09CD\u09AF \u09B0\u09CB\u0997",
        "English": "Tentative diagnosis"
      },
      "type": "select all that apply"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "tentative_diagnosis_other",
      "bind": {
        "relevant": "selected(${tentative_diagnosis},'00')"
      },
      "label": {
        "Bangla": "\u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09CD\u09AF \u09B0\u09CB\u0997 - \u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF",
        "English": "Tentative diagnosis - other"
      },
      "type": "text"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "a",
          "English": "a"
        }
      }, {
        "name": "2",
        "label": {
          "Bangla": "b",
          "English": "b"
        }
      }, {
        "name": "3",
        "label": {
          "Bangla": "c",
          "English": "c"
        }
      }, {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }],
      "name": "treatment",
      "label": {
        "Bangla": "\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE",
        "English": "Treatment"
      },
      "type": "select all that apply"
    }, {
      "control": {
        "appearance": "w6"
      },
      "name": "treatment_other",
      "bind": {
        "relevant": "selected(${treatment},'00')"
      },
      "label": {
        "Bangla": "\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE - \u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF",
        "English": "Treatment - other"
      },
      "type": "text"
    }, {
      "control": {
        "appearance": "w6 minimal"
      },
      "children": [{
        "name": "1",
        "label": {
          "Bangla": "Yes",
          "English": "Yes"
        }
      }, {
        "name": "0",
        "label": {
          "Bangla": "No",
          "English": "No"
        }
      }],
      "name": "sample_sent_lab",
      "label": {
        "Bangla": "\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u0997\u09BE\u09B0\u09C7 \u09A8\u09AE\u09C1\u09A8\u09BE \u09AA\u09CD\u09B0\u09C7\u09B0\u09A3",
        "English": "Sample send to laboratory"
      },
      "type": "select one"
    }],
    "name": "diagnosis_treatment",
    "label": {
      "Bangla": "Diagnosis and Treatment",
      "English": "Diagnosis and Treatment"
    },
    "type": "group"
  }, {
    "control": {
      "bodyless": true
    },
    "children": [{
      "name": "instanceID",
      "bind": {
        "readonly": "true()",
        "calculate": "concat('uuid:', uuid())"
      },
      "type": "calculate"
    }],
    "name": "meta",
    "type": "group"
  }],
  "style": "theme-grid",
  "version": "1.0.1",
  "type": "survey",
  "name": "patient_registry",
  "sms_keyword": "patient_registry",
  "title": "Patient Registry",
  "choices": {
    "sex": [{
      "name": "1",
      "label": {
        "Bangla": "\u09AA\u09C1\u09B0\u09C1\u09B7",
        "English": "Male"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "\u09AE\u09B9\u09BF\u09B2\u09BE",
        "English": "Female"
      }
    }],
    "species_type_other": [{
      "name": "1",
      "label": {
        "Bangla": "Mammal",
        "English": "Mammal"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Bird",
        "English": "Bird"
      }
    }],
    "intensity": [{
      "name": "1",
      "label": {
        "Bangla": "+",
        "English": "+"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "++",
        "English": "++"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "+++",
        "English": "+++"
      }
    }],
    "microscopic_test_skin": [{
      "name": "1",
      "label": {
        "Bangla": "Mites",
        "English": "Mites"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Lice",
        "English": "Lice"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "microscopic_test_urine_strip": [{
      "name": "1",
      "label": {
        "Bangla": "Biliruubin",
        "English": "Biliruubin"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Blood",
        "English": "Blood"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Glucose",
        "English": "Glucose"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Keteone",
        "English": "Keteone"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Leukocytes",
        "English": "Leukocytes"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Nitrite",
        "English": "Nitrite"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Protein",
        "English": "Protein"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Urobilinogen",
        "English": "Urobilinogen"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }],
    "test_tool": [{
      "name": "1",
      "label": {
        "Bangla": "Microscopic",
        "English": "Microscopic"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Rapid Test",
        "English": "Rapid Test"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Postmortem examination",
        "English": "Postmortem examination"
      }
    }],
    "species": [{
      "name": "1",
      "label": {
        "Bangla": "Buffalo",
        "English": "Buffalo"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Cat",
        "English": "Cat"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Cattle",
        "English": "Cattle"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Dog",
        "English": "Dog"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Goat",
        "English": "Goat"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Horse",
        "English": "Horse"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Pig",
        "English": "Pig"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Sheep",
        "English": "Sheep"
      }
    }, {
      "name": "21",
      "label": {
        "Bangla": "Chicken",
        "English": "Chicken"
      }
    }, {
      "name": "22",
      "label": {
        "Bangla": "Duck",
        "English": "Duck"
      }
    }, {
      "name": "23",
      "label": {
        "Bangla": "Goose",
        "English": "Goose"
      }
    }, {
      "name": "24",
      "label": {
        "Bangla": "Moyana",
        "English": "Moyana"
      }
    }, {
      "name": "25",
      "label": {
        "Bangla": "Pegion",
        "English": "Pegion"
      }
    }, {
      "name": "26",
      "label": {
        "Bangla": "Quail",
        "English": "Quail"
      }
    }, {
      "name": "27",
      "label": {
        "Bangla": "Turkey",
        "English": "Turkey"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "microscopic": [{
      "myfilter": "2",
      "name": "1",
      "label": {
        "Bangla": "Fecal examination",
        "English": "Fecal examination"
      }
    }, {
      "myfilter": "2",
      "name": "2",
      "label": {
        "Bangla": "Blood Parasites examination",
        "English": "Blood Parasites examination"
      }
    }, {
      "myfilter": "2",
      "name": "3",
      "label": {
        "Bangla": "Skin examination",
        "English": "Skin examination"
      }
    }, {
      "myfilter": "1",
      "name": "1",
      "label": {
        "Bangla": "Fecal examination",
        "English": "Fecal examination"
      }
    }, {
      "myfilter": "1",
      "name": "2",
      "label": {
        "Bangla": "Blood Parasites examination",
        "English": "Blood Parasites examination"
      }
    }, {
      "myfilter": "1",
      "name": "3",
      "label": {
        "Bangla": "Skin examination",
        "English": "Skin examination"
      }
    }, {
      "myfilter": "1",
      "name": "4",
      "label": {
        "Bangla": "Ear examination",
        "English": "Ear examination"
      }
    }, {
      "myfilter": "1",
      "name": "5",
      "label": {
        "Bangla": "Urine examination",
        "English": "Urine examination"
      }
    }, {
      "myfilter": "1",
      "name": "6",
      "label": {
        "Bangla": "Urine strip test",
        "English": "Urine strip test"
      }
    }],
    "treatment": [{
      "name": "1",
      "label": {
        "Bangla": "a",
        "English": "a"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "b",
        "English": "b"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "c",
        "English": "c"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "postmortem": [{
      "name": "1",
      "label": {
        "Bangla": "Circulatory system",
        "English": "Circulatory system"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Digestive system",
        "English": "Digestive system"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Immune system",
        "English": "Immune system"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Integumetary system",
        "English": "Integumetary system"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Musculoskeletal system",
        "English": "Musculoskeletal system"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Nervous systems & important sensory organs",
        "English": "Nervous systems & important sensory organs"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Renal system",
        "English": "Renal system"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Reproductive system",
        "English": "Reproductive system"
      }
    }, {
      "name": "9",
      "label": {
        "Bangla": "Resporitory system",
        "English": "Resporitory system"
      }
    }],
    "microscopic_test_parasite": [{
      "name": "1",
      "label": {
        "Bangla": "Anaplasma",
        "English": "Anaplasma"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Babesia",
        "English": "Babesia"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Haemoproteus",
        "English": "Haemoproteus"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Leucocytozoon",
        "English": "Leucocytozoon"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Plasmodium",
        "English": "Plasmodium"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Rickettsiae",
        "English": "Rickettsiae"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Schistosoma",
        "English": "Schistosoma"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Theileria",
        "English": "Theileria"
      }
    }, {
      "name": "9",
      "label": {
        "Bangla": "Trypansoma",
        "English": "Trypansoma"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "microscopic_test_urine": [{
      "name": "1",
      "label": {
        "Bangla": "Bacteria",
        "English": "Bacteria"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Crystals",
        "English": "Crystals"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Cylindruria (Casts)",
        "English": "Cylindruria (Casts)"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Lipids",
        "English": "Lipids"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "RBCs",
        "English": "RBCs"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Spermatozoa",
        "English": "Spermatozoa"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Squamous cells",
        "English": "Squamous cells"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Yeast",
        "English": "Yeast"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }],
    "rapid_test_result": [{
      "name": "1",
      "label": {
        "Bangla": "Positive",
        "English": "Positive"
      }
    }, {
      "name": "0",
      "label": {
        "Bangla": "Negative",
        "English": "Negative"
      }
    }],
    "microscopic_test_ear": [{
      "name": "1",
      "label": {
        "Bangla": "Auricular chondritis",
        "English": "Auricular chondritis"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Deafness",
        "English": "Deafness"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Hair loss on the outer ear",
        "English": "Hair loss on the outer ear"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Lice",
        "English": "Lice"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Mite",
        "English": "Mite"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Nodular granulomatous dermatitis",
        "English": "Nodular granulomatous dermatitis"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Tick",
        "English": "Tick"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Tissue death of the pinna",
        "English": "Tissue death of the pinna"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }],
    "clinical_sign": [{
      "myfilter": "1",
      "name": "1",
      "label": {
        "Bangla": "Abdominal pain",
        "English": "Abdominal pain"
      }
    }, {
      "myfilter": "1",
      "name": "2",
      "label": {
        "Bangla": "Abortion in first trimester",
        "English": "Abortion in first trimester"
      }
    }, {
      "myfilter": "1",
      "name": "3",
      "label": {
        "Bangla": "Abortion in second trimester",
        "English": "Abortion in second trimester"
      }
    }, {
      "myfilter": "1",
      "name": "4",
      "label": {
        "Bangla": "Abortion in third trimester",
        "English": "Abortion in third trimester"
      }
    }, {
      "myfilter": "1",
      "name": "5",
      "label": {
        "Bangla": "Abscess",
        "English": "Abscess"
      }
    }, {
      "myfilter": "1",
      "name": "6",
      "label": {
        "Bangla": "Aggressiveness",
        "English": "Aggressiveness"
      }
    }, {
      "myfilter": "1",
      "name": "7",
      "label": {
        "Bangla": "Anaemia",
        "English": "Anaemia"
      }
    }, {
      "myfilter": "1",
      "name": "8",
      "label": {
        "Bangla": "Blackish skin",
        "English": "Blackish skin"
      }
    }, {
      "myfilter": "1",
      "name": "9",
      "label": {
        "Bangla": "Bloody milk",
        "English": "Bloody milk"
      }
    }, {
      "myfilter": "1",
      "name": "10",
      "label": {
        "Bangla": "Bottle jaw",
        "English": "Bottle jaw"
      }
    }, {
      "myfilter": "1",
      "name": "11",
      "label": {
        "Bangla": "Breathing difficulty (Dyspnea)",
        "English": "Breathing difficulty (Dyspnea)"
      }
    }, {
      "myfilter": "1",
      "name": "12",
      "label": {
        "Bangla": "Coffee colour urine",
        "English": "Coffee colour urine"
      }
    }, {
      "myfilter": "1",
      "name": "13",
      "label": {
        "Bangla": "Cough",
        "English": "Cough"
      }
    }, {
      "myfilter": "1",
      "name": "14",
      "label": {
        "Bangla": "Crack in Teat",
        "English": "Crack in Teat"
      }
    }, {
      "myfilter": "1",
      "name": "15",
      "label": {
        "Bangla": "Cracking sound in muscle",
        "English": "Cracking sound in muscle"
      }
    }, {
      "myfilter": "1",
      "name": "16",
      "label": {
        "Bangla": "Dehydration",
        "English": "Dehydration"
      }
    }, {
      "myfilter": "1",
      "name": "17",
      "label": {
        "Bangla": "Depression",
        "English": "Depression"
      }
    }, {
      "myfilter": "1",
      "name": "18",
      "label": {
        "Bangla": "Dermatitis",
        "English": "Dermatitis"
      }
    }, {
      "myfilter": "1",
      "name": "19",
      "label": {
        "Bangla": "Diarrhoea (bloody)",
        "English": "Diarrhea (bloody)"
      }
    }, {
      "myfilter": "1",
      "name": "20",
      "label": {
        "Bangla": "Diarrhoea (watery)",
        "English": "Diarrhea (watery)"
      }
    }, {
      "myfilter": "1",
      "name": "21",
      "label": {
        "Bangla": "Diarrhoea (greenish)",
        "English": "Diarrhoea (greenish)"
      }
    }, {
      "myfilter": "1",
      "name": "22",
      "label": {
        "Bangla": "Diarrhoea (whitish)",
        "English": "Diarrhoea (whitish)"
      }
    }, {
      "myfilter": "1",
      "name": "23",
      "label": {
        "Bangla": "Diarrhoea (yellowish)",
        "English": "Diarrhoea (yellowish)"
      }
    }, {
      "myfilter": "1",
      "name": "24",
      "label": {
        "Bangla": "Difficulty in movement",
        "English": "Difficulty in movement"
      }
    }, {
      "myfilter": "1",
      "name": "25",
      "label": {
        "Bangla": "Exudate on the skin",
        "English": "Exudate on the skin"
      }
    }, {
      "myfilter": "1",
      "name": "26",
      "label": {
        "Bangla": "Fever",
        "English": "Fever"
      }
    }, {
      "myfilter": "1",
      "name": "27",
      "label": {
        "Bangla": "Fever (Fluctuating)",
        "English": "Fever (Fluctuating)"
      }
    }, {
      "myfilter": "1",
      "name": "28",
      "label": {
        "Bangla": "Fever (high)",
        "English": "Fever (high)"
      }
    }, {
      "myfilter": "1",
      "name": "29",
      "label": {
        "Bangla": "Foul smell from the wound",
        "English": "Foul smell from the wound"
      }
    }, {
      "myfilter": "1",
      "name": "30",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "1",
      "name": "31",
      "label": {
        "Bangla": "Grunting sound from affected area",
        "English": "Grunting sound from affected area"
      }
    }, {
      "myfilter": "1",
      "name": "32",
      "label": {
        "Bangla": "Haemorrhage on conjunctiva",
        "English": "Haemorrhage on conjunctiva"
      }
    }, {
      "myfilter": "1",
      "name": "33",
      "label": {
        "Bangla": "Hair loss",
        "English": "Hair loss"
      }
    }, {
      "myfilter": "1",
      "name": "34",
      "label": {
        "Bangla": "Incoordination in movement",
        "English": "Incoordination in movement"
      }
    }, {
      "myfilter": "1",
      "name": "35",
      "label": {
        "Bangla": "Itichy skin (pruritus)",
        "English": "Itichy skin (pruritus)"
      }
    }, {
      "myfilter": "1",
      "name": "36",
      "label": {
        "Bangla": "Jaundice",
        "English": "Jaundice"
      }
    }, {
      "myfilter": "1",
      "name": "37",
      "label": {
        "Bangla": "Lameness",
        "English": "Lameness"
      }
    }, {
      "myfilter": "1",
      "name": "38",
      "label": {
        "Bangla": "Lateral recumbency",
        "English": "Lateral recumbency"
      }
    }, {
      "myfilter": "1",
      "name": "39",
      "label": {
        "Bangla": "Leg stiffness",
        "English": "Leg stiffness"
      }
    }, {
      "myfilter": "1",
      "name": "40",
      "label": {
        "Bangla": "Loss of appetite",
        "English": "Loss of appetite"
      }
    }, {
      "myfilter": "1",
      "name": "41",
      "label": {
        "Bangla": "Lymph nodes enlargement",
        "English": "Lymph nodes enlargement"
      }
    }, {
      "myfilter": "1",
      "name": "42",
      "label": {
        "Bangla": "Mucus in feces",
        "English": "Mucus in feces"
      }
    }, {
      "myfilter": "1",
      "name": "43",
      "label": {
        "Bangla": "Nasal discharge",
        "English": "Nasal discharge"
      }
    }, {
      "myfilter": "1",
      "name": "44",
      "label": {
        "Bangla": "Neck stiffness",
        "English": "Neck stiffness"
      }
    }, {
      "myfilter": "1",
      "name": "45",
      "label": {
        "Bangla": "Necrotic tissue in interdigital space",
        "English": "Necrotic tissue in interdigital space"
      }
    }, {
      "myfilter": "1",
      "name": "46",
      "label": {
        "Bangla": "Pain in teat",
        "English": "Pain in teat"
      }
    }, {
      "myfilter": "1",
      "name": "47",
      "label": {
        "Bangla": "Papules on the mucous membranes of the eyes",
        "English": "Papules on the mucous membranes of the eyes"
      }
    }, {
      "myfilter": "1",
      "name": "48",
      "label": {
        "Bangla": "Paralysis",
        "English": "Paralysis"
      }
    }, {
      "myfilter": "1",
      "name": "49",
      "label": {
        "Bangla": "Pendulous abdomen",
        "English": "Pendulous abdomen"
      }
    }, {
      "myfilter": "1",
      "name": "50",
      "label": {
        "Bangla": "Poor growth",
        "English": "Poor growth"
      }
    }, {
      "myfilter": "1",
      "name": "51",
      "label": {
        "Bangla": "Presence of lice",
        "English": "Presence of lice"
      }
    }, {
      "myfilter": "1",
      "name": "52",
      "label": {
        "Bangla": "Presence of the tick",
        "English": "Presence of the tick"
      }
    }, {
      "myfilter": "1",
      "name": "53",
      "label": {
        "Bangla": "Raised and matted tufts of hair",
        "English": "Raised and matted tufts of hair"
      }
    }, {
      "myfilter": "1",
      "name": "54",
      "label": {
        "Bangla": "Retained placentas",
        "English": "Retained placentas"
      }
    }, {
      "myfilter": "1",
      "name": "55",
      "label": {
        "Bangla": "Rolling of eye balls",
        "English": "Rolling of eye balls"
      }
    }, {
      "myfilter": "1",
      "name": "56",
      "label": {
        "Bangla": "Rough hair coat",
        "English": "Rough hair coat"
      }
    }, {
      "myfilter": "1",
      "name": "57",
      "label": {
        "Bangla": "Salivation",
        "English": "Salivation"
      }
    }, {
      "myfilter": "1",
      "name": "58",
      "label": {
        "Bangla": "Segment of worms in faeces",
        "English": "Segment of worms in faeces"
      }
    }, {
      "myfilter": "1",
      "name": "59",
      "label": {
        "Bangla": "Shivering",
        "English": "Shivering"
      }
    }, {
      "myfilter": "1",
      "name": "60",
      "label": {
        "Bangla": "Softening of skull bone",
        "English": "Softening of skull bone"
      }
    }, {
      "myfilter": "1",
      "name": "61",
      "label": {
        "Bangla": "Stillbirth",
        "English": "Stillbirth"
      }
    }, {
      "myfilter": "1",
      "name": "62",
      "label": {
        "Bangla": "Subnormal temperature",
        "English": "Subnormal temperature"
      }
    }, {
      "myfilter": "1",
      "name": "63",
      "label": {
        "Bangla": "Sudden death",
        "English": "Sudden death"
      }
    }, {
      "myfilter": "1",
      "name": "64",
      "label": {
        "Bangla": "Swelling and redness of interdigital tissues",
        "English": "Swelling and redness of interdigital tissues"
      }
    }, {
      "myfilter": "1",
      "name": "65",
      "label": {
        "Bangla": "Swollen and painful navel",
        "English": "Swollen and painful navel"
      }
    }, {
      "myfilter": "1",
      "name": "66",
      "label": {
        "Bangla": "Thickened intestine",
        "English": "Thickened intestine"
      }
    }, {
      "myfilter": "1",
      "name": "67",
      "label": {
        "Bangla": "Thickening of the skin",
        "English": "Thickening of the skin"
      }
    }, {
      "myfilter": "1",
      "name": "68",
      "label": {
        "Bangla": "Tongue protrusion",
        "English": "Tongue protrusion"
      }
    }, {
      "myfilter": "1",
      "name": "69",
      "label": {
        "Bangla": "Trembling",
        "English": "Trembling"
      }
    }, {
      "myfilter": "1",
      "name": "70",
      "label": {
        "Bangla": "Tympany",
        "English": "Tympany"
      }
    }, {
      "myfilter": "1",
      "name": "71",
      "label": {
        "Bangla": "Udder (Gangrene)",
        "English": "Udder (Gangrene)"
      }
    }, {
      "myfilter": "1",
      "name": "72",
      "label": {
        "Bangla": "Udder (Harden)",
        "English": "Udder (Harden)"
      }
    }, {
      "myfilter": "1",
      "name": "73",
      "label": {
        "Bangla": "Udder (Swollen and hot )",
        "English": "Udder (Swollen and hot )"
      }
    }, {
      "myfilter": "1",
      "name": "74",
      "label": {
        "Bangla": "Ulcer in nose",
        "English": "Ulcer in nose"
      }
    }, {
      "myfilter": "1",
      "name": "75",
      "label": {
        "Bangla": "Unable to work",
        "English": "Unable to work"
      }
    }, {
      "myfilter": "1",
      "name": "76",
      "label": {
        "Bangla": "Unthrifty animals",
        "English": "Unthrifty animals"
      }
    }, {
      "myfilter": "1",
      "name": "77",
      "label": {
        "Bangla": "Upward flexion of the hindlimb",
        "English": "Upward flexion of the hindlimb"
      }
    }, {
      "myfilter": "1",
      "name": "78",
      "label": {
        "Bangla": "Weakness",
        "English": "Weakness"
      }
    }, {
      "myfilter": "1",
      "name": "79",
      "label": {
        "Bangla": "Weight loss",
        "English": "Weight loss"
      }
    }, {
      "myfilter": "1",
      "name": "80",
      "label": {
        "Bangla": "Worms on the skin lesion",
        "English": "Worms on the skin lesion"
      }
    }, {
      "myfilter": "1",
      "name": "81",
      "label": {
        "Bangla": "Wound in hoof",
        "English": "Wound in hoof"
      }
    }, {
      "myfilter": "1",
      "name": "82",
      "label": {
        "Bangla": "Wound in hump",
        "English": "Wound in hump"
      }
    }, {
      "myfilter": "1",
      "name": "83",
      "label": {
        "Bangla": "Wound in mouth",
        "English": "Wound in mouth"
      }
    }, {
      "myfilter": "1",
      "name": "84",
      "label": {
        "Bangla": "Wound in teat",
        "English": "Wound in teat"
      }
    }, {
      "myfilter": "1",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "2",
      "name": "1",
      "label": {
        "Bangla": "Abnormal eggs",
        "English": "Abnormal eggs"
      }
    }, {
      "myfilter": "2",
      "name": "7",
      "label": {
        "Bangla": "Anaemia",
        "English": "Anaemia"
      }
    }, {
      "myfilter": "2",
      "name": "2",
      "label": {
        "Bangla": "Ataxia",
        "English": "Ataxia"
      }
    }, {
      "myfilter": "2",
      "name": "11",
      "label": {
        "Bangla": "Breathing difficulty (Dyspnea)",
        "English": "Breathing difficulty (Dyspnea)"
      }
    }, {
      "myfilter": "2",
      "name": "3",
      "label": {
        "Bangla": "Breathing rapidly",
        "English": "Breathing rapidly"
      }
    }, {
      "myfilter": "2",
      "name": "4",
      "label": {
        "Bangla": "Conjunctivitis",
        "English": "Conjunctivitis"
      }
    }, {
      "myfilter": "2",
      "name": "17",
      "label": {
        "Bangla": "Depression",
        "English": "Depression"
      }
    }, {
      "myfilter": "2",
      "name": "19",
      "label": {
        "Bangla": "Diarrhoea (bloody)",
        "English": "Diarrhea (bloody)"
      }
    }, {
      "myfilter": "2",
      "name": "20",
      "label": {
        "Bangla": "Diarrhoea (watery)",
        "English": "Diarrhea (watery)"
      }
    }, {
      "myfilter": "2",
      "name": "21",
      "label": {
        "Bangla": "Diarrhoea (greenish)",
        "English": "Diarrhoea (greenish)"
      }
    }, {
      "myfilter": "2",
      "name": "22",
      "label": {
        "Bangla": "Diarrhoea (whitish)",
        "English": "Diarrhoea (whitish)"
      }
    }, {
      "myfilter": "2",
      "name": "23",
      "label": {
        "Bangla": "Diarrhoea (yellowish)",
        "English": "Diarrhoea (yellowish)"
      }
    }, {
      "myfilter": "2",
      "name": "5",
      "label": {
        "Bangla": "Egg production decrease",
        "English": "Egg production decrease"
      }
    }, {
      "myfilter": "2",
      "name": "6",
      "label": {
        "Bangla": "Gasping",
        "English": "Gasping"
      }
    }, {
      "myfilter": "2",
      "name": "8",
      "label": {
        "Bangla": "Incoordination of movement",
        "English": "Incoordination of movement"
      }
    }, {
      "myfilter": "2",
      "name": "9",
      "label": {
        "Bangla": "Itchy skin (pruritus)",
        "English": "Itchy skin (pruritus)"
      }
    }, {
      "myfilter": "2",
      "name": "10",
      "label": {
        "Bangla": "Leg weakness",
        "English": "Leg weakness"
      }
    }, {
      "myfilter": "2",
      "name": "12",
      "label": {
        "Bangla": "Lice eggs present on skin",
        "English": "Lice eggs present on skin"
      }
    }, {
      "myfilter": "2",
      "name": "13",
      "label": {
        "Bangla": "Lice present on skin",
        "English": "Lice present on skin"
      }
    }, {
      "myfilter": "2",
      "name": "14",
      "label": {
        "Bangla": "Mosit rales",
        "English": "Mosit rales"
      }
    }, {
      "myfilter": "2",
      "name": "15",
      "label": {
        "Bangla": "Mucoid discharge from eye",
        "English": "Mucoid discharge from eye"
      }
    }, {
      "myfilter": "2",
      "name": "16",
      "label": {
        "Bangla": "Mucoid discharge from nose",
        "English": "Mucoid discharge from nose"
      }
    }, {
      "myfilter": "2",
      "name": "18",
      "label": {
        "Bangla": "Poor feed intake",
        "English": "Poor feed intake"
      }
    }, {
      "myfilter": "2",
      "name": "24",
      "label": {
        "Bangla": "Reluctant to move",
        "English": "Reluctant to move"
      }
    }, {
      "myfilter": "2",
      "name": "25",
      "label": {
        "Bangla": "Restlessness",
        "English": "Restlessness"
      }
    }, {
      "myfilter": "2",
      "name": "27",
      "label": {
        "Bangla": "Retardation in growth",
        "English": "Retardation in growth"
      }
    }, {
      "myfilter": "2",
      "name": "28",
      "label": {
        "Bangla": "Ruffled feathers",
        "English": "Ruffled feathers"
      }
    }, {
      "myfilter": "2",
      "name": "29",
      "label": {
        "Bangla": "Scabbing",
        "English": "Scabbing"
      }
    }, {
      "myfilter": "2",
      "name": "30",
      "label": {
        "Bangla": "Scaly leg",
        "English": "Scaly leg"
      }
    }, {
      "myfilter": "2",
      "name": "31",
      "label": {
        "Bangla": "Sinusitis",
        "English": "Sinusitis"
      }
    }, {
      "myfilter": "2",
      "name": "32",
      "label": {
        "Bangla": "Swollen face",
        "English": "Swollen face"
      }
    }, {
      "myfilter": "2",
      "name": "33",
      "label": {
        "Bangla": "Swollen foot pad",
        "English": "Swollen foot pad"
      }
    }, {
      "myfilter": "2",
      "name": "34",
      "label": {
        "Bangla": "Swollen infraorbital sinus",
        "English": "Swollen infraorbital sinus"
      }
    }, {
      "myfilter": "2",
      "name": "279",
      "label": {
        "Bangla": "Weight loss",
        "English": "Weight loss"
      }
    }, {
      "myfilter": "2",
      "name": "26",
      "label": {
        "Bangla": "Wings drop",
        "English": "Wings drop"
      }
    }, {
      "myfilter": "2",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "postmortem_organ": [{
      "name": "1",
      "label": {
        "Bangla": "ENT",
        "English": "ENT"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "CU system",
        "English": "Respiratory system"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "GI tract",
        "English": "CU system"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "H ... System",
        "English": "GI tract"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Integumetary skin and hair",
        "English": "Integumetary skin and hair"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "MS system",
        "English": "MS system"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Neurologic system",
        "English": "Neurologic system"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Renal system",
        "English": "Renal system"
      }
    }, {
      "name": "9",
      "label": {
        "Bangla": "Reproductive Syste",
        "English": "H ... System"
      }
    }, {
      "name": "10",
      "label": {
        "Bangla": "Respiratory system",
        "English": "Reproductive Syste"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "name": "1",
      "label": {
        "Bangla": "Organ-1",
        "English": "Organ-1"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Organ-2",
        "English": "Organ-2"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Organ-3",
        "English": "Organ-3"
      }
    }],
    "union_name": [{
      "name": "1",
      "label": {
        "Bangla": "Union-1",
        "English": "Union-1"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Union-2",
        "English": "Union-2"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Union-3",
        "English": "Union-3"
      }
    }],
    "postmortem_findings_bird": [{
      "myfilter": "1",
      "name": "1",
      "label": {
        "Bangla": "Fibrinous exudate in heart",
        "English": "Fibrinous exudate in heart"
      }
    }, {
      "myfilter": "1",
      "name": "2",
      "label": {
        "Bangla": "Nodules/ tumor in heart",
        "English": "Nodules/ tumor in heart"
      }
    }, {
      "myfilter": "1",
      "name": "3",
      "label": {
        "Bangla": "Hemorrhage in heart muscle",
        "English": "Hemorrhage in heart muscle"
      }
    }, {
      "myfilter": "1",
      "name": "4",
      "label": {
        "Bangla": "Clotted blood in the heart chamber",
        "English": "Clotted blood in the heart chamber"
      }
    }, {
      "myfilter": "1",
      "name": "5",
      "label": {
        "Bangla": "Pericarditis",
        "English": "Pericarditis"
      }
    }, {
      "myfilter": "1",
      "name": "6",
      "label": {
        "Bangla": "Dilated blood vessel",
        "English": "Dilated blood vessel"
      }
    }, {
      "myfilter": "1",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "2",
      "name": "7",
      "label": {
        "Bangla": "Hemorrhage in esophagus",
        "English": "Hemorrhage in esophagus"
      }
    }, {
      "myfilter": "2",
      "name": "8",
      "label": {
        "Bangla": "Congestion in esophagus",
        "English": "Congestion in esophagus"
      }
    }, {
      "myfilter": "2",
      "name": "9",
      "label": {
        "Bangla": "Nodules/ tumor in esophagus",
        "English": "Nodules/ tumor in esophagus"
      }
    }, {
      "myfilter": "2",
      "name": "10",
      "label": {
        "Bangla": "Diphtheritic lesions in esophagus",
        "English": "Diphtheritic lesions in esophagus"
      }
    }, {
      "myfilter": "2",
      "name": "11",
      "label": {
        "Bangla": "Ulcerative lesion in esophagus",
        "English": "Ulcerative lesion in esophagus"
      }
    }, {
      "myfilter": "2",
      "name": "12",
      "label": {
        "Bangla": "Hemorrhage in crop",
        "English": "Hemorrhage in crop"
      }
    }, {
      "myfilter": "2",
      "name": "13",
      "label": {
        "Bangla": "Congestion in crop",
        "English": "Congestion in crop"
      }
    }, {
      "myfilter": "2",
      "name": "14",
      "label": {
        "Bangla": "Hemorrhage in proventriculus",
        "English": "Hemorrhage in proventriculus"
      }
    }, {
      "myfilter": "2",
      "name": "15",
      "label": {
        "Bangla": "Congestion in proventriculus",
        "English": "Congestion in proventriculus"
      }
    }, {
      "myfilter": "2",
      "name": "16",
      "label": {
        "Bangla": "Hemorrhage in gizzard",
        "English": "Hemorrhage in gizzard"
      }
    }, {
      "myfilter": "2",
      "name": "17",
      "label": {
        "Bangla": "Congestion in gizzard",
        "English": "Congestion in gizzard"
      }
    }, {
      "myfilter": "2",
      "name": "18",
      "label": {
        "Bangla": "Nodules/ tumor in gizzard",
        "English": "Nodules/ tumor in gizzard"
      }
    }, {
      "myfilter": "2",
      "name": "19",
      "label": {
        "Bangla": "Hemorrhage in small intestine",
        "English": "Hemorrhage in small intestine"
      }
    }, {
      "myfilter": "2",
      "name": "20",
      "label": {
        "Bangla": "Congestion in small intestine",
        "English": "Congestion in small intestine"
      }
    }, {
      "myfilter": "2",
      "name": "21",
      "label": {
        "Bangla": "Thickening of membrane wall in small intestine",
        "English": "Thickening of membrane wall in small intestine"
      }
    }, {
      "myfilter": "2",
      "name": "22",
      "label": {
        "Bangla": "Thinning of membrane wall in small intestine",
        "English": "Thinning of membrane wall in small intestine"
      }
    }, {
      "myfilter": "2",
      "name": "23",
      "label": {
        "Bangla": "Ulcerative lesion in small intestine",
        "English": "Ulcerative lesion in small intestine"
      }
    }, {
      "myfilter": "2",
      "name": "24",
      "label": {
        "Bangla": "Nodules/ tumor in small intestine",
        "English": "Nodules/ tumor in small intestine"
      }
    }, {
      "myfilter": "2",
      "name": "25",
      "label": {
        "Bangla": "Parasites in small intestine",
        "English": "Parasites in small intestine"
      }
    }, {
      "myfilter": "2",
      "name": "26",
      "label": {
        "Bangla": "Lumen of small intestine filled with blood",
        "English": "Lumen of small intestine filled with blood"
      }
    }, {
      "myfilter": "2",
      "name": "27",
      "label": {
        "Bangla": "Turkish towel appearance of the mucosa of the small intstine",
        "English": "Turkish towel appearance of the mucosa of the small intstine"
      }
    }, {
      "myfilter": "2",
      "name": "28",
      "label": {
        "Bangla": "Hemorrhage in cecum",
        "English": "Hemorrhage in cecum"
      }
    }, {
      "myfilter": "2",
      "name": "29",
      "label": {
        "Bangla": "Congestion in cecum",
        "English": "Congestion in cecum"
      }
    }, {
      "myfilter": "2",
      "name": "30",
      "label": {
        "Bangla": "Enlarged cecum",
        "English": "Enlarged cecum"
      }
    }, {
      "myfilter": "2",
      "name": "31",
      "label": {
        "Bangla": "Clotted blood in the caeca",
        "English": "Clotted blood in the caeca"
      }
    }, {
      "myfilter": "2",
      "name": "32",
      "label": {
        "Bangla": "Fibrinous exudate in liver",
        "English": "Fibrinous exudate in liver"
      }
    }, {
      "myfilter": "2",
      "name": "33",
      "label": {
        "Bangla": "Hepatomegaly",
        "English": "Hepatomegaly"
      }
    }, {
      "myfilter": "2",
      "name": "34",
      "label": {
        "Bangla": "Hemorrhage in liver",
        "English": "Hemorrhage in liver"
      }
    }, {
      "myfilter": "2",
      "name": "35",
      "label": {
        "Bangla": "Congestion in liver",
        "English": "Congestion in liver"
      }
    }, {
      "myfilter": "2",
      "name": "36",
      "label": {
        "Bangla": "Necrosis in liver",
        "English": "Necrosis in liver"
      }
    }, {
      "myfilter": "2",
      "name": "37",
      "label": {
        "Bangla": "Ulcerative lesion in lesion",
        "English": "Ulcerative lesion in lesion"
      }
    }, {
      "myfilter": "2",
      "name": "38",
      "label": {
        "Bangla": "Pinpoint whitish spots on the liver",
        "English": "Pinpoint whitish spots on the liver"
      }
    }, {
      "myfilter": "2",
      "name": "39",
      "label": {
        "Bangla": "Copper colored liver",
        "English": "Copper colored liver"
      }
    }, {
      "myfilter": "2",
      "name": "40",
      "label": {
        "Bangla": "Frigile liver",
        "English": "Frigile liver"
      }
    }, {
      "myfilter": "2",
      "name": "41",
      "label": {
        "Bangla": "Pale liver",
        "English": "Pale liver"
      }
    }, {
      "myfilter": "2",
      "name": "42",
      "label": {
        "Bangla": "Hemorrhage in gall bladder",
        "English": "Hemorrhage in gall bladder"
      }
    }, {
      "myfilter": "2",
      "name": "43",
      "label": {
        "Bangla": "Congestion in gall bladder",
        "English": "Congestion in gall bladder"
      }
    }, {
      "myfilter": "2",
      "name": "44",
      "label": {
        "Bangla": "Hemorrhage in spleen",
        "English": "Hemorrhage in spleen"
      }
    }, {
      "myfilter": "2",
      "name": "45",
      "label": {
        "Bangla": "Congestion in spleen",
        "English": "Congestion in spleen"
      }
    }, {
      "myfilter": "2",
      "name": "46",
      "label": {
        "Bangla": "Splenomegaly",
        "English": "Splenomegaly"
      }
    }, {
      "myfilter": "2",
      "name": "47",
      "label": {
        "Bangla": "Splenitis",
        "English": "Splenitis"
      }
    }, {
      "myfilter": "2",
      "name": "48",
      "label": {
        "Bangla": "Necrosis in spleen",
        "English": "Necrosis in spleen"
      }
    }, {
      "myfilter": "2",
      "name": "49",
      "label": {
        "Bangla": "Hemorrhage in pancreas",
        "English": "Hemorrhage in pancreas"
      }
    }, {
      "myfilter": "2",
      "name": "50",
      "label": {
        "Bangla": "Congestion in pancreas",
        "English": "Congestion in pancreas"
      }
    }, {
      "myfilter": "2",
      "name": "51",
      "label": {
        "Bangla": "Necrosis in pancreas",
        "English": "Necrosis in pancreas"
      }
    }, {
      "myfilter": "2",
      "name": "52",
      "label": {
        "Bangla": "Haemorrhage in cloaca",
        "English": "Haemorrhage in cloaca"
      }
    }, {
      "myfilter": "2",
      "name": "53",
      "label": {
        "Bangla": "Congestion in cloaca",
        "English": "Congestion in cloaca"
      }
    }, {
      "myfilter": "2",
      "name": "54",
      "label": {
        "Bangla": "Thickening of cloaca membrane wall",
        "English": "Thickening of cloaca membrane wall"
      }
    }, {
      "myfilter": "2",
      "name": "55",
      "label": {
        "Bangla": "Thinning of cloaca membrane wall",
        "English": "Thinning of cloaca membrane wall"
      }
    }, {
      "myfilter": "2",
      "name": "56",
      "label": {
        "Bangla": "Cheesy exudateds in cloaca",
        "English": "Cheesy exudateds in cloaca"
      }
    }, {
      "myfilter": "2",
      "name": "57",
      "label": {
        "Bangla": "Edematous mesentery",
        "English": "Edematous mesentery"
      }
    }, {
      "myfilter": "2",
      "name": "58",
      "label": {
        "Bangla": "Congestion in mesentery",
        "English": "Congestion in mesentery"
      }
    }, {
      "myfilter": "2",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "3",
      "name": "59",
      "label": {
        "Bangla": "Haemorrhage in bursa of fabricius",
        "English": "Haemorrhage in bursa of fabricius"
      }
    }, {
      "myfilter": "3",
      "name": "60",
      "label": {
        "Bangla": "Congestion in bursa of fabricius",
        "English": "Congestion in bursa of fabricius"
      }
    }, {
      "myfilter": "3",
      "name": "61",
      "label": {
        "Bangla": "Swollen in bursa of fabricius",
        "English": "Swollen in bursa of fabricius"
      }
    }, {
      "myfilter": "3",
      "name": "62",
      "label": {
        "Bangla": "Atrophied in bursa of fabricius",
        "English": "Atrophied in bursa of fabricius"
      }
    }, {
      "myfilter": "3",
      "name": "63",
      "label": {
        "Bangla": "Haemorrhage in thymus",
        "English": "Haemorrhage in thymus"
      }
    }, {
      "myfilter": "3",
      "name": "64",
      "label": {
        "Bangla": "Thymic atrophy",
        "English": "Thymic atrophy"
      }
    }, {
      "myfilter": "3",
      "name": "65",
      "label": {
        "Bangla": "Hemorrhage in caecal tonsil",
        "English": "Hemorrhage in caecal tonsil"
      }
    }, {
      "myfilter": "3",
      "name": "66",
      "label": {
        "Bangla": "Congestion in caecal tonsil",
        "English": "Congestion in caecal tonsil"
      }
    }, {
      "myfilter": "3",
      "name": "67",
      "label": {
        "Bangla": "Ulcerative lesion in caecal tonsil",
        "English": "Ulcerative lesion in caecal tonsil"
      }
    }, {
      "myfilter": "3",
      "name": "68",
      "label": {
        "Bangla": "Atropy of caecal tonsil",
        "English": "Atropy of caecal tonsil"
      }
    }, {
      "myfilter": "3",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "4",
      "name": "69",
      "label": {
        "Bangla": "Haemorrhage in skin",
        "English": "Haemorrhage in skin"
      }
    }, {
      "myfilter": "4",
      "name": "70",
      "label": {
        "Bangla": "Swollen skin",
        "English": "Swollen skin"
      }
    }, {
      "myfilter": "4",
      "name": "71",
      "label": {
        "Bangla": "Necrosis of skin",
        "English": "Necrosis of skin"
      }
    }, {
      "myfilter": "4",
      "name": "72",
      "label": {
        "Bangla": "Inflammation of skin",
        "English": "Inflammation of skin"
      }
    }, {
      "myfilter": "4",
      "name": "73",
      "label": {
        "Bangla": "Scabbing",
        "English": "Scabbing"
      }
    }, {
      "myfilter": "4",
      "name": "74",
      "label": {
        "Bangla": "Edema in comb",
        "English": "Edema in comb"
      }
    }, {
      "myfilter": "4",
      "name": "75",
      "label": {
        "Bangla": "Congestion in comb",
        "English": "Congestion in comb"
      }
    }, {
      "myfilter": "4",
      "name": "76",
      "label": {
        "Bangla": "Nodules/ tumor in comb",
        "English": "Nodules/ tumor in comb"
      }
    }, {
      "myfilter": "4",
      "name": "77",
      "label": {
        "Bangla": "Edema in wattle",
        "English": "Edema in wattle"
      }
    }, {
      "myfilter": "4",
      "name": "78",
      "label": {
        "Bangla": "Congestion in wattle",
        "English": "Congestion in wattle"
      }
    }, {
      "myfilter": "4",
      "name": "79",
      "label": {
        "Bangla": "Nodules/ tumor in wattle",
        "English": "Nodules/ tumor in wattle"
      }
    }, {
      "myfilter": "4",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "5",
      "name": "80",
      "label": {
        "Bangla": "Hemorrhage in breast muscle",
        "English": "Hemorrhage in breast muscle"
      }
    }, {
      "myfilter": "5",
      "name": "81",
      "label": {
        "Bangla": "Congestion in breast muscle",
        "English": "Congestion in breast muscle"
      }
    }, {
      "myfilter": "5",
      "name": "82",
      "label": {
        "Bangla": "Hemorrhage in thigh muscle",
        "English": "Hemorrhage in thigh muscle"
      }
    }, {
      "myfilter": "5",
      "name": "83",
      "label": {
        "Bangla": "Congestion in thigh muscle",
        "English": "Congestion in thigh muscle"
      }
    }, {
      "myfilter": "5",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "6",
      "name": "84",
      "label": {
        "Bangla": "Enlargement of sciatic nerve",
        "English": "Enlargement of sciatic nerve"
      }
    }, {
      "myfilter": "6",
      "name": "85",
      "label": {
        "Bangla": "Discolored iris",
        "English": "Discolored iris"
      }
    }, {
      "myfilter": "6",
      "name": "86",
      "label": {
        "Bangla": "Irregular pupil",
        "English": "Irregular pupil"
      }
    }, {
      "myfilter": "6",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "7",
      "name": "87",
      "label": {
        "Bangla": "Hemorrhage in kidney",
        "English": "Hemorrhage in kidney"
      }
    }, {
      "myfilter": "7",
      "name": "88",
      "label": {
        "Bangla": "Congestion in kidney",
        "English": "Congestion in kidney"
      }
    }, {
      "myfilter": "7",
      "name": "89",
      "label": {
        "Bangla": "Atrophy of kidney",
        "English": "Atrophy of kidney"
      }
    }, {
      "myfilter": "7",
      "name": "90",
      "label": {
        "Bangla": "Nodules/ tumor in kidney",
        "English": "Nodules/ tumor in kidney"
      }
    }, {
      "myfilter": "7",
      "name": "91",
      "label": {
        "Bangla": "Inflammation in kidney",
        "English": "Inflammation in kidney"
      }
    }, {
      "myfilter": "7",
      "name": "92",
      "label": {
        "Bangla": "Swollen kidney",
        "English": "Swollen kidney"
      }
    }, {
      "myfilter": "7",
      "name": "93",
      "label": {
        "Bangla": "Pale kidney",
        "English": "Pale kidney"
      }
    }, {
      "myfilter": "7",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "8",
      "name": "94",
      "label": {
        "Bangla": "Edematous ovary",
        "English": "Edematous ovary"
      }
    }, {
      "myfilter": "8",
      "name": "95",
      "label": {
        "Bangla": "Congestion in ovary",
        "English": "Congestion in ovary"
      }
    }, {
      "myfilter": "8",
      "name": "96",
      "label": {
        "Bangla": "Ovarian regression",
        "English": "Ovarian regression"
      }
    }, {
      "myfilter": "8",
      "name": "97",
      "label": {
        "Bangla": "Rupture of ovary",
        "English": "Rupture of ovary"
      }
    }, {
      "myfilter": "8",
      "name": "98",
      "label": {
        "Bangla": "Edematous oviduct",
        "English": "Edematous oviduct"
      }
    }, {
      "myfilter": "8",
      "name": "99",
      "label": {
        "Bangla": "Congestion in oviduct",
        "English": "Congestion in oviduct"
      }
    }, {
      "myfilter": "8",
      "name": "100",
      "label": {
        "Bangla": "Atrophy of oviduct",
        "English": "Atrophy of oviduct"
      }
    }, {
      "myfilter": "8",
      "name": "101",
      "label": {
        "Bangla": "Dilated yolk sac blood vessels",
        "English": "Dilated yolk sac blood vessels"
      }
    }, {
      "myfilter": "8",
      "name": "102",
      "label": {
        "Bangla": "Atrophy of yolk sac",
        "English": "Atrophy of yolk sac"
      }
    }, {
      "myfilter": "8",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "9",
      "name": "103",
      "label": {
        "Bangla": "Hemorrhage in lung",
        "English": "Hemorrhage in lung"
      }
    }, {
      "myfilter": "9",
      "name": "104",
      "label": {
        "Bangla": "Congestion in lung",
        "English": "Congestion in lung"
      }
    }, {
      "myfilter": "9",
      "name": "105",
      "label": {
        "Bangla": "Fibrinous exudate in lung",
        "English": "Fibrinous exudate in lung"
      }
    }, {
      "myfilter": "9",
      "name": "106",
      "label": {
        "Bangla": "Necrosis in lung",
        "English": "Necrosis in lung"
      }
    }, {
      "myfilter": "9",
      "name": "107",
      "label": {
        "Bangla": "Nodules/ tumor in lung",
        "English": "Nodules/ tumor in lung"
      }
    }, {
      "myfilter": "9",
      "name": "108",
      "label": {
        "Bangla": "Hemorrhage in trachea",
        "English": "Hemorrhage in trachea"
      }
    }, {
      "myfilter": "9",
      "name": "109",
      "label": {
        "Bangla": "Congestion in trachea",
        "English": "Congestion in trachea"
      }
    }, {
      "myfilter": "9",
      "name": "110",
      "label": {
        "Bangla": "Diphtheritic lesions in trachea",
        "English": "Diphtheritic lesions in trachea"
      }
    }, {
      "myfilter": "9",
      "name": "111",
      "label": {
        "Bangla": "Exudate in trachea",
        "English": "Exudate in trachea"
      }
    }, {
      "myfilter": "9",
      "name": "112",
      "label": {
        "Bangla": "Excess mucus in trachea",
        "English": "Excess mucus in trachea"
      }
    }, {
      "myfilter": "9",
      "name": "113",
      "label": {
        "Bangla": "Hemorrhage in air sac",
        "English": "Hemorrhage in air sac"
      }
    }, {
      "myfilter": "9",
      "name": "114",
      "label": {
        "Bangla": "Congestion in air sac",
        "English": "Congestion in air sac"
      }
    }, {
      "myfilter": "9",
      "name": "115",
      "label": {
        "Bangla": "Fibrinous exudate in air sac",
        "English": "Fibrinous exudate in air sac"
      }
    }, {
      "myfilter": "9",
      "name": "116",
      "label": {
        "Bangla": "Air saculitis",
        "English": "Air saculitis"
      }
    }, {
      "myfilter": "9",
      "name": "117",
      "label": {
        "Bangla": "Inflammation of infra-orbital sinus",
        "English": "Inflammation of infra-orbital sinus"
      }
    }, {
      "myfilter": "9",
      "name": "118",
      "label": {
        "Bangla": "Exudate in infra-orbital sinus",
        "English": "Exudate in infra-orbital sinus"
      }
    }, {
      "myfilter": "9",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "microscopic_test_fecal": [{
      "myfilter": "1",
      "name": "1",
      "label": {
        "Bangla": "Ancylostoma (Hookworm)",
        "English": "Ancylostoma (Hookworm)"
      }
    }, {
      "myfilter": "1",
      "name": "2",
      "label": {
        "Bangla": "Ascaris (roundworm)",
        "English": "Ascaris (roundworm)"
      }
    }, {
      "myfilter": "1",
      "name": "3",
      "label": {
        "Bangla": "Balantidium",
        "English": "Balantidium"
      }
    }, {
      "myfilter": "1",
      "name": "4",
      "label": {
        "Bangla": "Bunostomum (Hookworm)",
        "English": "Bunostomum (Hookworm)"
      }
    }, {
      "myfilter": "1",
      "name": "5",
      "label": {
        "Bangla": "Capillaria",
        "English": "Capillaria"
      }
    }, {
      "myfilter": "1",
      "name": "6",
      "label": {
        "Bangla": "Coccidia",
        "English": "Coccidia"
      }
    }, {
      "myfilter": "1",
      "name": "7",
      "label": {
        "Bangla": "Fasciola (liver fluke)",
        "English": "Fasciola (liver fluke)"
      }
    }, {
      "myfilter": "1",
      "name": "8",
      "label": {
        "Bangla": "Oesophagostomum",
        "English": "Oesophagostomum"
      }
    }, {
      "myfilter": "1",
      "name": "9",
      "label": {
        "Bangla": "Paramphistomum (Rumen fluke)",
        "English": "Paramphistomum (Rumen fluke)"
      }
    }, {
      "myfilter": "1",
      "name": "10",
      "label": {
        "Bangla": "Strongyloides (threadworm)",
        "English": "Strongyloides (threadworm)"
      }
    }, {
      "myfilter": "1",
      "name": "11",
      "label": {
        "Bangla": "Toxocara",
        "English": "Toxocara"
      }
    }, {
      "myfilter": "1",
      "name": "12",
      "label": {
        "Bangla": "Toxoplasma",
        "English": "Toxoplasma"
      }
    }, {
      "myfilter": "1",
      "name": "13",
      "label": {
        "Bangla": "Trichuris (Whip worm)",
        "English": "Trichuris (Whip worm)"
      }
    }, {
      "myfilter": "1",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "2",
      "name": "2",
      "label": {
        "Bangla": "Ascaris (roundworm)",
        "English": "Ascaris (roundworm)"
      }
    }, {
      "myfilter": "2",
      "name": "5",
      "label": {
        "Bangla": "Capillaria",
        "English": "Capillaria"
      }
    }, {
      "myfilter": "2",
      "name": "6",
      "label": {
        "Bangla": "Coccidia",
        "English": "Coccidia"
      }
    }, {
      "myfilter": "2",
      "name": "1",
      "label": {
        "Bangla": "Heterakis",
        "English": "Heterakis"
      }
    }, {
      "myfilter": "2",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "postmortem_findings_mammal": [{
      "name": "1",
      "label": {
        "Bangla": "1",
        "English": "1"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "2",
        "English": "2"
      }
    }],
    "yes_no": [{
      "name": "1",
      "label": {
        "Bangla": "Yes",
        "English": "Yes"
      }
    }, {
      "name": "0",
      "label": {
        "Bangla": "No",
        "English": "No"
      }
    }],
    "positive_negative": [{
      "name": "1",
      "label": {
        "Bangla": "Positive",
        "English": "Positive"
      }
    }, {
      "name": "0",
      "label": {
        "Bangla": "Negative",
        "English": "Negative"
      }
    }],
    "species_breed_type": [{
      "myfilter": "3",
      "name": "1",
      "label": {
        "Bangla": "Cross",
        "English": "Cross"
      }
    }, {
      "myfilter": "3",
      "name": "2",
      "label": {
        "Bangla": "Local",
        "English": "Local"
      }
    }, {
      "myfilter": "3",
      "name": "3",
      "label": {
        "Bangla": "Exotic",
        "English": "Exotic"
      }
    }, {
      "myfilter": "21",
      "name": "1",
      "label": {
        "Bangla": "Broiler",
        "English": "Broiler"
      }
    }, {
      "myfilter": "21",
      "name": "2",
      "label": {
        "Bangla": "Layer",
        "English": "Layer"
      }
    }, {
      "myfilter": "21",
      "name": "3",
      "label": {
        "Bangla": "Sonali",
        "English": "Sonali"
      }
    }, {
      "myfilter": "21",
      "name": "4",
      "label": {
        "Bangla": "Deshi",
        "English": "Deshi"
      }
    }],
    "tentative_diagnosis": [{
      "name": "1",
      "label": {
        "Bangla": "a",
        "English": "a"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "b",
        "English": "b"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "c",
        "English": "c"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "B",
      "name": "1",
      "label": {
        "Bangla": "Aflatoxicosis",
        "English": "Aflatoxicosis"
      }
    }, {
      "myfilter": "B",
      "name": "4",
      "label": {
        "Bangla": "Aspergillosis",
        "English": "Aspergillosis"
      }
    }, {
      "myfilter": "B",
      "name": "5",
      "label": {
        "Bangla": "Avian Influenza",
        "English": "Avian Influenza"
      }
    }, {
      "myfilter": "B",
      "name": "6",
      "label": {
        "Bangla": "Avian Leukosis",
        "English": "Avian Leukosis"
      }
    }, {
      "myfilter": "B",
      "name": "7",
      "label": {
        "Bangla": "Avitaminosis",
        "English": "Avitaminosis"
      }
    }, {
      "myfilter": "B",
      "name": "13",
      "label": {
        "Bangla": "Chronic Respiratory Disease (CRD)",
        "English": "Chronic Respiratory Disease (CRD)"
      }
    }, {
      "myfilter": "B",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "B",
      "name": "15",
      "label": {
        "Bangla": "Colibacillosis (E. coli Infection)",
        "English": "Colibacillosis (E. coli Infection)"
      }
    }, {
      "myfilter": "B",
      "name": "18",
      "label": {
        "Bangla": "Duck Cholera",
        "English": "Duck Cholera"
      }
    }, {
      "myfilter": "B",
      "name": "19",
      "label": {
        "Bangla": "Duck Plague (Duck Enteritis Virus)",
        "English": "Duck Plague (Duck Enteritis Virus)"
      }
    }, {
      "myfilter": "B",
      "name": "20",
      "label": {
        "Bangla": "Egg Drop Syndrome (EDS)",
        "English": "Egg Drop Syndrome (EDS)"
      }
    }, {
      "myfilter": "B",
      "name": "24",
      "label": {
        "Bangla": "Fowl Cholera",
        "English": "Fowl Cholera"
      }
    }, {
      "myfilter": "B",
      "name": "25",
      "label": {
        "Bangla": "Fowl Pox",
        "English": "Fowl Pox"
      }
    }, {
      "myfilter": "B",
      "name": "27",
      "label": {
        "Bangla": "Gangrenous Dermatitis",
        "English": "Gangrenous Dermatitis"
      }
    }, {
      "myfilter": "B",
      "name": "32",
      "label": {
        "Bangla": "Infectious Bursal Disease (IBD)",
        "English": "Infectious Bursal Disease (IBD)"
      }
    }, {
      "myfilter": "B",
      "name": "33",
      "label": {
        "Bangla": "Infectious Coryza",
        "English": "Infectious Coryza"
      }
    }, {
      "myfilter": "B",
      "name": "34",
      "label": {
        "Bangla": "Infectious Laryngotracheitis Virus (ILT)",
        "English": "Infectious Laryngotracheitis Virus (ILT)"
      }
    }, {
      "myfilter": "B",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "B",
      "name": "38",
      "label": {
        "Bangla": "Malnutrition",
        "English": "Malnutrition"
      }
    }, {
      "myfilter": "B",
      "name": "39",
      "label": {
        "Bangla": "Marek\u2019s Disease",
        "English": "Marek\u2019s Disease"
      }
    }, {
      "myfilter": "B",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "B",
      "name": "43",
      "label": {
        "Bangla": "Mycoplasmosis",
        "English": "Mycoplasmosis"
      }
    }, {
      "myfilter": "B",
      "name": "45",
      "label": {
        "Bangla": "Necrotic Enteritis",
        "English": "Necrotic Enteritis"
      }
    }, {
      "myfilter": "B",
      "name": "46",
      "label": {
        "Bangla": "Newcastle Disease",
        "English": "Newcastle Disease"
      }
    }, {
      "myfilter": "B",
      "name": "52",
      "label": {
        "Bangla": "Salmonellosis",
        "English": "Salmonellosis"
      }
    }, {
      "myfilter": "B",
      "name": "60",
      "label": {
        "Bangla": "Worm Infestation",
        "English": "Worm Infestation"
      }
    }, {
      "myfilter": "B",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "M1",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M1",
      "name": "3",
      "label": {
        "Bangla": "Anthrax",
        "English": "Anthrax"
      }
    }, {
      "myfilter": "M1",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M1",
      "name": "9",
      "label": {
        "Bangla": "Black Quarter (BQ)",
        "English": "Black Quarter (BQ)"
      }
    }, {
      "myfilter": "M1",
      "name": "10",
      "label": {
        "Bangla": "Bovine Tuberculosis",
        "English": "Bovine Tuberculosis"
      }
    }, {
      "myfilter": "M1",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M1",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M1",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M1",
      "name": "21",
      "label": {
        "Bangla": "Ephemeral Fever",
        "English": "Ephemeral Fever"
      }
    }, {
      "myfilter": "M1",
      "name": "22",
      "label": {
        "Bangla": "Foot and Mouth Disease (FMD)",
        "English": "Foot and Mouth Disease (FMD)"
      }
    }, {
      "myfilter": "M1",
      "name": "23",
      "label": {
        "Bangla": "Foot rot",
        "English": "Foot rot"
      }
    }, {
      "myfilter": "M1",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M1",
      "name": "30",
      "label": {
        "Bangla": "Hemorrhagic Septicemia (HS)",
        "English": "Hemorrhagic Septicemia (HS)"
      }
    }, {
      "myfilter": "M1",
      "name": "31",
      "label": {
        "Bangla": "Hump Sore",
        "English": "Hump Sore"
      }
    }, {
      "myfilter": "M1",
      "name": "35",
      "label": {
        "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
        "English": "Jhone\u2019s Disease (Paratuberculosis)"
      }
    }, {
      "myfilter": "M1",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M1",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M1",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M1",
      "name": "41",
      "label": {
        "Bangla": "Milk Fever",
        "English": "Milk Fever"
      }
    }, {
      "myfilter": "M1",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M1",
      "name": "44",
      "label": {
        "Bangla": "Navel Ill",
        "English": "Navel Ill"
      }
    }, {
      "myfilter": "M1",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M1",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M1",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M1",
      "name": "51",
      "label": {
        "Bangla": "Ruminal Tympany/ Bloat",
        "English": "Ruminal Tympany/ Bloat"
      }
    }, {
      "myfilter": "M1",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M1",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M1",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M1",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M1",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M1",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "M3",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M3",
      "name": "3",
      "label": {
        "Bangla": "Anthrax",
        "English": "Anthrax"
      }
    }, {
      "myfilter": "M3",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M3",
      "name": "9",
      "label": {
        "Bangla": "Black Quarter (BQ)",
        "English": "Black Quarter (BQ)"
      }
    }, {
      "myfilter": "M3",
      "name": "10",
      "label": {
        "Bangla": "Bovine Tuberculosis",
        "English": "Bovine Tuberculosis"
      }
    }, {
      "myfilter": "M3",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M3",
      "name": "12",
      "label": {
        "Bangla": "Calf Scour",
        "English": "Calf Scour"
      }
    }, {
      "myfilter": "M3",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M3",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M3",
      "name": "21",
      "label": {
        "Bangla": "Ephemeral Fever",
        "English": "Ephemeral Fever"
      }
    }, {
      "myfilter": "M3",
      "name": "22",
      "label": {
        "Bangla": "Foot and Mouth Disease (FMD)",
        "English": "Foot and Mouth Disease (FMD)"
      }
    }, {
      "myfilter": "M3",
      "name": "23",
      "label": {
        "Bangla": "Foot rot",
        "English": "Foot rot"
      }
    }, {
      "myfilter": "M3",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M3",
      "name": "30",
      "label": {
        "Bangla": "Hemorrhagic Septicemia (HS)",
        "English": "Hemorrhagic Septicemia (HS)"
      }
    }, {
      "myfilter": "M3",
      "name": "31",
      "label": {
        "Bangla": "Hump Sore",
        "English": "Hump Sore"
      }
    }, {
      "myfilter": "M3",
      "name": "35",
      "label": {
        "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
        "English": "Jhone\u2019s Disease (Paratuberculosis)"
      }
    }, {
      "myfilter": "M3",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M3",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M3",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M3",
      "name": "41",
      "label": {
        "Bangla": "Milk Fever",
        "English": "Milk Fever"
      }
    }, {
      "myfilter": "M3",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M3",
      "name": "44",
      "label": {
        "Bangla": "Navel Ill",
        "English": "Navel Ill"
      }
    }, {
      "myfilter": "M3",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M3",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M3",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M3",
      "name": "51",
      "label": {
        "Bangla": "Ruminal Tympany/ Bloat",
        "English": "Ruminal Tympany/ Bloat"
      }
    }, {
      "myfilter": "M3",
      "name": "54",
      "label": {
        "Bangla": "Stringhalt",
        "English": "Stringhalt"
      }
    }, {
      "myfilter": "M3",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M3",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M3",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M3",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M3",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M3",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "M5",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M5",
      "name": "3",
      "label": {
        "Bangla": "Anthrax",
        "English": "Anthrax"
      }
    }, {
      "myfilter": "M5",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M5",
      "name": "9",
      "label": {
        "Bangla": "Black Quarter (BQ)",
        "English": "Black Quarter (BQ)"
      }
    }, {
      "myfilter": "M5",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M5",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M5",
      "name": "16",
      "label": {
        "Bangla": "Contagious Caprine Pleuropneumonia",
        "English": "Contagious Caprine Pleuropneumonia"
      }
    }, {
      "myfilter": "M5",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M5",
      "name": "22",
      "label": {
        "Bangla": "Foot and Mouth Disease (FMD)",
        "English": "Foot and Mouth Disease (FMD)"
      }
    }, {
      "myfilter": "M5",
      "name": "23",
      "label": {
        "Bangla": "Foot rot",
        "English": "Foot rot"
      }
    }, {
      "myfilter": "M5",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M5",
      "name": "29",
      "label": {
        "Bangla": "Goat Pox",
        "English": "Goat Pox"
      }
    }, {
      "myfilter": "M5",
      "name": "30",
      "label": {
        "Bangla": "Hemorrhagic Septicemia (HS)",
        "English": "Hemorrhagic Septicemia (HS)"
      }
    }, {
      "myfilter": "M5",
      "name": "35",
      "label": {
        "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
        "English": "Jhone\u2019s Disease (Paratuberculosis)"
      }
    }, {
      "myfilter": "M5",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M5",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M5",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M5",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M5",
      "name": "44",
      "label": {
        "Bangla": "Navel Ill",
        "English": "Navel Ill"
      }
    }, {
      "myfilter": "M5",
      "name": "47",
      "label": {
        "Bangla": "Pesti des Petits Ruminants",
        "English": "Pesti des Petits Ruminants"
      }
    }, {
      "myfilter": "M5",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M5",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M5",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M5",
      "name": "51",
      "label": {
        "Bangla": "Ruminal Tympany/ Bloat",
        "English": "Ruminal Tympany/ Bloat"
      }
    }, {
      "myfilter": "M5",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M5",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M5",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M5",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M5",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M5",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "M8",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M8",
      "name": "3",
      "label": {
        "Bangla": "Anthrax",
        "English": "Anthrax"
      }
    }, {
      "myfilter": "M8",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M8",
      "name": "9",
      "label": {
        "Bangla": "Black Quarter (BQ)",
        "English": "Black Quarter (BQ)"
      }
    }, {
      "myfilter": "M8",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M8",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M8",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M8",
      "name": "22",
      "label": {
        "Bangla": "Foot and Mouth Disease (FMD)",
        "English": "Foot and Mouth Disease (FMD)"
      }
    }, {
      "myfilter": "M8",
      "name": "23",
      "label": {
        "Bangla": "Foot rot",
        "English": "Foot rot"
      }
    }, {
      "myfilter": "M8",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M8",
      "name": "28",
      "label": {
        "Bangla": "Gid Disease (Cerebral coenurosis)",
        "English": "Gid Disease (Cerebral coenurosis)"
      }
    }, {
      "myfilter": "M8",
      "name": "30",
      "label": {
        "Bangla": "Hemorrhagic Septicemia (HS)",
        "English": "Hemorrhagic Septicemia (HS)"
      }
    }, {
      "myfilter": "M8",
      "name": "35",
      "label": {
        "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
        "English": "Jhone\u2019s Disease (Paratuberculosis)"
      }
    }, {
      "myfilter": "M8",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M8",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M8",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M8",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M8",
      "name": "44",
      "label": {
        "Bangla": "Navel Ill",
        "English": "Navel Ill"
      }
    }, {
      "myfilter": "M8",
      "name": "47",
      "label": {
        "Bangla": "Pesti des Petits Ruminants",
        "English": "Pesti des Petits Ruminants"
      }
    }, {
      "myfilter": "M8",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M8",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M8",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M8",
      "name": "51",
      "label": {
        "Bangla": "Ruminal Tympany/ Bloat",
        "English": "Ruminal Tympany/ Bloat"
      }
    }, {
      "myfilter": "M8",
      "name": "53",
      "label": {
        "Bangla": "Sheep Pox",
        "English": "Sheep Pox"
      }
    }, {
      "myfilter": "M8",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M8",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M8",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M8",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M8",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M8",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "M6",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M6",
      "name": "3",
      "label": {
        "Bangla": "Anthrax",
        "English": "Anthrax"
      }
    }, {
      "myfilter": "M6",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M6",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M6",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M6",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M6",
      "name": "23",
      "label": {
        "Bangla": "Foot rot",
        "English": "Foot rot"
      }
    }, {
      "myfilter": "M6",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M6",
      "name": "28",
      "label": {
        "Bangla": "Gid Disease (Cerebral coenurosis)",
        "English": "Gid Disease (Cerebral coenurosis)"
      }
    }, {
      "myfilter": "M6",
      "name": "30",
      "label": {
        "Bangla": "Hemorrhagic Septicemia (HS)",
        "English": "Hemorrhagic Septicemia (HS)"
      }
    }, {
      "myfilter": "M6",
      "name": "35",
      "label": {
        "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
        "English": "Jhone\u2019s Disease (Paratuberculosis)"
      }
    }, {
      "myfilter": "M6",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M6",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M6",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M6",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M6",
      "name": "44",
      "label": {
        "Bangla": "Navel Ill",
        "English": "Navel Ill"
      }
    }, {
      "myfilter": "M6",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M6",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M6",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M6",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M6",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M6",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M6",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M6",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M6",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "M2",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M2",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M2",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M2",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M2",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M2",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M2",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M2",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M2",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M2",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M2",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M2",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M2",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M2",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M2",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M2",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M2",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M2",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M2",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "M4",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M4",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M4",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M4",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M4",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M4",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M4",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M4",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M4",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M4",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M4",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M4",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M4",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M4",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M4",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M4",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M4",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M4",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M4",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "M7",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M7",
      "name": "3",
      "label": {
        "Bangla": "Anthrax",
        "English": "Anthrax"
      }
    }, {
      "myfilter": "M7",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M7",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M7",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M7",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M7",
      "name": "22",
      "label": {
        "Bangla": "Foot and Mouth Disease (FMD)",
        "English": "Foot and Mouth Disease (FMD)"
      }
    }, {
      "myfilter": "M7",
      "name": "23",
      "label": {
        "Bangla": "Foot rot",
        "English": "Foot rot"
      }
    }, {
      "myfilter": "M7",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M7",
      "name": "30",
      "label": {
        "Bangla": "Hemorrhagic Septicemia (HS)",
        "English": "Hemorrhagic Septicemia (HS)"
      }
    }, {
      "myfilter": "M7",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M7",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M7",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M7",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M7",
      "name": "44",
      "label": {
        "Bangla": "Navel Ill",
        "English": "Navel Ill"
      }
    }, {
      "myfilter": "M7",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M7",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M7",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M7",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M7",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M7",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M7",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M7",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M7",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }, {
      "myfilter": "M_Other",
      "name": "2",
      "label": {
        "Bangla": "Anaplasmosis",
        "English": "Anaplasmosis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "3",
      "label": {
        "Bangla": "Anthrax",
        "English": "Anthrax"
      }
    }, {
      "myfilter": "M_Other",
      "name": "8",
      "label": {
        "Bangla": "Babesiosis",
        "English": "Babesiosis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "9",
      "label": {
        "Bangla": "Black Quarter (BQ)",
        "English": "Black Quarter (BQ)"
      }
    }, {
      "myfilter": "M_Other",
      "name": "10",
      "label": {
        "Bangla": "Bovine Tuberculosis",
        "English": "Bovine Tuberculosis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "11",
      "label": {
        "Bangla": "Brucellosis",
        "English": "Brucellosis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "12",
      "label": {
        "Bangla": "Calf Scour",
        "English": "Calf Scour"
      }
    }, {
      "myfilter": "M_Other",
      "name": "14",
      "label": {
        "Bangla": "Coccidiosis",
        "English": "Coccidiosis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "16",
      "label": {
        "Bangla": "Contagious Caprine Pleuropneumonia",
        "English": "Contagious Caprine Pleuropneumonia"
      }
    }, {
      "myfilter": "M_Other",
      "name": "17",
      "label": {
        "Bangla": "Dermatophilosis",
        "English": "Dermatophilosis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "21",
      "label": {
        "Bangla": "Ephemeral Fever",
        "English": "Ephemeral Fever"
      }
    }, {
      "myfilter": "M_Other",
      "name": "22",
      "label": {
        "Bangla": "Foot and Mouth Disease (FMD)",
        "English": "Foot and Mouth Disease (FMD)"
      }
    }, {
      "myfilter": "M_Other",
      "name": "23",
      "label": {
        "Bangla": "Foot rot",
        "English": "Foot rot"
      }
    }, {
      "myfilter": "M_Other",
      "name": "26",
      "label": {
        "Bangla": "Gangrene",
        "English": "Gangrene"
      }
    }, {
      "myfilter": "M_Other",
      "name": "28",
      "label": {
        "Bangla": "Gid Disease (Cerebral coenurosis)",
        "English": "Gid Disease (Cerebral coenurosis)"
      }
    }, {
      "myfilter": "M_Other",
      "name": "29",
      "label": {
        "Bangla": "Goat Pox",
        "English": "Goat Pox"
      }
    }, {
      "myfilter": "M_Other",
      "name": "30",
      "label": {
        "Bangla": "Hemorrhagic Septicemia (HS)",
        "English": "Hemorrhagic Septicemia (HS)"
      }
    }, {
      "myfilter": "M_Other",
      "name": "31",
      "label": {
        "Bangla": "Hump Sore",
        "English": "Hump Sore"
      }
    }, {
      "myfilter": "M_Other",
      "name": "35",
      "label": {
        "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
        "English": "Jhone\u2019s Disease (Paratuberculosis)"
      }
    }, {
      "myfilter": "M_Other",
      "name": "36",
      "label": {
        "Bangla": "Lice Infestation",
        "English": "Lice Infestation"
      }
    }, {
      "myfilter": "M_Other",
      "name": "37",
      "label": {
        "Bangla": "Liver Fluke",
        "English": "Liver Fluke"
      }
    }, {
      "myfilter": "M_Other",
      "name": "40",
      "label": {
        "Bangla": "Mastitis",
        "English": "Mastitis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "41",
      "label": {
        "Bangla": "Milk Fever",
        "English": "Milk Fever"
      }
    }, {
      "myfilter": "M_Other",
      "name": "42",
      "label": {
        "Bangla": "Mite Infestation",
        "English": "Mite Infestation"
      }
    }, {
      "myfilter": "M_Other",
      "name": "44",
      "label": {
        "Bangla": "Navel Ill",
        "English": "Navel Ill"
      }
    }, {
      "myfilter": "M_Other",
      "name": "47",
      "label": {
        "Bangla": "Pesti des Petits Ruminants",
        "English": "Pesti des Petits Ruminants"
      }
    }, {
      "myfilter": "M_Other",
      "name": "48",
      "label": {
        "Bangla": "Rabies",
        "English": "Rabies"
      }
    }, {
      "myfilter": "M_Other",
      "name": "49",
      "label": {
        "Bangla": "Ringworm (Dermatophytosis)",
        "English": "Ringworm (Dermatophytosis)"
      }
    }, {
      "myfilter": "M_Other",
      "name": "50",
      "label": {
        "Bangla": "Round Worm",
        "English": "Round Worm"
      }
    }, {
      "myfilter": "M_Other",
      "name": "51",
      "label": {
        "Bangla": "Ruminal Tympany/ Bloat",
        "English": "Ruminal Tympany/ Bloat"
      }
    }, {
      "myfilter": "M_Other",
      "name": "53",
      "label": {
        "Bangla": "Sheep Pox",
        "English": "Sheep Pox"
      }
    }, {
      "myfilter": "M_Other",
      "name": "54",
      "label": {
        "Bangla": "Stringhalt",
        "English": "Stringhalt"
      }
    }, {
      "myfilter": "M_Other",
      "name": "55",
      "label": {
        "Bangla": "Tape Worm",
        "English": "Tape Worm"
      }
    }, {
      "myfilter": "M_Other",
      "name": "56",
      "label": {
        "Bangla": "Teat Sore",
        "English": "Teat Sore"
      }
    }, {
      "myfilter": "M_Other",
      "name": "57",
      "label": {
        "Bangla": "Tetanus",
        "English": "Tetanus"
      }
    }, {
      "myfilter": "M_Other",
      "name": "58",
      "label": {
        "Bangla": "Theileriosis",
        "English": "Theileriosis"
      }
    }, {
      "myfilter": "M_Other",
      "name": "59",
      "label": {
        "Bangla": "Tick Infestation",
        "English": "Tick Infestation"
      }
    }, {
      "myfilter": "M_Other",
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }],
    "rapid_test_bird": [{
      "myfilter": "2",
      "name": "1",
      "label": {
        "Bangla": "Avian influenza",
        "English": "Avian influenza"
      }
    }, {
      "myfilter": "1",
      "name": "2",
      "label": {
        "Bangla": "CMT",
        "English": "CMT"
      }
    }, {
      "myfilter": "1",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }, {
      "myfilter": "2",
      "name": "3",
      "label": {
        "Bangla": "Mycoplasma",
        "English": "Mycoplasma"
      }
    }, {
      "myfilter": "2",
      "name": "4",
      "label": {
        "Bangla": "Newcastle Disease",
        "English": "Newcastle Disease"
      }
    }, {
      "myfilter": "2",
      "name": "00",
      "label": {
        "Bangla": "Other",
        "English": "Other"
      }
    }],
    "species_rearing_purpose": [{
      "name": "1",
      "label": {
        "Bangla": "Milk",
        "English": "Milk"
      }
    }, {
      "name": "2",
      "label": {
        "Bangla": "Meat",
        "English": "Meat"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Working",
        "English": "Working"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Hobby",
        "English": "Hobby"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Fiber/Wool",
        "English": "Fiber/Wool"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Multi-purpose",
        "English": "Multi-purpose"
      }
    }],
    "microscopic_test_ear_1": [{
      "name": "1",
      "label": {
        "Bangla": "Auricular chondritis",
        "English": "Auricular chondritis"
      }
    }, {
      "name": "3",
      "label": {
        "Bangla": "Hair loss on the outer ear",
        "English": "Hair loss on the outer ear"
      }
    }, {
      "name": "4",
      "label": {
        "Bangla": "Lice",
        "English": "Lice"
      }
    }, {
      "name": "5",
      "label": {
        "Bangla": "Mite",
        "English": "Mite"
      }
    }, {
      "name": "6",
      "label": {
        "Bangla": "Nodular granulomatous dermatitis",
        "English": "Nodular granulomatous dermatitis"
      }
    }, {
      "name": "7",
      "label": {
        "Bangla": "Tick",
        "English": "Tick"
      }
    }, {
      "name": "8",
      "label": {
        "Bangla": "Tissue death of the pinna",
        "English": "Tissue death of the pinna"
      }
    }, {
      "name": "00",
      "label": {
        "Bangla": "Others",
        "English": "Others"
      }
    }]
  },
  "id_string": "patient_registry"
};
var geo = [{
  district_code: '1004',
  district_name: 'BargunaH',
  division_code: '10',
  division_name: 'Barisal',
  union_code: '10040913',
  union_name: 'Amtali',
  upazila_code: '100409',
  upazila_name: 'Amtali'
}, {
  district_code: '1005',
  district_name: 'BargunaL',
  division_code: '10',
  division_name: 'Barisal',
  union_code: '10040915',
  union_name: 'Arpangashia',
  upazila_code: '100409',
  upazila_name: 'Amtali'
}, {
  district_code: '2003',
  district_name: 'Bandarban',
  division_code: '20',
  division_name: 'Chittagong',
  union_code: '20030431',
  union_name: 'Alikadam',
  upazila_code: '200304',
  upazila_name: 'Alikadam'
}, {
  district_code: '2003',
  district_name: 'Bandarban',
  division_code: '20',
  division_name: 'Chittagong',
  union_code: '20030480',
  union_name: 'Nayapara',
  upazila_code: '200304',
  upazila_name: 'Alikadam'
}];

var actualExpression;
var currentHierarchicalName = '';
var formItemProperty = {};
var userInput = {};

function tokenizeCharacter(type, value, input, current) {
  return value === input[current] ? [1, {
    type: type,
    value: value
  }] : [0, null];
}

function tokenizeParenOpen(input, current) {
  return tokenizeCharacter('paren', '(', input, current);
}

function tokenizeBrakeOpen(input, current) {
  return tokenizeCharacter('brac', '[', input, current);
}

function tokenizeBrakeClose(input, current) {
  return tokenizeCharacter('brac', ']', input, current);
}

function tokenizeParenClose(input, current) {
  return tokenizeCharacter('paren', ')', input, current);
}

function tokenizeEqual(input, current) {
  return tokenizeCharacter('equal', '=', input, current);
}

function tokenizePlus(input, current) {
  return tokenizeCharacter('plus', '+', input, current);
}

function tokenizeMinus(input, current) {
  return tokenizeCharacter('minus', '-', input, current);
}

function tokenizeMultiply(input, current) {
  return tokenizeCharacter('multiply', '*', input, current);
}

function tokenizeDivide(input, current) {
  return tokenizeCharacter('divide', '/', input, current);
}

function tokenizeLessThan(input, current) {
  return tokenizeCharacter('lessThan', '<', input, current);
}

function tokenizeGreaterThan(input, current) {
  return tokenizeCharacter('greaterThan', '>', input, current);
}

function tokenizeNot(input, current) {
  return tokenizeCharacter('not', '!', input, current);
}

function tokenizeComma(input, current) {
  return tokenizeCharacter('comma', ',', input, current);
}

function tokenizeDot(input, current) {
  return tokenizeCharacter('dot', '.', input, current);
}

function tokenizePattern(type, pattern, input, current) {
  var _char = input[current];
  var consumedChars = 0;

  if (pattern.test(_char)) {
    var value = '';

    while (_char && pattern.test(_char)) {
      value += _char;
      consumedChars += 1;
      _char = input[current + consumedChars];
    }

    return [consumedChars, {
      type: type,
      value: value
    }];
  }

  return [0, null];
}

function tokenizeString(input, current) {
  if (input[current] === '"' || input[current] === "'") {
    var matchQuote = input[current];
    var value = '';
    var consumedChars = 0;
    consumedChars += 1;
    var _char2 = input[current + consumedChars];

    while (_char2 !== matchQuote) {
      if (_char2 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char2;
      consumedChars += 1;
      _char2 = input[current + consumedChars];
    }

    return [consumedChars + 1, {
      type: 'string',
      value: value
    }];
  }

  return [0, null];
}

function tokenizeFunction(input, current) {
  if (/[a-z_]/i.test(input[current])) {
    var value = '';
    var consumedChars = 0; // consumedChars ++;

    var _char3 = input[current + consumedChars];

    while (_char3 && /[:a-z0-9_-]/i.test(_char3)) {
      if (_char3 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char3;
      consumedChars += 1;
      _char3 = input[current + consumedChars];
    }

    while (_char3 && /\s/.test(_char3)) {
      consumedChars += 1;
      _char3 = input[current + consumedChars];
    }

    if (_char3 && _char3 === '(') {
      return [consumedChars, {
        type: 'function',
        value: value
      }];
    }
  }

  return [0, null];
}

function tokenizeNumber(input, current) {
  if (/[0-9]/i.test(input[current])) {
    var value = '';
    var consumedChars = 0; // consumedChars ++;

    var _char4 = input[current + consumedChars];

    while (/[0-9]/i.test(_char4)) {
      if (_char4 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char4;
      consumedChars += 1;
      _char4 = input[current + consumedChars];
    }

    if (_char4 !== '.') {
      return [consumedChars, {
        type: 'number',
        value: value
      }];
    }
  }

  return [0, null];
}

function tokenizeDecimal(input, current) {
  if (/[0-9.]/i.test(input[current])) {
    var value = '';
    var consumedChars = 0; // consumedChars ++;

    var _char5 = input[current + consumedChars];

    while (/[0-9]/i.test(_char5)) {
      if (_char5 === undefined) {
        throw new TypeError('unterminated string ');
      }

      value += _char5;
      consumedChars += 1;
      _char5 = input[current + consumedChars];
    }

    if (_char5 === '.') {
      value += _char5;
      consumedChars += 1;
      _char5 = input[current + consumedChars];

      if (/[0-9]/i.test(_char5)) {
        while (/[0-9]/i.test(_char5)) {
          if (_char5 === undefined) {
            throw new TypeError('unterminated string ');
          }

          value += _char5;
          consumedChars += 1;
          _char5 = input[current + consumedChars];
        }

        return [consumedChars, {
          type: 'decimal',
          value: value
        }];
      }
    }
  }

  return [0, null];
}

function tokenizeVariable(input, current) {
  if (input[current] === '#' || input[current] === '$') {
    if (input[current + 1] && input[current + 1] === '{') {
      var value = '';
      var consumedChars = 1;
      consumedChars += 1;
      var _char6 = input[current + consumedChars];

      while (_char6 !== '}') {
        if (_char6 === undefined) {
          throw new TypeError('unterminated string ');
        }

        value += _char6;
        consumedChars += 1;
        _char6 = input[current + consumedChars];
      }

      return [consumedChars + 1, {
        type: 'variable',
        value: value
      }];
    }
  }

  return [0, null];
}

function tokenizeOr(input, current) {
  if (input[current] === 'o') {
    if (input[current + 1] && input[current + 1] === 'r') {
      if (input[current + 2] === undefined || /[0-9\s]/.test(input[current + 2])) {
        return [2, {
          type: 'or',
          value: 'or'
        }];
      }
    }
  }

  return [0, null];
}

function tokenizeIf(input, current) {
  if (input[current] === 'i') {
    if (input[current + 1] && input[current + 1] === 'f') {
      if (input[current + 2] === undefined || !/[a-z]i/.test(input[current + 2])) {
        return [2, {
          type: 'if',
          value: 'if'
        }];
      }
    }
  }

  return [0, null];
}

function tokenizeAnd(input, current) {
  if (input[current] === 'a') {
    if (input[current + 1] && input[current + 1] === 'n') {
      if (input[current + 2] && input[current + 2] === 'd') {
        if (input[current + 3] === undefined || /[0-9\s]/.test(input[current + 3])) {
          return [3, {
            type: 'and',
            value: 'and'
          }];
        }
      }
    }
  }

  return [0, null];
}

function tokenizeDiv(input, current) {
  if (input[current] === 'd') {
    if (input[current + 1] && input[current + 1] === 'i') {
      if (input[current + 2] && input[current + 2] === 'v') {
        if (input[current + 3] === undefined || /[0-9\s]/.test(input[current + 3])) {
          return [3, {
            type: 'divide',
            value: '/'
          }];
        }
      }
    }
  }

  return [0, null];
}

function tokenizeName(input, current) {
  return tokenizePattern('name', /[a-z]/i, input, current);
}

function skipWhiteSpace(input, current) {
  return /\s/.test(input[current]) ? [1, null] : [0, null];
}

var tokenizers = [skipWhiteSpace, tokenizeParenOpen, tokenizeParenClose, tokenizeIf, tokenizeOr, tokenizeAnd, tokenizeVariable, tokenizeString, tokenizeFunction, tokenizeEqual, tokenizePlus, tokenizeMinus, tokenizeMultiply, tokenizeDivide, tokenizeDiv, tokenizeLessThan, tokenizeGreaterThan, tokenizeNot, tokenizeBrakeOpen, tokenizeBrakeClose, tokenizeDot, tokenizeComma, tokenizeNumber, tokenizeDecimal, tokenizeName];

function tokenizer(input) {
  var current = 0;
  var tokens = [];

  var _loop = function _loop() {
    var tokenized = false;
    tokenizers.forEach(function (tokenizerFn) {
      if (tokenized) {
        return;
      }

      var _tokenizerFn = tokenizerFn(input, current),
          consumedChars = _tokenizerFn[0],
          token = _tokenizerFn[1];

      if (consumedChars !== 0) {
        tokenized = true;
        current += consumedChars;
      }

      if (token) {
        tokens.push(token);
      }
    });

    if (!tokenized) {
      throw new TypeError("I dont know what this character is: " + input[current]);
    }
  };

  while (current < input.length) {
    _loop();
  }

  return tokens;
} // tslint:disable-next-line: variable-name


function kbSelected(funcName, params, _paramsTokens) {
  if (funcName === 'selected') {
    var tmp = false;

    if (Array.isArray(params[0])) {
      params[0].forEach(function (element) {
        // tslint:disable-next-line: triple-equals
        tmp = tmp || element == params[1];
      });
      return [true, tmp];
    } // tslint:disable-next-line: triple-equals


    return [true, params[0] == params[1]];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbToday(funcName, _params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'today') {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return [true, d];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbRound(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'round') {
    if (params[0] && params[1]) {
      if (typeof params[0] === 'number' && typeof params[1] === 'number') {
        return [true, params[0].toFixed(params[1])];
      }

      if (typeof params[0] === 'string' && typeof params[1] === 'number') {
        return [true, parseFloat(params[0]).toFixed(params[1])];
      }
    }
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbRegex(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'regex') {
    var regex = RegExp(params[1]);
    return [true, regex.test(params[0])];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbCountSelected(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'count-selected') {
    if (params[0] && Array.isArray(params[0])) {
      return [true, params[0].length];
    }

    if (params[0] && typeof params[0] !== 'object') {
      return [true, 1];
    }

    return [true, 0];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbInt(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'int') {
    if (typeof params[0] === 'string') {
      return [true, parseInt(params[0], 10)];
    }
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbCoalesce(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'coalesce') {
    if (!params[0] && params[0] !== 0) {
      return [true, params[1]];
    }

    return [true, params[0]];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbPosition(funcName, _params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'position') {
    if (currentHierarchicalName) {
      var tmpName = currentHierarchicalName.split('/');

      if (tmpName.length > 2) {
        return [true, parseInt(tmpName[tmpName.length - 2], 10) + 1];
      }
    }
  }

  return [false, null];
}

function sumValuesOverJsn(sum, jsnObj, variableName) {
  if (Array.isArray(jsnObj)) {
    var i;

    for (i = 0; i < jsnObj.length; i += 1) {
      sum = sumValuesOverJsn(sum, jsnObj[i], variableName);
    }
  } else if (typeof jsnObj === 'object') {
    for (var key in jsnObj) {
      if (typeof jsnObj[key] === 'object') {
        sum = sumValuesOverJsn(sum, jsnObj[key], variableName);
      } else if (key === variableName) {
        if (typeof jsnObj[key] === 'string') {
          sum += parseFloat(jsnObj[key]);
        }

        if (typeof jsnObj[key] === 'number') {
          sum += jsnObj[key];
        }
      }
    }
  }

  return sum;
} // tslint:disable-next-line: variable-name


function kbSum(funcName, _params, paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'sum') {
    var sumValue = null;

    if (paramsTokens && paramsTokens.length > 0 && paramsTokens[0] && paramsTokens[0].length > 0 && paramsTokens[0][0].type === 'variable') {
      sumValue = sumValuesOverJsn(0, userInput, paramsTokens[0][0].value);
    }

    return [true, sumValue];
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbConcat(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'concat') {
    if (params && params.length > 0) {
      var concatStr = ''; // tslint:disable-next-line: prefer-for-of

      for (var i = 0; i < params.length; i += 1) {
        if (params[i] == null) {
          return [false, null];
        }

        concatStr += params[i];
      }

      return [true, concatStr];
    }
  }

  return [false, null];
} // tslint:disable-next-line: variable-name


function kbSubstr(funcName, params, _paramsTokens) {
  // tslint:disable-next-line: triple-equals
  if (funcName == 'substr') {
    if (params && params.length > 0) {
      if (params[0] && params[1] !== null) {
        if (params[2] !== null && params[2] < params[0].length) {
          var subStr = params[0].substring(params[1], params[2]);
          return [true, subStr];
        }

        return [true, params[0].substring(params[1])];
      }
    }
  }

  return [false, null];
}

function outerScopedVariables(variableName, variableValue, tmpUserInput) {
  // tslint:disable-next-line: forin
  for (var key in tmpUserInput) {
    var nodeNames = key.split('/');
    var variableNameFromKey = nodeNames[nodeNames.length - 1];

    if (variableNameFromKey === variableName) {
      return tmpUserInput[key];
    }

    if (typeof tmpUserInput[key] === 'object') {
      if (variableValue == null) {
        variableValue = outerScopedVariables(variableName, variableValue, tmpUserInput[key]);
      }
    }
  }

  return variableValue;
}

function parseMostClosestScopedVariable(variableName) {
  var tmpHierchicalName = currentHierarchicalName.split('/');
  var i;
  var tmpUserInput = userInput;
  var variableValue = null;
  variableValue = outerScopedVariables(variableName, variableValue, tmpUserInput);
  var parent = '';

  for (i = 0; i < tmpHierchicalName.length - 1;) {
    // tslint:disable-next-line: triple-equals
    if (tmpHierchicalName[i] == 'repeat') {
      i += 1;
      var index = parseInt(tmpHierchicalName[i + 1], 10);
      variableValue = outerScopedVariables(variableName, variableValue, tmpUserInput[parent + tmpHierchicalName[i]][index]);
      i += 2;
    } else {
      // path.push(parent + tmpHierchicalName[i + 1]);
      parent = parent + tmpHierchicalName[i + 1] + '/';
      i += 2;
    }
  }

  return variableValue;
}

function parseDot() {
  var tmpHierchicalName = currentHierarchicalName.split('/');
  var i;
  var tmpUserInput = userInput;
  var parent = '';
  var path = [];

  for (i = 0; i < tmpHierchicalName.length - 1;) {
    // tslint:disable-next-line: triple-equals
    if (tmpHierchicalName[i] == 'repeat') {
      i += 1;
      path.push(parent + tmpHierchicalName[i]);
      path.push(parseInt(tmpHierchicalName[i + 1], 10));
      parent = parent + tmpHierchicalName[i] + '/';
      i += 2;
    } else {
      // path.push(parent + tmpHierchicalName[i + 1]);
      parent = parent + tmpHierchicalName[i + 1] + '/';
      i += 2;
    }
  }

  path.push(parent + tmpHierchicalName[tmpHierchicalName.length - 1]);
  tmpUserInput = userInput.getIn(path);
  return tmpUserInput;
} // tslint:disable-next-line: variable-name


function parseLiterals(_tmpOutput, tokens, current) {
  if (tokens[current].type === 'number') {
    return [1, parseInt(tokens[current].value, 10)];
  }

  if (tokens[current].type === 'string') {
    return [1, tokens[current].value];
  }

  if (tokens[current].type === 'decimal') {
    return [1, parseFloat(tokens[current].value)];
  }

  if (tokens[current].type === 'variable') {
    return [1, parseMostClosestScopedVariable(tokens[current].value)];
  }

  if (tokens[current].type === 'name') {
    if (tokens[current].value.toLowerCase() === 'true') {
      return [1, true];
    }

    if (tokens[current].value.toLowerCase() === 'false') {
      return [1, false];
    }

    if (tokens[current].value in formItemProperty) {
      return [1, formItemProperty[tokens[current].value]];
    }

    return [1, null];
  }

  if (tokens[current].type === 'dot') {
    return [1, parseDot()];
  }

  return [0, null];
} // tslint:disable-next-line: variable-name


function parseFunction(_output, tokens, current) {
  var possibleFunctions = [kbSelected, kbCountSelected, kbToday, kbRegex, kbInt, kbCoalesce, kbPosition, kbSum, kbConcat, kbSubstr, kbRound];

  if (tokens[current].type === 'function') {
    var funcName = tokens[current].value;
    var arrayOfParams = [];
    var arrayOfOriginalTokens = [];
    var i = 1;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var tmpQueue = [];
      tmpQueue.push(1);
      i += 1;
      var tmpTokens = [];

      while (tokens[current + i] && tmpQueue.length) {
        tmpTokens.push(tokens[current + i]);

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
          tmpQueue.pop();
        }

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
          tmpQueue.push(1);
        }

        if (tokens[current + i].type === 'comma' && tmpQueue.length === 1) {
          tmpTokens.pop();
          var tmpVal = parser(null, tmpTokens, 0);
          arrayOfParams.push(tmpVal);
          arrayOfOriginalTokens.push(tmpTokens);
          tmpTokens = [];
        }

        i += 1;
      }

      i -= 1;

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
        tmpTokens.pop();

        var _tmpVal = parser(null, tmpTokens, 0);

        arrayOfParams.push(_tmpVal);
        arrayOfOriginalTokens.push(tmpTokens);
        var parsedFn = false;
        var parsedVal = null;
        possibleFunctions.forEach(function (functionFn) {
          if (parsedFn) {
            return;
          }

          var _functionFn = functionFn(funcName, arrayOfParams, arrayOfOriginalTokens);

          parsedFn = _functionFn[0];
          parsedVal = _functionFn[1];
        });

        if (parsedFn) {
          return [i + 1, parsedVal];
        }
      }
    }
  }

  return [0, null];
} // tslint:disable-next-line: variable-name


function parseIf(_output, tokens, current) {
  if (tokens[current].type === 'if') {
    var arrayOfParams = [];
    var i = 1;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var tmpQueue = [];
      tmpQueue.push(1);
      i += 1;
      var tmpTokens = [];

      while (tokens[current + i] && tmpQueue.length) {
        tmpTokens.push(tokens[current + i]);

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
          tmpQueue.pop();
        }

        if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
          tmpQueue.push(1);
        }

        if (tokens[current + i].type === 'comma' && tmpQueue.length === 1) {
          tmpTokens.pop();
          var tmpVal = parser(null, tmpTokens, 0);
          arrayOfParams.push(tmpVal);
          tmpTokens = [];
        }

        i += 1;
      }

      i -= 1;

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
        tmpTokens.pop();

        var _tmpVal2 = parser(null, tmpTokens, 0);

        arrayOfParams.push(_tmpVal2);

        if (arrayOfParams.length % 2 === 0) {
          var j;

          for (j = 0; j < arrayOfParams.length; j += 2) {
            if (arrayOfParams[j]) {
              return [i + 1, arrayOfParams[j + 1]];
            }
          }
        } else {
          var _j;

          for (_j = 0; _j < arrayOfParams.length - 1; _j += 2) {
            if (arrayOfParams[_j]) {
              return [i + 1, arrayOfParams[_j + 1]];
            }
          }

          return [i + 1, arrayOfParams[arrayOfParams.length - 1]];
        }
      }
    }
  }

  return [0, null];
}

function parseNot(output, tokens, current) {
  if (tokens[current].type === 'not') {
    var tmpTokens;
    var i = 1;

    if (tokens[current + i].type === 'equal' && output != null) {
      tmpTokens = [];
      i += 1;
      var terminatingTokens = ['and', 'or'];

      while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }

      var newOutput;

      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0); // tslint:disable-next-line: triple-equals

        return [i, output != newOutput];
      }
    } else {
      var parsed = false;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      var consumedTokens;

      var _newOutput;

      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        if (parserFn === parseMinus) {
          var _parserFn = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn[0];
          _newOutput = _parserFn[1];
        } else {
          var _parserFn2 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn2[0];
          _newOutput = _parserFn2[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          i += consumedTokens;
        }
      });

      if (parsed) {
        return [i, !_newOutput];
      }
    }
  }

  return [0, null];
}

function parseAnd(output, tokens, current) {
  if (tokens[current].type === 'and' && output != null) {
    var tmpTokens = [];
    var i = 1;
    var newOutput = null;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var consumedChars;

      var _parseParen = parseParen(null, tokens, current + i);

      consumedChars = _parseParen[0];
      newOutput = _parseParen[1];
      i += consumedChars;
    } else {
      var terminatingTokens = ['and', 'or'];

      while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }

      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0);
      }
    }

    if (newOutput != null) {
      newOutput = output && newOutput;

      if (tokens[current + i] && tokens[current + i].type === 'and') {
        var _consumedChars = 0;

        var _parseAnd = parseAnd(newOutput, tokens, current + i);

        _consumedChars = _parseAnd[0];
        newOutput = _parseAnd[1];
        i += _consumedChars;
      }

      return [i, newOutput];
    }
  }

  return [0, null];
}

function parseOr(output, tokens, current) {
  if (tokens[current].type === 'or' && output != null) {
    var tmpTokens = [];
    var i = 1;
    var newOutput = null;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
      var consumedChars;

      var _parseParen2 = parseParen(null, tokens, current + i);

      consumedChars = _parseParen2[0];
      newOutput = _parseParen2[1];
      i += consumedChars;
    } else {
      var terminatingTokens = ['and', 'or'];

      while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
        tmpTokens.push(tokens[current + i]);
        i += 1;
      }

      if (tmpTokens.length) {
        newOutput = parser(null, tmpTokens, 0);
      }
    }

    if (newOutput != null) {
      if (tokens[current + i] && tokens[current + i].type === 'and') {
        var _consumedChars2 = 0;

        var _parseAnd2 = parseAnd(newOutput, tokens, current + i);

        _consumedChars2 = _parseAnd2[0];
        newOutput = _parseAnd2[1];
        i += _consumedChars2;
      }

      return [i, output || newOutput];
    }
  }

  return [0, null];
}

function parseEqual(output, tokens, current) {
  if (tokens[current].type === 'equal' && output != null) {
    var tmpTokens = [];
    var i = 1;
    var terminatingTokens = ['and', 'or'];

    while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }

    var newOutput;

    if (tmpTokens.length) {
      newOutput = parser(null, tmpTokens, 0); // tslint:disable-next-line: triple-equals

      return [i, output == newOutput];
    }
  }

  return [0, null];
}

function parseLessThan(output, tokens, current) {
  if (tokens[current].type === 'lessThan' && output != null) {
    var flagLessThanOrEqual = false;
    var tmpTokens = [];
    var i = 1;

    if (tokens[current + i].type === 'equal') {
      i += 1;
      flagLessThanOrEqual = true;
    }

    var terminatingTokens = ['and', 'or'];

    while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }

    var newOutput;

    if (tmpTokens.length) {
      newOutput = parser(null, tmpTokens, 0);

      if (flagLessThanOrEqual) {
        return [i, output <= newOutput];
      }

      return [i, output < newOutput];
    }
  }

  return [0, null];
}

function parseGreaterThan(output, tokens, current) {
  if (tokens[current].type === 'greaterThan' && output != null) {
    var flagGreaterThanOrEqual = false;
    var tmpTokens = [];
    var i = 1;

    if (tokens[current + i].type === 'equal') {
      i += 1;
      flagGreaterThanOrEqual = true;
    }

    var terminatingTokens = ['and', 'or'];

    while (tokens[current + i] && terminatingTokens.indexOf(tokens[current + i].type) === -1) {
      tmpTokens.push(tokens[current + i]);
      i += 1;
    }

    var newOutput;

    if (tmpTokens.length) {
      newOutput = parser(null, tmpTokens, 0);

      if (flagGreaterThanOrEqual) {
        return [i, output >= newOutput];
      }

      return [i, output > newOutput];
    }
  }

  return [0, null];
} // tslint:disable-next-line: variable-name


function parseParen(_output, tokens, current) {
  if (tokens[current].type === 'paren' && tokens[current].value === '(') {
    var tmpQueue = [];
    tmpQueue.push(1);
    var i = 1;
    var tmpTokens = [];

    while (tokens[current + i] && tmpQueue.length) {
      tmpTokens.push(tokens[current + i]);

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
        tmpQueue.pop();
      }

      if (tokens[current + i].type === 'paren' && tokens[current + i].value === '(') {
        tmpQueue.push(1);
      }

      i += 1;
    }

    i -= 1;

    if (tokens[current + i].type === 'paren' && tokens[current + i].value === ')') {
      tmpTokens.pop();
      var tmpVal = parser(null, tmpTokens, 0);
      return [i + 1, tmpVal];
    }
  }

  return [0, null];
}

function parseDivide(output, tokens, current) {
  if (output != null && tokens[current].type === 'divide') {
    var possibleTokens = ['number', 'decimal', 'minus', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var consumedTokens;
        var newOutput;

        if (parserFn === parseMinus) {
          var _parserFn3 = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn3[0];
          newOutput = _parserFn3[1];
        } else {
          var _parserFn4 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn4[0];
          newOutput = _parserFn4[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
        }

        var precedentParsers = [parseDivide, parseMultiply];
        var preParsed = false;
        var preOutput;
        precedentParsers.forEach(function (preParseFn) {
          if (preParsed) {
            return;
          }

          if (tokens[current]) {
            var _preParseFn = preParseFn(newOutput, tokens, current);

            consumedTokens = _preParseFn[0];
            preOutput = _preParseFn[1];
            ct += consumedTokens;

            if (consumedTokens !== 0) {
              preParsed = true;
              newOutput = preOutput;
            }
          }
        });

        if (newOutput != null) {
          output /= newOutput;
        }
      });

      if (parsed) {
        return [ct, output];
      }
    }
  }

  return [0, null];
}

function parseMultiply(output, tokens, current) {
  if (output != null && tokens[current].type === 'multiply') {
    var possibleTokens = ['number', 'decimal', 'minus', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var consumedTokens;
        var newOutput;

        if (parserFn === parseMinus) {
          var _parserFn5 = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn5[0];
          newOutput = _parserFn5[1];
        } else {
          var _parserFn6 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn6[0];
          newOutput = _parserFn6[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
        }

        var precedentParsers = [parseDivide, parseMultiply];
        var preParsed = false;
        var preOutput;
        precedentParsers.forEach(function (preParseFn) {
          if (preParsed) {
            return;
          }

          if (tokens[current]) {
            var _preParseFn2 = preParseFn(newOutput, tokens, current);

            consumedTokens = _preParseFn2[0];
            preOutput = _preParseFn2[1];
            ct += consumedTokens;

            if (consumedTokens !== 0) {
              preParsed = true;
              newOutput = preOutput;
            }
          }
        });

        if (newOutput != null) {
          output *= newOutput;
        }
      });

      if (parsed) {
        return [ct, output];
      }
    }
  }

  return [0, null];
}

function parsePlus(output, tokens, current) {
  if (output != null && tokens[current].type === 'plus') {
    var possibleTokens = ['number', 'decimal', 'string', 'minus', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseMinus, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var consumedTokens;
        var newOutput;

        if (parserFn === parseMinus) {
          var _parserFn7 = parserFn(null, tokens, current + 1);

          consumedTokens = _parserFn7[0];
          newOutput = _parserFn7[1];
        } else {
          var _parserFn8 = parserFn(output, tokens, current + 1);

          consumedTokens = _parserFn8[0];
          newOutput = _parserFn8[1];
        }

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
          var precedentParsers = [parseDivide, parseMultiply];
          var preParsed = false;
          var preOutput;
          precedentParsers.forEach(function (preParseFn) {
            if (preParsed) {
              return;
            }

            if (tokens[current]) {
              var _preParseFn3 = preParseFn(newOutput, tokens, current);

              consumedTokens = _preParseFn3[0];
              preOutput = _preParseFn3[1];
              ct += consumedTokens;

              if (consumedTokens !== 0) {
                preParsed = true;
                newOutput = preOutput;
              }
            }
          });
        }

        if (newOutput != null) {
          output += newOutput;
        }
      });

      if (parsed) {
        return [ct, output];
      }
    }
  }

  return [0, null];
}

function parseMinus(output, tokens, current) {
  if (tokens[current].type === 'minus') {
    var possibleTokens = ['number', 'decimal', 'paren', 'variable', 'function'];

    if (current < tokens.length && possibleTokens.indexOf(tokens[current + 1].type) !== -1) {
      var parsed = false;
      var ct = null;
      var possibleParsers = [parseLiterals, parseParen, parseFunction];
      possibleParsers.forEach(function (parserFn) {
        if (parsed) {
          return;
        }

        var _parserFn9 = parserFn(output, tokens, current + 1),
            consumedTokens = _parserFn9[0],
            newOutput = _parserFn9[1];

        if (consumedTokens !== 0) {
          parsed = true;
          consumedTokens += 1;
          current += consumedTokens;
          ct = consumedTokens;
          var precedentParsers = [parseDivide, parseMultiply];
          var preParsed = false;
          var preOutput;
          precedentParsers.forEach(function (preParseFn) {
            if (preParsed) {
              return;
            }

            if (tokens[current]) {
              var _preParseFn4 = preParseFn(newOutput, tokens, current);

              consumedTokens = _preParseFn4[0];
              preOutput = _preParseFn4[1];
              ct += consumedTokens;

              if (consumedTokens !== 0) {
                preParsed = true;
                newOutput = preOutput;
              }
            }
          });
        }

        if (newOutput) {
          if (output) {
            if (Object.prototype.toString.call(newOutput) === '[object Date]' && Object.prototype.toString.call(output) === '[object Date]') {
              if (!isNaN(output.getTime()) && !isNaN(newOutput.getTime())) {
                output -= newOutput;
                output = Math.ceil(output / (1000 * 60 * 60 * 24));
              } else {
                output = NaN;
              }
            } else if (Object.prototype.toString.call(newOutput) === '[object Date]' || Object.prototype.toString.call(output) === '[object Date]') {
              output = NaN;
            } else if (newOutput === '' || output === '') {
              output = NaN;
            } else {
              output -= newOutput;
            }
          } else {
            if (Object.prototype.toString.call(newOutput) === '[object Date]') {
              output = NaN;
            } else {
              output = -newOutput;
            }
          }
        } else {
          output = NaN;
        }
      });

      if (parsed) {
        if (output === '') {
          output = NaN;
        }

        return [ct, output];
      }
    }
  }

  return [0, null];
}

var parsers = [parseIf, parseParen, parseLiterals, parseDivide, parseMultiply, parsePlus, parseMinus, parseLessThan, parseGreaterThan, parseEqual, parseAnd, parseOr, parseNot, parseFunction];

function parser(leftOutput, tokens, pos) {
  var current = pos;
  var output = leftOutput;

  var _loop2 = function _loop2() {
    var parsed = false;
    parsers.forEach(function (parserFn) {
      if (parsed) {
        return;
      }

      var _parserFn10 = parserFn(output, tokens, current),
          consumedTokens = _parserFn10[0],
          newOutput = _parserFn10[1];

      if (consumedTokens !== 0) {
        parsed = true;
        current += consumedTokens;
      }

      if (newOutput != null) {
        output = newOutput;
      }
    });

    if (!parsed) {
      // throw new TypeError('syntax error');
      // tslint:disable-next-line: no-console
      console.log('syntax error'); // tslint:disable-next-line: no-console

      console.log(actualExpression);
      return {
        v: null
      };
    }
  };

  while (current < tokens.length) {
    var _ret = _loop2();

    if (typeof _ret === "object") return _ret.v;
  }

  return output;
}

function evaluater(expression, tmpUserInput, tmpFormItemProperty, tmpCurrentHierarchicalName) {
  if (!tmpUserInput) {
    tmpUserInput = {};
  }

  currentHierarchicalName = tmpCurrentHierarchicalName;
  actualExpression = expression;
  userInput = tmpUserInput;
  formItemProperty = tmpFormItemProperty;
  return parser(null, tokenizer(expression), 0);
}

/**
 * get the text from multilang obj based on language identifier,
 * @param {FieldElement} property - field multilang property or string
 * @return {string} - text value of the property based on language identifier, empty if not present
 */
function getTextFromProperty(property, languageIdentifier) {
  if (typeof property === 'string') {
    return property || '';
  }

  return property[languageIdentifier] || '';
}
/**
 * get the label text of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field label text
 */

function getFieldLabelText(fieldElement, languageIdentifier) {
  if (fieldElement.label) {
    return getTextFromProperty(fieldElement.label, languageIdentifier);
  }

  return '';
}
/**
 * get the hint text of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field hint text
 */

function getFieldHintText(fieldElement, languageIdentifier) {
  if (fieldElement.hint) {
    return getTextFromProperty(fieldElement.hint, languageIdentifier);
  }

  return '';
}
/**
 * get the label text of the fieldElement constraint msg
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - constraint label text
 */

function getConstraintLabelText(fieldElement, languageIdentifier) {
  if (fieldElement.bind && fieldElement.bind['jr:constraintMsg']) {
    return getTextFromProperty(fieldElement.bind['jr:constraintMsg'], languageIdentifier);
  }

  return '';
}
/**
 * get the boolean result depending on the expression
 * @param {string} - required string
 * @returns {boolean} - true if required, otherwise false
 */

function requiredEvaluator(expression) {
  if (expression.toLowerCase() === 'yes' || expression === '1' || expression.toLowerCase() === 'true') {
    return true;
  } else {
    return false;
  }
}
/**
 * get the boolean result of fieldElement string
 * @param fieldElement
 * @return {boolean} - boolean value by calculating fieldElement required properties
 */


function isInputRequired(fieldElement) {
  var isRequired = false;

  if (fieldElement.bind) {
    if (fieldElement.bind.required) {
      if (typeof fieldElement.bind.required === 'string' && requiredEvaluator(fieldElement.bind.required)) {
        isRequired = true;
      }
    }
  }

  return isRequired;
}
/** evaluates whether a component be relevant or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the relevant expression
 * @returns {boolean} - true if relevant; otherwise, false;
 */

function shouldComponentBeRelevant(fieldElement, fieldParentTreeName, evaluateExpression) {
  if (fieldElement && fieldElement.bind && fieldElement.bind.relevant) {
    var isRelevant = evaluateExpression(fieldElement.bind.relevant, fieldParentTreeName + fieldElement.name);

    if (isRelevant) {
      return true;
    }

    return false;
  }

  return true;
}
/** evaluates whether a component be readonly or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the readonly expression
 * @returns {boolean} - true if readonly; otherwise, false;
 */

function shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, evaluateExpression) {
  if (fieldElement && fieldElement.bind && fieldElement.bind.readonly) {
    var isReadOnly = evaluateExpression(fieldElement.bind.readonly, fieldParentTreeName + fieldElement.name);

    if (isReadOnly) {
      return true;
    }

    return false;
  }

  return false;
}
/** evaluates whether the input violates constraint or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the expression
 * @returns {boolean} - true if violates; otherwise, false;
 */

function shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, evaluateExpression) {
  if (fieldElement && fieldElement.bind && fieldElement.bind.constraint) {
    var isConstraintViolated = !evaluateExpression(fieldElement.bind.constraint, fieldParentTreeName + fieldElement.name);

    if (isConstraintViolated) {
      return true;
    }

    return false;
  }

  return false;
}
/** returns the new user input object after assigning value of passed fieldTreeName
 * @param {any} userInputObj - the current user input object
 * @param {string} fieldTreeName - the field Tree name
 * @param {any} fieldValue - the value that needs to be assigned
 * @returns {any} - the new user input object after assignment
 */

function getModifiedUserInputObject(userInputObj, fieldTreeName, fieldValue) {
  var treeNodes = fieldTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  modifiedObj[parent + treeNodes[treeNodes.length - 1]] = fieldValue;
  return userInputObj;
}
/** returns the value from the user input object
 * @param {any} userInputObj - the user input object
 * @param {string} fieldTreeName - the field Tree name
 * @returns {any} - the value, present in user input object, of the fieldTreeName
 */

function getValueFromUserInputObj(userInputObj, fieldTreeName) {
  var treeNodes = fieldTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  return modifiedObj[parent + treeNodes[treeNodes.length - 1]];
}
/** evaluates whether the component is minimal or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @returns {boolean} - true if minimal; otherwise, false;
 */

function shouldComponentBeMinimal(fieldElement) {
  var isMinimal = false;

  if (fieldElement.control && fieldElement.control.appearance) {
    fieldElement.control.appearance.toString().includes('minimal') ? isMinimal = true : isMinimal = false;
  }

  return isMinimal;
}
/** returns the new user input object after emptying the desired grouped values
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - the new user input object after emptying the grouped values
 */

function emptyGroupedValues(userInputObj, groupTreeName) {
  var treeNodes = groupTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  Object.keys(modifiedObj).forEach(function (objKey) {
    if (objKey.startsWith(parent + treeNodes[treeNodes.length - 1])) {
      modifiedObj[objKey] = null;
    }
  });
  return userInputObj;
}
/** returns whether the grouped values are empty or not
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - true if empty; otherwise, false
 */

function checkGroupedValuesForEmpty(userInputObj, groupTreeName) {
  var treeNodes = groupTreeName.split('/');
  var i;
  var parent = '';
  var modifiedObj = userInputObj;

  for (i = 0; i < treeNodes.length - 1;) {
    if (treeNodes[i] === 'repeat') {
      i += 1;

      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }

      var index = parseInt(treeNodes[i + 1], 10);

      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }

      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }

  var isEmpty = true;
  Object.keys(modifiedObj).forEach(function (objKey) {
    if (objKey.startsWith(parent + treeNodes[treeNodes.length - 1])) {
      if (modifiedObj[objKey] !== null && modifiedObj[objKey] !== undefined && isEmpty) {
        isEmpty = false;
      }
    }
  });
  return isEmpty;
}

/** FIELD_VALUE_ASSIGNED action type */

var FIELD_VALUE_ASSIGNED = 'odk/reducer/form/FIELD_VALUE_ASSIGNED';
/** RESET_STORE action type */

var RESET_STORE = 'odk/reducer/form/RESET_STORE';
/** ADD_ERROR_INPUT_ID action type */

var ADD_ERROR_INPUT_ID = 'odk/reducer/form/ADD_ERROR_INPUT_ID';
/** REMOVE_ERROR_INPUT_ID action type */

var REMOVE_ERROR_INPUT_ID = 'odk/reducer/form/REMOVE_ERROR_INPUT_ID';
/** EMPTY_GROUP_FIELDS */

var EMPTY_GROUP_FIELDS = 'odk/reducer/form/EMPTY_GROUP_FIELDS';
/** REMOVE_GROUP_FIELDS_FROM_ERRORS */

var REMOVE_GROUP_FIELDS_FROM_ERRORS = 'odk/reducer/form/REMOVE_GROUP_FIELDS_FROM_ERRORS';
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
/** add the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {AddErrorInputId} - an action to add input id for errors
 */

var addErrorInputId = function addErrorInputId(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: ADD_ERROR_INPUT_ID
  };
};
/** remove the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {RemoveErrorInputId} - an action to remove input id for errors
 */

var removeErrorInputId = function removeErrorInputId(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: REMOVE_ERROR_INPUT_ID
  };
};
/** empties the values of the fields of the group
 * @param fieldTreeName - the group field tree name
 * @returns {RemoveErrorInputId} - an action to empty the group field values
 */

var emptyGroupFields = function emptyGroupFields(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: EMPTY_GROUP_FIELDS
  };
};
/** removes the group field names from store errors obj
 * @param fieldTreeName - the group field tree name
 * @returns {RemoveGroupFieldsFromErrors} - an action to remove group field names from errors
 */

var removeGroupFieldsFromErrors = function removeGroupFieldsFromErrors(fieldTreeName) {
  return {
    fieldTreeName: fieldTreeName,
    type: REMOVE_GROUP_FIELDS_FROM_ERRORS
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
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case FIELD_VALUE_ASSIGNED:
      var modifiedUserInputObj = getModifiedUserInputObject(state.getIn(['userInput']).asMutable({
        deep: true
      }), action.fieldTreeName, action.fieldValue);
      var stateM = state.asMutable({
        deep: true
      });
      return SeamlessImmutable(_extends({}, stateM, {
        userInput: modifiedUserInputObj
      }));

    case RESET_STORE:
      return initialState;

    case ADD_ERROR_INPUT_ID:
      if (!state.errors.includes(action.fieldTreeName)) {
        return state.updateIn(['errors'], function (arr) {
          return arr.concat([action.fieldTreeName]);
        });
      }

      return state;

    case REMOVE_ERROR_INPUT_ID:
      if (state.errors.includes(action.fieldTreeName)) {
        return state.updateIn(['errors'], function (arr) {
          return arr.filter(function (elm) {
            return elm !== action.fieldTreeName;
          });
        });
      }

      return state;

    case EMPTY_GROUP_FIELDS:
      var mUserInputObj = emptyGroupedValues(state.getIn(['userInput']).asMutable({
        deep: true
      }), action.fieldTreeName);
      var mState = state.asMutable({
        deep: true
      });
      return SeamlessImmutable(_extends({}, mState, {
        userInput: mUserInputObj
      }));

    case REMOVE_GROUP_FIELDS_FROM_ERRORS:
      return state.updateIn(['errors'], function (arr) {
        return arr.filter(function (elm) {
          return !elm.startsWith(action.fieldTreeName);
        });
      });

    default:
      return state;
  }
} // selectors

/** get the value by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} value if the element name is found else null
 */

function getFieldValue(state, fieldTreeName) {
  return getValueFromUserInputObj(state.userInput, fieldTreeName);
}
/** get the value of the evaluated expression
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */

function getEvaluatedExpression(state, expression, fieldTreeName) {
  return evaluater(expression, state.userInput, null, fieldTreeName);
}
/** get the value of the evaluated expression for Select One and Select All
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {any} options - the options that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */

function getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName) {
  return evaluater(expression, state.userInput, options, fieldTreeName);
}
/** check if the field element is present in the store
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {boolean} true if present; otherwise, false
 */

function isPresentInError(state, fieldTreeName) {
  return state.errors.includes(fieldTreeName);
}
/** check if the field elements under group are empty or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if empty; otherwise, false
 */

function isGroupFieldsEmpty(state, fieldTreeName) {
  return checkGroupedValuesForEmpty(state.userInput, fieldTreeName);
}
/** check if the field elements under group are present in errors or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if present; otherwise, false
 */

function isErrorsIncludeGroupFields(state, fieldTreeName) {
  var isPresent = false;
  state.errors.forEach(function (fTName) {
    if (fTName.startsWith(fieldTreeName) && !isPresent) {
      isPresent = true;
    }
  });
  return isPresent;
}

var Group =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Group, _React$Component);

  function Group() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Group.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage,
        isComponentRender = _this$props.isComponentRender;
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), fieldElement.children && React.createElement(GroupTypeEvaluator, {
        fieldElements: fieldElement.children,
        fieldParentTreeName: fieldParentTreeName + 'group/' + fieldElement.name + '/',
        defaultLanguage: defaultLanguage
      }));
    } else {
      if (this.props.isErrorsIncludeGroupFieldsSelector(fieldParentTreeName + 'group/' + fieldElement.name + '/')) {
        this.props.removeGroupFieldsFromErrorsActionCreator(fieldParentTreeName + 'group/' + fieldElement.name + '/');
      }

      if (!this.props.isGroupFieldsEmptySelector(fieldParentTreeName + fieldElement.name)) {
        this.props.emptyGroupFieldsActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return null;
    }
  };

  return Group;
}(React.Component);
/** Map props to state  */


var mapStateToProps = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isGroupFieldsEmptySelector = function isGroupFieldsEmptySelector(fieldTreeName) {
    return isGroupFieldsEmpty(state, fieldTreeName);
  };

  var isErrorsIncludeGroupFieldsSelector = function isErrorsIncludeGroupFieldsSelector(fieldTreeName) {
    return isErrorsIncludeGroupFields(state, fieldTreeName);
  };

  var result = {
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isErrorsIncludeGroupFieldsSelector: isErrorsIncludeGroupFieldsSelector,
    isGroupFieldsEmptySelector: isGroupFieldsEmptySelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps = {
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors
};
/** connect Group component to the redux store */

var ConnectedGroup =
/*#__PURE__*/
reactRedux.connect(mapStateToProps, mapDispatchToProps)(Group);

var SingleRepeat =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SingleRepeat, _React$Component);

  function SingleRepeat() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this; // tslint:disable-next-line: variable-name

    _this.handleChange = function (_event) {
      var _this$props = _this.props,
          repeatIndex = _this$props.repeatIndex,
          fieldValue = _this$props.fieldValue,
          assignmentHandler = _this$props.assignmentHandler,
          fieldElement = _this$props.fieldElement,
          fieldParentTreeName = _this$props.fieldParentTreeName,
          removeHandler = _this$props.removeHandler;
      var newFieldValue = [].concat(fieldValue);
      newFieldValue = newFieldValue.filter( // tslint:disable-next-line: variable-name
      function (_elem, index) {
        return index !== repeatIndex;
      });
      assignmentHandler(fieldParentTreeName + fieldElement.name, newFieldValue);
      removeHandler(fieldParentTreeName + 'repeat/' + fieldElement.name + '/');
    };

    return _this;
  }

  var _proto = SingleRepeat.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        defaultLanguage = _this$props2.defaultLanguage,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        repeatIndex = _this$props2.repeatIndex;
    return React__default.createElement("div", null, React__default.createElement("div", null, React__default.createElement("span", {
      onClick: this.handleChange
    }, React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: "minus-circle"
    }))), fieldElement.children && React__default.createElement(GroupTypeEvaluator, {
      fieldElements: fieldElement.children,
      fieldParentTreeName: fieldParentTreeName + 'repeat/' + fieldElement.name + '/' + repeatIndex + '/',
      defaultLanguage: defaultLanguage
    }));
  };

  return SingleRepeat;
}(React__default.Component);

var Repeat =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Repeat, _React$Component);

  function Repeat() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this; // tslint:disable-next-line: variable-name

    _this.addAnotherRepeat = function (_event) {
      var _this$props = _this.props,
          fieldValue = _this$props.fieldValue,
          fieldParentTreeName = _this$props.fieldParentTreeName,
          fieldElement = _this$props.fieldElement;
      var newFieldValue = [].concat(fieldValue);
      newFieldValue.push({});

      _this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, newFieldValue);
    };

    return _this;
  }

  var _proto = Repeat.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        fieldValue = _this$props2.fieldValue,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        defaultLanguage = _this$props2.defaultLanguage,
        isComponentRender = _this$props2.isComponentRender,
        assignFieldValueActionCreator = _this$props2.assignFieldValueActionCreator,
        removeGroupFieldsFromErrorsActionCreator = _this$props2.removeGroupFieldsFromErrorsActionCreator;
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (!fieldValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, [{}]);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), fieldValue && // tslint:disable-next-line: variable-name
      fieldValue.map(function (_elm, index) {
        return React.createElement("div", {
          className: "repeat-fields-body",
          key: 'repeat' + index
        }, React.createElement(SingleRepeat, {
          defaultLanguage: defaultLanguage,
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          fieldValue: fieldValue,
          repeatIndex: index,
          assignmentHandler: assignFieldValueActionCreator,
          removeHandler: removeGroupFieldsFromErrorsActionCreator
        }));
      }), React.createElement("div", null, React.createElement("span", {
        onClick: this.addAnotherRepeat
      }, React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: "plus-circle"
      }))));
    } else {
      if (this.props.isErrorsIncludeGroupFieldsSelector(fieldParentTreeName + 'repeat/' + fieldElement.name + '/')) {
        this.props.removeGroupFieldsFromErrorsActionCreator(fieldParentTreeName + 'repeat/' + fieldElement.name + '/');
      }

      if (fieldValue) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);
      }

      return null;
    }
  };

  return Repeat;
}(React.Component);
/** Map props to state  */


var mapStateToProps$1 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isGroupFieldsEmptySelector = function isGroupFieldsEmptySelector(fieldTreeName) {
    return isGroupFieldsEmpty(state, fieldTreeName);
  };

  var isErrorsIncludeGroupFieldsSelector = function isErrorsIncludeGroupFieldsSelector(fieldTreeName) {
    return isErrorsIncludeGroupFields(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isErrorsIncludeGroupFieldsSelector: isErrorsIncludeGroupFieldsSelector,
    isGroupFieldsEmptySelector: isGroupFieldsEmptySelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$1 = {
  assignFieldValueActionCreator: assignFieldValueAction,
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors
};
/** connect Group component to the redux store */

var ConnectedRepeat =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$1, mapDispatchToProps$1)(Repeat);

var KbDate =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(KbDate, _React$Component);

  function KbDate() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? new Date(event.currentTarget.value) : null);
    };

    return _this;
  }

  var _proto = KbDate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var defaultValue = '';

      if (fieldValue) {
        defaultValue = fieldValue.toISOString().slice(0, 10);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "date",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: defaultValue,
        readOnly: isReadonly
      }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return KbDate;
}(React.Component);
/** Map props to state  */


var mapStateToProps$2 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$2 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect KbDate component to the redux store */

var ConnectedDate =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$2, mapDispatchToProps$2)(KbDate);

var DateTime =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DateTime, _React$Component);

  function DateTime() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? new Date(event.currentTarget.value) : null);
    };

    return _this;
  }

  var _proto = DateTime.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var defaultValue = '';

      if (fieldValue) {
        defaultValue = fieldValue.toISOString().slice(0, 23);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "datetime-local",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: defaultValue,
        readOnly: isReadonly
      }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return DateTime;
}(React.Component);
/** Map props to state  */


var mapStateToProps$3 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$3 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Date Time component to the redux store */

var ConnectedDateTime =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$3, mapDispatchToProps$3)(DateTime);

var Decimal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Decimal, _React$Component);

  function Decimal() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? parseFloat(event.currentTarget.value) : null);
    };

    return _this;
  }

  var _proto = Decimal.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "number",
        step: "any",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: fieldValue || fieldValue === 0 ? fieldValue : '',
        readOnly: isReadonly
      }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Decimal;
}(React.Component);
/** Map props to state  */


var mapStateToProps$4 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$4 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Decimal component to the redux store */

var ConnectedDecimal =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$4, mapDispatchToProps$4)(Decimal);

var Integer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Integer, _React$Component);

  function Integer() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */

    _this.onChangeHandler = function (event) {
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value !== '' ? parseInt(event.currentTarget.value, 10) : null);
    };

    return _this;
  }

  var _proto = Integer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "number",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: fieldValue || fieldValue === 0 ? fieldValue : '',
        readOnly: isReadonly
      }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Integer;
}(React.Component);
/** Map props to state  */


var mapStateToProps$5 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$5 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Integer component to the redux store */

var ConnectedInteger =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$5, mapDispatchToProps$5)(Integer);

var Note =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Note, _React$Component);

  function Note() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Note.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldElement.name, fieldElement["default"]);
      }

      var fieldHint = getFieldHintText(fieldElement, defaultLanguage);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.FormText, null, fieldHint), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Note;
}(React.Component);
/** Map props to state  */


var mapStateToProps$6 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name) || '',
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$6 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Note component to the redux store */

var ConnectedNote =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$6, mapDispatchToProps$6)(Note);

var Photo =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Photo, _React$Component);

  function Photo() {
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

  var _proto = Photo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldValue = _this$props.fieldValue,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
      type: "file",
      accept: "image/*",
      name: fieldElement.name,
      onChange: this.onChangeHandler,
      value: fieldValue
    }), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG));
  };

  return Photo;
}(React.Component);
/** Map props to state  */


var mapStateToProps$7 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement;
  var result = {
    fieldValue: getFieldValue(state, fieldElement.name)
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$7 = {
  assignFieldValueActionCreator: assignFieldValueAction
};
/** connect Photo component to the redux store */

var ConnectedPhoto =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$7, mapDispatchToProps$7)(Photo);

var SelectAllDropDown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectAllDropDown, _React$Component);

  function SelectAllDropDown() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {any} values - the onchange input values
     * @param {any} fieldName - the input name
     */

    _this.onChangeHandler = function (fieldName) {
      return function (values) {
        var selectedValues = [];
        var i = 0;

        if (values) {
          values.map(function () {
            if (!selectedValues.includes(values[i].value)) {
              selectedValues.push(values[i].value);
            }

            i++;
          });

          _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, selectedValues);
        } else {
          _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, null);
        }
      };
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique dropdown options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];
      var finalRes = [];

      if (csvName) {
        options = [].concat(geo);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            var j = 0;
            filterResult.map(function () {
              options.map(function (option) {
                if (option[nameOfKey] === filterResult[j]) {
                  finalRes.push(option);
                }
              });
              j = j + 1;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }

        options = [].concat(Array.from(new Set(finalRes)));
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectAllDropDown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === []);
    var isConstraintViolated = fieldValue && fieldValue !== [] && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];
      var options = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        var updatedFieldElement = fieldElement.control.appearance.toString().replace('minimal', '');

        if (/search\([^\)|(]+\)/i.test(updatedFieldElement)) {
          var processedStringArray = updatedFieldElement.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
      } else {
        if (fieldElement.children) {
          fieldElement.children.map(function (elem) {
            var childrenLabel = getFieldLabelText(elem, defaultLanguage);
            options.push({
              label: childrenLabel,
              value: elem.name
            });
          });
        }
      }

      var tmpValueArray = [];
      var isNotIncluded = false;

      if (fieldValue && fieldValue.length > 0) {
        var optionsValueArray = [];
        options.map(function (elem) {
          if (elem.value) {
            optionsValueArray.push(elem.value);
          }
        });

        for (var _iterator = fieldValue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var row = _ref;

          if (!optionsValueArray.includes(row)) {
            isNotIncluded = true;
          } else {
            tmpValueArray.push(row);
          }
        }
      }

      if (fieldValue && fieldValue.length > 0 && isNotIncluded) {
        this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, tmpValueArray || []);
      }

      var selectedValues = [];

      if (fieldValue && fieldValue.length > 0) {
        options.map(function (elem) {
          for (var _iterator2 = fieldValue, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var _row = _ref2;

            if (elem.value === _row) {
              selectedValues.push(elem);
            }
          }
        });
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(Select, {
        isMulti: true,
        name: fieldElement.name,
        options: options,
        onChange: this.onChangeHandler(fieldElement.name),
        value: selectedValues || []
      }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return SelectAllDropDown;
}(React.Component);
/** Map props to state  */


var mapStateToProps$8 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$8 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne Dropdown component to the redux store */

var ConnectedSelectAllDropDown =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$8, mapDispatchToProps$8)(SelectAllDropDown);

var SelectAllRadio =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectAllRadio, _React$Component);

  function SelectAllRadio() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {any} event - the onchange event
     */

    _this.onChangeHandlerCheckBox = function (event) {
      var _this$props = _this.props,
          fieldValue = _this$props.fieldValue,
          fieldElement = _this$props.fieldElement,
          fieldParentTreeName = _this$props.fieldParentTreeName;
      var fieldName = fieldParentTreeName + fieldElement.name;

      if (event.target.checked) {
        if (fieldValue && fieldValue.length > 0 && !fieldValue.includes(event.target.value)) {
          _this.props.assignFieldValueActionCreator(fieldName, [].concat(fieldValue, [event.target.value]));
        } else {
          _this.props.assignFieldValueActionCreator(fieldName, [event.target.value]);
        }
      } else {
        if (fieldValue && fieldValue.length > 0 && fieldValue.includes(event.target.value)) {
          var newValue = fieldValue.filter(function (elm) {
            return elm !== event.target.value;
          });

          _this.props.assignFieldValueActionCreator(fieldName, newValue.length ? newValue : null);
        }
      }
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique dropdown options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];
      var finalRes = [];

      if (csvName) {
        options = [].concat(geo);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            var j = 0;
            filterResult.map(function () {
              options.map(function (option) {
                if (option[nameOfKey] === filterResult[j]) {
                  finalRes.push(option);
                }
              });
              j = j + 1;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }

        options = [].concat(Array.from(new Set(finalRes)));
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectAllRadio.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        fieldElement = _this$props2.fieldElement,
        fieldParentTreeName = _this$props2.fieldParentTreeName,
        fieldValue = _this$props2.fieldValue,
        isComponentRender = _this$props2.isComponentRender,
        getEvaluatedExpressionSelector = _this$props2.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props2.isPresentInErrorSelector,
        defaultLanguage = _this$props2.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === []);
    var isConstraintViolated = fieldValue && fieldValue !== [] && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];
      var options = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        var updatedFieldElement = fieldElement.control.appearance.toString().replace('minimal', '');

        if (/search\([^\)|(]+\)/i.test(updatedFieldElement)) {
          var processedStringArray = updatedFieldElement.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
        var tmpValueArray = [];
        var isNotIncluded = false;

        if (fieldValue && fieldValue.length > 0) {
          var optionsValueArray = [];
          options.map(function (elem) {
            if (elem.value) {
              optionsValueArray.push(elem.value);
            }
          });

          for (var _iterator = fieldValue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var row = _ref;

            if (!optionsValueArray.includes(row)) {
              isNotIncluded = true;
            } else {
              tmpValueArray.push(row);
            }
          }
        }

        if (fieldValue && fieldValue.length > 0 && isNotIncluded) {
          this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, tmpValueArray || []);
        }

        var selectedValues = [];

        if (fieldValue && fieldValue.length > 0) {
          options.map(function (elem) {
            for (var _iterator2 = fieldValue, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
              var _ref2;

              if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
              } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
              }

              var _row = _ref2;

              if (elem.value === _row) {
                selectedValues.push(elem.value);
              }
            }
          });
        }

        return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), resultOptions.map(function (elem, index) {
          return React.createElement("div", {
            key: index,
            className: "col-md-12"
          }, React.createElement(reactstrap.Input, {
            key: fieldElement.name + '-' + index,
            type: "checkbox",
            name: fieldElement.name,
            value: elem.name || [],
            onChange: _this2.onChangeHandlerCheckBox,
            readOnly: isReadonly,
            checked: selectedValues.includes(elem.name)
          }), ' ', elem.label);
        }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
      } else {
        if (fieldElement.children) {
          return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), fieldElement.children.map(function (elem, index) {
            return React.createElement("div", {
              key: index,
              className: "col-md-12"
            }, React.createElement(reactstrap.Input, {
              key: fieldElement.name + '-' + index,
              type: "checkbox",
              name: fieldElement.name,
              value: elem.name || [],
              onChange: _this2.onChangeHandlerCheckBox,
              readOnly: isReadonly
            }), ' ', elem.name);
          }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
        } else {
          return null;
        }
      }
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return SelectAllRadio;
}(React.Component);
/** Map props to state  */


var mapStateToProps$9 = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$9 = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne Radio component to the redux store */

var ConnectedSelectAllRadio =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$9, mapDispatchToProps$9)(SelectAllRadio);

var SelectAll =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectAll, _React$Component);

  function SelectAll() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SelectAll.prototype;

  _proto.render = function render() {
    var fieldElement = this.props.fieldElement;

    if (shouldComponentBeMinimal(fieldElement)) {
      return React.createElement(ConnectedSelectAllDropDown, Object.assign({}, this.props));
    }

    return React.createElement(ConnectedSelectAllRadio, Object.assign({}, this.props));
  };

  return SelectAll;
}(React.Component);

var SelectOneDropDown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectOneDropDown, _React$Component);

  function SelectOneDropDown() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of field element in store
     * @param {any} event - the onchange input event
     * @param {any} fieldName - the input name
     */

    _this.onChangeHandler = function (fieldName) {
      return function (event) {
        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, event.value || '');
      };
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique dropdown options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];

      if (csvName) {
        options = [].concat(geo);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            options = options.filter(function (option) {
              return option[nameOfKey] === filterResult;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectOneDropDown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];
      var options = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        var updatedFieldElement = fieldElement.control.appearance.toString().replace('minimal', '');

        if (/search\([^\)|(]+\)/i.test(updatedFieldElement)) {
          var processedStringArray = updatedFieldElement.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        resultOptions.map(function (elem) {
          return options.push({
            label: elem.label,
            value: elem.name
          });
        });
      } else {
        if (fieldElement.children) {
          fieldElement.children.map(function (elem) {
            var childrenLabel = getFieldLabelText(elem, defaultLanguage);
            options.push({
              label: childrenLabel,
              value: elem.name
            });
          });
        }
      }

      if (fieldValue) {
        var optionsValueArray = [];
        options.map(function (elem) {
          if (elem.value) {
            optionsValueArray.push(elem.value);
          }
        });

        if (!optionsValueArray.includes(fieldValue)) {
          this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, '');
        }
      }

      var selectedValue;
      options.map(function (elem) {
        if (elem.value === fieldValue) {
          selectedValue = elem;
        }
      });
      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(Select, {
        multi: false,
        name: fieldElement.name,
        options: options,
        value: selectedValue || '',
        onChange: this.onChangeHandler(fieldElement.name)
      }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return SelectOneDropDown;
}(React.Component);
/** Map props to state  */


var mapStateToProps$a = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$a = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne component to the redux store */

var ConnectedSelectOneDropDown =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$a, mapDispatchToProps$a)(SelectOneDropDown);

var SelectOneRadio =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectOneRadio, _React$Component);

  function SelectOneRadio() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    /** sets the value of Radio Button field element in store
     * @param {any} event - the onchange input event
     * @param {any} fieldName - the input name
     */

    _this.onChangeHandlerRadio = function (fieldName) {
      return function (event) {
        _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + fieldName, event.target.value || '');
      };
    };
    /** converts apeearance text into array and pass them to further process
     * @param {string} stringWithSearchKeyWord - the fieldElement children appearance text (partial)
     */


    _this.getProcessedString = function (stringWithSearchKeyWord) {
      var processedStringArray = stringWithSearchKeyWord.match(/\([^\)]+\)/i) || [''];
      var params = processedStringArray[0];

      if (params.length > 2) {
        params = params.substring(1, params.length - 1);
        var resultArray = params.split(',');
        var criteriaParams = [].concat(resultArray);
        criteriaParams = criteriaParams.splice(2, criteriaParams.length);
        return _this.extractAndFilterOptions(resultArray[0], resultArray[1] || null, criteriaParams || []);
      }

      return [];
    };
    /** generates unique radio button options using CSV
     * @param {string} csvName - the CSV file name
     * @param {string | null} criteriaType - criteria to match with previous user input
     * @param {any} filterCriterias - previous user input collections
     */


    _this.extractAndFilterOptions = function (csvName, criteriaType, filterCriterias) {
      if (criteriaType) {
        criteriaType = criteriaType.trim();
        criteriaType = criteriaType.substring(1, criteriaType.length - 1).trim();
      }

      var options = [];
      var distinctOptions = [];

      if (csvName) {
        options = [].concat(geo);
      }

      if (criteriaType && criteriaType.trim() === 'matches') {
        var i = 0;

        var _loop = function _loop() {
          var nameOfKey = filterCriterias[i].trim();
          nameOfKey = nameOfKey.substring(1, nameOfKey.length - 1).trim();
          var interConnectedValue = filterCriterias[i + 1];
          var tempOptions = [].concat(options);
          tempOptions.forEach(function (elm) {
            var filterResult = _this.props.getEvaluatedExpressionSelectorForSelect(interConnectedValue, _this.props.fieldParentTreeName + _this.props.fieldElement.name, elm);

            options = options.filter(function (option) {
              return option[nameOfKey] === filterResult;
            });
          });
          i = i + 2;
        };

        while (i < filterCriterias.length) {
          _loop();
        }
      }

      if (options.length !== 0) {
        var labelColumnName = '';
        var valueColumnName = '';

        if (_this.props.fieldElement.children && _this.props.fieldElement.children[0] && _this.props.fieldElement.children[0].name && _this.props.fieldElement.children[0].label) {
          labelColumnName = getFieldLabelText(_this.props.fieldElement.children[0], _this.props.defaultLanguage);
          valueColumnName = _this.props.fieldElement.children[0].name;
        }

        options.forEach(function (elem) {
          var tmpOpt = {};
          var label = 'label';
          var name = 'name';
          tmpOpt[label] = elem[labelColumnName].trim();
          tmpOpt[name] = elem[valueColumnName].trim();
          distinctOptions.push(tmpOpt);
        });
        return _.uniqBy(distinctOptions, 'name');
      }

      return [];
    };

    return _this;
  }

  var _proto = SelectOneRadio.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      var resultOptions = [];

      if (fieldElement.control && fieldElement.control.appearance) {
        if (/search\([^\)|(]+\)/i.test(fieldElement.control.appearance)) {
          var processedStringArray = fieldElement.control.appearance.match(/search\([^\)|(]+\)/i) || [''];
          resultOptions = this.getProcessedString(processedStringArray[0]);
        }
      }

      if (resultOptions.length > 0) {
        if (fieldValue) {
          var optionsValueArray = [];
          resultOptions.map(function (elem) {
            if (elem.name) {
              optionsValueArray.push(elem.name);
            }
          });

          if (!optionsValueArray.includes(fieldValue)) {
            this.props.assignFieldValueActionCreator(this.props.fieldParentTreeName + fieldElement.name, '');
          }
        }

        return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), resultOptions.map(function (elem, index) {
          return React.createElement("div", {
            key: index,
            className: "col-md-12"
          }, React.createElement(reactstrap.Input, {
            key: fieldElement.name + '-' + index,
            type: "radio",
            name: fieldElement.name,
            value: elem.name,
            onChange: _this2.onChangeHandlerRadio(fieldElement.name),
            readOnly: isReadonly,
            checked: elem.name === fieldValue
          }), ' ', elem.label);
        }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
      } else {
        if (fieldElement.children) {
          return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), fieldElement.children.map(function (elem, index) {
            return React.createElement("div", {
              key: index,
              className: "col-md-12"
            }, React.createElement(reactstrap.Input, {
              key: fieldElement.name + '-' + index,
              type: "radio",
              name: fieldElement.name,
              value: elem.name,
              onChange: _this2.onChangeHandlerRadio(fieldElement.name),
              readOnly: isReadonly
            }), ' ', elem.name);
          }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
        } else {
          return null;
        }
      }
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return SelectOneRadio;
}(React.Component);
/** Map props to state  */


var mapStateToProps$b = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var getEvaluatedExpressionSelectorForSelect = function getEvaluatedExpressionSelectorForSelect(expression, fieldTreeName, options) {
    return getEvaluatedExpressionForSelect(state, expression, options, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    getEvaluatedExpressionSelectorForSelect: getEvaluatedExpressionSelectorForSelect,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$b = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect SelectOne Radio component to the redux store */

var ConnectedSelectOneRadio =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$b, mapDispatchToProps$b)(SelectOneRadio);

var SelectOne =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SelectOne, _React$Component);

  function SelectOne() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SelectOne.prototype;

  _proto.render = function render() {
    var fieldElement = this.props.fieldElement;

    if (shouldComponentBeMinimal(fieldElement)) {
      return React.createElement(ConnectedSelectOneDropDown, Object.assign({}, this.props));
    }

    return React.createElement(ConnectedSelectOneRadio, Object.assign({}, this.props));
  };

  return SelectOne;
}(React.Component);

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
      _this.props.assignFieldValueActionCreator(_this.props.fieldParentTreeName + event.currentTarget.name, event.currentTarget.value || '');
    };

    return _this;
  }

  var _proto = Text.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        fieldValue = _this$props.fieldValue,
        isComponentRender = _this$props.isComponentRender,
        getEvaluatedExpressionSelector = _this$props.getEvaluatedExpressionSelector,
        isPresentInErrorSelector = _this$props.isPresentInErrorSelector,
        defaultLanguage = _this$props.defaultLanguage;
    var isRequired = isInputRequired(fieldElement);
    var isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    var isConstraintViolated = fieldValue && fieldValue !== '' && shouldInputViolatesConstraint(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);
    var fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    var constraintLabel = getConstraintLabelText(fieldElement, defaultLanguage);

    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, fieldElement["default"]);
      }

      var isReadonly = shouldComponentBeReadOnly(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector);

      if ((isRequiredViolated || isConstraintViolated) && !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.addErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      } else if (!isRequiredViolated && !isConstraintViolated && isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
        this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
      }

      return React.createElement(reactstrap.FormGroup, null, React.createElement(reactstrap.Label, null, fieldLabel), isRequired && React.createElement(reactstrap.Label, null, REQUIRED_SYMBOL), React.createElement(reactstrap.Input, {
        type: "text",
        name: fieldElement.name,
        onChange: this.onChangeHandler,
        value: fieldValue || '',
        readOnly: isReadonly
      }), isRequiredViolated && React.createElement(reactstrap.Label, null, REQUIRED_FIELD_MSG), isConstraintViolated && React.createElement(reactstrap.Label, null, constraintLabel));
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldParentTreeName + fieldElement.name, null);

        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(fieldParentTreeName + fieldElement.name);
        }
      }

      return null;
    }
  };

  return Text;
}(React.Component);
/** Map props to state  */


var mapStateToProps$c = function mapStateToProps(state, parentProps) {
  var fieldElement = parentProps.fieldElement,
      fieldParentTreeName = parentProps.fieldParentTreeName;

  var getEvaluatedExpressionSelector = function getEvaluatedExpressionSelector(expression, fieldTreeName) {
    return getEvaluatedExpression(state, expression, fieldTreeName);
  };

  var isPresentInErrorSelector = function isPresentInErrorSelector(fieldTreeName) {
    return isPresentInError(state, fieldTreeName);
  };

  var result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector: getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(fieldElement, fieldParentTreeName, getEvaluatedExpressionSelector),
    isPresentInErrorSelector: isPresentInErrorSelector
  };
  return result;
};
/** map props to actions */


var mapDispatchToProps$c = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId
};
/** connect Text component to the redux store */

var ConnectedText =
/*#__PURE__*/
reactRedux.connect(mapStateToProps$c, mapDispatchToProps$c)(Text);

var BaseTypeEvaluator =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BaseTypeEvaluator, _React$Component);

  function BaseTypeEvaluator() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BaseTypeEvaluator.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fieldElement = _this$props.fieldElement,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage;
    return this.typeEvaluator(fieldElement, fieldParentTreeName, defaultLanguage);
  }
  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} fieldParentTreeName - the field parent hierchical name
   * @return {React.ReactElement} - jsx base components
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(fieldElement, fieldParentTreeName, defaultLanguage) {
    switch (fieldElement.type) {
      case TEXT_FIELD_TYPE:
        return React.createElement(ConnectedText, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DATE_FIELD_TYPE:
        return React.createElement(ConnectedDate, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DATE_TIME_FIELD_TYPE:
        return React.createElement(ConnectedDateTime, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case INTEGER_FIELD_TYPE:
        return React.createElement(ConnectedInteger, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case DECIMAL_FIELD_TYPE:
        return React.createElement(ConnectedDecimal, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case NOTE_FIELD_TYPE:
        return React.createElement(ConnectedNote, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case SELECT_ONE_FIELD_TYPE:
        return React.createElement(SelectOne, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case SELECT_ALL_FIELD_TYPE:
        return React.createElement(SelectAll, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });

      case PHOTO_FIELD_TYPE:
        return React.createElement(ConnectedPhoto, {
          fieldElement: fieldElement,
          defaultLanguage: defaultLanguage
        });

      default:
        return React.createElement("div", null, "Other ", fieldElement.type, " ", fieldElement.name);
    }
  };

  return BaseTypeEvaluator;
}(React.Component);

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

    var _this$props = this.props,
        fieldElements = _this$props.fieldElements,
        fieldParentTreeName = _this$props.fieldParentTreeName,
        defaultLanguage = _this$props.defaultLanguage;
    return React.createElement("div", null, fieldElements.map(function (fieldElement) {
      return React.createElement("div", {
        key: 'group_' + fieldElement.name
      }, _this.typeEvaluator(fieldElement, fieldParentTreeName, defaultLanguage));
    }));
  }
  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} - the field parent hierarchical name
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  ;

  _proto.typeEvaluator = function typeEvaluator(fieldElement, fieldParentTreeName, defaultLanguage) {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return React.createElement("div", null, React.createElement(ConnectedGroup, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        }));

      case REPEAT_FIELD_TYPE:
        return React.createElement("div", null, React.createElement(ConnectedRepeat, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        }));

      default:
        return React.createElement(BaseTypeEvaluator, {
          fieldElement: fieldElement,
          fieldParentTreeName: fieldParentTreeName,
          defaultLanguage: defaultLanguage
        });
    }
  };

  return GroupTypeEvaluator;
}(React.Component);

fontawesomeSvgCore.library.add(freeSolidSvgIcons.faPlusCircle, freeSolidSvgIcons.faMinusCircle);

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
      defaultLanguage: 'English',
      fieldElements: DEMO_FORM_JSON.children,
      fieldParentTreeName: ''
    };
    return React.createElement(reactstrap.Container, {
      className: "form-container"
    }, React.createElement(reactstrap.Row, {
      className: "welcome-box"
    }, React.createElement(reactstrap.Col, null, React.createElement("h3", null, "Welcome to Odk Form Renderer"))), React.createElement(GroupTypeEvaluator, Object.assign({}, props)));
  };

  return App;
}(React.Component);

/** The initial store */

var store =
/*#__PURE__*/
redux.createStore(reducer,
/*#__PURE__*/
reduxDevtoolsExtension.composeWithDevTools());

var OdkFormRenderer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(OdkFormRenderer, _React$Component);

  function OdkFormRenderer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = OdkFormRenderer.prototype;

  _proto.render = function render() {
    return React.createElement(reactRedux.Provider, {
      store: store
    }, React.createElement(App, null));
  };

  return OdkFormRenderer;
}(React.Component);

exports.default = OdkFormRenderer;
//# sourceMappingURL=odkformrenderer.cjs.development.js.map
