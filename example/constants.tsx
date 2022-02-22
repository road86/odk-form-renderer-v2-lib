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
      "children": [
        {
          "name": "title",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Title English",
            "English": "Title"
          },
          "type": "text"
        },
        {
          "name": "description",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Description English",
            "English": "Description"
          },
          "type": "text"
        },
        {
          "name": "title_bn",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Title Banglish",
            "English": "Title Banglish"
          },
          "type": "text"
        },
        {
          "name": "description_bn",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Description Banglish",
            "English": "Description Banglish"
          },
          "type": "text"
        },
        {
          "name": "no_of_tiles",
          "bind": {
            "required": "true",
            "constraint": ". > 0"
          },
          "label": {
            "Bangla": "No of Tiles",
            "English": "No of Tiles"
          },
          "type": "integer"
        }
      ],
      "name": "basic_info",
      "type": "group"
    },
    {
      "name": "c_repeat",
      "bind": {
        "calculate": "${no_of_tiles}"
      },
      "type": "calculate"
    },
    {
      "name": "starter_info_count",
      "bind": {
        "readonly": "true()",
        "calculate": "${c_repeat}"
      },
      "type": "calculate"
    },
    {
      "control": {
        "jr:count": "${starter_info_count}"
      },
      "children": [
        {
          "name": "tile_bn",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Tile Bangla",
            "English": "Tile Bangla"
          },
          "type": "text"
        },
        {
          "name": "tile_en",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Tile English",
            "English": "Tile English"
          },
          "type": "text"
        },
        {
          "name": "image",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Image",
            "English": "Image"
          },
          "type": "photo"
        },
        {
          "name": "audio_bn",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Audio Bangla",
            "English": "Audio Bangla"
          },
          "type": "audio"
        },
        {
          "name": "audio_en",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Audio English",
            "English": "Audio English"
          },
          "type": "audio"
        }
      ],
      "name": "starter_info",
      "type": "repeat"
    },
    {
      "name": "quiz_name",
      "bind": {
        "required": "true"
      },
      "label": {
        "Bangla": "Quiz Name",
        "English": "Quiz Name"
      },
      "type": "text"
    },
    {
      "name": "quiz_icon",
      "bind": {
        "required": "true"
      },
      "label": {
        "Bangla": "Quiz Icon",
        "English": "Quiz Icon"
      },
      "type": "photo"
    },
    {
      "name": "no_of_questions",
      "bind": {
        "required": "true",
        "constraint": ". > 0"
      },
      "label": {
        "Bangla": "No of Questions",
        "English": "No of Questions"
      },
      "type": "integer"
    },
    {
      "name": "q_repeat",
      "bind": {
        "calculate": "${no_of_questions}"
      },
      "type": "calculate"
    },
    {
      "name": "questions_count",
      "bind": {
        "readonly": "true()",
        "calculate": "${q_repeat}"
      },
      "type": "calculate"
    },
    {
      "control": {
        "jr:count": "${questions_count}"
      },
      "children": [
        {
          "name": "questions_text_en",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Questions Text English",
            "English": "Questions Text English"
          },
          "type": "text"
        },
        {
          "name": "questions_text_bn",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Questions Text Bangla",
            "English": "Questions Text Bangla"
          },
          "type": "text"
        },
        {
          "name": "question_audio_en",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Question Audio English",
            "English": "Question Audio English"
          },
          "type": "audio"
        },
        {
          "name": "question_audio_bn",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Question Audio Bangla",
            "English": "Question Audio Bangla"
          },
          "type": "audio"
        },
        {
          "name": "no_of_answers",
          "bind": {
            "required": "true",
            "constraint": ". > 0"
          },
          "label": {
            "Bangla": "No of Answers",
            "English": "No of Answers"
          },
          "type": "integer"
        },
        {
          "name": "a_repeat",
          "bind": {
            "calculate": "${no_of_answers}"
          },
          "type": "calculate"
        },
        {
          "name": "question_answer_count",
          "bind": {
            "readonly": "true()",
            "calculate": "${a_repeat}"
          },
          "type": "calculate"
        },
        {
          "control": {
            "jr:count": "${question_answer_count}"
          },
          "children": [
            {
              "name": "answer_text_en",
              "bind": {
                "required": "true"
              },
              "label": {
                "Bangla": "Answer Text English",
                "English": "Answer Text English"
              },
              "type": "text"
            },
            {
              "name": "answer_text_bn",
              "bind": {
                "required": "true"
              },
              "label": {
                "Bangla": "Answer Text Bangla",
                "English": "Answer Text Bangla"
              },
              "type": "text"
            },
            {
              "name": "answer_audio",
              "bind": {
                "required": "true"
              },
              "label": {
                "Bangla": "Answer Audio",
                "English": "Answer Audio"
              },
              "type": "audio"
            },
            {
              "name": "answer_image",
              "bind": {
                "required": "true"
              },
              "label": {
                "Bangla": "Answer Image",
                "English": "Answer Image"
              },
              "type": "photo"
            },
            {
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
              "name": "is_correct_answer",
              "bind": {
                "required": "true"
              },
              "label": {
                "Bangla": "Is Correct Answer?",
                "English": "Is Correct Answer?"
              },
              "type": "select one"
            }
          ],
          "name": "question_answer",
          "label": {
            "Bangla": "Answers",
            "English": "Answers"
          },
          "type": "repeat"
        },
        {
          "name": "correct_text",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Correct Text",
            "English": "Correct Text"
          },
          "type": "text"
        },
        {
          "name": "correct_audio",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Correct Audio",
            "English": "Correct Audio"
          },
          "type": "audio"
        },
        {
          "name": "wrong_text",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Wrong Text",
            "English": "Wrong Text"
          },
          "type": "text"
        },
        {
          "name": "wrong_audio",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Wrong Audio",
            "English": "Wrong Audio"
          },
          "type": "audio"
        },
        {
          "name": "correct_answer_mark",
          "default": "4",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Correct Answer Mark",
            "English": "Correct Answer Mark"
          },
          "type": "decimal"
        },
        {
          "name": "wrong_answer_penalty",
          "default": "0.33",
          "bind": {
            "required": "true"
          },
          "label": {
            "Bangla": "Wrong Answer Penalty",
            "English": "Wrong Answer Penalty"
          },
          "type": "decimal"
        }
      ],
      "name": "questions",
      "label": {
        "Bangla": "Questions",
        "English": "Questions"
      },
      "type": "repeat"
    },
    {
      "name": "__version__",
      "bind": {
        "calculate": "'vCtJ2hFu2tUrrxrFsPiYup'"
      },
      "type": "calculate"
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
  "type": "survey",
  "name": "quiz_form",
  "sms_keyword": "quiz_form",
  "title": "Quiz Form",
  "id_string": "quiz_form"
}

export const sampleUserInput = {
  // "basic_info/timelapse": "15:00",
  // "basic_info/timelapse": "2022-01-10T10:01:50+06:00",
  "basic_info/farm_id": "1212121",
  "start": "2022-01-06T10:20:16.936Z",
  "end": "2022-01-06T10:22:16.936Z",
};

// export const CSV_LIST = {"geo.csv":[{"mouza_loc_type":"5","mouza_code":"20030431142","mouza_name":"ALIKADAM","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030431284","mouza_name":"CHAIMFRA","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030431994","mouza_name":"TAINFA","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463426","mouza_name":"CHOKHYONG","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463568","mouza_name":"MANGU","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463700","mouza_name":"MATAMUHURI R.F.","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463852","mouza_name":"TAIN","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463999","mouza_name":"CHOKHYONG","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"}]};

export const CSV_LIST = {
  "geo.csv": [
    {
      "division_name": "DHAKA",
      "union_code": "30824770",
      "upazila_code": "308247",
      "upazila_name": "KALUKHALI",
      "division_code": "30",
      "union_name": "MRIGI",
      "mouza_name": "GAJARIABIL",
      "district_code": "3082",
      "mouza_code": "30824770374",
      "district_name": "RAJBARI"
    },
    {
      "division_name": "DHAKA",
      "union_code": "30824795",
      "upazila_code": "308247",
      "upazila_name": "KALUKHALI",
      "division_code": "30",
      "union_name": "SAORAIL",
      "mouza_name": "BHITI",
      "district_code": "3082",
      "mouza_code": "30824795151",
      "district_name": "RAJBARI"
    }
  ]
}
export const languageOptions = [
  {
    label: 'English',
    value: 'English',
  },

  {
    label: 'Bangla',
    value: 'Bangla',
  },
];

// tslint: enable
export type DEMO_FORM_JSON = typeof DEMO_FORM_JSON;


