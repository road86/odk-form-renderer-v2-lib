// Field Types
export const GROUP_FIELD_TYPE = 'group';
export type GROUP_FIELD_TYPE = typeof GROUP_FIELD_TYPE;
export const REPEAT_FIELD_TYPE = 'repeat';
export type REPEAT_FIELD_TYPE = typeof REPEAT_FIELD_TYPE;
export const TEXT_FIELD_TYPE = 'text';
export type TEXT_FIELD_TYPE = typeof TEXT_FIELD_TYPE;
export const DATE_FIELD_TYPE = 'date';
export type DATE_FIELD_TYPE = typeof DATE_FIELD_TYPE;
export const DATE_TIME_FIELD_TYPE = 'dateTime';
export type DATE_TIME_FIELD_TYPE = typeof DATE_TIME_FIELD_TYPE;
export const INTEGER_FIELD_TYPE = 'integer';
export type INTEGER_FIELD_TYPE = typeof INTEGER_FIELD_TYPE;
export const DECIMAL_FIELD_TYPE = 'decimal';
export type DECIMAL_FIELD_TYPE = typeof DECIMAL_FIELD_TYPE;
export const PHOTO_FIELD_TYPE = 'photo';
export type PHOTO_FIELD_TYPE = typeof PHOTO_FIELD_TYPE;
export const NOTE_FIELD_TYPE = 'note';
export type NOTE_FIELD_TYPE = typeof NOTE_FIELD_TYPE;
export const SELECT_ONE_FIELD_TYPE = 'select one';
export type SELECT_ONE_FIELD_TYPE = typeof SELECT_ONE_FIELD_TYPE;
export const SELECT_ALL_FIELD_TYPE = 'select all that apply';
export type SELECT_ALL_FIELD_TYPE = typeof SELECT_ALL_FIELD_TYPE;

// Required Properties
export const REQUIRED_FIELD_MSG = 'This field is required';
export type REQUIRED_FIELD_MSG = typeof REQUIRED_FIELD_MSG;
export const REQUIRED_SYMBOL = '*';
export type REQUIRED_SYMBOL = typeof REQUIRED_SYMBOL;

/* tslint:disable */
export const DEMO_FORM_JSON = {
  "default_language": "English",
  "children": [
    {
      "name": "start",
      "type": "start"
    },
    {
      "name": "end",
      "type": "end"
    },
    {
      "name": "username",
      "type": "username"
    },
    {
      "name": "note_owner_info",
      "label": {
        "Bangla": "Owner Information",
        "English": "Owner Information"
      },
      "type": "note"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "children": [
        {
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
            "Bangla": "\u09a4\u09be\u09b0\u09bf\u0996",
            "English": "Date"
          },
          "type": "date"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "owner_name",
          "bind": {
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u09ae\u09be\u09b2\u09bf\u0995\u09c7\u09b0 \u09a8\u09be\u09ae",
            "English": "Owner's name"
          },
          "type": "text"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "Union-1",
                "English": "Union-1"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "Union-2",
                "English": "Union-2"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "Union-3",
                "English": "Union-3"
              }
            }
          ],
          "name": "union_name",
          "bind": {
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u0987\u0989\u09a8\u09bf\u09df\u09a8",
            "English": "Union"
          },
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "village",
          "bind": {
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u0997\u09cd\u09b0\u09be\u09ae",
            "English": "Village"
          },
          "type": "text"
        },
        {
          "control": {
            "appearance": "w6 numbers"
          },
          "name": "mobile",
          "bind": {
            "jr:constraintMsg": {
              "Bangla": "\u09e7\u09e7 \u09a1\u09bf\u099c\u09bf\u099f \u09aa\u09cd\u09b0\u09ac\u09c7\u09b6 \u0995\u09b0\u09c1\u09a8",
              "English": "Put 11 digit"
            },
            "constraint": "regex(., '^[0-9]{11}$')"
          },
          "label": {
            "Bangla": "\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09be\u09ae\u09cd\u09ac\u09be\u09b0",
            "English": "Mobile number"
          },
          "type": "text"
        }
      ],
      "name": "owner_info",
      "label": {
        "Bangla": "Owner Information",
        "English": "Owner Information"
      },
      "type": "group"
    },
    {
      "control": {
        "appearance": "No"
      },
      "name": "note_patient_info",
      "label": {
        "Bangla": "Patient Information",
        "English": "Patient Information"
      },
      "type": "note"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "children": [
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "Buffalo",
                "English": "Buffalo"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "Cat",
                "English": "Cat"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "Cattle",
                "English": "Cattle"
              }
            },
            {
              "name": "4",
              "label": {
                "Bangla": "Dog",
                "English": "Dog"
              }
            },
            {
              "name": "5",
              "label": {
                "Bangla": "Goat",
                "English": "Goat"
              }
            },
            {
              "name": "6",
              "label": {
                "Bangla": "Horse",
                "English": "Horse"
              }
            },
            {
              "name": "7",
              "label": {
                "Bangla": "Pig",
                "English": "Pig"
              }
            },
            {
              "name": "8",
              "label": {
                "Bangla": "Sheep",
                "English": "Sheep"
              }
            },
            {
              "name": "21",
              "label": {
                "Bangla": "Chicken",
                "English": "Chicken"
              }
            },
            {
              "name": "22",
              "label": {
                "Bangla": "Duck",
                "English": "Duck"
              }
            },
            {
              "name": "23",
              "label": {
                "Bangla": "Goose",
                "English": "Goose"
              }
            },
            {
              "name": "24",
              "label": {
                "Bangla": "Moyana",
                "English": "Moyana"
              }
            },
            {
              "name": "25",
              "label": {
                "Bangla": "Pegion",
                "English": "Pegion"
              }
            },
            {
              "name": "26",
              "label": {
                "Bangla": "Quail",
                "English": "Quail"
              }
            },
            {
              "name": "27",
              "label": {
                "Bangla": "Turkey",
                "English": "Turkey"
              }
            },
            {
              "name": "00",
              "label": {
                "Bangla": "Other",
                "English": "Other"
              }
            }
          ],
          "name": "species",
          "bind": {
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u09aa\u09cd\u09b0\u09be\u09a3\u09c0 \u09aa\u09cd\u09b0\u099c\u09be\u09a4\u09bf",
            "English": "Species"
          },
          "type": "select one"
        },
        {
          "name": "species_label",
          "bind": {
            "calculate": "jr:choice-name(${species},'${species}')"
          },
          "label": {
            "Bangla": "species_label"
          },
          "type": "calculate"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "species_other",
          "bind": {
            "relevant": "${species}=00",
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u09aa\u09cd\u09b0\u09be\u09a3\u09c0 \u09aa\u09cd\u09b0\u099c\u09be\u09a4\u09bf - \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            "English": "Species - Other"
          },
          "type": "text"
        },
        {
          "name": "species_label_final",
          "bind": {
            "calculate": "if(${species}='00',${species_other},${species_label})"
          },
          "label": {
            "Bangla": "species_label_final"
          },
          "type": "calculate"
        },
        {
          "name": "species_value",
          "bind": {
            "calculate": "if(${species}=1,'M1',if(${species}=2,'M2',if(${species}=3,'M3',if(${species}=4,'M4',if(${species}=5,'M5',if(${species}=6,'M6',if(${species}=7,'M7',if(${species}=8,'M8',if(${species}='00' and ${species_type_other}=1,'M_Other',if(${species}=21,'B',if(${species}=22,'B',if(${species}=23,'B',if(${species}=24,'B',if(${species}=25,'B',if(${species}=26,'B',if(${species}=27,'B',if(${species}='00' and ${species_type_other}=2,'B','')))))))))))))))))"
          },
          "label": {
            "Bangla": "species_value"
          },
          "type": "calculate"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "Mammal",
                "English": "Mammal"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "Bird",
                "English": "Bird"
              }
            }
          ],
          "name": "species_type_other",
          "bind": {
            "relevant": "${species}=00",
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u09aa\u09cd\u09b0\u09be\u09a3\u09bf\u09b8\u09ae\u09cd\u09aa\u09a6",
            "English": "Livestock"
          },
          "type": "select one"
        },
        {
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
        },
        {
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
            "Bangla": "\u09aa\u09cd\u09b0\u09be\u09a3\u09bf\u09b0 \u09a7\u09b0\u09a3",
            "English": "Mammal Type / breed"
          },
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "Milk",
                "English": "Milk"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "Meat",
                "English": "Meat"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "Working",
                "English": "Working"
              }
            },
            {
              "name": "4",
              "label": {
                "Bangla": "Hobby",
                "English": "Hobby"
              }
            },
            {
              "name": "5",
              "label": {
                "Bangla": "Fiber/Wool",
                "English": "Fiber/Wool"
              }
            },
            {
              "name": "6",
              "label": {
                "Bangla": "Multi-purpose",
                "English": "Multi-purpose"
              }
            }
          ],
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
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "age_month",
          "bind": {
            "relevant": "${species_type}=1",
            "required": "No"
          },
          "label": {
            "Bangla": "[${species_label_final}] \u098f\u09b0 \u09ac\u09df\u09b8 (\u09ae\u09be\u09b8)",
            "English": "Age (Month) [${species_label_final}]"
          },
          "type": "decimal"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "age_week",
          "bind": {
            "relevant": "${species_type}=2",
            "required": "No"
          },
          "label": {
            "Bangla": "[${species_label_final}] \u098f\u09b0 \u09ac\u09df\u09b8 (\u09b8\u09aa\u09cd\u09a4\u09be\u09b9)",
            "English": "Age (Week) [${species_label_final}]"
          },
          "type": "decimal"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "\u09aa\u09c1\u09b0\u09c1\u09b7",
                "English": "Male"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "\u09ae\u09b9\u09bf\u09b2\u09be",
                "English": "Female"
              }
            }
          ],
          "name": "sex",
          "bind": {
            "relevant": "${species_type}=1",
            "required": "No"
          },
          "label": {
            "Bangla": "[${species_label_final}] \u098f\u09b0 \u09b2\u09bf\u0999\u09cd\u0997",
            "English": "Sex [${species_label_final}]"
          },
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "herd_flock_number",
          "bind": {
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u09ae\u09cb\u099f [${species_label_final}] \u098f\u09b0 \u09b8\u0982\u0996\u09cd\u09af\u09be",
            "English": "Number of [${species_label_final}] in the herd / flock"
          },
          "type": "integer"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "sick_number",
          "bind": {
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u0986\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4 [${species_label_final}] \u098f\u09b0 \u09b8\u0982\u0996\u09cd\u09af\u09be",
            "English": "Number of sick [${species_label_final}]"
          },
          "type": "integer"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "dead_number",
          "bind": {
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u09ae\u09c3\u09a4 [${species_label_final}] \u098f\u09b0 \u09b8\u0982\u0996\u09cd\u09af\u09be",
            "English": "Number of dead [${species_label_final}]"
          },
          "type": "integer"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "disease_history",
          "bind": {
            "required": "No"
          },
          "label": {
            "Bangla": "\u09b0\u09cb\u0997\u09c7\u09b0 \u0987\u09a4\u09bf\u09b9\u09be\u09b8",
            "English": "Disease History"
          },
          "type": "text"
        },
        {
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
            "Bangla": "\u09b0\u09cb\u0997\u09c7\u09b0 \u09b2\u0995\u09cd\u09b7\u09a3",
            "English": "Clinical Sign"
          },
          "type": "select all that apply"
        },
        {
          "name": "clinical_sign_other",
          "bind": {
            "relevant": "selected(${clinical_sign},'00')",
            "required": "Yes"
          },
          "label": {
            "Bangla": "\u09b0\u09cb\u0997\u09c7\u09b0 \u09b2\u0995\u09cd\u09b7\u09a3 - \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            "English": "Clinical Sign - Other"
          },
          "type": "text"
        }
      ],
      "name": "patient_info",
      "label": {
        "Bangla": "Patient Information",
        "English": "Patient Information"
      },
      "type": "group"
    },
    {
      "control": {
        "appearance": "NO"
      },
      "name": "note_diagnostics",
      "label": {
        "Bangla": "Diagnostics",
        "English": "Diagnostics"
      },
      "type": "note"
    },
    {
      "control": {
        "appearance": "w10"
      },
      "children": [
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "Microscopic",
                "English": "Microscopic"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "Rapid Test",
                "English": "Rapid Test"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "Postmortem examination",
                "English": "Postmortem examination"
              }
            }
          ],
          "name": "test_tool",
          "bind": {
            "required": "yes"
          },
          "label": {
            "Bangla": "Test tool",
            "English": "Test tool"
          },
          "type": "select all that apply"
        },
        {
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
        },
        {
          "name": "so_far_outside_fecal",
          "bind": {
            "calculate": "join(' ', ${microscopic_test_fecal})"
          },
          "type": "calculate"
        },
        {
          "children": [
            {
              "name": "species_recode",
              "bind": {
                "calculate": "${species_type}"
              },
              "type": "calculate"
            },
            {
              "name": "position_fecal",
              "bind": {
                "calculate": "position(..)"
              },
              "type": "calculate"
            },
            {
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
                "Bangla": "\u09ae\u09be\u0987\u0995\u09cd\u09b0\u09cb\u09b8\u09cd\u0995\u09aa\u09bf\u0995 \u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be - \u09ae\u09b2",
                "English": "Microscopic test for faeces"
              },
              "type": "select one"
            },
            {
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
            },
            {
              "control": {
                "appearance": "w4 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "+",
                    "English": "+"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "Bangla": "++",
                    "English": "++"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "Bangla": "+++",
                    "English": "+++"
                  }
                }
              ],
              "name": "microscopic_test_fecal_intensity",
              "bind": {
                "required": "Yes"
              },
              "label": {
                "Bangla": "Intensity",
                "English": "Intensity"
              },
              "type": "select one"
            }
          ],
          "name": "fecal",
          "bind": {
            "relevant": "selected(${microscopic},'1')"
          },
          "label": {
            "Bangla": "Fecal Examination",
            "English": "Fecal Examination"
          },
          "type": "repeat"
        },
        {
          "name": "so_far_outside_parasite",
          "bind": {
            "calculate": "join(' ', ${microscopic_test_parasite})"
          },
          "type": "calculate"
        },
        {
          "children": [
            {
              "name": "position_parasite",
              "bind": {
                "calculate": "position(..)"
              },
              "type": "calculate"
            },
            {
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
                "Bangla": "\u09ae\u09be\u0987\u0995\u09cd\u09b0\u09cb\u09b8\u09cd\u0995\u09aa\u09bf\u0995 \u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be - \u09b0\u0995\u09cd\u09a4",
                "English": "Microscopic test for blood parasites"
              },
              "type": "select one"
            },
            {
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
            },
            {
              "control": {
                "appearance": "w4 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "+",
                    "English": "+"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "Bangla": "++",
                    "English": "++"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "Bangla": "+++",
                    "English": "+++"
                  }
                }
              ],
              "name": "microscopic_test_parasite_intensity",
              "bind": {
                "required": "Yes"
              },
              "label": {
                "Bangla": "Intensity",
                "English": "Intensity"
              },
              "type": "select one"
            }
          ],
          "name": "parasite",
          "bind": {
            "relevant": "selected(${microscopic},'2')"
          },
          "label": {
            "Bangla": "Blood Parasite Examination",
            "English": "Blood Parasite Examination"
          },
          "type": "repeat"
        },
        {
          "name": "so_far_outside_skin",
          "bind": {
            "calculate": "join(' ', ${microscopic_test_skin})"
          },
          "type": "calculate"
        },
        {
          "children": [
            {
              "name": "position_skin",
              "bind": {
                "calculate": "position(..)"
              },
              "type": "calculate"
            },
            {
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
                "Bangla": "\u09ae\u09be\u0987\u0995\u09cd\u09b0\u09cb\u09b8\u09cd\u0995\u09aa\u09bf\u0995 \u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be - \u09b8\u09cd\u0995\u09bf\u09a8 \u09b8\u09cd\u0995\u09cd\u09b0\u09be\u09ac",
                "English": "Microscopic test for skin"
              },
              "type": "select one"
            },
            {
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
            },
            {
              "control": {
                "appearance": "w4 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "Positive",
                    "English": "Positive"
                  }
                },
                {
                  "name": "0",
                  "label": {
                    "Bangla": "Negative",
                    "English": "Negative"
                  }
                }
              ],
              "name": "skin_positive_negative",
              "bind": {
                "required": "Yes"
              },
              "label": {
                "Bangla": "Result",
                "English": "Result"
              },
              "type": "select one"
            }
          ],
          "name": "skin",
          "bind": {
            "relevant": "selected(${microscopic},'3')"
          },
          "label": {
            "Bangla": "Skin Examination",
            "English": "Skin Examination"
          },
          "type": "repeat"
        },
        {
          "name": "so_far_outside_urine",
          "bind": {
            "calculate": "join(' ', ${microscopic_test_urine})"
          },
          "type": "calculate"
        },
        {
          "children": [
            {
              "name": "position_urine",
              "bind": {
                "calculate": "position(..)"
              },
              "type": "calculate"
            },
            {
              "name": "so_far_urine",
              "bind": {
                "calculate": "if (${position_urine} = 1, '~', substr(${so_far_outside_urine}, 0, string-length(${so_far_outside_urine}) - string-length(${microscopic_test_urine})))"
              },
              "type": "calculate"
            },
            {
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
            },
            {
              "control": {
                "appearance": "w5 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "+",
                    "English": "+"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "Bangla": "++",
                    "English": "++"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "Bangla": "+++",
                    "English": "+++"
                  }
                }
              ],
              "name": "urine_test_intensity",
              "bind": {
                "required": "Yes"
              },
              "label": {
                "Bangla": "Intensity",
                "English": "Intensity"
              },
              "type": "select one"
            }
          ],
          "name": "urine",
          "bind": {
            "relevant": "selected(${microscopic},'5')"
          },
          "label": {
            "Bangla": "Urine Examination",
            "English": "Urine Examination"
          },
          "type": "repeat"
        },
        {
          "name": "so_far_outside_ear",
          "bind": {
            "calculate": "join(' ', ${microscopic_test_ear})"
          },
          "type": "calculate"
        },
        {
          "children": [
            {
              "name": "position_ear",
              "bind": {
                "calculate": "position(..)"
              },
              "type": "calculate"
            },
            {
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
            },
            {
              "control": {
                "appearance": "w2 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "Yes",
                    "English": "Yes"
                  }
                },
                {
                  "name": "0",
                  "label": {
                    "Bangla": "No",
                    "English": "No"
                  }
                }
              ],
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
            },
            {
              "control": {
                "appearance": "w4 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "Positive",
                    "English": "Positive"
                  }
                },
                {
                  "name": "0",
                  "label": {
                    "Bangla": "Negative",
                    "English": "Negative"
                  }
                }
              ],
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
            }
          ],
          "name": "ear",
          "bind": {
            "relevant": "selected(${microscopic},'4')"
          },
          "label": {
            "Bangla": "Ear Examination",
            "English": "Ear Examination"
          },
          "type": "repeat"
        },
        {
          "name": "so_far_outside_urine_strip",
          "bind": {
            "calculate": "join(' ', ${microscopic_test_urine_strip})"
          },
          "type": "calculate"
        },
        {
          "children": [
            {
              "name": "position_urine_strip",
              "bind": {
                "calculate": "position(..)"
              },
              "type": "calculate"
            },
            {
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
            },
            {
              "control": {
                "appearance": "w4 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "Positive",
                    "English": "Positive"
                  }
                },
                {
                  "name": "0",
                  "label": {
                    "Bangla": "Negative",
                    "English": "Negative"
                  }
                }
              ],
              "name": "urine_strip_test_positive_negative",
              "bind": {
                "required": "Yes"
              },
              "label": {
                "Bangla": "Result",
                "English": "Result"
              },
              "type": "select one"
            },
            {
              "control": {
                "appearance": "w1 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "+",
                    "English": "+"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "Bangla": "++",
                    "English": "++"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "Bangla": "+++",
                    "English": "+++"
                  }
                }
              ],
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
            }
          ],
          "name": "urine_strip",
          "bind": {
            "relevant": "selected(${microscopic},'6')"
          },
          "label": {
            "Bangla": "Urine Strip Test",
            "English": "Urine Strip Test"
          },
          "type": "repeat"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "Circulatory system",
                "English": "Circulatory system"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "Digestive system",
                "English": "Digestive system"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "Immune system",
                "English": "Immune system"
              }
            },
            {
              "name": "4",
              "label": {
                "Bangla": "Integumetary system",
                "English": "Integumetary system"
              }
            },
            {
              "name": "5",
              "label": {
                "Bangla": "Musculoskeletal system",
                "English": "Musculoskeletal system"
              }
            },
            {
              "name": "6",
              "label": {
                "Bangla": "Nervous systems & important sensory organs",
                "English": "Nervous systems & important sensory organs"
              }
            },
            {
              "name": "7",
              "label": {
                "Bangla": "Renal system",
                "English": "Renal system"
              }
            },
            {
              "name": "8",
              "label": {
                "Bangla": "Reproductive system",
                "English": "Reproductive system"
              }
            },
            {
              "name": "9",
              "label": {
                "Bangla": "Resporitory system",
                "English": "Resporitory system"
              }
            }
          ],
          "name": "postmortem",
          "bind": {
            "relevant": "selected(${test_tool},'3') and ${species_type}=2",
            "required": "yes"
          },
          "label": {
            "Bangla": "Postmortem",
            "English": "\u09aa\u09cb\u09b8\u09cd\u099f \u09ae\u09b0\u09cd\u099f\u09c7\u09ae \u09a8\u09ae\u09c2\u09a8\u09be\u09b0 \u09a7\u09b0\u09a8"
          },
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "ENT",
                "English": "ENT"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "CU system",
                "English": "Respiratory system"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "GI tract",
                "English": "CU system"
              }
            },
            {
              "name": "4",
              "label": {
                "Bangla": "H ... System",
                "English": "GI tract"
              }
            },
            {
              "name": "5",
              "label": {
                "Bangla": "Integumetary skin and hair",
                "English": "Integumetary skin and hair"
              }
            },
            {
              "name": "6",
              "label": {
                "Bangla": "MS system",
                "English": "MS system"
              }
            },
            {
              "name": "7",
              "label": {
                "Bangla": "Neurologic system",
                "English": "Neurologic system"
              }
            },
            {
              "name": "8",
              "label": {
                "Bangla": "Renal system",
                "English": "Renal system"
              }
            },
            {
              "name": "9",
              "label": {
                "Bangla": "Reproductive Syste",
                "English": "H ... System"
              }
            },
            {
              "name": "10",
              "label": {
                "Bangla": "Respiratory system",
                "English": "Reproductive Syste"
              }
            },
            {
              "name": "00",
              "label": {
                "Bangla": "Other",
                "English": "Other"
              }
            },
            {
              "name": "1",
              "label": {
                "Bangla": "Organ-1",
                "English": "Organ-1"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "Organ-2",
                "English": "Organ-2"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "Organ-3",
                "English": "Organ-3"
              }
            }
          ],
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
        },
        {
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
        },
        {
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
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "1",
                "English": "1"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "2",
                "English": "2"
              }
            }
          ],
          "name": "postmortem_findings_mammal",
          "bind": {
            "relevant": "selected(${test_tool},'3') and ${species_type}=1"
          },
          "label": {
            "Bangla": "Postmortem Findings - Mammal",
            "English": "Postmortem Findings - Mammal"
          },
          "type": "select all that apply"
        },
        {
          "name": "so_far_outside_rapid_test",
          "bind": {
            "calculate": "join(' ', ${rapid_test})"
          },
          "type": "calculate"
        },
        {
          "children": [
            {
              "name": "species_recode_2",
              "bind": {
                "calculate": "${species_type}"
              },
              "type": "calculate"
            },
            {
              "name": "position_rapid_test",
              "bind": {
                "calculate": "position(..)"
              },
              "type": "calculate"
            },
            {
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
            },
            {
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
            },
            {
              "control": {
                "appearance": "w4 minimal"
              },
              "children": [
                {
                  "name": "1",
                  "label": {
                    "Bangla": "Positive",
                    "English": "Positive"
                  }
                },
                {
                  "name": "0",
                  "label": {
                    "Bangla": "Negative",
                    "English": "Negative"
                  }
                }
              ],
              "name": "rapid_test_result",
              "bind": {
                "relevant": "selected(${test_tool},'2')",
                "required": "Yes"
              },
              "label": {
                "Bangla": "\u09b0\u200d\u09cd\u09af\u09be\u09aa\u09bf\u09a1 \u099f\u09c7\u09b8\u09cd\u099f\u09c7\u09b0 \u09ab\u09b2\u09be\u09ab\u09b2",
                "English": "Rapid test result"
              },
              "type": "select one"
            }
          ],
          "name": "rapid",
          "bind": {
            "relevant": "selected(${test_tool},'2')"
          },
          "label": {
            "Bangla": "Rapid Test",
            "English": "Rapid Test"
          },
          "type": "repeat"
        }
      ],
      "name": "diagnostic",
      "label": {
        "Bangla": "Diagnostics",
        "English": "Diagnostics"
      },
      "type": "group"
    },
    {
      "name": "note_diagnosis_treatment",
      "label": {
        "Bangla": "Diagnosis and Treatment",
        "English": "Diagnosis and Treatment"
      },
      "type": "note"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "children": [
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "itemset": "tentative_diagnosis",
          "name": "tentative_diagnosis",
          "choice_filter": "myfilter=${species_value}",
          "label": {
            "Bangla": "\u09b8\u09ae\u09cd\u09ad\u09be\u09ac\u09cd\u09af \u09b0\u09cb\u0997",
            "English": "Tentative diagnosis"
          },
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "tentative_diagnosis_other",
          "bind": {
            "relevant": "selected(${tentative_diagnosis},'00')"
          },
          "label": {
            "Bangla": "\u09b8\u09ae\u09cd\u09ad\u09be\u09ac\u09cd\u09af \u09b0\u09cb\u0997 - \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            "English": "Tentative diagnosis - other"
          },
          "type": "text"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "a",
                "English": "a"
              }
            },
            {
              "name": "2",
              "label": {
                "Bangla": "b",
                "English": "b"
              }
            },
            {
              "name": "3",
              "label": {
                "Bangla": "c",
                "English": "c"
              }
            },
            {
              "name": "00",
              "label": {
                "Bangla": "Other",
                "English": "Other"
              }
            }
          ],
          "name": "treatment",
          "label": {
            "Bangla": "\u099a\u09bf\u0995\u09bf\u09ce\u09b8\u09be",
            "English": "Treatment"
          },
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "name": "treatment_other",
          "bind": {
            "relevant": "selected(${treatment},'00')"
          },
          "label": {
            "Bangla": "\u099a\u09bf\u0995\u09bf\u09ce\u09b8\u09be - \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            "English": "Treatment - other"
          },
          "type": "text"
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "children": [
            {
              "name": "1",
              "label": {
                "Bangla": "Yes",
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "Bangla": "No",
                "English": "No"
              }
            }
          ],
          "name": "sample_sent_lab",
          "label": {
            "Bangla": "\u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be\u0997\u09be\u09b0\u09c7 \u09a8\u09ae\u09c1\u09a8\u09be \u09aa\u09cd\u09b0\u09c7\u09b0\u09a3",
            "English": "Sample send to laboratory"
          },
          "type": "select one"
        }
      ],
      "name": "diagnosis_treatment",
      "label": {
        "Bangla": "Diagnosis and Treatment",
        "English": "Diagnosis and Treatment"
      },
      "type": "group"
    },
    {
      "control": {
        "bodyless": true
      },
      "children": [
        {
          "name": "instanceID",
          "bind": {
            "readonly": "true()",
            "calculate": "concat('uuid:', uuid())"
          },
          "type": "calculate"
        }
      ],
      "name": "meta",
      "type": "group"
    }
  ],
  "style": "theme-grid",
  "version": "1.0.1",
  "type": "survey",
  "name": "patient_registry",
  "sms_keyword": "patient_registry",
  "title": "Patient Registry",
  "choices": {
    "sex": [
      {
        "name": "1",
        "label": {
          "Bangla": "\u09aa\u09c1\u09b0\u09c1\u09b7",
          "English": "Male"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "\u09ae\u09b9\u09bf\u09b2\u09be",
          "English": "Female"
        }
      }
    ],
    "species_type_other": [
      {
        "name": "1",
        "label": {
          "Bangla": "Mammal",
          "English": "Mammal"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Bird",
          "English": "Bird"
        }
      }
    ],
    "intensity": [
      {
        "name": "1",
        "label": {
          "Bangla": "+",
          "English": "+"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "++",
          "English": "++"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "+++",
          "English": "+++"
        }
      }
    ],
    "microscopic_test_skin": [
      {
        "name": "1",
        "label": {
          "Bangla": "Mites",
          "English": "Mites"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Lice",
          "English": "Lice"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "microscopic_test_urine_strip": [
      {
        "name": "1",
        "label": {
          "Bangla": "Biliruubin",
          "English": "Biliruubin"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Blood",
          "English": "Blood"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Glucose",
          "English": "Glucose"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Keteone",
          "English": "Keteone"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Leukocytes",
          "English": "Leukocytes"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Nitrite",
          "English": "Nitrite"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Protein",
          "English": "Protein"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Urobilinogen",
          "English": "Urobilinogen"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      }
    ],
    "test_tool": [
      {
        "name": "1",
        "label": {
          "Bangla": "Microscopic",
          "English": "Microscopic"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Rapid Test",
          "English": "Rapid Test"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Postmortem examination",
          "English": "Postmortem examination"
        }
      }
    ],
    "species": [
      {
        "name": "1",
        "label": {
          "Bangla": "Buffalo",
          "English": "Buffalo"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Cat",
          "English": "Cat"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Cattle",
          "English": "Cattle"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Dog",
          "English": "Dog"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Goat",
          "English": "Goat"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Horse",
          "English": "Horse"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Pig",
          "English": "Pig"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Sheep",
          "English": "Sheep"
        }
      },
      {
        "name": "21",
        "label": {
          "Bangla": "Chicken",
          "English": "Chicken"
        }
      },
      {
        "name": "22",
        "label": {
          "Bangla": "Duck",
          "English": "Duck"
        }
      },
      {
        "name": "23",
        "label": {
          "Bangla": "Goose",
          "English": "Goose"
        }
      },
      {
        "name": "24",
        "label": {
          "Bangla": "Moyana",
          "English": "Moyana"
        }
      },
      {
        "name": "25",
        "label": {
          "Bangla": "Pegion",
          "English": "Pegion"
        }
      },
      {
        "name": "26",
        "label": {
          "Bangla": "Quail",
          "English": "Quail"
        }
      },
      {
        "name": "27",
        "label": {
          "Bangla": "Turkey",
          "English": "Turkey"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "microscopic": [
      {
        "myfilter": "2",
        "name": "1",
        "label": {
          "Bangla": "Fecal examination",
          "English": "Fecal examination"
        }
      },
      {
        "myfilter": "2",
        "name": "2",
        "label": {
          "Bangla": "Blood Parasites examination",
          "English": "Blood Parasites examination"
        }
      },
      {
        "myfilter": "2",
        "name": "3",
        "label": {
          "Bangla": "Skin examination",
          "English": "Skin examination"
        }
      },
      {
        "myfilter": "1",
        "name": "1",
        "label": {
          "Bangla": "Fecal examination",
          "English": "Fecal examination"
        }
      },
      {
        "myfilter": "1",
        "name": "2",
        "label": {
          "Bangla": "Blood Parasites examination",
          "English": "Blood Parasites examination"
        }
      },
      {
        "myfilter": "1",
        "name": "3",
        "label": {
          "Bangla": "Skin examination",
          "English": "Skin examination"
        }
      },
      {
        "myfilter": "1",
        "name": "4",
        "label": {
          "Bangla": "Ear examination",
          "English": "Ear examination"
        }
      },
      {
        "myfilter": "1",
        "name": "5",
        "label": {
          "Bangla": "Urine examination",
          "English": "Urine examination"
        }
      },
      {
        "myfilter": "1",
        "name": "6",
        "label": {
          "Bangla": "Urine strip test",
          "English": "Urine strip test"
        }
      }
    ],
    "treatment": [
      {
        "name": "1",
        "label": {
          "Bangla": "a",
          "English": "a"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "b",
          "English": "b"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "c",
          "English": "c"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "postmortem": [
      {
        "name": "1",
        "label": {
          "Bangla": "Circulatory system",
          "English": "Circulatory system"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Digestive system",
          "English": "Digestive system"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Immune system",
          "English": "Immune system"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Integumetary system",
          "English": "Integumetary system"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Musculoskeletal system",
          "English": "Musculoskeletal system"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Nervous systems & important sensory organs",
          "English": "Nervous systems & important sensory organs"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Renal system",
          "English": "Renal system"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Reproductive system",
          "English": "Reproductive system"
        }
      },
      {
        "name": "9",
        "label": {
          "Bangla": "Resporitory system",
          "English": "Resporitory system"
        }
      }
    ],
    "microscopic_test_parasite": [
      {
        "name": "1",
        "label": {
          "Bangla": "Anaplasma",
          "English": "Anaplasma"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Babesia",
          "English": "Babesia"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Haemoproteus",
          "English": "Haemoproteus"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Leucocytozoon",
          "English": "Leucocytozoon"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Plasmodium",
          "English": "Plasmodium"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Rickettsiae",
          "English": "Rickettsiae"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Schistosoma",
          "English": "Schistosoma"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Theileria",
          "English": "Theileria"
        }
      },
      {
        "name": "9",
        "label": {
          "Bangla": "Trypansoma",
          "English": "Trypansoma"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "microscopic_test_urine": [
      {
        "name": "1",
        "label": {
          "Bangla": "Bacteria",
          "English": "Bacteria"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Crystals",
          "English": "Crystals"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Cylindruria (Casts)",
          "English": "Cylindruria (Casts)"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Lipids",
          "English": "Lipids"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "RBCs",
          "English": "RBCs"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Spermatozoa",
          "English": "Spermatozoa"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Squamous cells",
          "English": "Squamous cells"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Yeast",
          "English": "Yeast"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      }
    ],
    "rapid_test_result": [
      {
        "name": "1",
        "label": {
          "Bangla": "Positive",
          "English": "Positive"
        }
      },
      {
        "name": "0",
        "label": {
          "Bangla": "Negative",
          "English": "Negative"
        }
      }
    ],
    "microscopic_test_ear": [
      {
        "name": "1",
        "label": {
          "Bangla": "Auricular chondritis",
          "English": "Auricular chondritis"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Deafness",
          "English": "Deafness"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Hair loss on the outer ear",
          "English": "Hair loss on the outer ear"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Lice",
          "English": "Lice"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Mite",
          "English": "Mite"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Nodular granulomatous dermatitis",
          "English": "Nodular granulomatous dermatitis"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Tick",
          "English": "Tick"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Tissue death of the pinna",
          "English": "Tissue death of the pinna"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      }
    ],
    "clinical_sign": [
      {
        "myfilter": "1",
        "name": "1",
        "label": {
          "Bangla": "Abdominal pain",
          "English": "Abdominal pain"
        }
      },
      {
        "myfilter": "1",
        "name": "2",
        "label": {
          "Bangla": "Abortion in first trimester",
          "English": "Abortion in first trimester"
        }
      },
      {
        "myfilter": "1",
        "name": "3",
        "label": {
          "Bangla": "Abortion in second trimester",
          "English": "Abortion in second trimester"
        }
      },
      {
        "myfilter": "1",
        "name": "4",
        "label": {
          "Bangla": "Abortion in third trimester",
          "English": "Abortion in third trimester"
        }
      },
      {
        "myfilter": "1",
        "name": "5",
        "label": {
          "Bangla": "Abscess",
          "English": "Abscess"
        }
      },
      {
        "myfilter": "1",
        "name": "6",
        "label": {
          "Bangla": "Aggressiveness",
          "English": "Aggressiveness"
        }
      },
      {
        "myfilter": "1",
        "name": "7",
        "label": {
          "Bangla": "Anaemia",
          "English": "Anaemia"
        }
      },
      {
        "myfilter": "1",
        "name": "8",
        "label": {
          "Bangla": "Blackish skin",
          "English": "Blackish skin"
        }
      },
      {
        "myfilter": "1",
        "name": "9",
        "label": {
          "Bangla": "Bloody milk",
          "English": "Bloody milk"
        }
      },
      {
        "myfilter": "1",
        "name": "10",
        "label": {
          "Bangla": "Bottle jaw",
          "English": "Bottle jaw"
        }
      },
      {
        "myfilter": "1",
        "name": "11",
        "label": {
          "Bangla": "Breathing difficulty (Dyspnea)",
          "English": "Breathing difficulty (Dyspnea)"
        }
      },
      {
        "myfilter": "1",
        "name": "12",
        "label": {
          "Bangla": "Coffee colour urine",
          "English": "Coffee colour urine"
        }
      },
      {
        "myfilter": "1",
        "name": "13",
        "label": {
          "Bangla": "Cough",
          "English": "Cough"
        }
      },
      {
        "myfilter": "1",
        "name": "14",
        "label": {
          "Bangla": "Crack in Teat",
          "English": "Crack in Teat"
        }
      },
      {
        "myfilter": "1",
        "name": "15",
        "label": {
          "Bangla": "Cracking sound in muscle",
          "English": "Cracking sound in muscle"
        }
      },
      {
        "myfilter": "1",
        "name": "16",
        "label": {
          "Bangla": "Dehydration",
          "English": "Dehydration"
        }
      },
      {
        "myfilter": "1",
        "name": "17",
        "label": {
          "Bangla": "Depression",
          "English": "Depression"
        }
      },
      {
        "myfilter": "1",
        "name": "18",
        "label": {
          "Bangla": "Dermatitis",
          "English": "Dermatitis"
        }
      },
      {
        "myfilter": "1",
        "name": "19",
        "label": {
          "Bangla": "Diarrhoea (bloody)",
          "English": "Diarrhea (bloody)"
        }
      },
      {
        "myfilter": "1",
        "name": "20",
        "label": {
          "Bangla": "Diarrhoea (watery)",
          "English": "Diarrhea (watery)"
        }
      },
      {
        "myfilter": "1",
        "name": "21",
        "label": {
          "Bangla": "Diarrhoea (greenish)",
          "English": "Diarrhoea (greenish)"
        }
      },
      {
        "myfilter": "1",
        "name": "22",
        "label": {
          "Bangla": "Diarrhoea (whitish)",
          "English": "Diarrhoea (whitish)"
        }
      },
      {
        "myfilter": "1",
        "name": "23",
        "label": {
          "Bangla": "Diarrhoea (yellowish)",
          "English": "Diarrhoea (yellowish)"
        }
      },
      {
        "myfilter": "1",
        "name": "24",
        "label": {
          "Bangla": "Difficulty in movement",
          "English": "Difficulty in movement"
        }
      },
      {
        "myfilter": "1",
        "name": "25",
        "label": {
          "Bangla": "Exudate on the skin",
          "English": "Exudate on the skin"
        }
      },
      {
        "myfilter": "1",
        "name": "26",
        "label": {
          "Bangla": "Fever",
          "English": "Fever"
        }
      },
      {
        "myfilter": "1",
        "name": "27",
        "label": {
          "Bangla": "Fever (Fluctuating)",
          "English": "Fever (Fluctuating)"
        }
      },
      {
        "myfilter": "1",
        "name": "28",
        "label": {
          "Bangla": "Fever (high)",
          "English": "Fever (high)"
        }
      },
      {
        "myfilter": "1",
        "name": "29",
        "label": {
          "Bangla": "Foul smell from the wound",
          "English": "Foul smell from the wound"
        }
      },
      {
        "myfilter": "1",
        "name": "30",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "1",
        "name": "31",
        "label": {
          "Bangla": "Grunting sound from affected area",
          "English": "Grunting sound from affected area"
        }
      },
      {
        "myfilter": "1",
        "name": "32",
        "label": {
          "Bangla": "Haemorrhage on conjunctiva",
          "English": "Haemorrhage on conjunctiva"
        }
      },
      {
        "myfilter": "1",
        "name": "33",
        "label": {
          "Bangla": "Hair loss",
          "English": "Hair loss"
        }
      },
      {
        "myfilter": "1",
        "name": "34",
        "label": {
          "Bangla": "Incoordination in movement",
          "English": "Incoordination in movement"
        }
      },
      {
        "myfilter": "1",
        "name": "35",
        "label": {
          "Bangla": "Itichy skin (pruritus)",
          "English": "Itichy skin (pruritus)"
        }
      },
      {
        "myfilter": "1",
        "name": "36",
        "label": {
          "Bangla": "Jaundice",
          "English": "Jaundice"
        }
      },
      {
        "myfilter": "1",
        "name": "37",
        "label": {
          "Bangla": "Lameness",
          "English": "Lameness"
        }
      },
      {
        "myfilter": "1",
        "name": "38",
        "label": {
          "Bangla": "Lateral recumbency",
          "English": "Lateral recumbency"
        }
      },
      {
        "myfilter": "1",
        "name": "39",
        "label": {
          "Bangla": "Leg stiffness",
          "English": "Leg stiffness"
        }
      },
      {
        "myfilter": "1",
        "name": "40",
        "label": {
          "Bangla": "Loss of appetite",
          "English": "Loss of appetite"
        }
      },
      {
        "myfilter": "1",
        "name": "41",
        "label": {
          "Bangla": "Lymph nodes enlargement",
          "English": "Lymph nodes enlargement"
        }
      },
      {
        "myfilter": "1",
        "name": "42",
        "label": {
          "Bangla": "Mucus in feces",
          "English": "Mucus in feces"
        }
      },
      {
        "myfilter": "1",
        "name": "43",
        "label": {
          "Bangla": "Nasal discharge",
          "English": "Nasal discharge"
        }
      },
      {
        "myfilter": "1",
        "name": "44",
        "label": {
          "Bangla": "Neck stiffness",
          "English": "Neck stiffness"
        }
      },
      {
        "myfilter": "1",
        "name": "45",
        "label": {
          "Bangla": "Necrotic tissue in interdigital space",
          "English": "Necrotic tissue in interdigital space"
        }
      },
      {
        "myfilter": "1",
        "name": "46",
        "label": {
          "Bangla": "Pain in teat",
          "English": "Pain in teat"
        }
      },
      {
        "myfilter": "1",
        "name": "47",
        "label": {
          "Bangla": "Papules on the mucous membranes of the eyes",
          "English": "Papules on the mucous membranes of the eyes"
        }
      },
      {
        "myfilter": "1",
        "name": "48",
        "label": {
          "Bangla": "Paralysis",
          "English": "Paralysis"
        }
      },
      {
        "myfilter": "1",
        "name": "49",
        "label": {
          "Bangla": "Pendulous abdomen",
          "English": "Pendulous abdomen"
        }
      },
      {
        "myfilter": "1",
        "name": "50",
        "label": {
          "Bangla": "Poor growth",
          "English": "Poor growth"
        }
      },
      {
        "myfilter": "1",
        "name": "51",
        "label": {
          "Bangla": "Presence of lice",
          "English": "Presence of lice"
        }
      },
      {
        "myfilter": "1",
        "name": "52",
        "label": {
          "Bangla": "Presence of the tick",
          "English": "Presence of the tick"
        }
      },
      {
        "myfilter": "1",
        "name": "53",
        "label": {
          "Bangla": "Raised and matted tufts of hair",
          "English": "Raised and matted tufts of hair"
        }
      },
      {
        "myfilter": "1",
        "name": "54",
        "label": {
          "Bangla": "Retained placentas",
          "English": "Retained placentas"
        }
      },
      {
        "myfilter": "1",
        "name": "55",
        "label": {
          "Bangla": "Rolling of eye balls",
          "English": "Rolling of eye balls"
        }
      },
      {
        "myfilter": "1",
        "name": "56",
        "label": {
          "Bangla": "Rough hair coat",
          "English": "Rough hair coat"
        }
      },
      {
        "myfilter": "1",
        "name": "57",
        "label": {
          "Bangla": "Salivation",
          "English": "Salivation"
        }
      },
      {
        "myfilter": "1",
        "name": "58",
        "label": {
          "Bangla": "Segment of worms in faeces",
          "English": "Segment of worms in faeces"
        }
      },
      {
        "myfilter": "1",
        "name": "59",
        "label": {
          "Bangla": "Shivering",
          "English": "Shivering"
        }
      },
      {
        "myfilter": "1",
        "name": "60",
        "label": {
          "Bangla": "Softening of skull bone",
          "English": "Softening of skull bone"
        }
      },
      {
        "myfilter": "1",
        "name": "61",
        "label": {
          "Bangla": "Stillbirth",
          "English": "Stillbirth"
        }
      },
      {
        "myfilter": "1",
        "name": "62",
        "label": {
          "Bangla": "Subnormal temperature",
          "English": "Subnormal temperature"
        }
      },
      {
        "myfilter": "1",
        "name": "63",
        "label": {
          "Bangla": "Sudden death",
          "English": "Sudden death"
        }
      },
      {
        "myfilter": "1",
        "name": "64",
        "label": {
          "Bangla": "Swelling and redness of interdigital tissues",
          "English": "Swelling and redness of interdigital tissues"
        }
      },
      {
        "myfilter": "1",
        "name": "65",
        "label": {
          "Bangla": "Swollen and painful navel",
          "English": "Swollen and painful navel"
        }
      },
      {
        "myfilter": "1",
        "name": "66",
        "label": {
          "Bangla": "Thickened intestine",
          "English": "Thickened intestine"
        }
      },
      {
        "myfilter": "1",
        "name": "67",
        "label": {
          "Bangla": "Thickening of the skin",
          "English": "Thickening of the skin"
        }
      },
      {
        "myfilter": "1",
        "name": "68",
        "label": {
          "Bangla": "Tongue protrusion",
          "English": "Tongue protrusion"
        }
      },
      {
        "myfilter": "1",
        "name": "69",
        "label": {
          "Bangla": "Trembling",
          "English": "Trembling"
        }
      },
      {
        "myfilter": "1",
        "name": "70",
        "label": {
          "Bangla": "Tympany",
          "English": "Tympany"
        }
      },
      {
        "myfilter": "1",
        "name": "71",
        "label": {
          "Bangla": "Udder (Gangrene)",
          "English": "Udder (Gangrene)"
        }
      },
      {
        "myfilter": "1",
        "name": "72",
        "label": {
          "Bangla": "Udder (Harden)",
          "English": "Udder (Harden)"
        }
      },
      {
        "myfilter": "1",
        "name": "73",
        "label": {
          "Bangla": "Udder (Swollen and hot )",
          "English": "Udder (Swollen and hot )"
        }
      },
      {
        "myfilter": "1",
        "name": "74",
        "label": {
          "Bangla": "Ulcer in nose",
          "English": "Ulcer in nose"
        }
      },
      {
        "myfilter": "1",
        "name": "75",
        "label": {
          "Bangla": "Unable to work",
          "English": "Unable to work"
        }
      },
      {
        "myfilter": "1",
        "name": "76",
        "label": {
          "Bangla": "Unthrifty animals",
          "English": "Unthrifty animals"
        }
      },
      {
        "myfilter": "1",
        "name": "77",
        "label": {
          "Bangla": "Upward flexion of the hindlimb",
          "English": "Upward flexion of the hindlimb"
        }
      },
      {
        "myfilter": "1",
        "name": "78",
        "label": {
          "Bangla": "Weakness",
          "English": "Weakness"
        }
      },
      {
        "myfilter": "1",
        "name": "79",
        "label": {
          "Bangla": "Weight loss",
          "English": "Weight loss"
        }
      },
      {
        "myfilter": "1",
        "name": "80",
        "label": {
          "Bangla": "Worms on the skin lesion",
          "English": "Worms on the skin lesion"
        }
      },
      {
        "myfilter": "1",
        "name": "81",
        "label": {
          "Bangla": "Wound in hoof",
          "English": "Wound in hoof"
        }
      },
      {
        "myfilter": "1",
        "name": "82",
        "label": {
          "Bangla": "Wound in hump",
          "English": "Wound in hump"
        }
      },
      {
        "myfilter": "1",
        "name": "83",
        "label": {
          "Bangla": "Wound in mouth",
          "English": "Wound in mouth"
        }
      },
      {
        "myfilter": "1",
        "name": "84",
        "label": {
          "Bangla": "Wound in teat",
          "English": "Wound in teat"
        }
      },
      {
        "myfilter": "1",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "2",
        "name": "1",
        "label": {
          "Bangla": "Abnormal eggs",
          "English": "Abnormal eggs"
        }
      },
      {
        "myfilter": "2",
        "name": "7",
        "label": {
          "Bangla": "Anaemia",
          "English": "Anaemia"
        }
      },
      {
        "myfilter": "2",
        "name": "2",
        "label": {
          "Bangla": "Ataxia",
          "English": "Ataxia"
        }
      },
      {
        "myfilter": "2",
        "name": "11",
        "label": {
          "Bangla": "Breathing difficulty (Dyspnea)",
          "English": "Breathing difficulty (Dyspnea)"
        }
      },
      {
        "myfilter": "2",
        "name": "3",
        "label": {
          "Bangla": "Breathing rapidly",
          "English": "Breathing rapidly"
        }
      },
      {
        "myfilter": "2",
        "name": "4",
        "label": {
          "Bangla": "Conjunctivitis",
          "English": "Conjunctivitis"
        }
      },
      {
        "myfilter": "2",
        "name": "17",
        "label": {
          "Bangla": "Depression",
          "English": "Depression"
        }
      },
      {
        "myfilter": "2",
        "name": "19",
        "label": {
          "Bangla": "Diarrhoea (bloody)",
          "English": "Diarrhea (bloody)"
        }
      },
      {
        "myfilter": "2",
        "name": "20",
        "label": {
          "Bangla": "Diarrhoea (watery)",
          "English": "Diarrhea (watery)"
        }
      },
      {
        "myfilter": "2",
        "name": "21",
        "label": {
          "Bangla": "Diarrhoea (greenish)",
          "English": "Diarrhoea (greenish)"
        }
      },
      {
        "myfilter": "2",
        "name": "22",
        "label": {
          "Bangla": "Diarrhoea (whitish)",
          "English": "Diarrhoea (whitish)"
        }
      },
      {
        "myfilter": "2",
        "name": "23",
        "label": {
          "Bangla": "Diarrhoea (yellowish)",
          "English": "Diarrhoea (yellowish)"
        }
      },
      {
        "myfilter": "2",
        "name": "5",
        "label": {
          "Bangla": "Egg production decrease",
          "English": "Egg production decrease"
        }
      },
      {
        "myfilter": "2",
        "name": "6",
        "label": {
          "Bangla": "Gasping",
          "English": "Gasping"
        }
      },
      {
        "myfilter": "2",
        "name": "8",
        "label": {
          "Bangla": "Incoordination of movement",
          "English": "Incoordination of movement"
        }
      },
      {
        "myfilter": "2",
        "name": "9",
        "label": {
          "Bangla": "Itchy skin (pruritus)",
          "English": "Itchy skin (pruritus)"
        }
      },
      {
        "myfilter": "2",
        "name": "10",
        "label": {
          "Bangla": "Leg weakness",
          "English": "Leg weakness"
        }
      },
      {
        "myfilter": "2",
        "name": "12",
        "label": {
          "Bangla": "Lice eggs present on skin",
          "English": "Lice eggs present on skin"
        }
      },
      {
        "myfilter": "2",
        "name": "13",
        "label": {
          "Bangla": "Lice present on skin",
          "English": "Lice present on skin"
        }
      },
      {
        "myfilter": "2",
        "name": "14",
        "label": {
          "Bangla": "Mosit rales",
          "English": "Mosit rales"
        }
      },
      {
        "myfilter": "2",
        "name": "15",
        "label": {
          "Bangla": "Mucoid discharge from eye",
          "English": "Mucoid discharge from eye"
        }
      },
      {
        "myfilter": "2",
        "name": "16",
        "label": {
          "Bangla": "Mucoid discharge from nose",
          "English": "Mucoid discharge from nose"
        }
      },
      {
        "myfilter": "2",
        "name": "18",
        "label": {
          "Bangla": "Poor feed intake",
          "English": "Poor feed intake"
        }
      },
      {
        "myfilter": "2",
        "name": "24",
        "label": {
          "Bangla": "Reluctant to move",
          "English": "Reluctant to move"
        }
      },
      {
        "myfilter": "2",
        "name": "25",
        "label": {
          "Bangla": "Restlessness",
          "English": "Restlessness"
        }
      },
      {
        "myfilter": "2",
        "name": "27",
        "label": {
          "Bangla": "Retardation in growth",
          "English": "Retardation in growth"
        }
      },
      {
        "myfilter": "2",
        "name": "28",
        "label": {
          "Bangla": "Ruffled feathers",
          "English": "Ruffled feathers"
        }
      },
      {
        "myfilter": "2",
        "name": "29",
        "label": {
          "Bangla": "Scabbing",
          "English": "Scabbing"
        }
      },
      {
        "myfilter": "2",
        "name": "30",
        "label": {
          "Bangla": "Scaly leg",
          "English": "Scaly leg"
        }
      },
      {
        "myfilter": "2",
        "name": "31",
        "label": {
          "Bangla": "Sinusitis",
          "English": "Sinusitis"
        }
      },
      {
        "myfilter": "2",
        "name": "32",
        "label": {
          "Bangla": "Swollen face",
          "English": "Swollen face"
        }
      },
      {
        "myfilter": "2",
        "name": "33",
        "label": {
          "Bangla": "Swollen foot pad",
          "English": "Swollen foot pad"
        }
      },
      {
        "myfilter": "2",
        "name": "34",
        "label": {
          "Bangla": "Swollen infraorbital sinus",
          "English": "Swollen infraorbital sinus"
        }
      },
      {
        "myfilter": "2",
        "name": "279",
        "label": {
          "Bangla": "Weight loss",
          "English": "Weight loss"
        }
      },
      {
        "myfilter": "2",
        "name": "26",
        "label": {
          "Bangla": "Wings drop",
          "English": "Wings drop"
        }
      },
      {
        "myfilter": "2",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "postmortem_organ": [
      {
        "name": "1",
        "label": {
          "Bangla": "ENT",
          "English": "ENT"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "CU system",
          "English": "Respiratory system"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "GI tract",
          "English": "CU system"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "H ... System",
          "English": "GI tract"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Integumetary skin and hair",
          "English": "Integumetary skin and hair"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "MS system",
          "English": "MS system"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Neurologic system",
          "English": "Neurologic system"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Renal system",
          "English": "Renal system"
        }
      },
      {
        "name": "9",
        "label": {
          "Bangla": "Reproductive Syste",
          "English": "H ... System"
        }
      },
      {
        "name": "10",
        "label": {
          "Bangla": "Respiratory system",
          "English": "Reproductive Syste"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "name": "1",
        "label": {
          "Bangla": "Organ-1",
          "English": "Organ-1"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Organ-2",
          "English": "Organ-2"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Organ-3",
          "English": "Organ-3"
        }
      }
    ],
    "union_name": [
      {
        "name": "1",
        "label": {
          "Bangla": "Union-1",
          "English": "Union-1"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Union-2",
          "English": "Union-2"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Union-3",
          "English": "Union-3"
        }
      }
    ],
    "postmortem_findings_bird": [
      {
        "myfilter": "1",
        "name": "1",
        "label": {
          "Bangla": "Fibrinous exudate in heart",
          "English": "Fibrinous exudate in heart"
        }
      },
      {
        "myfilter": "1",
        "name": "2",
        "label": {
          "Bangla": "Nodules/ tumor in heart",
          "English": "Nodules/ tumor in heart"
        }
      },
      {
        "myfilter": "1",
        "name": "3",
        "label": {
          "Bangla": "Hemorrhage in heart muscle",
          "English": "Hemorrhage in heart muscle"
        }
      },
      {
        "myfilter": "1",
        "name": "4",
        "label": {
          "Bangla": "Clotted blood in the heart chamber",
          "English": "Clotted blood in the heart chamber"
        }
      },
      {
        "myfilter": "1",
        "name": "5",
        "label": {
          "Bangla": "Pericarditis",
          "English": "Pericarditis"
        }
      },
      {
        "myfilter": "1",
        "name": "6",
        "label": {
          "Bangla": "Dilated blood vessel",
          "English": "Dilated blood vessel"
        }
      },
      {
        "myfilter": "1",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "2",
        "name": "7",
        "label": {
          "Bangla": "Hemorrhage in esophagus",
          "English": "Hemorrhage in esophagus"
        }
      },
      {
        "myfilter": "2",
        "name": "8",
        "label": {
          "Bangla": "Congestion in esophagus",
          "English": "Congestion in esophagus"
        }
      },
      {
        "myfilter": "2",
        "name": "9",
        "label": {
          "Bangla": "Nodules/ tumor in esophagus",
          "English": "Nodules/ tumor in esophagus"
        }
      },
      {
        "myfilter": "2",
        "name": "10",
        "label": {
          "Bangla": "Diphtheritic lesions in esophagus",
          "English": "Diphtheritic lesions in esophagus"
        }
      },
      {
        "myfilter": "2",
        "name": "11",
        "label": {
          "Bangla": "Ulcerative lesion in esophagus",
          "English": "Ulcerative lesion in esophagus"
        }
      },
      {
        "myfilter": "2",
        "name": "12",
        "label": {
          "Bangla": "Hemorrhage in crop",
          "English": "Hemorrhage in crop"
        }
      },
      {
        "myfilter": "2",
        "name": "13",
        "label": {
          "Bangla": "Congestion in crop",
          "English": "Congestion in crop"
        }
      },
      {
        "myfilter": "2",
        "name": "14",
        "label": {
          "Bangla": "Hemorrhage in proventriculus",
          "English": "Hemorrhage in proventriculus"
        }
      },
      {
        "myfilter": "2",
        "name": "15",
        "label": {
          "Bangla": "Congestion in proventriculus",
          "English": "Congestion in proventriculus"
        }
      },
      {
        "myfilter": "2",
        "name": "16",
        "label": {
          "Bangla": "Hemorrhage in gizzard",
          "English": "Hemorrhage in gizzard"
        }
      },
      {
        "myfilter": "2",
        "name": "17",
        "label": {
          "Bangla": "Congestion in gizzard",
          "English": "Congestion in gizzard"
        }
      },
      {
        "myfilter": "2",
        "name": "18",
        "label": {
          "Bangla": "Nodules/ tumor in gizzard",
          "English": "Nodules/ tumor in gizzard"
        }
      },
      {
        "myfilter": "2",
        "name": "19",
        "label": {
          "Bangla": "Hemorrhage in small intestine",
          "English": "Hemorrhage in small intestine"
        }
      },
      {
        "myfilter": "2",
        "name": "20",
        "label": {
          "Bangla": "Congestion in small intestine",
          "English": "Congestion in small intestine"
        }
      },
      {
        "myfilter": "2",
        "name": "21",
        "label": {
          "Bangla": "Thickening of membrane wall in small intestine",
          "English": "Thickening of membrane wall in small intestine"
        }
      },
      {
        "myfilter": "2",
        "name": "22",
        "label": {
          "Bangla": "Thinning of membrane wall in small intestine",
          "English": "Thinning of membrane wall in small intestine"
        }
      },
      {
        "myfilter": "2",
        "name": "23",
        "label": {
          "Bangla": "Ulcerative lesion in small intestine",
          "English": "Ulcerative lesion in small intestine"
        }
      },
      {
        "myfilter": "2",
        "name": "24",
        "label": {
          "Bangla": "Nodules/ tumor in small intestine",
          "English": "Nodules/ tumor in small intestine"
        }
      },
      {
        "myfilter": "2",
        "name": "25",
        "label": {
          "Bangla": "Parasites in small intestine",
          "English": "Parasites in small intestine"
        }
      },
      {
        "myfilter": "2",
        "name": "26",
        "label": {
          "Bangla": "Lumen of small intestine filled with blood",
          "English": "Lumen of small intestine filled with blood"
        }
      },
      {
        "myfilter": "2",
        "name": "27",
        "label": {
          "Bangla": "Turkish towel appearance of the mucosa of the small intstine",
          "English": "Turkish towel appearance of the mucosa of the small intstine"
        }
      },
      {
        "myfilter": "2",
        "name": "28",
        "label": {
          "Bangla": "Hemorrhage in cecum",
          "English": "Hemorrhage in cecum"
        }
      },
      {
        "myfilter": "2",
        "name": "29",
        "label": {
          "Bangla": "Congestion in cecum",
          "English": "Congestion in cecum"
        }
      },
      {
        "myfilter": "2",
        "name": "30",
        "label": {
          "Bangla": "Enlarged cecum",
          "English": "Enlarged cecum"
        }
      },
      {
        "myfilter": "2",
        "name": "31",
        "label": {
          "Bangla": "Clotted blood in the caeca",
          "English": "Clotted blood in the caeca"
        }
      },
      {
        "myfilter": "2",
        "name": "32",
        "label": {
          "Bangla": "Fibrinous exudate in liver",
          "English": "Fibrinous exudate in liver"
        }
      },
      {
        "myfilter": "2",
        "name": "33",
        "label": {
          "Bangla": "Hepatomegaly",
          "English": "Hepatomegaly"
        }
      },
      {
        "myfilter": "2",
        "name": "34",
        "label": {
          "Bangla": "Hemorrhage in liver",
          "English": "Hemorrhage in liver"
        }
      },
      {
        "myfilter": "2",
        "name": "35",
        "label": {
          "Bangla": "Congestion in liver",
          "English": "Congestion in liver"
        }
      },
      {
        "myfilter": "2",
        "name": "36",
        "label": {
          "Bangla": "Necrosis in liver",
          "English": "Necrosis in liver"
        }
      },
      {
        "myfilter": "2",
        "name": "37",
        "label": {
          "Bangla": "Ulcerative lesion in lesion",
          "English": "Ulcerative lesion in lesion"
        }
      },
      {
        "myfilter": "2",
        "name": "38",
        "label": {
          "Bangla": "Pinpoint whitish spots on the liver",
          "English": "Pinpoint whitish spots on the liver"
        }
      },
      {
        "myfilter": "2",
        "name": "39",
        "label": {
          "Bangla": "Copper colored liver",
          "English": "Copper colored liver"
        }
      },
      {
        "myfilter": "2",
        "name": "40",
        "label": {
          "Bangla": "Frigile liver",
          "English": "Frigile liver"
        }
      },
      {
        "myfilter": "2",
        "name": "41",
        "label": {
          "Bangla": "Pale liver",
          "English": "Pale liver"
        }
      },
      {
        "myfilter": "2",
        "name": "42",
        "label": {
          "Bangla": "Hemorrhage in gall bladder",
          "English": "Hemorrhage in gall bladder"
        }
      },
      {
        "myfilter": "2",
        "name": "43",
        "label": {
          "Bangla": "Congestion in gall bladder",
          "English": "Congestion in gall bladder"
        }
      },
      {
        "myfilter": "2",
        "name": "44",
        "label": {
          "Bangla": "Hemorrhage in spleen",
          "English": "Hemorrhage in spleen"
        }
      },
      {
        "myfilter": "2",
        "name": "45",
        "label": {
          "Bangla": "Congestion in spleen",
          "English": "Congestion in spleen"
        }
      },
      {
        "myfilter": "2",
        "name": "46",
        "label": {
          "Bangla": "Splenomegaly",
          "English": "Splenomegaly"
        }
      },
      {
        "myfilter": "2",
        "name": "47",
        "label": {
          "Bangla": "Splenitis",
          "English": "Splenitis"
        }
      },
      {
        "myfilter": "2",
        "name": "48",
        "label": {
          "Bangla": "Necrosis in spleen",
          "English": "Necrosis in spleen"
        }
      },
      {
        "myfilter": "2",
        "name": "49",
        "label": {
          "Bangla": "Hemorrhage in pancreas",
          "English": "Hemorrhage in pancreas"
        }
      },
      {
        "myfilter": "2",
        "name": "50",
        "label": {
          "Bangla": "Congestion in pancreas",
          "English": "Congestion in pancreas"
        }
      },
      {
        "myfilter": "2",
        "name": "51",
        "label": {
          "Bangla": "Necrosis in pancreas",
          "English": "Necrosis in pancreas"
        }
      },
      {
        "myfilter": "2",
        "name": "52",
        "label": {
          "Bangla": "Haemorrhage in cloaca",
          "English": "Haemorrhage in cloaca"
        }
      },
      {
        "myfilter": "2",
        "name": "53",
        "label": {
          "Bangla": "Congestion in cloaca",
          "English": "Congestion in cloaca"
        }
      },
      {
        "myfilter": "2",
        "name": "54",
        "label": {
          "Bangla": "Thickening of cloaca membrane wall",
          "English": "Thickening of cloaca membrane wall"
        }
      },
      {
        "myfilter": "2",
        "name": "55",
        "label": {
          "Bangla": "Thinning of cloaca membrane wall",
          "English": "Thinning of cloaca membrane wall"
        }
      },
      {
        "myfilter": "2",
        "name": "56",
        "label": {
          "Bangla": "Cheesy exudateds in cloaca",
          "English": "Cheesy exudateds in cloaca"
        }
      },
      {
        "myfilter": "2",
        "name": "57",
        "label": {
          "Bangla": "Edematous mesentery",
          "English": "Edematous mesentery"
        }
      },
      {
        "myfilter": "2",
        "name": "58",
        "label": {
          "Bangla": "Congestion in mesentery",
          "English": "Congestion in mesentery"
        }
      },
      {
        "myfilter": "2",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "3",
        "name": "59",
        "label": {
          "Bangla": "Haemorrhage in bursa of fabricius",
          "English": "Haemorrhage in bursa of fabricius"
        }
      },
      {
        "myfilter": "3",
        "name": "60",
        "label": {
          "Bangla": "Congestion in bursa of fabricius",
          "English": "Congestion in bursa of fabricius"
        }
      },
      {
        "myfilter": "3",
        "name": "61",
        "label": {
          "Bangla": "Swollen in bursa of fabricius",
          "English": "Swollen in bursa of fabricius"
        }
      },
      {
        "myfilter": "3",
        "name": "62",
        "label": {
          "Bangla": "Atrophied in bursa of fabricius",
          "English": "Atrophied in bursa of fabricius"
        }
      },
      {
        "myfilter": "3",
        "name": "63",
        "label": {
          "Bangla": "Haemorrhage in thymus",
          "English": "Haemorrhage in thymus"
        }
      },
      {
        "myfilter": "3",
        "name": "64",
        "label": {
          "Bangla": "Thymic atrophy",
          "English": "Thymic atrophy"
        }
      },
      {
        "myfilter": "3",
        "name": "65",
        "label": {
          "Bangla": "Hemorrhage in caecal tonsil",
          "English": "Hemorrhage in caecal tonsil"
        }
      },
      {
        "myfilter": "3",
        "name": "66",
        "label": {
          "Bangla": "Congestion in caecal tonsil",
          "English": "Congestion in caecal tonsil"
        }
      },
      {
        "myfilter": "3",
        "name": "67",
        "label": {
          "Bangla": "Ulcerative lesion in caecal tonsil",
          "English": "Ulcerative lesion in caecal tonsil"
        }
      },
      {
        "myfilter": "3",
        "name": "68",
        "label": {
          "Bangla": "Atropy of caecal tonsil",
          "English": "Atropy of caecal tonsil"
        }
      },
      {
        "myfilter": "3",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "4",
        "name": "69",
        "label": {
          "Bangla": "Haemorrhage in skin",
          "English": "Haemorrhage in skin"
        }
      },
      {
        "myfilter": "4",
        "name": "70",
        "label": {
          "Bangla": "Swollen skin",
          "English": "Swollen skin"
        }
      },
      {
        "myfilter": "4",
        "name": "71",
        "label": {
          "Bangla": "Necrosis of skin",
          "English": "Necrosis of skin"
        }
      },
      {
        "myfilter": "4",
        "name": "72",
        "label": {
          "Bangla": "Inflammation of skin",
          "English": "Inflammation of skin"
        }
      },
      {
        "myfilter": "4",
        "name": "73",
        "label": {
          "Bangla": "Scabbing",
          "English": "Scabbing"
        }
      },
      {
        "myfilter": "4",
        "name": "74",
        "label": {
          "Bangla": "Edema in comb",
          "English": "Edema in comb"
        }
      },
      {
        "myfilter": "4",
        "name": "75",
        "label": {
          "Bangla": "Congestion in comb",
          "English": "Congestion in comb"
        }
      },
      {
        "myfilter": "4",
        "name": "76",
        "label": {
          "Bangla": "Nodules/ tumor in comb",
          "English": "Nodules/ tumor in comb"
        }
      },
      {
        "myfilter": "4",
        "name": "77",
        "label": {
          "Bangla": "Edema in wattle",
          "English": "Edema in wattle"
        }
      },
      {
        "myfilter": "4",
        "name": "78",
        "label": {
          "Bangla": "Congestion in wattle",
          "English": "Congestion in wattle"
        }
      },
      {
        "myfilter": "4",
        "name": "79",
        "label": {
          "Bangla": "Nodules/ tumor in wattle",
          "English": "Nodules/ tumor in wattle"
        }
      },
      {
        "myfilter": "4",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "5",
        "name": "80",
        "label": {
          "Bangla": "Hemorrhage in breast muscle",
          "English": "Hemorrhage in breast muscle"
        }
      },
      {
        "myfilter": "5",
        "name": "81",
        "label": {
          "Bangla": "Congestion in breast muscle",
          "English": "Congestion in breast muscle"
        }
      },
      {
        "myfilter": "5",
        "name": "82",
        "label": {
          "Bangla": "Hemorrhage in thigh muscle",
          "English": "Hemorrhage in thigh muscle"
        }
      },
      {
        "myfilter": "5",
        "name": "83",
        "label": {
          "Bangla": "Congestion in thigh muscle",
          "English": "Congestion in thigh muscle"
        }
      },
      {
        "myfilter": "5",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "6",
        "name": "84",
        "label": {
          "Bangla": "Enlargement of sciatic nerve",
          "English": "Enlargement of sciatic nerve"
        }
      },
      {
        "myfilter": "6",
        "name": "85",
        "label": {
          "Bangla": "Discolored iris",
          "English": "Discolored iris"
        }
      },
      {
        "myfilter": "6",
        "name": "86",
        "label": {
          "Bangla": "Irregular pupil",
          "English": "Irregular pupil"
        }
      },
      {
        "myfilter": "6",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "7",
        "name": "87",
        "label": {
          "Bangla": "Hemorrhage in kidney",
          "English": "Hemorrhage in kidney"
        }
      },
      {
        "myfilter": "7",
        "name": "88",
        "label": {
          "Bangla": "Congestion in kidney",
          "English": "Congestion in kidney"
        }
      },
      {
        "myfilter": "7",
        "name": "89",
        "label": {
          "Bangla": "Atrophy of kidney",
          "English": "Atrophy of kidney"
        }
      },
      {
        "myfilter": "7",
        "name": "90",
        "label": {
          "Bangla": "Nodules/ tumor in kidney",
          "English": "Nodules/ tumor in kidney"
        }
      },
      {
        "myfilter": "7",
        "name": "91",
        "label": {
          "Bangla": "Inflammation in kidney",
          "English": "Inflammation in kidney"
        }
      },
      {
        "myfilter": "7",
        "name": "92",
        "label": {
          "Bangla": "Swollen kidney",
          "English": "Swollen kidney"
        }
      },
      {
        "myfilter": "7",
        "name": "93",
        "label": {
          "Bangla": "Pale kidney",
          "English": "Pale kidney"
        }
      },
      {
        "myfilter": "7",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "8",
        "name": "94",
        "label": {
          "Bangla": "Edematous ovary",
          "English": "Edematous ovary"
        }
      },
      {
        "myfilter": "8",
        "name": "95",
        "label": {
          "Bangla": "Congestion in ovary",
          "English": "Congestion in ovary"
        }
      },
      {
        "myfilter": "8",
        "name": "96",
        "label": {
          "Bangla": "Ovarian regression",
          "English": "Ovarian regression"
        }
      },
      {
        "myfilter": "8",
        "name": "97",
        "label": {
          "Bangla": "Rupture of ovary",
          "English": "Rupture of ovary"
        }
      },
      {
        "myfilter": "8",
        "name": "98",
        "label": {
          "Bangla": "Edematous oviduct",
          "English": "Edematous oviduct"
        }
      },
      {
        "myfilter": "8",
        "name": "99",
        "label": {
          "Bangla": "Congestion in oviduct",
          "English": "Congestion in oviduct"
        }
      },
      {
        "myfilter": "8",
        "name": "100",
        "label": {
          "Bangla": "Atrophy of oviduct",
          "English": "Atrophy of oviduct"
        }
      },
      {
        "myfilter": "8",
        "name": "101",
        "label": {
          "Bangla": "Dilated yolk sac blood vessels",
          "English": "Dilated yolk sac blood vessels"
        }
      },
      {
        "myfilter": "8",
        "name": "102",
        "label": {
          "Bangla": "Atrophy of yolk sac",
          "English": "Atrophy of yolk sac"
        }
      },
      {
        "myfilter": "8",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "9",
        "name": "103",
        "label": {
          "Bangla": "Hemorrhage in lung",
          "English": "Hemorrhage in lung"
        }
      },
      {
        "myfilter": "9",
        "name": "104",
        "label": {
          "Bangla": "Congestion in lung",
          "English": "Congestion in lung"
        }
      },
      {
        "myfilter": "9",
        "name": "105",
        "label": {
          "Bangla": "Fibrinous exudate in lung",
          "English": "Fibrinous exudate in lung"
        }
      },
      {
        "myfilter": "9",
        "name": "106",
        "label": {
          "Bangla": "Necrosis in lung",
          "English": "Necrosis in lung"
        }
      },
      {
        "myfilter": "9",
        "name": "107",
        "label": {
          "Bangla": "Nodules/ tumor in lung",
          "English": "Nodules/ tumor in lung"
        }
      },
      {
        "myfilter": "9",
        "name": "108",
        "label": {
          "Bangla": "Hemorrhage in trachea",
          "English": "Hemorrhage in trachea"
        }
      },
      {
        "myfilter": "9",
        "name": "109",
        "label": {
          "Bangla": "Congestion in trachea",
          "English": "Congestion in trachea"
        }
      },
      {
        "myfilter": "9",
        "name": "110",
        "label": {
          "Bangla": "Diphtheritic lesions in trachea",
          "English": "Diphtheritic lesions in trachea"
        }
      },
      {
        "myfilter": "9",
        "name": "111",
        "label": {
          "Bangla": "Exudate in trachea",
          "English": "Exudate in trachea"
        }
      },
      {
        "myfilter": "9",
        "name": "112",
        "label": {
          "Bangla": "Excess mucus in trachea",
          "English": "Excess mucus in trachea"
        }
      },
      {
        "myfilter": "9",
        "name": "113",
        "label": {
          "Bangla": "Hemorrhage in air sac",
          "English": "Hemorrhage in air sac"
        }
      },
      {
        "myfilter": "9",
        "name": "114",
        "label": {
          "Bangla": "Congestion in air sac",
          "English": "Congestion in air sac"
        }
      },
      {
        "myfilter": "9",
        "name": "115",
        "label": {
          "Bangla": "Fibrinous exudate in air sac",
          "English": "Fibrinous exudate in air sac"
        }
      },
      {
        "myfilter": "9",
        "name": "116",
        "label": {
          "Bangla": "Air saculitis",
          "English": "Air saculitis"
        }
      },
      {
        "myfilter": "9",
        "name": "117",
        "label": {
          "Bangla": "Inflammation of infra-orbital sinus",
          "English": "Inflammation of infra-orbital sinus"
        }
      },
      {
        "myfilter": "9",
        "name": "118",
        "label": {
          "Bangla": "Exudate in infra-orbital sinus",
          "English": "Exudate in infra-orbital sinus"
        }
      },
      {
        "myfilter": "9",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "microscopic_test_fecal": [
      {
        "myfilter": "1",
        "name": "1",
        "label": {
          "Bangla": "Ancylostoma (Hookworm)",
          "English": "Ancylostoma (Hookworm)"
        }
      },
      {
        "myfilter": "1",
        "name": "2",
        "label": {
          "Bangla": "Ascaris (roundworm)",
          "English": "Ascaris (roundworm)"
        }
      },
      {
        "myfilter": "1",
        "name": "3",
        "label": {
          "Bangla": "Balantidium",
          "English": "Balantidium"
        }
      },
      {
        "myfilter": "1",
        "name": "4",
        "label": {
          "Bangla": "Bunostomum (Hookworm)",
          "English": "Bunostomum (Hookworm)"
        }
      },
      {
        "myfilter": "1",
        "name": "5",
        "label": {
          "Bangla": "Capillaria",
          "English": "Capillaria"
        }
      },
      {
        "myfilter": "1",
        "name": "6",
        "label": {
          "Bangla": "Coccidia",
          "English": "Coccidia"
        }
      },
      {
        "myfilter": "1",
        "name": "7",
        "label": {
          "Bangla": "Fasciola (liver fluke)",
          "English": "Fasciola (liver fluke)"
        }
      },
      {
        "myfilter": "1",
        "name": "8",
        "label": {
          "Bangla": "Oesophagostomum",
          "English": "Oesophagostomum"
        }
      },
      {
        "myfilter": "1",
        "name": "9",
        "label": {
          "Bangla": "Paramphistomum (Rumen fluke)",
          "English": "Paramphistomum (Rumen fluke)"
        }
      },
      {
        "myfilter": "1",
        "name": "10",
        "label": {
          "Bangla": "Strongyloides (threadworm)",
          "English": "Strongyloides (threadworm)"
        }
      },
      {
        "myfilter": "1",
        "name": "11",
        "label": {
          "Bangla": "Toxocara",
          "English": "Toxocara"
        }
      },
      {
        "myfilter": "1",
        "name": "12",
        "label": {
          "Bangla": "Toxoplasma",
          "English": "Toxoplasma"
        }
      },
      {
        "myfilter": "1",
        "name": "13",
        "label": {
          "Bangla": "Trichuris (Whip worm)",
          "English": "Trichuris (Whip worm)"
        }
      },
      {
        "myfilter": "1",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "2",
        "name": "2",
        "label": {
          "Bangla": "Ascaris (roundworm)",
          "English": "Ascaris (roundworm)"
        }
      },
      {
        "myfilter": "2",
        "name": "5",
        "label": {
          "Bangla": "Capillaria",
          "English": "Capillaria"
        }
      },
      {
        "myfilter": "2",
        "name": "6",
        "label": {
          "Bangla": "Coccidia",
          "English": "Coccidia"
        }
      },
      {
        "myfilter": "2",
        "name": "1",
        "label": {
          "Bangla": "Heterakis",
          "English": "Heterakis"
        }
      },
      {
        "myfilter": "2",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "postmortem_findings_mammal": [
      {
        "name": "1",
        "label": {
          "Bangla": "1",
          "English": "1"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "2",
          "English": "2"
        }
      }
    ],
    "yes_no": [
      {
        "name": "1",
        "label": {
          "Bangla": "Yes",
          "English": "Yes"
        }
      },
      {
        "name": "0",
        "label": {
          "Bangla": "No",
          "English": "No"
        }
      }
    ],
    "positive_negative": [
      {
        "name": "1",
        "label": {
          "Bangla": "Positive",
          "English": "Positive"
        }
      },
      {
        "name": "0",
        "label": {
          "Bangla": "Negative",
          "English": "Negative"
        }
      }
    ],
    "species_breed_type": [
      {
        "myfilter": "3",
        "name": "1",
        "label": {
          "Bangla": "Cross",
          "English": "Cross"
        }
      },
      {
        "myfilter": "3",
        "name": "2",
        "label": {
          "Bangla": "Local",
          "English": "Local"
        }
      },
      {
        "myfilter": "3",
        "name": "3",
        "label": {
          "Bangla": "Exotic",
          "English": "Exotic"
        }
      },
      {
        "myfilter": "21",
        "name": "1",
        "label": {
          "Bangla": "Broiler",
          "English": "Broiler"
        }
      },
      {
        "myfilter": "21",
        "name": "2",
        "label": {
          "Bangla": "Layer",
          "English": "Layer"
        }
      },
      {
        "myfilter": "21",
        "name": "3",
        "label": {
          "Bangla": "Sonali",
          "English": "Sonali"
        }
      },
      {
        "myfilter": "21",
        "name": "4",
        "label": {
          "Bangla": "Deshi",
          "English": "Deshi"
        }
      }
    ],
    "tentative_diagnosis": [
      {
        "name": "1",
        "label": {
          "Bangla": "a",
          "English": "a"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "b",
          "English": "b"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "c",
          "English": "c"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "B",
        "name": "1",
        "label": {
          "Bangla": "Aflatoxicosis",
          "English": "Aflatoxicosis"
        }
      },
      {
        "myfilter": "B",
        "name": "4",
        "label": {
          "Bangla": "Aspergillosis",
          "English": "Aspergillosis"
        }
      },
      {
        "myfilter": "B",
        "name": "5",
        "label": {
          "Bangla": "Avian Influenza",
          "English": "Avian Influenza"
        }
      },
      {
        "myfilter": "B",
        "name": "6",
        "label": {
          "Bangla": "Avian Leukosis",
          "English": "Avian Leukosis"
        }
      },
      {
        "myfilter": "B",
        "name": "7",
        "label": {
          "Bangla": "Avitaminosis",
          "English": "Avitaminosis"
        }
      },
      {
        "myfilter": "B",
        "name": "13",
        "label": {
          "Bangla": "Chronic Respiratory Disease (CRD)",
          "English": "Chronic Respiratory Disease (CRD)"
        }
      },
      {
        "myfilter": "B",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "B",
        "name": "15",
        "label": {
          "Bangla": "Colibacillosis (E. coli Infection)",
          "English": "Colibacillosis (E. coli Infection)"
        }
      },
      {
        "myfilter": "B",
        "name": "18",
        "label": {
          "Bangla": "Duck Cholera",
          "English": "Duck Cholera"
        }
      },
      {
        "myfilter": "B",
        "name": "19",
        "label": {
          "Bangla": "Duck Plague (Duck Enteritis Virus)",
          "English": "Duck Plague (Duck Enteritis Virus)"
        }
      },
      {
        "myfilter": "B",
        "name": "20",
        "label": {
          "Bangla": "Egg Drop Syndrome (EDS)",
          "English": "Egg Drop Syndrome (EDS)"
        }
      },
      {
        "myfilter": "B",
        "name": "24",
        "label": {
          "Bangla": "Fowl Cholera",
          "English": "Fowl Cholera"
        }
      },
      {
        "myfilter": "B",
        "name": "25",
        "label": {
          "Bangla": "Fowl Pox",
          "English": "Fowl Pox"
        }
      },
      {
        "myfilter": "B",
        "name": "27",
        "label": {
          "Bangla": "Gangrenous Dermatitis",
          "English": "Gangrenous Dermatitis"
        }
      },
      {
        "myfilter": "B",
        "name": "32",
        "label": {
          "Bangla": "Infectious Bursal Disease (IBD)",
          "English": "Infectious Bursal Disease (IBD)"
        }
      },
      {
        "myfilter": "B",
        "name": "33",
        "label": {
          "Bangla": "Infectious Coryza",
          "English": "Infectious Coryza"
        }
      },
      {
        "myfilter": "B",
        "name": "34",
        "label": {
          "Bangla": "Infectious Laryngotracheitis Virus (ILT)",
          "English": "Infectious Laryngotracheitis Virus (ILT)"
        }
      },
      {
        "myfilter": "B",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "B",
        "name": "38",
        "label": {
          "Bangla": "Malnutrition",
          "English": "Malnutrition"
        }
      },
      {
        "myfilter": "B",
        "name": "39",
        "label": {
          "Bangla": "Marek\u2019s Disease",
          "English": "Marek\u2019s Disease"
        }
      },
      {
        "myfilter": "B",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "B",
        "name": "43",
        "label": {
          "Bangla": "Mycoplasmosis",
          "English": "Mycoplasmosis"
        }
      },
      {
        "myfilter": "B",
        "name": "45",
        "label": {
          "Bangla": "Necrotic Enteritis",
          "English": "Necrotic Enteritis"
        }
      },
      {
        "myfilter": "B",
        "name": "46",
        "label": {
          "Bangla": "Newcastle Disease",
          "English": "Newcastle Disease"
        }
      },
      {
        "myfilter": "B",
        "name": "52",
        "label": {
          "Bangla": "Salmonellosis",
          "English": "Salmonellosis"
        }
      },
      {
        "myfilter": "B",
        "name": "60",
        "label": {
          "Bangla": "Worm Infestation",
          "English": "Worm Infestation"
        }
      },
      {
        "myfilter": "B",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "M1",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M1",
        "name": "3",
        "label": {
          "Bangla": "Anthrax",
          "English": "Anthrax"
        }
      },
      {
        "myfilter": "M1",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M1",
        "name": "9",
        "label": {
          "Bangla": "Black Quarter (BQ)",
          "English": "Black Quarter (BQ)"
        }
      },
      {
        "myfilter": "M1",
        "name": "10",
        "label": {
          "Bangla": "Bovine Tuberculosis",
          "English": "Bovine Tuberculosis"
        }
      },
      {
        "myfilter": "M1",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M1",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M1",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M1",
        "name": "21",
        "label": {
          "Bangla": "Ephemeral Fever",
          "English": "Ephemeral Fever"
        }
      },
      {
        "myfilter": "M1",
        "name": "22",
        "label": {
          "Bangla": "Foot and Mouth Disease (FMD)",
          "English": "Foot and Mouth Disease (FMD)"
        }
      },
      {
        "myfilter": "M1",
        "name": "23",
        "label": {
          "Bangla": "Foot rot",
          "English": "Foot rot"
        }
      },
      {
        "myfilter": "M1",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M1",
        "name": "30",
        "label": {
          "Bangla": "Hemorrhagic Septicemia (HS)",
          "English": "Hemorrhagic Septicemia (HS)"
        }
      },
      {
        "myfilter": "M1",
        "name": "31",
        "label": {
          "Bangla": "Hump Sore",
          "English": "Hump Sore"
        }
      },
      {
        "myfilter": "M1",
        "name": "35",
        "label": {
          "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
          "English": "Jhone\u2019s Disease (Paratuberculosis)"
        }
      },
      {
        "myfilter": "M1",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M1",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M1",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M1",
        "name": "41",
        "label": {
          "Bangla": "Milk Fever",
          "English": "Milk Fever"
        }
      },
      {
        "myfilter": "M1",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M1",
        "name": "44",
        "label": {
          "Bangla": "Navel Ill",
          "English": "Navel Ill"
        }
      },
      {
        "myfilter": "M1",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M1",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M1",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M1",
        "name": "51",
        "label": {
          "Bangla": "Ruminal Tympany/ Bloat",
          "English": "Ruminal Tympany/ Bloat"
        }
      },
      {
        "myfilter": "M1",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M1",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M1",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M1",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M1",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M1",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "M3",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M3",
        "name": "3",
        "label": {
          "Bangla": "Anthrax",
          "English": "Anthrax"
        }
      },
      {
        "myfilter": "M3",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M3",
        "name": "9",
        "label": {
          "Bangla": "Black Quarter (BQ)",
          "English": "Black Quarter (BQ)"
        }
      },
      {
        "myfilter": "M3",
        "name": "10",
        "label": {
          "Bangla": "Bovine Tuberculosis",
          "English": "Bovine Tuberculosis"
        }
      },
      {
        "myfilter": "M3",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M3",
        "name": "12",
        "label": {
          "Bangla": "Calf Scour",
          "English": "Calf Scour"
        }
      },
      {
        "myfilter": "M3",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M3",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M3",
        "name": "21",
        "label": {
          "Bangla": "Ephemeral Fever",
          "English": "Ephemeral Fever"
        }
      },
      {
        "myfilter": "M3",
        "name": "22",
        "label": {
          "Bangla": "Foot and Mouth Disease (FMD)",
          "English": "Foot and Mouth Disease (FMD)"
        }
      },
      {
        "myfilter": "M3",
        "name": "23",
        "label": {
          "Bangla": "Foot rot",
          "English": "Foot rot"
        }
      },
      {
        "myfilter": "M3",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M3",
        "name": "30",
        "label": {
          "Bangla": "Hemorrhagic Septicemia (HS)",
          "English": "Hemorrhagic Septicemia (HS)"
        }
      },
      {
        "myfilter": "M3",
        "name": "31",
        "label": {
          "Bangla": "Hump Sore",
          "English": "Hump Sore"
        }
      },
      {
        "myfilter": "M3",
        "name": "35",
        "label": {
          "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
          "English": "Jhone\u2019s Disease (Paratuberculosis)"
        }
      },
      {
        "myfilter": "M3",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M3",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M3",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M3",
        "name": "41",
        "label": {
          "Bangla": "Milk Fever",
          "English": "Milk Fever"
        }
      },
      {
        "myfilter": "M3",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M3",
        "name": "44",
        "label": {
          "Bangla": "Navel Ill",
          "English": "Navel Ill"
        }
      },
      {
        "myfilter": "M3",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M3",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M3",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M3",
        "name": "51",
        "label": {
          "Bangla": "Ruminal Tympany/ Bloat",
          "English": "Ruminal Tympany/ Bloat"
        }
      },
      {
        "myfilter": "M3",
        "name": "54",
        "label": {
          "Bangla": "Stringhalt",
          "English": "Stringhalt"
        }
      },
      {
        "myfilter": "M3",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M3",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M3",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M3",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M3",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M3",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "M5",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M5",
        "name": "3",
        "label": {
          "Bangla": "Anthrax",
          "English": "Anthrax"
        }
      },
      {
        "myfilter": "M5",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M5",
        "name": "9",
        "label": {
          "Bangla": "Black Quarter (BQ)",
          "English": "Black Quarter (BQ)"
        }
      },
      {
        "myfilter": "M5",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M5",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M5",
        "name": "16",
        "label": {
          "Bangla": "Contagious Caprine Pleuropneumonia",
          "English": "Contagious Caprine Pleuropneumonia"
        }
      },
      {
        "myfilter": "M5",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M5",
        "name": "22",
        "label": {
          "Bangla": "Foot and Mouth Disease (FMD)",
          "English": "Foot and Mouth Disease (FMD)"
        }
      },
      {
        "myfilter": "M5",
        "name": "23",
        "label": {
          "Bangla": "Foot rot",
          "English": "Foot rot"
        }
      },
      {
        "myfilter": "M5",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M5",
        "name": "29",
        "label": {
          "Bangla": "Goat Pox",
          "English": "Goat Pox"
        }
      },
      {
        "myfilter": "M5",
        "name": "30",
        "label": {
          "Bangla": "Hemorrhagic Septicemia (HS)",
          "English": "Hemorrhagic Septicemia (HS)"
        }
      },
      {
        "myfilter": "M5",
        "name": "35",
        "label": {
          "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
          "English": "Jhone\u2019s Disease (Paratuberculosis)"
        }
      },
      {
        "myfilter": "M5",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M5",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M5",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M5",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M5",
        "name": "44",
        "label": {
          "Bangla": "Navel Ill",
          "English": "Navel Ill"
        }
      },
      {
        "myfilter": "M5",
        "name": "47",
        "label": {
          "Bangla": "Pesti des Petits Ruminants",
          "English": "Pesti des Petits Ruminants"
        }
      },
      {
        "myfilter": "M5",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M5",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M5",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M5",
        "name": "51",
        "label": {
          "Bangla": "Ruminal Tympany/ Bloat",
          "English": "Ruminal Tympany/ Bloat"
        }
      },
      {
        "myfilter": "M5",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M5",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M5",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M5",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M5",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M5",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "M8",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M8",
        "name": "3",
        "label": {
          "Bangla": "Anthrax",
          "English": "Anthrax"
        }
      },
      {
        "myfilter": "M8",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M8",
        "name": "9",
        "label": {
          "Bangla": "Black Quarter (BQ)",
          "English": "Black Quarter (BQ)"
        }
      },
      {
        "myfilter": "M8",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M8",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M8",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M8",
        "name": "22",
        "label": {
          "Bangla": "Foot and Mouth Disease (FMD)",
          "English": "Foot and Mouth Disease (FMD)"
        }
      },
      {
        "myfilter": "M8",
        "name": "23",
        "label": {
          "Bangla": "Foot rot",
          "English": "Foot rot"
        }
      },
      {
        "myfilter": "M8",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M8",
        "name": "28",
        "label": {
          "Bangla": "Gid Disease (Cerebral coenurosis)",
          "English": "Gid Disease (Cerebral coenurosis)"
        }
      },
      {
        "myfilter": "M8",
        "name": "30",
        "label": {
          "Bangla": "Hemorrhagic Septicemia (HS)",
          "English": "Hemorrhagic Septicemia (HS)"
        }
      },
      {
        "myfilter": "M8",
        "name": "35",
        "label": {
          "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
          "English": "Jhone\u2019s Disease (Paratuberculosis)"
        }
      },
      {
        "myfilter": "M8",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M8",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M8",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M8",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M8",
        "name": "44",
        "label": {
          "Bangla": "Navel Ill",
          "English": "Navel Ill"
        }
      },
      {
        "myfilter": "M8",
        "name": "47",
        "label": {
          "Bangla": "Pesti des Petits Ruminants",
          "English": "Pesti des Petits Ruminants"
        }
      },
      {
        "myfilter": "M8",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M8",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M8",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M8",
        "name": "51",
        "label": {
          "Bangla": "Ruminal Tympany/ Bloat",
          "English": "Ruminal Tympany/ Bloat"
        }
      },
      {
        "myfilter": "M8",
        "name": "53",
        "label": {
          "Bangla": "Sheep Pox",
          "English": "Sheep Pox"
        }
      },
      {
        "myfilter": "M8",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M8",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M8",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M8",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M8",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M8",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "M6",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M6",
        "name": "3",
        "label": {
          "Bangla": "Anthrax",
          "English": "Anthrax"
        }
      },
      {
        "myfilter": "M6",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M6",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M6",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M6",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M6",
        "name": "23",
        "label": {
          "Bangla": "Foot rot",
          "English": "Foot rot"
        }
      },
      {
        "myfilter": "M6",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M6",
        "name": "28",
        "label": {
          "Bangla": "Gid Disease (Cerebral coenurosis)",
          "English": "Gid Disease (Cerebral coenurosis)"
        }
      },
      {
        "myfilter": "M6",
        "name": "30",
        "label": {
          "Bangla": "Hemorrhagic Septicemia (HS)",
          "English": "Hemorrhagic Septicemia (HS)"
        }
      },
      {
        "myfilter": "M6",
        "name": "35",
        "label": {
          "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
          "English": "Jhone\u2019s Disease (Paratuberculosis)"
        }
      },
      {
        "myfilter": "M6",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M6",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M6",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M6",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M6",
        "name": "44",
        "label": {
          "Bangla": "Navel Ill",
          "English": "Navel Ill"
        }
      },
      {
        "myfilter": "M6",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M6",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M6",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M6",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M6",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M6",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M6",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M6",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M6",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "M2",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M2",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M2",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M2",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M2",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M2",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M2",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M2",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M2",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M2",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M2",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M2",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M2",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M2",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M2",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M2",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M2",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M2",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M2",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "M4",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M4",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M4",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M4",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M4",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M4",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M4",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M4",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M4",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M4",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M4",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M4",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M4",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M4",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M4",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M4",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M4",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M4",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M4",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "M7",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M7",
        "name": "3",
        "label": {
          "Bangla": "Anthrax",
          "English": "Anthrax"
        }
      },
      {
        "myfilter": "M7",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M7",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M7",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M7",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M7",
        "name": "22",
        "label": {
          "Bangla": "Foot and Mouth Disease (FMD)",
          "English": "Foot and Mouth Disease (FMD)"
        }
      },
      {
        "myfilter": "M7",
        "name": "23",
        "label": {
          "Bangla": "Foot rot",
          "English": "Foot rot"
        }
      },
      {
        "myfilter": "M7",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M7",
        "name": "30",
        "label": {
          "Bangla": "Hemorrhagic Septicemia (HS)",
          "English": "Hemorrhagic Septicemia (HS)"
        }
      },
      {
        "myfilter": "M7",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M7",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M7",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M7",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M7",
        "name": "44",
        "label": {
          "Bangla": "Navel Ill",
          "English": "Navel Ill"
        }
      },
      {
        "myfilter": "M7",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M7",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M7",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M7",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M7",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M7",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M7",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M7",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M7",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "2",
        "label": {
          "Bangla": "Anaplasmosis",
          "English": "Anaplasmosis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "3",
        "label": {
          "Bangla": "Anthrax",
          "English": "Anthrax"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "8",
        "label": {
          "Bangla": "Babesiosis",
          "English": "Babesiosis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "9",
        "label": {
          "Bangla": "Black Quarter (BQ)",
          "English": "Black Quarter (BQ)"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "10",
        "label": {
          "Bangla": "Bovine Tuberculosis",
          "English": "Bovine Tuberculosis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "11",
        "label": {
          "Bangla": "Brucellosis",
          "English": "Brucellosis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "12",
        "label": {
          "Bangla": "Calf Scour",
          "English": "Calf Scour"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "14",
        "label": {
          "Bangla": "Coccidiosis",
          "English": "Coccidiosis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "16",
        "label": {
          "Bangla": "Contagious Caprine Pleuropneumonia",
          "English": "Contagious Caprine Pleuropneumonia"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "17",
        "label": {
          "Bangla": "Dermatophilosis",
          "English": "Dermatophilosis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "21",
        "label": {
          "Bangla": "Ephemeral Fever",
          "English": "Ephemeral Fever"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "22",
        "label": {
          "Bangla": "Foot and Mouth Disease (FMD)",
          "English": "Foot and Mouth Disease (FMD)"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "23",
        "label": {
          "Bangla": "Foot rot",
          "English": "Foot rot"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "26",
        "label": {
          "Bangla": "Gangrene",
          "English": "Gangrene"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "28",
        "label": {
          "Bangla": "Gid Disease (Cerebral coenurosis)",
          "English": "Gid Disease (Cerebral coenurosis)"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "29",
        "label": {
          "Bangla": "Goat Pox",
          "English": "Goat Pox"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "30",
        "label": {
          "Bangla": "Hemorrhagic Septicemia (HS)",
          "English": "Hemorrhagic Septicemia (HS)"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "31",
        "label": {
          "Bangla": "Hump Sore",
          "English": "Hump Sore"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "35",
        "label": {
          "Bangla": "Jhone\u2019s Disease (Paratuberculosis)",
          "English": "Jhone\u2019s Disease (Paratuberculosis)"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "36",
        "label": {
          "Bangla": "Lice Infestation",
          "English": "Lice Infestation"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "37",
        "label": {
          "Bangla": "Liver Fluke",
          "English": "Liver Fluke"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "40",
        "label": {
          "Bangla": "Mastitis",
          "English": "Mastitis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "41",
        "label": {
          "Bangla": "Milk Fever",
          "English": "Milk Fever"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "42",
        "label": {
          "Bangla": "Mite Infestation",
          "English": "Mite Infestation"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "44",
        "label": {
          "Bangla": "Navel Ill",
          "English": "Navel Ill"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "47",
        "label": {
          "Bangla": "Pesti des Petits Ruminants",
          "English": "Pesti des Petits Ruminants"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "48",
        "label": {
          "Bangla": "Rabies",
          "English": "Rabies"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "49",
        "label": {
          "Bangla": "Ringworm (Dermatophytosis)",
          "English": "Ringworm (Dermatophytosis)"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "50",
        "label": {
          "Bangla": "Round Worm",
          "English": "Round Worm"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "51",
        "label": {
          "Bangla": "Ruminal Tympany/ Bloat",
          "English": "Ruminal Tympany/ Bloat"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "53",
        "label": {
          "Bangla": "Sheep Pox",
          "English": "Sheep Pox"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "54",
        "label": {
          "Bangla": "Stringhalt",
          "English": "Stringhalt"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "55",
        "label": {
          "Bangla": "Tape Worm",
          "English": "Tape Worm"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "56",
        "label": {
          "Bangla": "Teat Sore",
          "English": "Teat Sore"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "57",
        "label": {
          "Bangla": "Tetanus",
          "English": "Tetanus"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "58",
        "label": {
          "Bangla": "Theileriosis",
          "English": "Theileriosis"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "59",
        "label": {
          "Bangla": "Tick Infestation",
          "English": "Tick Infestation"
        }
      },
      {
        "myfilter": "M_Other",
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      }
    ],
    "rapid_test_bird": [
      {
        "myfilter": "2",
        "name": "1",
        "label": {
          "Bangla": "Avian influenza",
          "English": "Avian influenza"
        }
      },
      {
        "myfilter": "1",
        "name": "2",
        "label": {
          "Bangla": "CMT",
          "English": "CMT"
        }
      },
      {
        "myfilter": "1",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      },
      {
        "myfilter": "2",
        "name": "3",
        "label": {
          "Bangla": "Mycoplasma",
          "English": "Mycoplasma"
        }
      },
      {
        "myfilter": "2",
        "name": "4",
        "label": {
          "Bangla": "Newcastle Disease",
          "English": "Newcastle Disease"
        }
      },
      {
        "myfilter": "2",
        "name": "00",
        "label": {
          "Bangla": "Other",
          "English": "Other"
        }
      }
    ],
    "species_rearing_purpose": [
      {
        "name": "1",
        "label": {
          "Bangla": "Milk",
          "English": "Milk"
        }
      },
      {
        "name": "2",
        "label": {
          "Bangla": "Meat",
          "English": "Meat"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Working",
          "English": "Working"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Hobby",
          "English": "Hobby"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Fiber/Wool",
          "English": "Fiber/Wool"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Multi-purpose",
          "English": "Multi-purpose"
        }
      }
    ],
    "microscopic_test_ear_1": [
      {
        "name": "1",
        "label": {
          "Bangla": "Auricular chondritis",
          "English": "Auricular chondritis"
        }
      },
      {
        "name": "3",
        "label": {
          "Bangla": "Hair loss on the outer ear",
          "English": "Hair loss on the outer ear"
        }
      },
      {
        "name": "4",
        "label": {
          "Bangla": "Lice",
          "English": "Lice"
        }
      },
      {
        "name": "5",
        "label": {
          "Bangla": "Mite",
          "English": "Mite"
        }
      },
      {
        "name": "6",
        "label": {
          "Bangla": "Nodular granulomatous dermatitis",
          "English": "Nodular granulomatous dermatitis"
        }
      },
      {
        "name": "7",
        "label": {
          "Bangla": "Tick",
          "English": "Tick"
        }
      },
      {
        "name": "8",
        "label": {
          "Bangla": "Tissue death of the pinna",
          "English": "Tissue death of the pinna"
        }
      },
      {
        "name": "00",
        "label": {
          "Bangla": "Others",
          "English": "Others"
        }
      }
    ]
  },
  "id_string": "patient_registry"
};

export const geo = [
  {
    district_code: '1004',
    district_name: 'BargunaH',
    division_code: '10',
    division_name: 'Barisal',
    union_code: '10040913',
    union_name: 'Amtali',
    upazila_code: '100409',
    upazila_name: 'Amtali',
  },
  {
    district_code: '1005',
    district_name: 'BargunaL',
    division_code: '10',
    division_name: 'Barisal',
    union_code: '10040915',
    union_name: 'Arpangashia',
    upazila_code: '100409',
    upazila_name: 'Amtali',
  },
  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030431',
    union_name: 'Alikadam',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030480',
    union_name: 'Nayapara',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
];

/* tslint:enable */
export type DEMO_FORM_JSON = typeof DEMO_FORM_JSON;
