/* tslint:disable */
export const DEMO_FORM_JSON = {
  "name": "farm_assessment_closer_p2",
  "style": "theme-grid",
  "title": "FARM ASSESSMENT - FARM CLOSER REPORT",
  "sms_keyword": "farm_assessment_closer_p2",
  "default_language": "English",
  "id_string": "farm_assessment_closer_p2",
  "type": "survey",
  "children": [
    {
      "type": "start",
      "name": "start"
    },
    {
      "type": "end",
      "name": "end"
    },
    {
      "type": "username",
      "name": "username"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "label": {
        "English": "Farm Profile"
      },
      "children": [
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            // "readonly": "TRUE"
          },
          "type": "text",
          "name": "farm_id",
          "label": {
            "English": "Farm ID"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          // "bind": {
          //   "calculate": "now()",
          //   // "readonly": "TRUE",
          // },
          "type": "time",
          "name": "timelapse",
          "label": {
            "English": "2.. Date of visit"
          }
        },
        {
          "name": "gps",
          "label": "GPS",
          "type": "gps"
        },
      ],
      "name": "basic_info",
      "type": "group"
    }
  ]
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


