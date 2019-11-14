export declare const GROUP_FIELD_TYPE = "group";
export declare type GROUP_FIELD_TYPE = typeof GROUP_FIELD_TYPE;
export declare const REPEAT_FIELD_TYPE = "repeat";
export declare type REPEAT_FIELD_TYPE = typeof REPEAT_FIELD_TYPE;
export declare const TEXT_FIELD_TYPE = "text";
export declare type TEXT_FIELD_TYPE = typeof TEXT_FIELD_TYPE;
export declare const DATE_FIELD_TYPE = "date";
export declare type DATE_FIELD_TYPE = typeof DATE_FIELD_TYPE;
export declare const DATE_TIME_FIELD_TYPE = "dateTime";
export declare type DATE_TIME_FIELD_TYPE = typeof DATE_TIME_FIELD_TYPE;
export declare const INTEGER_FIELD_TYPE = "integer";
export declare type INTEGER_FIELD_TYPE = typeof INTEGER_FIELD_TYPE;
export declare const DECIMAL_FIELD_TYPE = "decimal";
export declare type DECIMAL_FIELD_TYPE = typeof DECIMAL_FIELD_TYPE;
export declare const PHOTO_FIELD_TYPE = "photo";
export declare type PHOTO_FIELD_TYPE = typeof PHOTO_FIELD_TYPE;
export declare const NOTE_FIELD_TYPE = "note";
export declare type NOTE_FIELD_TYPE = typeof NOTE_FIELD_TYPE;
export declare const SELECT_ONE_FIELD_TYPE = "select one";
export declare type SELECT_ONE_FIELD_TYPE = typeof SELECT_ONE_FIELD_TYPE;
export declare const SELECT_ALL_FIELD_TYPE = "select all that apply";
export declare type SELECT_ALL_FIELD_TYPE = typeof SELECT_ALL_FIELD_TYPE;
export declare const REQUIRED_FIELD_MSG = "This field is required";
export declare type REQUIRED_FIELD_MSG = typeof REQUIRED_FIELD_MSG;
export declare const REQUIRED_SYMBOL = "*";
export declare type REQUIRED_SYMBOL = typeof REQUIRED_SYMBOL;
export declare const DEMO_FORM_JSON: {
    "default_language": string;
    "children": ({
        "name": string;
        "type": string;
        "label"?: undefined;
        "control"?: undefined;
        "children"?: undefined;
    } | {
        "name": string;
        "label": {
            "Bangla": string;
            "English": string;
        };
        "type": string;
        "control"?: undefined;
        "children"?: undefined;
    } | {
        "control": {
            "appearance": string;
            "bodyless"?: undefined;
        };
        "children": ({
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "jr:constraintMsg": {
                    "Bangla": string;
                    "English": string;
                };
                "required": string;
                "constraint": string;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "required": string;
                "jr:constraintMsg"?: undefined;
                "constraint"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "children": {
                "name": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
            }[];
            "name": string;
            "bind": {
                "required": string;
                "jr:constraintMsg"?: undefined;
                "constraint"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
        } | {
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "jr:constraintMsg": {
                    "Bangla": string;
                    "English": string;
                };
                "constraint": string;
                "required"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
        })[];
        "name": string;
        "label": {
            "Bangla": string;
            "English": string;
        };
        "type": string;
    } | {
        "control": {
            "appearance": string;
            "bodyless"?: undefined;
        };
        "name": string;
        "label": {
            "Bangla": string;
            "English": string;
        };
        "type": string;
        "children"?: undefined;
    } | {
        "control": {
            "appearance": string;
            "bodyless"?: undefined;
        };
        "children": ({
            "control": {
                "appearance": string;
            };
            "children": {
                "name": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
            }[];
            "name": string;
            "bind": {
                "required": string;
                "calculate"?: undefined;
                "relevant"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "media"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "name": string;
            "bind": {
                "calculate": string;
                "required"?: undefined;
                "relevant"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English"?: undefined;
            };
            "type": string;
            "control"?: undefined;
            "children"?: undefined;
            "media"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "relevant": string;
                "required": string;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
            "media"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "children": {
                "name": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
            }[];
            "name": string;
            "bind": {
                "relevant": string;
                "required": string;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "media"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "required": string;
                "calculate": string;
                "relevant"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "media": {
                "image": string;
            };
            "type": string;
            "children"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "itemset": string;
            "name": string;
            "bind": {
                "relevant": string;
                "required": string;
                "calculate"?: undefined;
            };
            "choice_filter": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
            "media"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "required": string;
                "calculate"?: undefined;
                "relevant"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
            "media"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "itemset": string;
            "name": string;
            "bind": {
                "required": string;
                "calculate"?: undefined;
                "relevant"?: undefined;
            };
            "choice_filter": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
            "media"?: undefined;
        } | {
            "name": string;
            "bind": {
                "relevant": string;
                "required": string;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "control"?: undefined;
            "children"?: undefined;
            "media"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        })[];
        "name": string;
        "label": {
            "Bangla": string;
            "English": string;
        };
        "type": string;
    } | {
        "control": {
            "appearance": string;
            "bodyless"?: undefined;
        };
        "children": ({
            "control": {
                "appearance": string;
            };
            "children": {
                "name": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
            }[];
            "name": string;
            "bind": {
                "required": string;
                "relevant"?: undefined;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "itemset": string;
            "name": string;
            "bind": {
                "relevant": string;
                "required": string;
                "calculate"?: undefined;
            };
            "choice_filter": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
        } | {
            "name": string;
            "bind": {
                "calculate": string;
                "required"?: undefined;
                "relevant"?: undefined;
            };
            "type": string;
            "control"?: undefined;
            "children"?: undefined;
            "label"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "children": ({
                "name": string;
                "bind": {
                    "calculate": string;
                    "relevant"?: undefined;
                    "required"?: undefined;
                };
                "type": string;
                "control"?: undefined;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
                "label"?: undefined;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "itemset": string;
                "name": string;
                "bind": {
                    "relevant": string;
                    "required": string;
                    "calculate"?: undefined;
                };
                "choice_filter": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "name": string;
                "bind": {
                    "relevant": string;
                    "required": string;
                    "calculate"?: undefined;
                };
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "children": {
                    "name": string;
                    "label": {
                        "Bangla": string;
                        "English": string;
                    };
                }[];
                "name": string;
                "bind": {
                    "required": string;
                    "calculate"?: undefined;
                    "relevant"?: undefined;
                };
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
            })[];
            "name": string;
            "bind": {
                "relevant": string;
                "required"?: undefined;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "control"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "children": ({
                "name": string;
                "bind": {
                    "calculate": string;
                    "relevant"?: undefined;
                    "required"?: undefined;
                };
                "type": string;
                "control"?: undefined;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
                "label"?: undefined;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "itemset": string;
                "name": string;
                "bind": {
                    "relevant": string;
                    "calculate"?: undefined;
                    "required"?: undefined;
                };
                "choice_filter": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "children": {
                    "name": string;
                    "label": {
                        "Bangla": string;
                        "English": string;
                    };
                }[];
                "name": string;
                "bind": {
                    "required": string;
                    "calculate"?: undefined;
                    "relevant"?: undefined;
                };
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "children": {
                    "name": string;
                    "label": {
                        "Bangla": string;
                        "English": string;
                    };
                }[];
                "name": string;
                "bind": {
                    "relevant": string;
                    "required": string;
                    "calculate"?: undefined;
                };
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
            })[];
            "name": string;
            "bind": {
                "relevant": string;
                "required"?: undefined;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "control"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "children": {
                "name": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
            }[];
            "name": string;
            "bind": {
                "relevant": string;
                "required": string;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "relevant": string;
                "required"?: undefined;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "itemset": string;
            "name": string;
            "bind": {
                "relevant": string;
                "required"?: undefined;
                "calculate"?: undefined;
            };
            "choice_filter": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "children"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "children": {
                "name": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
            }[];
            "name": string;
            "bind": {
                "relevant": string;
                "required"?: undefined;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        } | {
            "children": ({
                "name": string;
                "bind": {
                    "calculate": string;
                    "relevant"?: undefined;
                    "required"?: undefined;
                };
                "type": string;
                "control"?: undefined;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
                "label"?: undefined;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "itemset": string;
                "name": string;
                "bind": {
                    "relevant": string;
                    "required": string;
                    "calculate"?: undefined;
                };
                "choice_filter": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "name": string;
                "bind": {
                    "relevant": string;
                    "required": string;
                    "calculate"?: undefined;
                };
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
                "children"?: undefined;
            } | {
                "control": {
                    "appearance": string;
                };
                "children": {
                    "name": string;
                    "label": {
                        "Bangla": string;
                        "English": string;
                    };
                }[];
                "name": string;
                "bind": {
                    "relevant": string;
                    "required": string;
                    "calculate"?: undefined;
                };
                "label": {
                    "Bangla": string;
                    "English": string;
                };
                "type": string;
                "itemset"?: undefined;
                "choice_filter"?: undefined;
            })[];
            "name": string;
            "bind": {
                "relevant": string;
                "required"?: undefined;
                "calculate"?: undefined;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "control"?: undefined;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
        })[];
        "name": string;
        "label": {
            "Bangla": string;
            "English": string;
        };
        "type": string;
    } | {
        "control": {
            "appearance": string;
            "bodyless"?: undefined;
        };
        "children": ({
            "control": {
                "appearance": string;
            };
            "itemset": string;
            "name": string;
            "choice_filter": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "bind"?: undefined;
            "children"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "name": string;
            "bind": {
                "relevant": string;
            };
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
            "children"?: undefined;
        } | {
            "control": {
                "appearance": string;
            };
            "children": {
                "name": string;
                "label": {
                    "Bangla": string;
                    "English": string;
                };
            }[];
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
            "type": string;
            "itemset"?: undefined;
            "choice_filter"?: undefined;
            "bind"?: undefined;
        })[];
        "name": string;
        "label": {
            "Bangla": string;
            "English": string;
        };
        "type": string;
    } | {
        "control": {
            "bodyless": boolean;
            "appearance"?: undefined;
        };
        "children": {
            "name": string;
            "bind": {
                "readonly": string;
                "calculate": string;
            };
            "type": string;
        }[];
        "name": string;
        "type": string;
        "label"?: undefined;
    })[];
    "style": string;
    "version": string;
    "type": string;
    "name": string;
    "sms_keyword": string;
    "title": string;
    "choices": {
        "sex": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "species_type_other": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "intensity": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic_test_skin": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic_test_urine_strip": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "test_tool": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "species": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic": {
            "myfilter": string;
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "treatment": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "postmortem": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic_test_parasite": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic_test_urine": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "rapid_test_result": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic_test_ear": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "clinical_sign": {
            "myfilter": string;
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "postmortem_organ": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "union_name": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "postmortem_findings_bird": {
            "myfilter": string;
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic_test_fecal": {
            "myfilter": string;
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "postmortem_findings_mammal": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "yes_no": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "positive_negative": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "species_breed_type": {
            "myfilter": string;
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "tentative_diagnosis": ({
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
            "myfilter"?: undefined;
        } | {
            "myfilter": string;
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        })[];
        "rapid_test_bird": {
            "myfilter": string;
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "species_rearing_purpose": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
        "microscopic_test_ear_1": {
            "name": string;
            "label": {
                "Bangla": string;
                "English": string;
            };
        }[];
    };
    "id_string": string;
};
export declare const geo: {
    district_code: string;
    district_name: string;
    division_code: string;
    division_name: string;
    union_code: string;
    union_name: string;
    upazila_code: string;
    upazila_name: string;
}[];
export declare type DEMO_FORM_JSON = typeof DEMO_FORM_JSON;
