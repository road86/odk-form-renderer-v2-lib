/* tslint:disable */
export const DEMO_FORM_JSON = {
  "style": "theme-grid",
  "name": "farm_assessment_closer_p2",
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
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
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
          "type": "date",
          "name": "date",
          "label": {
            "English": "2. Date of visit"
          }
        },
        {
          "control": {
            "appearance": "w6 search('geo') minimal, searchDB@division"
          },
          "name": "division",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "3. Division"
          },
          "type": "select one",
          "children": [
            {
              "name": "division_code",
              "label": {
                "Bangla": "division_name",
                "English": "division_name"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 search('geo', 'matches', 'division_code', ${division}) minimal, searchDB@district"
          },
          "name": "district",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "4. District"
          },
          "type": "select one",
          "children": [
            {
              "name": "district_code",
              "label": {
                "Bangla": "district_name",
                "English": "district_name"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 search('geo', 'matches', 'district_code', ${district}) minimal, searchDB@upazila"
          },
          "name": "upazila",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "5. Upazila"
          },
          "type": "select one",
          "children": [
            {
              "name": "upazila_code",
              "label": {
                "Bangla": "upazila_name",
                "English": "upazila_name"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 search('geo', 'matches', 'upazila_code', ${upazila}) minimal"
          },
          "name": "union",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "6. Union"
          },
          "type": "select one",
          "children": [
            {
              "name": "union_code",
              "label": {
                "Bangla": "union_name",
                "English": "union_name"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 search('geo', 'matches', 'union_code', ${union}) minimal"
          },
          "name": "mouza",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "7. Mouza"
          },
          "type": "select one",
          "children": [
            {
              "name": "mouza_code",
              "label": {
                "Bangla": "mouza_name",
                "English": "mouza_name"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "village",
          "label": {
            "English": "8. Village"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "address",
          "label": {
            "English": "9. Address"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "owner",
          "label": {
            "English": "10. Owner’s name"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "jr:constraintMsg": {
              "Bangla": "Put 11 digit",
              "English": "Put 11 digit"
            },
            "readonly": "TRUE",
            "constraint": "regex(., '^[0-9]{11}$')"
          },
          "type": "text",
          "name": "mobile",
          "label": {
            "English": "11. Owner’s phone number"
          }
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "ownership_type",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "12. Farm Ownership Type"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Corporate contract"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Independent"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Personal contract (dealer)"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "Rental"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "person_interviewed",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "13. Persons interviewed"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Owner"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Farm manager"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Farm worker"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "Dealer"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "latitude",
          "label": {
            "English": "14a. Latitude"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "longitude",
          "label": {
            "English": "14b. Longitude"
          }
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "species",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "15. Species (check all that apply)"
          },
          "type": "select all that apply",
          "children": [
            {
              "name": "21",
              "label": {
                "English": "Chicken"
              }
            },
            {
              "name": "22",
              "label": {
                "English": "Duck"
              }
            },
            {
              "name": "23",
              "label": {
                "English": "Goose"
              }
            },
            {
              "name": "25",
              "label": {
                "English": "Pigeon"
              }
            },
            {
              "name": "26",
              "label": {
                "English": "Quail"
              }
            },
            {
              "name": "27",
              "label": {
                "English": "Turkey"
              }
            },
            {
              "name": "28",
              "label": {
                "English": "Guinea fowl"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "chicken_concat",
          "bind": {
            "readonly": "TRUE",
            "relevant": "selected(${species},'21')"
          },
          "label": {
            "English": "Chicken Type"
          },
          "type": "select one",
          "children": [
            {
              "name": "211",
              "label": {
                "English": "Brown Comm"
              }
            },
            {
              "name": "212",
              "label": {
                "English": "White Comm"
              }
            },
            {
              "name": "213",
              "label": {
                "English": "Deshi"
              }
            },
            {
              "name": "214",
              "label": {
                "English": "Sonali"
              }
            }
          ]
        },
        {
          "bind": {
            "calculate": "substr(${chicken_concat},2,3)"
          },
          "type": "calculate",
          "name": "chicken"
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "integer",
          "name": "bird_total",
          "label": {
            "English": "16. Standing population (number) birds"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "integer",
          "name": "bird_capacity",
          "label": {
            "English": "17. Maximum farm capacity (number) birds"
          }
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "production_purpose",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "18. Birds production purpose (check one)"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Breeder"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Sport"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Pet"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "Egg & Meat"
              }
            },
            {
              "name": "5",
              "label": {
                "English": "Meat"
              }
            },
            {
              "name": "6",
              "label": {
                "English": "Egg"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "age_arrival_on_farm",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "19. Age at arrival on farm (check one)"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "DOC"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Pullet"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Adult"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "influenza_investigate",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "20. Has an AI investigated previously on this farm?"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "selected(${influenza_investigate},'1')"
          },
          "type": "date",
          "name": "influenza_investigate_date",
          "label": {
            "English": "Approximate date (dd-mm-yyyy)"
          }
        }
      ],
      "name": "basic_info"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "label": {
        "English": "AI Vaccination Practices"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vaccinate_ai",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "21. Was your DOC vaccinated with AI vaccines at the hatchery?"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "flock_vaccinate",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "22. Was your flock vaccinated for AI?"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${flock_vaccinate}=1"
          },
          "type": "text",
          "name": "vaccine1_name",
          "label": {
            "English": "23. Vaccine 1: Name of AI vaccine used"
          }
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vaccine1_schedule",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${flock_vaccinate}=1"
          },
          "label": {
            "English": "Schedule used for Vaccine 1:"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "No schedule"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Age basis"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Calendar basis"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "After outbreak"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vaccine1_schedule_season",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine1_schedule}=3"
          },
          "label": {
            "English": "In which season do you vaccinate?"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Grisma"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Barsa"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Sharat"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "Hemanta"
              }
            },
            {
              "name": "5",
              "label": {
                "English": "Shhit"
              }
            },
            {
              "name": "6",
              "label": {
                "English": "Basanta"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "jr:constraintMsg": {
              "English": "Less than or equal 5"
            },
            "relevant": "${vaccine1_schedule}=2",
            "readonly": "TRUE",
            "constraint": ".<=5"
          },
          "type": "integer",
          "name": "vaccine1_total_dose",
          "label": {
            "English": "Total doses given per production cycle"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine1_total_dose}>0"
          },
          "type": "integer",
          "name": "vaccine1_dose1",
          "label": {
            "English": "Dose 1 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine1_total_dose}>1"
          },
          "type": "integer",
          "name": "vaccine1_dose2",
          "label": {
            "English": "Dose 2 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine1_total_dose}>2"
          },
          "type": "integer",
          "name": "vaccine1_dose3",
          "label": {
            "English": "Dose 3 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine1_total_dose}>3"
          },
          "type": "integer",
          "name": "vaccine1_dose4",
          "label": {
            "English": "Dose 4 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine1_total_dose}>4"
          },
          "type": "integer",
          "name": "vaccine1_dose5",
          "label": {
            "English": "Dose 5 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${flock_vaccinate}=1"
          },
          "type": "text",
          "name": "vaccine2_name",
          "label": {
            "English": "24. Vaccine 2: Name of AI vaccine used"
          }
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vaccine2_schedule",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${flock_vaccinate}=1"
          },
          "label": {
            "English": "Schedule used for Vaccine 2:"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "No schedule"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Age basis"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Calendar basis"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "After outbreak"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vaccine2_schedule_season",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine2_schedule}=3"
          },
          "label": {
            "English": "In which season do you vaccinate?"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Grisma"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Barsa"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Sharat"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "Hemanta"
              }
            },
            {
              "name": "5",
              "label": {
                "English": "Shhit"
              }
            },
            {
              "name": "6",
              "label": {
                "English": "Basanta"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "jr:constraintMsg": {
              "Bangla": "Less than or equal 5",
              "English": "Less than or equal 5"
            },
            "relevant": "${vaccine2_schedule}=2",
            "readonly": "TRUE",
            "constraint": ".<=5"
          },
          "type": "integer",
          "name": "vaccine2_total_dose",
          "label": {
            "English": "Total doses given per production cycle"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine2_total_dose}>0"
          },
          "type": "integer",
          "name": "vaccine2_dose1",
          "label": {
            "English": "Dose 1 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine2_total_dose}>1"
          },
          "type": "integer",
          "name": "vaccine2_dose2",
          "label": {
            "English": "Dose 2 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine2_total_dose}>2"
          },
          "type": "integer",
          "name": "vaccine2_dose3",
          "label": {
            "English": "Dose 3 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine2_total_dose}>3"
          },
          "type": "integer",
          "name": "vaccine2_dose4",
          "label": {
            "English": "Dose 4 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE",
            "relevant": "${vaccine2_total_dose}>4"
          },
          "type": "integer",
          "name": "vaccine2_dose5",
          "label": {
            "English": "Dose 5 (week)"
          }
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vaccinated_by",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${flock_vaccinate}=1"
          },
          "label": {
            "English": "25. Vaccine given by"
          },
          "type": "select all that apply",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Outside vaccinators"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Farm staff"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vaccinate_verfication",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${flock_vaccinate}=1"
          },
          "label": {
            "English": "26. Means of verification"
          },
          "type": "select all that apply",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Vaccination records"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Semi-structured interview"
              }
            }
          ]
        }
      ],
      "name": "ai_vaccination"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "label": {
        "English": "Biosecurity practises"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "outsider_vehicles_entry",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "A.1 Outside vehicles do not enter farm, only essential vehicles (e.g. feed, egg)"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "workers_approve_visitor_entry",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "A.2 Only workers and approved visitors enter farm (select one)"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "manure_collector_entry",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "A.3 No manure collectors enter farm"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "fenced_and_duck_chicken_proof",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "A.4 Farm area is fully fenced and duck/chicken proof"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "dead_birds_disposed_safely",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "A.5 Dead birds disposed safely"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "sign_posted_1st",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "A.6 Signs posted"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "vehical_movement_production_area",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "B.1 No movement of vehicles in and out the production area"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "workers_entry_production_area",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "B.2 Only workers enter production area (select one option)"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "visitors_approved_production_area",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "B.3 Only visitors enter production area if accompanied by farm manager"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "sign_posted_2nd",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "B.4 Signs posted (you are allowed select only one option)"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "footwear_left_outside",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "C.1 Outside footwear left outside farm (select one option)"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "change_clothes_upon_entering_farm",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "C.2 Workers and visitors change clothes upon entering farm"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "use_dedicated_footwear",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "C.3 Workers and visitors use only dedicated footwear in production area"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "shower_before_enter_farm",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "C.4 Worker and visitors shower upon entering farm"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "materials_cleaned",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "D.1 materials returning from market or other farm cleaned with soap and water before entering the farm"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "materials_disinfect",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "D.2 materials returning from market or other farm disinfected before entering the farm"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "dead_bird_manage_practice",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "28. Most common dead bird management practice"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "buried"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "river"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "rubbish pit"
              }
            },
            {
              "name": "4",
              "label": {
                "English": "pond"
              }
            },
            {
              "name": "5",
              "label": {
                "English": "open place/bush"
              }
            },
            {
              "name": "6",
              "label": {
                "English": "rubbish container"
              }
            },
            {
              "name": "7",
              "label": {
                "English": "food/feed"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 minimal"
          },
          "name": "entry_means_verification",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "29. Means of verification (check all that apply)"
          },
          "type": "select all that apply",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "direct observation"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "semi-structured interview"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "compared to biosecurity design plan"
              }
            }
          ]
        }
      ],
      "name": "biosecurity_practices"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "label": {
        "English": "Antibacterial usage"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w6 horizontal-compact"
          },
          "name": "use_antibiotics",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "Do you use any Antibiotics?"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "Yes"
              }
            },
            {
              "name": "0",
              "label": {
                "English": "No"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w12"
          },
          "name": "g1",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${use_antibiotics}=1"
          },
          "label": {
            "English": "Antibiotic uses information (1)"
          },
          "type": "group",
          "children": [
            {
              "control": {
                "appearance": "w12 horizontal-compact"
              },
              "name": "product1_type",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "31. Type"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Product"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Generic"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w12 search('medicine') minimal"
              },
              "name": "product1",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product1_type}=1"
              },
              "label": {
                "English": "Product name:"
              },
              "type": "select one",
              "children": [
                {
                  "name": "product_id",
                  "label": {
                    "English": "product_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g1"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product1_generic1",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product1_type}=1 or ${product1_type}=2",
                "calculate": "${p1_g1}"
              },
              "label": {
                "English": "Generic 1"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic1",
                  "label": {
                    "English": "generic1_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g2"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product1_generic2",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product1_type}=1 or ${product1_type}=2",
                "calculate": "${p1_g2}"
              },
              "label": {
                "English": "Generic 2"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic2",
                  "label": {
                    "English": "generic2_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g3"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product1_generic3",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product1_type}=1 or ${product1_type}=2",
                "calculate": "${p1_g3}"
              },
              "label": {
                "English": "Generic 3"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic3",
                  "label": {
                    "English": "generic3_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g4"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product1_generic4",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product1_type}=1 or ${product1_type}=2",
                "calculate": "${p1_g4}"
              },
              "label": {
                "English": "Generic 4"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic4",
                  "label": {
                    "English": "generic4_label"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product1_source",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Source"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Salesman"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Govt"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Market"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Dealer"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Vet"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "Quack"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product1_purpose",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Purpose"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Infection/sick"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Prevention"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Faster growth/more eggs"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product1_route",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Route"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Drinking water"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Feed"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Injection"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product1_frequency",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Freuency"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Twice a day"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Once a day"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Once a week"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Once a month"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Continuously (Every day)"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "3 Times a day"
                  }
                }
              ]
            }
          ]
        },
        {
          "control": {
            "appearance": "w12"
          },
          "name": "g2",
          "bind": {
            "readonly": "TRUE",
            "relevant": "${use_antibiotics}=1"
          },
          "label": {
            "English": "Antibiotic uses information (2)"
          },
          "type": "group",
          "children": [
            {
              "control": {
                "appearance": "w12 horizontal-compact"
              },
              "name": "product2_type",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "32. Type"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Product"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Generic"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w12 search('medicine') minimal"
              },
              "name": "product2",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product2_type}=1 or ${product2_type}=2"
              },
              "label": {
                "English": "Product name:"
              },
              "type": "select one",
              "children": [
                {
                  "name": "product_id",
                  "label": {
                    "English": "product_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g1"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product2_generic1",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product2_type}=1 or ${product2_type}=2",
                "calculate": "${p2_g1}"
              },
              "label": {
                "English": "Generic 1"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic1",
                  "label": {
                    "English": "generic1_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g2"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product2_generic2",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product2_type}=1 or ${product2_type}=2",
                "calculate": "${p2_g2}"
              },
              "label": {
                "English": "Generic 2"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic2",
                  "label": {
                    "English": "generic2_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g3"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product2_generic3",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product2_type}=1 or ${product2_type}=2",
                "calculate": "${p2_g3}"
              },
              "label": {
                "English": "Generic 3"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic3",
                  "label": {
                    "English": "generic3_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g4"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product2_generic4",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product2_type}=1 or ${product2_type}=2",
                "calculate": "${p2_g4}"
              },
              "label": {
                "English": "Generic 4"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic4",
                  "label": {
                    "English": "generic4_label"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product2_source",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Source"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Salesman"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Govt"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Market"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Dealer"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Vet"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "Quack"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product2_purpose",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Purpose"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Infection/sick"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Prevention"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Faster growth/more eggs"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product2_route",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Route"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Drinking water"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Feed"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Injection"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product2_frequency",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Freuency"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Twice a day"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Once a day"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Once a week"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Once a month"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Continuously (Every day)"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "3 Times a day"
                  }
                }
              ]
            }
          ]
        },
        {
          "control": {
            "appearance": "w12"
          },
          "name": "g3",
          "bind": {
            "relevant": "${use_antibiotics}=1"
          },
          "label": {
            "English": "Antibiotic uses information (3)"
          },
          "type": "group",
          "children": [
            {
              "control": {
                "appearance": "w12 horizontal-compact"
              },
              "name": "product3_type",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "33. Type"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Product"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Generic"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w12 search('medicine') minimal"
              },
              "name": "product3",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product3_type}=1"
              },
              "label": {
                "English": "Product name:"
              },
              "type": "select one",
              "children": [
                {
                  "name": "product_id",
                  "label": {
                    "English": "product_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g1"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product3_generic1",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product3_type}=1 or ${product3_type}=1",
                "calculate": "${p3_g1}"
              },
              "label": {
                "English": "Generic 1"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic1",
                  "label": {
                    "English": "generic1_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g2"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product3_generic2",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product3_type}=1 or ${product3_type}=1",
                "calculate": "${p3_g2}"
              },
              "label": {
                "English": "Generic 2"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic2",
                  "label": {
                    "English": "generic2_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g3"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product3_generic3",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product3_type}=1 or ${product3_type}=1",
                "calculate": "${p3_g3}"
              },
              "label": {
                "English": "Generic 3"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic3",
                  "label": {
                    "English": "generic3_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g4"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product3_generic4",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product3_type}=1 or ${product3_type}=1",
                "calculate": "${p3_g4}"
              },
              "label": {
                "English": "Generic 4"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic4",
                  "label": {
                    "English": "generic4_label"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product3_source",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Source"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Salesman"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Govt"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Market"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Dealer"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Vet"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "Quack"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product3_purpose",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Purpose"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Infection/sick"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Prevention"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Faster growth/more eggs"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product3_route",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Route"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Drinking water"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Feed"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Injection"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product3_frequency",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Freuency"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Twice a day"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Once a day"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Once a week"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Once a month"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Continuously (Every day)"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "3 Times a day"
                  }
                }
              ]
            }
          ]
        },
        {
          "control": {
            "appearance": "w12"
          },
          "name": "g4",
          "bind": {
            "relevant": "${use_antibiotics}=1"
          },
          "label": {
            "English": "Antibiotic uses information (4)"
          },
          "type": "group",
          "children": [
            {
              "control": {
                "appearance": "w12 horizontal-compact"
              },
              "name": "product4_type",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "34. Type"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Product"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Generic"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w12 search('medicine') minimal"
              },
              "name": "product4",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product4_type}=1"
              },
              "label": {
                "English": "Product name:"
              },
              "type": "select one",
              "children": [
                {
                  "name": "product_id",
                  "label": {
                    "English": "product_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g1"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product4_generic1",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product4_type}=1 or ${product4_type}=1",
                "calculate": "${p3_g1}"
              },
              "label": {
                "English": "Generic 1"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic1",
                  "label": {
                    "English": "generic1_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g2"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product4_generic2",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product4_type}=1 or ${product4_type}=1",
                "calculate": "${p3_g2}"
              },
              "label": {
                "English": "Generic 2"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic2",
                  "label": {
                    "English": "generic2_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g3"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product4_generic3",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product4_type}=1 or ${product4_type}=1",
                "calculate": "${p3_g3}"
              },
              "label": {
                "English": "Generic 3"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic3",
                  "label": {
                    "English": "generic3_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g4"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product4_generic4",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product4_type}=1 or ${product4_type}=1",
                "calculate": "${p3_g4}"
              },
              "label": {
                "English": "Generic 4"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic4",
                  "label": {
                    "English": "generic4_label"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product4_source",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Source"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Salesman"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Govt"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Market"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Dealer"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Vet"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "Quack"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product4_purpose",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Purpose"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Infection/sick"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Prevention"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Faster growth/more eggs"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product4_route",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Route"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Drinking water"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Feed"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Injection"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product4_frequency",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Freuency"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Twice a day"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Once a day"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Once a week"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Once a month"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Continuously (Every day)"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "3 Times a day"
                  }
                }
              ]
            }
          ]
        },
        {
          "control": {
            "appearance": "w12"
          },
          "name": "g5",
          "bind": {
            "relevant": "${use_antibiotics}=1"
          },
          "label": {
            "English": "Antibiotic uses information (5)"
          },
          "type": "group",
          "children": [
            {
              "control": {
                "appearance": "w12 horizontal-compact"
              },
              "name": "product5_type",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "35. Type"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Product"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Generic"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w12 search('medicine') minimal"
              },
              "name": "product5",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product5_type}=1"
              },
              "label": {
                "English": "Product name:"
              },
              "type": "select one",
              "children": [
                {
                  "name": "product_id",
                  "label": {
                    "English": "product_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g1"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product5_generic1",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product5_type}=1 or ${product5_type}=1",
                "calculate": "${p3_g1}"
              },
              "label": {
                "English": "Generic 1"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic1",
                  "label": {
                    "English": "generic1_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g2"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product5_generic2",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product5_type}=1 or ${product5_type}=1",
                "calculate": "${p3_g2}"
              },
              "label": {
                "English": "Generic 2"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic2",
                  "label": {
                    "English": "generic2_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g3"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product5_generic3",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product5_type}=1 or ${product5_type}=1",
                "calculate": "${p3_g3}"
              },
              "label": {
                "English": "Generic 3"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic3",
                  "label": {
                    "English": "generic3_label"
                  }
                }
              ]
            },
            {
              "bind": {
                "readonly": "TRUE",
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g4"
            },
            {
              "control": {
                "appearance": "w6 search('medicine') minimal"
              },
              "name": "product5_generic4",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${product5_type}=1 or ${product5_type}=1",
                "calculate": "${p3_g4}"
              },
              "label": {
                "English": "Generic 4"
              },
              "type": "select one",
              "children": [
                {
                  "name": "generic4",
                  "label": {
                    "English": "generic4_label"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product5_source",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Source"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Salesman"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Govt"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Market"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Dealer"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Vet"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "Quack"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product5_purpose",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Purpose"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Infection/sick"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Prevention"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Faster growth/more eggs"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product5_route",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Route"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Drinking water"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Feed"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Injection"
                  }
                }
              ]
            },
            {
              "control": {
                "appearance": "w6 minimal"
              },
              "name": "product5_frequency",
              "bind": {
                "readonly": "TRUE",
                "relevant": "${use_antibiotics}=1"
              },
              "label": {
                "English": "Freuency"
              },
              "type": "select one",
              "children": [
                {
                  "name": "1",
                  "label": {
                    "English": "Twice a day"
                  }
                },
                {
                  "name": "2",
                  "label": {
                    "English": "Once a day"
                  }
                },
                {
                  "name": "3",
                  "label": {
                    "English": "Once a week"
                  }
                },
                {
                  "name": "4",
                  "label": {
                    "English": "Once a month"
                  }
                },
                {
                  "name": "5",
                  "label": {
                    "English": "Continuously (Every day)"
                  }
                },
                {
                  "name": "6",
                  "label": {
                    "English": "3 Times a day"
                  }
                }
              ]
            }
          ]
        }
      ],
      "name": "antibacterial_use"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "label": {
        "English": "36. Describe the farmer’s concerns. What would the farmer like assistance with?"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "farmer_concern1",
          "label": {
            "English": "1."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "farmer_concern2",
          "label": {
            "English": "2."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "farmer_concern3",
          "label": {
            "English": "3."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "farmer_concern4",
          "label": {
            "English": "4."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "farmer_concern5",
          "label": {
            "English": "5."
          }
        }
      ],
      "name": "farmer_concern"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "label": {
        "English": "37. Provide a list of new biosecurity practices agreed with farmer"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "biosecurity1",
          "label": {
            "English": "1."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "biosecurity2",
          "label": {
            "English": "2."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "biosecurity3",
          "label": {
            "English": "3."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "biosecurity4",
          "label": {
            "English": "4."
          }
        },
        {
          "control": {
            "appearance": "w6"
          },
          "bind": {
            "readonly": "TRUE"
          },
          "type": "text",
          "name": "biosecurity5",
          "label": {
            "English": "5."
          }
        }
      ],
      "name": "biosecurity"
    },
    {
      "control": {
        "appearance": "w12"
      },
      "label": {
        "English": "Administration"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w6 search('staff') minimal"
          },
          "name": "field_staff1",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "Officer/ Staff 1"
          },
          "type": "select one",
          "children": [
            {
              "name": "staffid",
              "label": {
                "Bangla": "staffname",
                "English": "staffname"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 search('staff') minimal"
          },
          "name": "field_staff2",
          "bind": {
            "readonly": "TRUE"
          },
          "label": {
            "English": "Officer/ Staff 2"
          },
          "type": "select one",
          "children": [
            {
              "name": "staffid",
              "label": {
                "Bangla": "staffname",
                "English": "staffname"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w6 search('staff') minimal"
          },
          "label": {
            "English": "Acknowledged by:"
          },
          "type": "select one",
          "children": [
            {
              "name": "staffid",
              "label": {
                "Bangla": "staffname",
                "English": "staffname"
              }
            }
          ],
          "name": "acknowledge"
        },
        {
          "control": {
            "appearance": "w6 search('staff') minimal"
          },
          "label": {
            "English": "Approved by:"
          },
          "type": "select one",
          "children": [
            {
              "name": "staffid",
              "label": {
                "Bangla": "staffname",
                "English": "staffname"
              }
            }
          ],
          "name": "approve"
        }
      ],
      "name": "admin"
    },
    {
      "control": {
        "bodyless": true
      },
      "type": "group",
      "children": [
        {
          "bind": {
            "readonly": "true()",
            "calculate": "concat('uuid:', uuid())"
          },
          "type": "calculate",
          "name": "instanceID"
        }
      ],
      "name": "meta"
    }
  ]
}

export const sampleUserInput = {
  "username": "fao_admin",
  "basic_info/address": "test",
  "basic_info/mouza": "10041923102",
  "basic_info/ownership_type": "1",
  "basic_info/upazila": "100419",
  "basic_info/village": "test",
  "basic_info/owner": "sayem",
  "basic_info/district": "1004",
  "basic_info/person_interviewed": "2",
  "basic_info/division": "10",
  "basic_info/union": "10041923",
  "basic_info/mobile": "01717842553",
  "antibacterial_use/use_antibiotics": "0",
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


