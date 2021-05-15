/* tslint:disable */
export const DEMO_FORM_JSON = {
  "style": "theme-grid",
  "name": "farm_assessment",
  "title": "FARM ASSESSMENT MONITORING",
  "sms_keyword": "farm_assessment",
  "default_language": "English",
  "id_string": "farm_assessment",
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
        "appearance": "w10"
      },
      "label": {
        "English": "Farm Profile"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "report_type",
          "bind": {
            "required": "TRUE"
          },
          "label": {
            "English": "1. Report type"
          },
          "type": "select one",
          "children": [
            {
              "name": "1",
              "label": {
                "English": "First assessment report"
              }
            },
            {
              "name": "2",
              "label": {
                "English": "Follow-up monitoring report"
              }
            },
            {
              "name": "3",
              "label": {
                "English": "Farm closure report"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "text",
          "name": "farmid",
          "label": {
            "English": "FARM ID"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "date",
          "name": "date",
          "label": {
            "English": "2. Date of visit"
          }
        },
        {
          "control": {
            "appearance": "w5 search('geo') minimal"
          },
          "name": "division",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 search('geo', 'matches', 'division_code', ${division}) minimal"
          },
          "name": "district",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 search('geo', 'matches', 'district_code', ${district}) minimal"
          },
          "name": "upazila",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 search('geo', 'matches', 'upazila_code', ${upazila}) minimal"
          },
          "name": "union",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 search('geo', 'matches', 'union_code', ${union}) minimal"
          },
          "name": "mouza",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "text",
          "name": "village",
          "label": {
            "English": "8. Village"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "text",
          "name": "address",
          "label": {
            "English": "9. Address"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "text",
          "name": "owner",
          "label": {
            "English": "10. Owner’s name"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "text",
          "name": "mobile",
          "label": {
            "English": "11. Owner’s phone number"
          }
        },
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "ownership_type",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "person_interviewed",
          "bind": {
            "required": "TRUE"
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
          "type": "geopoint",
          "name": "gps",
          "label": {
            "English": "14. GPS"
          }
        },
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "species",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "chicken_concat",
          "bind": {
            "relevant": "selected(${species},'21')",
            "required": "TRUE"
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
            "appearance": "w5"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "integer",
          "name": "bird_total",
          "label": {
            "English": "16. Standing population (number) birds"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "required": "TRUE"
          },
          "type": "integer",
          "name": "bird_capacity",
          "label": {
            "English": "17. Maximum farm capacity (number) birds"
          }
        },
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "production_purpose",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "age_arrival_on_farm",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "influenza_investigate",
          "bind": {
            "required": "TRUE"
          },
          "label": {
            "English": "20. Has an avian influenza investigation been conducted previously on this farm?"
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
            "appearance": "w5"
          },
          "bind": {
            "relevant": "selected(${influenza_investigate},'1')",
            "required": "TRUE"
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
        "appearance": "w10"
      },
      "label": {
        "English": "AI Vaccination Practices"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "vaccinate_ai",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "flock_vaccinate",
          "bind": {
            "required": "TRUE"
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
          "bind": {
            "relevant": "${flock_vaccinate}=1",
            "required": "TRUE"
          },
          "type": "text",
          "name": "vaccine1_name",
          "label": {
            "English": "23. Vaccine 1: Name of AI vaccine used (full name of product)"
          }
        },
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "vaccine1_schedule",
          "bind": {
            "relevant": "${flock_vaccinate}=1",
            "required": "TRUE"
          },
          "label": {
            "English": "Schedule used for Vaccine 1: (check one)"
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
            "appearance": "w5 minimal"
          },
          "name": "vaccine1_schedule_season",
          "bind": {
            "relevant": "${vaccine1_schedule}=3",
            "required": "TRUE"
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
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine1_schedule}=2",
            "jr:constraintMsg": {
              "English": "Less than or equal 5"
            },
            "required": "TRUE",
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
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine1_total_dose}>0",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine1_dose1",
          "label": {
            "English": "Dose 1 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine1_total_dose}>1",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine1_dose2",
          "label": {
            "English": "Dose 2 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine1_total_dose}>2",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine1_dose3",
          "label": {
            "English": "Dose 3 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine1_total_dose}>3",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine1_dose4",
          "label": {
            "English": "Dose 4 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine1_total_dose}>4",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine1_dose5",
          "label": {
            "English": "Dose 5 (week)"
          }
        },
        {
          "bind": {
            "relevant": "${flock_vaccinate}=1",
            "required": "TRUE"
          },
          "type": "text",
          "name": "vaccine2_name",
          "label": {
            "English": "24. Vaccine 2: Name of AI vaccine used (full name of product)"
          }
        },
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "vaccine2_schedule",
          "bind": {
            "relevant": "${flock_vaccinate}=1",
            "required": "TRUE"
          },
          "label": {
            "English": "Schedule used for Vaccine 2: (check one)"
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
            "appearance": "w5 minimal"
          },
          "name": "vaccine2_schedule_season",
          "bind": {
            "relevant": "${vaccine2_schedule}=3",
            "required": "TRUE"
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
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine2_schedule}=2",
            "jr:constraintMsg": {
              "English": "Less than or equal 5"
            },
            "required": "TRUE",
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
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine2_total_dose}>0",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine2_dose1",
          "label": {
            "English": "Dose 1 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine2_total_dose}>1",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine2_dose2",
          "label": {
            "English": "Dose 2 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine2_total_dose}>2",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine2_dose3",
          "label": {
            "English": "Dose 3 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine2_total_dose}>3",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine2_dose4",
          "label": {
            "English": "Dose 4 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "bind": {
            "relevant": "${vaccine2_total_dose}>4",
            "required": "TRUE"
          },
          "type": "integer",
          "name": "vaccine2_dose5",
          "label": {
            "English": "Dose 5 (week)"
          }
        },
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "vaccinated_by",
          "bind": {
            "relevant": "${flock_vaccinate}=1",
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "vaccinate_verfication",
          "bind": {
            "relevant": "${flock_vaccinate}=1",
            "required": "TRUE"
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
        "appearance": "w10"
      },
      "label": {
        "English": "Biosecurity practises"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w5 minimal"
          },
          "name": "outsider_vehicles_entry",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "workers_approve_visitor_entry",
          "bind": {
            "required": "TRUE"
          },
          "label": {
            "English": "A.2 Only workers and approved visitors enter farm"
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
            "appearance": "w5 minimal"
          },
          "name": "manure_collector_entry",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "fenced_and_duck_chicken_proof",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "dead_birds_disposed_safely",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "sign_posted_1st",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "vehical_movement_production_area",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "workers_entry_production_area",
          "bind": {
            "required": "TRUE"
          },
          "label": {
            "English": "B.2 Only workers enter production area"
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
            "appearance": "w5 minimal"
          },
          "name": "visitors_approved_production_area",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "sign_posted_2nd",
          "bind": {
            "required": "TRUE"
          },
          "label": {
            "English": "B.4 Signs posted"
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
            "appearance": "w5 minimal"
          },
          "name": "footwear_left_outside",
          "bind": {
            "required": "TRUE"
          },
          "label": {
            "English": "C.1 Outside footwear left outside farm"
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
            "appearance": "w5 minimal"
          },
          "name": "change_clothes_upon_entering_farm",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "use_dedicated_footwear",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "shower_before_enter_farm",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "materials_cleaned",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "materials_disinfect",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "dead_bird_manage_practice",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w5 minimal"
          },
          "name": "entry_means_verification",
          "bind": {
            "required": "TRUE"
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
        "appearance": "w10"
      },
      "label": {
        "English": "Antibacterial usage"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "name": "use_antibiotics",
          "bind": {
            "required": "TRUE"
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
            "appearance": "w10"
          },
          "name": "g1",
          "bind": {
            "relevant": "${use_antibiotics}=1"
          },
          "label": {
            "English": "Antibiotic uses information (1)"
          },
          "type": "group",
          "children": [
            {
              "control": {
                "appearance": "w10 horizontal-compact"
              },
              "name": "product1_type",
              "bind": {
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
                "appearance": "w10 search('medicine') minimal"
              },
              "name": "product1",
              "bind": {
                "readonly": "${product1_type}=2",
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
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g1"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product1_generic1",
              "bind": {
                "readonly": "${product1_type}=1",
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
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g2"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product1_generic2",
              "bind": {
                "readonly": "${product1_type}=1",
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
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g3"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product1_generic3",
              "bind": {
                "readonly": "${product1_type}=1",
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
                "calculate": "if(${product1_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product1}),'')"
              },
              "type": "calculate",
              "name": "p1_g4"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product1_generic4",
              "bind": {
                "readonly": "${product1_type}=1",
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
                "appearance": "w5 minimal"
              },
              "name": "product1_source",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product1_purpose",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product1_route",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product1_frequency",
              "bind": {
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
          "bind": {
            "relevant": "${use_antibiotics}=1"
          },
          "label": {
            "English": "Antibiotic uses information (2)"
          },
          "type": "group",
          "children": [
            {
              "control": {
                "appearance": "w10 horizontal-compact"
              },
              "name": "product2_type",
              "bind": {
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
                "appearance": "w10 search('medicine') minimal"
              },
              "name": "product2",
              "bind": {
                "readonly": "${product2_type}=2",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g1"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product2_generic1",
              "bind": {
                "readonly": "${product2_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g2"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product2_generic2",
              "bind": {
                "readonly": "${product2_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g3"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product2_generic3",
              "bind": {
                "readonly": "${product2_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product2}),'')"
              },
              "type": "calculate",
              "name": "p2_g4"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product2_generic4",
              "bind": {
                "readonly": "${product2_type}=1",
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
                "appearance": "w5 minimal"
              },
              "name": "product2_source",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product2_purpose",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product2_route",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product2_frequency",
              "bind": {
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
          ],
          "name": "g2"
        },
        {
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
                "appearance": "w10 horizontal-compact"
              },
              "name": "product3_type",
              "bind": {
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
                "appearance": "w10 search('medicine') minimal"
              },
              "name": "product3",
              "bind": {
                "readonly": "${product3_type}=2",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g1"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product3_generic1",
              "bind": {
                "readonly": "${product3_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g2"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product3_generic2",
              "bind": {
                "readonly": "${product3_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g3"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product3_generic3",
              "bind": {
                "readonly": "${product3_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product3}),'')"
              },
              "type": "calculate",
              "name": "p3_g4"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product3_generic4",
              "bind": {
                "readonly": "${product3_type}=1",
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
                "appearance": "w5 minimal"
              },
              "name": "product3_source",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product3_purpose",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product3_route",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product3_frequency",
              "bind": {
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
          ],
          "name": "g3"
        },
        {
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
                "appearance": "w10 horizontal-compact"
              },
              "name": "product4_type",
              "bind": {
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
                "appearance": "w10 search('medicine') minimal"
              },
              "name": "product4",
              "bind": {
                "readonly": "${product4_type}=2",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g1"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product4_generic1",
              "bind": {
                "readonly": "${product4_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g2"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product4_generic2",
              "bind": {
                "readonly": "${product4_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g3"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product4_generic3",
              "bind": {
                "readonly": "${product4_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product4}),'')"
              },
              "type": "calculate",
              "name": "p4_g4"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product4_generic4",
              "bind": {
                "readonly": "${product4_type}=1",
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
                "appearance": "w5 minimal"
              },
              "name": "product4_source",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product4_purpose",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product4_route",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product4_frequency",
              "bind": {
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
          ],
          "name": "g4"
        },
        {
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
                "appearance": "w10 horizontal-compact"
              },
              "name": "product5_type",
              "bind": {
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
                "appearance": "w10 search('medicine') minimal"
              },
              "name": "product5",
              "bind": {
                "readonly": "${product5_type}=2",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic1', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g1"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product5_generic1",
              "bind": {
                "readonly": "${product5_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic2', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g2"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product5_generic2",
              "bind": {
                "readonly": "${product5_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic3', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g3"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product5_generic3",
              "bind": {
                "readonly": "${product5_type}=1",
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
                "calculate": "if(${product2_type}=1,pulldata('medicine', 'generic4', 'product_id', ${product5}),'')"
              },
              "type": "calculate",
              "name": "p5_g4"
            },
            {
              "control": {
                "appearance": "w5 search('medicine') minimal"
              },
              "name": "product5_generic4",
              "bind": {
                "readonly": "${product5_type}=1",
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
                "appearance": "w5 minimal"
              },
              "name": "product5_source",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product5_purpose",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product5_route",
              "bind": {
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
                "appearance": "w5 minimal"
              },
              "name": "product5_frequency",
              "bind": {
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
          ],
          "name": "g5"
        }
      ],
      "name": "antibacterial_use"
    },
    {
      "control": {
        "appearance": "w10"
      },
      "label": {
        "English": "36. Describe the farmer’s concerns. What would the farmer like assistance with?"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "farmer_concern1",
          "label": {
            "English": "1."
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "farmer_concern2",
          "label": {
            "English": "2."
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "farmer_concern3",
          "label": {
            "English": "3."
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "farmer_concern4",
          "label": {
            "English": "4."
          }
        },
        {
          "control": {
            "appearance": "w5"
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
        "appearance": "w10"
      },
      "label": {
        "English": "37. Provide a list of new biosecurity practices agreed with farmer"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "biosecurity1",
          "label": {
            "English": "1."
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "biosecurity2",
          "label": {
            "English": "2."
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "biosecurity3",
          "label": {
            "English": "3."
          }
        },
        {
          "control": {
            "appearance": "w5"
          },
          "type": "text",
          "name": "biosecurity4",
          "label": {
            "English": "4."
          }
        },
        {
          "control": {
            "appearance": "w5"
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
        "appearance": "w10"
      },
      "label": {
        "English": "Administration"
      },
      "type": "group",
      "children": [
        {
          "control": {
            "appearance": "w5 search('staff') minimal"
          },
          "label": {
            "English": "field_staff1"
          },
          "type": "select one",
          "children": [
            {
              "name": "staff_code",
              "label": {
                "English": "staff_label"
              }
            }
          ],
          "name": "field_staff1"
        },
        {
          "control": {
            "appearance": "w5 search('staff') minimal"
          },
          "label": {
            "English": "field_staff1"
          },
          "type": "select one",
          "children": [
            {
              "name": "staff_code",
              "label": {
                "English": "staff_label"
              }
            }
          ],
          "name": "field_staff2"
        },
        {
          "control": {
            "appearance": "w5 search('staff') minimal"
          },
          "name": "acknowledge",
          "bind": {
            "required": "yes"
          },
          "label": {
            "English": "Acknowledged by:"
          },
          "type": "select one",
          "children": [
            {
              "name": "staff_code",
              "label": {
                "English": "staff_label"
              }
            }
          ]
        },
        {
          "control": {
            "appearance": "w5 search('staff') minimal"
          },
          "label": {
            "English": "Approved by:"
          },
          "type": "select one",
          "children": [
            {
              "name": "staff_code",
              "label": {
                "English": "staff_label"
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
};

export const sampleUserInput = {};

// export const CSV_LIST = {"geo.csv":[{"mouza_loc_type":"5","mouza_code":"20030431142","mouza_name":"ALIKADAM","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030431284","mouza_name":"CHAIMFRA","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030431994","mouza_name":"TAINFA","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463426","mouza_name":"CHOKHYONG","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463568","mouza_name":"MANGU","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463700","mouza_name":"MATAMUHURI R.F.","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463852","mouza_name":"TAIN","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463999","mouza_name":"CHOKHYONG","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"}]};

export const CSV_LIST = {
  "medicine.csv": [
    {
      "generic4_label": "Sulfapyridine",
      "generic3_label": "Sulfadimidine",
      "product_id": "1",
      "generic2_label": "Sulfadiazine",
      "product_label": "3S Plus",
      "generic4": "52",
      "generic1": "49",
      "generic3": "51",
      "generic2": "50",
      "generic1_label": "Streptomycin"
    }
  ],
  "geo.csv": [
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030431142",
      "mouza_name": "ALIKADAM",
      "mouza_parent": "20030431",
      "division_name": "CHITTAGONG",
      "union_code": "20030431",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "ALIKADAM",
      "district_name": "BANDARBAN"
    },
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030431284",
      "mouza_name": "CHAIMFRA",
      "mouza_parent": "20030431",
      "division_name": "CHITTAGONG",
      "union_code": "20030431",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "ALIKADAM",
      "district_name": "BANDARBAN"
    },
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030431994",
      "mouza_name": "TAINFA",
      "mouza_parent": "20030431",
      "division_name": "CHITTAGONG",
      "union_code": "20030431",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "ALIKADAM",
      "district_name": "BANDARBAN"
    },
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030463426",
      "mouza_name": "CHOKHYONG",
      "mouza_parent": "20030463",
      "division_name": "CHITTAGONG",
      "union_code": "20030463",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "CHOKHYONG",
      "district_name": "BANDARBAN"
    },
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030463568",
      "mouza_name": "MANGU",
      "mouza_parent": "20030463",
      "division_name": "CHITTAGONG",
      "union_code": "20030463",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "CHOKHYONG",
      "district_name": "BANDARBAN"
    },
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030463700",
      "mouza_name": "MATAMUHURI R.F.",
      "mouza_parent": "20030463",
      "division_name": "CHITTAGONG",
      "union_code": "20030463",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "CHOKHYONG",
      "district_name": "BANDARBAN"
    },
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030463852",
      "mouza_name": "TAIN",
      "mouza_parent": "20030463",
      "division_name": "CHITTAGONG",
      "union_code": "20030463",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "CHOKHYONG",
      "district_name": "BANDARBAN"
    },
    {
      "mouza_loc_type": "5",
      "mouza_code": "20030463999",
      "mouza_name": "CHOKHYONG",
      "mouza_parent": "20030463",
      "division_name": "CHITTAGONG",
      "union_code": "20030463",
      "upazila_code": "200304",
      "upazila_name": "ALIKADAM",
      "district_code": "2003",
      "division_code": "20",
      "union_name": "CHOKHYONG",
      "district_name": "BANDARBAN"
    }
  ],
  "staff.csv": [
    {
      "staff_label": "Ahsan Ullah Sumon",
      "staff_code": "1",
      "designation": " SALO"
    }
  ]
};

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
