/* tslint:disable */
export const DEMO_FORM_JSON = {
   "style": "theme-grid",
   "name": "participatory_livestock_assessment",
   "title": "Participatory Livestock Assessment",
   "sms_keyword": "participatory_livestock_assessment",
   "default_language": "default",
   "choices": {
     "do_when_bird_sick": [
       {
         "name": "1",
         "label": {
           "English": "Slaughter & consume"
         }
       },
       {
         "name": "2",
         "label": {
           "English": "Medicate (vet.)"
         }
       },
       {
         "name": "3",
         "label": {
           "English": "Sell"
         }
       },
       {
         "name": "4",
         "label": {
           "English": "Medicate (pharmacist)"
         }
       },
       {
         "name": "5",
         "label": {
           "English": "Medicate (quack)"
         }
       },
       {
         "name": "6",
         "label": {
           "English": "Medicate (homemade remedy)"
         }
       },
       {
         "name": "7",
         "label": {
           "English": "Watch and See"
         }
       },
       {
         "name": "99",
         "label": {
           "English": "Other"
         }
       }
     ],
     "division": [
       {
         "name": "division_code",
         "label": {
           "English": "division_name"
         }
       }
     ],
     "district": [
       {
         "name": "district_code",
         "label": {
           "English": "district_name"
         }
       }
     ],
     "do_when_bird_dead": [
       {
         "name": "1",
         "label": {
           "English": "Bury"
         }
       },
       {
         "name": "2",
         "label": {
           "English": "Sell"
         }
       },
       {
         "name": "3",
         "label": {
           "English": "Consume"
         }
       },
       {
         "name": "4",
         "label": {
           "English": "Give away to poor"
         }
       },
       {
         "name": "5",
         "label": {
           "English": "Throw into river"
         }
       },
       {
         "name": "6",
         "label": {
           "English": "Throw away in bush"
         }
       },
       {
         "name": "7",
         "label": {
           "English": "Fish pond"
         }
       },
       {
         "name": "99",
         "label": {
           "English": "Other"
         }
       }
     ],
     "mouza": [
       {
         "name": "mouza_code",
         "label": {
           "English": "mouza_name"
         }
       }
     ],
     "animal_reared": [
       {
         "name": "1",
         "label": {
           "English": "Cattle"
         }
       },
       {
         "name": "2",
         "label": {
           "English": "Buffalo"
         }
       },
       {
         "name": "3",
         "label": {
           "English": "Goat"
         }
       },
       {
         "name": "4",
         "label": {
           "English": "Sheep"
         }
       },
       {
         "name": "5",
         "label": {
           "English": "Chicken"
         }
       },
       {
         "name": "6",
         "label": {
           "English": "Duck"
         }
       },
       {
         "name": "7",
         "label": {
           "English": "Pigeon"
         }
       },
       {
         "name": "8",
         "label": {
           "English": "Quail"
         }
       },
       {
         "name": "9",
         "label": {
           "English": "Turkey"
         }
       },
       {
         "name": "99",
         "label": {
           "English": "Other"
         }
       }
     ],
     "staff_list": [
       {
         "name": "1",
         "label": {
           "English": "A"
         }
       },
       {
         "name": "2",
         "label": {
           "English": "B"
         }
       },
       {
         "name": "3",
         "label": {
           "English": "C"
         }
       }
     ],
     "upazila": [
       {
         "name": "upazila_code",
         "label": {
           "English": "upazila_name"
         }
       }
     ],
     "yes_no": [
       {
         "name": "1",
         "label": {
           "English": "Yes"
         }
       },
       {
         "name": "2",
         "label": {
           "English": "No"
         }
       }
     ],
     "union": [
       {
         "name": "union_code",
         "label": {
           "English": "union_name"
         }
       }
     ]
   },
   "id_string": "participatory_livestock_assessment",
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
       "type": "group",
       "children": [
         {
           "control": {
             "appearance": "w6"
           },
           "bind": {
             "required": "yes"
           },
           "type": "date",
           "name": "date",
           "label": {
             "English": "1. Visit Date"
           }
         },
         {
           "control": {
             "appearance": "w6 search('geo') minimal"
           },
           "name": "division",
           "bind": {
             "required": "TRUE"
           },
           "label": {
             "English": "2. Division"
           },
           "type": "select one",
           "children": [
             {
               "name": "division_code",
               "label": {
                 "English": "division_name"
               }
             }
           ]
         },
         {
           "control": {
             "appearance": "w6 search('geo', 'matches', 'division_code', ${division}) minimal"
           },
           "name": "district",
           "bind": {
             "required": "TRUE"
           },
           "label": {
             "English": "3. District"
           },
           "type": "select one",
           "children": [
             {
               "name": "district_code",
               "label": {
                 "English": "district_name"
               }
             }
           ]
         },
         {
           "control": {
             "appearance": "w6 search('geo', 'matches', 'district_code', ${district}) minimal"
           },
           "name": "upazila",
           "bind": {
             "required": "TRUE"
           },
           "label": {
             "English": "4. Upazila"
           },
           "type": "select one",
           "children": [
             {
               "name": "upazila_code",
               "label": {
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
             "required": "TRUE"
           },
           "label": {
             "English": "5. Union/City"
           },
           "type": "select one",
           "children": [
             {
               "name": "union_code",
               "label": {
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
             "required": "TRUE"
           },
           "label": {
             "English": "6. Mouza/Ward"
           },
           "type": "select one",
           "children": [
             {
               "name": "mouza_code",
               "label": {
                 "English": "mouza_name"
               }
             }
           ]
         },
         {
           "control": {
             "appearance": "w6"
           },
           "bind": {
             "required": "TRUE"
           },
           "type": "text",
           "name": "village",
           "label": {
             "English": "7. Village"
           }
         },
         {
           "control": {
             "appearance": "w6"
           },
           "bind": {
             "required": "yes"
           },
           "type": "text",
           "name": "focal_person",
           "label": {
             "English": "8. Name of Community focal person"
           }
         },
         {
           "control": {
             "appearance": "w6"
           },
           "name": "mobile",
           "default": "Put 11 digit",
           "bind": {
             "jr:constraintMsg": "Put 11 digit",
             "constraint": "regex(., '^[0-9]{11}$')"
           },
           "label": {
             "English": "9. Phone Number"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w6"
           },
           "type": "text",
           "name": "latitude",
           "label": {
             "English": "10a. Latitude"
           }
         },
         {
           "control": {
             "appearance": "w6"
           },
           "type": "text",
           "name": "longitude",
           "label": {
             "English": "10b. Longitude"
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
         "English": "11. Number of participants"
       },
       "type": "group",
       "children": [
         {
           "control": {
             "appearance": "w4"
           },
           "bind": {
             "required": "yes"
           },
           "type": "integer",
           "name": "adult_female",
           "label": {
             "English": "Adult Female"
           }
         },
         {
           "control": {
             "appearance": "w4"
           },
           "bind": {
             "required": "yes"
           },
           "type": "integer",
           "name": "adult_male",
           "label": {
             "English": "Adult Male"
           }
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "integer",
           "name": "children",
           "label": {
             "English": "Children"
           }
         }
       ],
       "name": "participant"
     },
     {
       "control": {
         "appearance": "w12"
       },
       "label": {
         "English": "Species of animals which reared in the village"
       },
       "type": "group",
       "children": [
         {
           "control": {
             "appearance": "w12 horizontal-compact"
           },
           "label": {
             "English": "12. Which species of animals are reared in the village (check all that apply):"
           },
           "type": "select all that apply",
           "children": [
             {
               "name": "1",
               "label": {
                 "English": "Cattle"
               }
             },
             {
               "name": "2",
               "label": {
                 "English": "Buffalo"
               }
             },
             {
               "name": "3",
               "label": {
                 "English": "Goat"
               }
             },
             {
               "name": "4",
               "label": {
                 "English": "Sheep"
               }
             },
             {
               "name": "5",
               "label": {
                 "English": "Chicken"
               }
             },
             {
               "name": "6",
               "label": {
                 "English": "Duck"
               }
             },
             {
               "name": "7",
               "label": {
                 "English": "Pigeon"
               }
             },
             {
               "name": "8",
               "label": {
                 "English": "Quail"
               }
             },
             {
               "name": "9",
               "label": {
                 "English": "Turkey"
               }
             },
             {
               "name": "99",
               "label": {
                 "English": "Other"
               }
             }
           ],
           "name": "animal_reared"
         },
         {
           "control": {
             "appearance": "w12"
           },
           "bind": {
             "relevant": "selected(${animal_reared},'10')",
             "required": "yes"
           },
           "type": "text",
           "name": "animal_reared_other",
           "label": {
             "English": "Specify Other"
           }
         }
       ],
       "name": "a_reared"
     },
     {
       "control": {
         "appearance": "w12"
       },
       "label": {
         "English": "13. Top 5 ranking and proportion of animals in that village according to population and economic importance"
       },
       "type": "group",
       "children": [
         {
           "control": {
             "appearance": "w7"
           },
           "type": "note",
           "name": "note_pop",
           "label": {
             "English": "Population"
           }
         },
         {
           "control": {
             "appearance": "w5"
           },
           "type": "note",
           "name": "eco_eco",
           "label": {
             "English": "Economic Importance"
           }
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank1_pop",
           "default": "1",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>0"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w3 minimal"
           },
           "name": "rank1_species_number",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "relevant": "count-selected(${animal_reared})>0"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w3"
           },
           "bind": {
             "relevant": "count-selected(${animal_reared})>0",
             "constraint": ".<=100 and .>=0"
           },
           "type": "decimal",
           "name": "rank1_species_percent",
           "label": {
             "English": "Proportion (%)"
           }
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank1_eco",
           "default": "1",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>0"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "name": "rank1_species_economic_importance",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "relevant": "count-selected(${animal_reared})>0"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank2_pop",
           "default": "2",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>1"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w3 minimal"
           },
           "name": "rank2_species_number",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>1",
             "constraint": ".!= ${rank1_species_number}"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w3"
           },
           "bind": {
             "jr:constraintMsg": "Please enter the proportions from largest to smallest",
             "relevant": "count-selected(${animal_reared})>1",
             "constraint": ".<=${rank1_species_percent}"
           },
           "type": "decimal",
           "name": "rank2_species_percent",
           "label": {
             "English": "Proportion (%)"
           }
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank2_eco",
           "default": "2",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>1"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "name": "rank2_species_economic_importance",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>1",
             "constraint": ".!= ${rank1_species_economic_importance}"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank3_pop",
           "default": "3",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>2"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w3 minimal"
           },
           "name": "rank3_species_number",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>2",
             "constraint": "(. != ${rank1_species_number}) and ( . != ${rank2_species_number})"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w3"
           },
           "bind": {
             "jr:constraintMsg": "Please enter the proportions from largest to smallest",
             "relevant": "count-selected(${animal_reared})>2",
             "constraint": ".<=${rank2_species_percent}"
           },
           "type": "decimal",
           "name": "rank3_species_percent",
           "label": {
             "English": "Proportion (%)"
           }
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank3_eco",
           "default": "3",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>2"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "name": "rank3_species_economic_importance",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>2",
             "constraint": "(. != ${rank1_species_economic_importance}) and ( . != ${rank2_species_economic_importance})"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank4_pop",
           "default": "4",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>3"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w3 minimal"
           },
           "name": "rank4_species_number",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>3",
             "constraint": "(. != ${rank1_species_number}) and ( . != ${rank2_species_number}) and ( . != ${rank3_species_number})"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w3"
           },
           "bind": {
             "jr:constraintMsg": "Please enter the proportions from largest to smallest",
             "relevant": "count-selected(${animal_reared})>3",
             "constraint": ".<=${rank3_species_percent}"
           },
           "type": "decimal",
           "name": "rank4_species_percent",
           "label": {
             "English": "Proportion (%)"
           }
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank4_eco",
           "default": "4",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>3"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "name": "rank4_species_economic_importance",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>3",
             "constraint": "(. != ${rank1_species_economic_importance}) and ( . != ${rank2_species_economic_importance}) and ( . != ${rank3_species_economic_importance})"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank5_pop",
           "default": "5",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>4"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w3 minimal"
           },
           "name": "rank5_species_number",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>4",
             "constraint": "(. != ${rank1_species_number}) and ( . != ${rank2_species_number}) and ( . != ${rank3_species_number}) and ( . != ${rank4_species_number})"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         },
         {
           "control": {
             "appearance": "w3"
           },
           "bind": {
             "jr:constraintMsg": "Please enter the proportions from largest to smallest",
             "relevant": "count-selected(${animal_reared})>4",
             "constraint": ".<=${rank4_species_percent}"
           },
           "type": "decimal",
           "name": "rank5_species_percent",
           "label": {
             "English": "Proportion (%)"
           }
         },
         {
           "control": {
             "appearance": "w1"
           },
           "name": "rank5_eco",
           "default": "5",
           "bind": {
             "readonly": "TRUE",
             "relevant": "count-selected(${animal_reared})>4"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "name": "rank5_species_economic_importance",
           "choice_filter": "selected(${animal_reared},name)",
           "bind": {
             "jr:constraintMsg": "This option already picked",
             "relevant": "count-selected(${animal_reared})>4",
             "constraint": "(. != ${rank1_species_economic_importance}) and ( . != ${rank2_species_economic_importance}) and ( . != ${rank3_species_economic_importance}) and ( . != ${rank4_species_economic_importance})"
           },
           "label": {
             "English": "Species"
           },
           "itemset": "animal_reared",
           "type": "select one"
         }
       ],
       "name": "rank_species"
     },
     {
       "control": {
         "appearance": "w12"
       },
       "label": {
         "English": "14. Check the species on which the discussion was focused on and write the illness reported by the community"
       },
       "type": "group",
       "children": [
         {
           "control": {
             "appearance": "w6"
           },
           "type": "note",
           "name": "species_illness_cattle",
           "label": {
             "English": "Cattle"
           }
         },
         {
           "control": {
             "appearance": "w6"
           },
           "type": "note",
           "name": "species_illness_buffalo",
           "label": {
             "English": "Buffalo"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "c_rank_illness1",
           "default": "1",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "c_rank_illness_type1",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "b_rank_illness1",
           "default": "1",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "b_rank_illness_type1",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "c_rank_illness2",
           "default": "2",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "c_rank_illness_type2",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "b_rank_illness2",
           "default": "2",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "b_rank_illness_type2",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "c_rank_illness3",
           "default": "3",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "c_rank_illness_type3",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "b_rank_illness3",
           "default": "3",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "b_rank_illness_type3",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "c_rank_illness4",
           "default": "4",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "c_rank_illness_type4",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "b_rank_illness4",
           "default": "4",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "b_rank_illness_type4",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "c_rank_illness5",
           "default": "5",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "c_rank_illness_type5",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "b_rank_illness5",
           "default": "5",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "b_rank_illness_type5",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w6"
           },
           "type": "note",
           "name": "species_illness_goat",
           "label": {
             "English": "Goat"
           }
         },
         {
           "control": {
             "appearance": "w6"
           },
           "type": "note",
           "name": "species_illness_poultry",
           "label": {
             "English": "Poultry"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "g_rank_illness1",
           "default": "1",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "g_rank_illness_type1",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "p_rank_illness1",
           "default": "1",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "p_rank_illness_type1",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "g_rank_illness2",
           "default": "2",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "g_rank_illness_type2",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "p_rank_illness2",
           "default": "2",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "p_rank_illness_type2",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "g_rank_illness3",
           "default": "3",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "g_rank_illness_type3",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "p_rank_illness3",
           "default": "3",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "p_rank_illness_type3",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "g_rank_illness4",
           "default": "4",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "g_rank_illness_type4",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "p_rank_illness4",
           "default": "4",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "p_rank_illness_type4",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "g_rank_illness5",
           "default": "5",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "g_rank_illness_type5",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w2"
           },
           "name": "p_rank_illness5",
           "default": "5",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "p_rank_illness_type5",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w12"
           },
           "type": "note",
           "name": "species_illness_other",
           "label": {
             "English": "Other"
           }
         },
         {
           "control": {
             "appearance": "w10"
           },
           "type": "text",
           "name": "species_illness_other_name",
           "label": {
             "English": "Specify other"
           }
         },
         {
           "control": {
             "appearance": "w3"
           },
           "name": "o_rank_illness1",
           "default": "1",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w7"
           },
           "type": "text",
           "name": "o_rank_illness_type1",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w3"
           },
           "name": "o_rank_illness2",
           "default": "2",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w7"
           },
           "type": "text",
           "name": "o_rank_illness_type2",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w3"
           },
           "name": "o_rank_illness3",
           "default": "3",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w7"
           },
           "type": "text",
           "name": "o_rank_illness_type3",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w3"
           },
           "name": "o_rank_illness4",
           "default": "4",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w7"
           },
           "type": "text",
           "name": "o_rank_illness_type4",
           "label": {
             "English": "Illness"
           }
         },
         {
           "control": {
             "appearance": "w3"
           },
           "name": "o_rank_illness5",
           "default": "5",
           "bind": {
             "readonly": "TRUE"
           },
           "label": {
             "English": "Rank"
           },
           "type": "text"
         },
         {
           "control": {
             "appearance": "w7"
           },
           "type": "text",
           "name": "o_rank_illness_type5",
           "label": {
             "English": "Illness"
           }
         }
       ],
       "name": "illness"
     },
     {
       "control": {
         "appearance": "minimal"
       },
       "label": {
         "English": "15. What do you do when birds are sick? (check all that apply):"
       },
       "type": "select all that apply",
       "children": [
         {
           "name": "1",
           "label": {
             "English": "Slaughter & consume"
           }
         },
         {
           "name": "2",
           "label": {
             "English": "Medicate (vet.)"
           }
         },
         {
           "name": "3",
           "label": {
             "English": "Sell"
           }
         },
         {
           "name": "4",
           "label": {
             "English": "Medicate (pharmacist)"
           }
         },
         {
           "name": "5",
           "label": {
             "English": "Medicate (quack)"
           }
         },
         {
           "name": "6",
           "label": {
             "English": "Medicate (homemade remedy)"
           }
         },
         {
           "name": "7",
           "label": {
             "English": "Watch and See"
           }
         },
         {
           "name": "99",
           "label": {
             "English": "Other"
           }
         }
       ],
       "name": "bird_sickness_action"
     },
     {
       "bind": {
         "relevant": "selected(${bird_sickness_action},'99')"
       },
       "type": "text",
       "name": "bird_sickness_action_other",
       "label": {
         "English": "15a. Specify Other-What do you do when birds are sick?"
       }
     },
     {
       "control": {
         "appearance": "minimal"
       },
       "label": {
         "English": "16. What do you do with dead birds?"
       },
       "type": "select all that apply",
       "children": [
         {
           "name": "1",
           "label": {
             "English": "Bury"
           }
         },
         {
           "name": "2",
           "label": {
             "English": "Sell"
           }
         },
         {
           "name": "3",
           "label": {
             "English": "Consume"
           }
         },
         {
           "name": "4",
           "label": {
             "English": "Give away to poor"
           }
         },
         {
           "name": "5",
           "label": {
             "English": "Throw into river"
           }
         },
         {
           "name": "6",
           "label": {
             "English": "Throw away in bush"
           }
         },
         {
           "name": "7",
           "label": {
             "English": "Fish pond"
           }
         },
         {
           "name": "99",
           "label": {
             "English": "Other"
           }
         }
       ],
       "name": "bird_dead_action"
     },
     {
       "bind": {
         "relevant": "selected(${bird_dead_action},'99')"
       },
       "type": "text",
       "name": "bird_dead_action_info",
       "label": {
         "English": "16a. Specify Other - What do you do with dead birds?"
       }
     },
     {
       "control": {
         "appearance": "multiline"
       },
       "type": "text",
       "name": "unusual_info",
       "label": {
         "English": "17. Describe any unusual/surprising information learned by the team from the community?"
       }
     },
     {
       "control": {
         "appearance": "w12"
       },
       "label": {
         "English": "18. Problems identified by the community and actions taken"
       },
       "type": "group",
       "children": [
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "problem1_identified",
           "label": {
             "English": "1. Problem Identified"
           }
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "label": {
             "English": "Action needed"
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
               "name": "2",
               "label": {
                 "English": "No"
               }
             }
           ],
           "name": "problem1_action"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "bind": {
             "relevant": "${problem1_action}=1"
           },
           "type": "text",
           "name": "problem1_action_description",
           "label": {
             "English": "Action Taken"
           }
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "problem2_identified",
           "label": {
             "English": "2. Problem Identified"
           }
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "label": {
             "English": "Action needed"
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
               "name": "2",
               "label": {
                 "English": "No"
               }
             }
           ],
           "name": "problem2_action"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "bind": {
             "relevant": "${problem2_action}=1"
           },
           "type": "text",
           "name": "problem2_action_description",
           "label": {
             "English": "Action Taken"
           }
         },
         {
           "control": {
             "appearance": "w4"
           },
           "type": "text",
           "name": "problem3_identified",
           "label": {
             "English": "3. Problem Identified"
           }
         },
         {
           "control": {
             "appearance": "w4 minimal"
           },
           "label": {
             "English": "Action needed"
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
               "name": "2",
               "label": {
                 "English": "No"
               }
             }
           ],
           "name": "problem3_action"
         },
         {
           "control": {
             "appearance": "w4"
           },
           "bind": {
             "relevant": "${problem3_action}=1"
           },
           "type": "text",
           "name": "problem3_identified_description",
           "label": {
             "English": "Action Taken"
           }
         }
       ],
       "name": "problem"
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
             "appearance": "w6 minimal"
           },
           "name": "field_staff1",
           "bind": {
             "required": "yes"
           },
           "label": {
             "English": "Office/Staff-1"
           },
           "type": "select one",
           "children": [
             {
               "name": "1",
               "label": {
                 "English": "A"
               }
             },
             {
               "name": "2",
               "label": {
                 "English": "B"
               }
             },
             {
               "name": "3",
               "label": {
                 "English": "C"
               }
             }
           ]
         },
         {
           "control": {
             "appearance": "w6 minimal"
           },
           "label": {
             "English": "Office/Staff-2"
           },
           "type": "select one",
           "children": [
             {
               "name": "1",
               "label": {
                 "English": "A"
               }
             },
             {
               "name": "2",
               "label": {
                 "English": "B"
               }
             },
             {
               "name": "3",
               "label": {
                 "English": "C"
               }
             }
           ],
           "name": "field_staff2"
         },
         {
           "control": {
             "appearance": "w6 minimal"
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
               "name": "1",
               "label": {
                 "English": "A"
               }
             },
             {
               "name": "2",
               "label": {
                 "English": "B"
               }
             },
             {
               "name": "3",
               "label": {
                 "English": "C"
               }
             }
           ]
         },
         {
           "control": {
             "appearance": "w6 minimal"
           },
           "name": "approve",
           "bind": {
             "required": "yes"
           },
           "label": {
             "English": "Approved by:"
           },
           "type": "select one",
           "children": [
             {
               "name": "1",
               "label": {
                 "English": "A"
               }
             },
             {
               "name": "2",
               "label": {
                 "English": "B"
               }
             },
             {
               "name": "3",
               "label": {
                 "English": "C"
               }
             }
           ]
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
  "username":"fao_admin"
};

// export const CSV_LIST = {"geo.csv":[{"mouza_loc_type":"5","mouza_code":"20030431142","mouza_name":"ALIKADAM","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030431284","mouza_name":"CHAIMFRA","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030431994","mouza_name":"TAINFA","mouza_parent":"20030431","division_name":"CHITTAGONG","union_code":"20030431","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"ALIKADAM","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463426","mouza_name":"CHOKHYONG","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463568","mouza_name":"MANGU","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463700","mouza_name":"MATAMUHURI R.F.","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463852","mouza_name":"TAIN","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"},{"mouza_loc_type":"5","mouza_code":"20030463999","mouza_name":"CHOKHYONG","mouza_parent":"20030463","division_name":"CHITTAGONG","union_code":"20030463","upazila_code":"200304","upazila_name":"ALIKADAM","district_code":"2003","division_code":"20","union_name":"CHOKHYONG","district_name":"BANDARBAN"}]};

export const CSV_LIST = {
  "clinical_species.csv": [
    {
      "signnames": "Abdominal pain",
      "speciestype": "1",
      "signid": "1"
    },
    {
      "signnames": "Abortion in first trimester",
      "speciestype": "1",
      "signid": "2"
    },
    {
      "signnames": "Abnormal eggs",
      "speciestype": "2",
      "signid": "1"
    },
    {
      "signnames": "Anaemia",
      "speciestype": "2",
      "signid": "7"
    }
  ],
  "species_live.csv": [
    {
      "speciesid": "1",
      "speciesname": "Buffalo"
    },
    {
      "speciesid": "2",
      "speciesname": "Cat"
    },
    {
      "speciesid": "21",
      "speciesname": "Chicken"
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


