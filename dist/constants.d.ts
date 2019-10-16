export declare const GROUP_FIELD_TYPE = "group";
export declare type GROUP_FIELD_TYPE = typeof GROUP_FIELD_TYPE;
export declare const TEXT_FIELD_TYPE = "text";
export declare type TEXT_FIELD_TYPE = typeof TEXT_FIELD_TYPE;
export declare const DEMO_FORM_JSON: {
    default_language: string;
    id_string: string;
    children: ({
        name: string;
        type: string;
        label?: undefined;
        bind?: undefined;
        children?: undefined;
        control?: undefined;
    } | {
        name: string;
        label: {
            English: string;
        };
        type: string;
        bind?: undefined;
        children?: undefined;
        control?: undefined;
    } | {
        name: string;
        bind: {
            required: string;
            relevant?: undefined;
            'jr:constraintMsg'?: undefined;
            constraint?: undefined;
            readonly?: undefined;
            calculate?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
        children?: undefined;
        control?: undefined;
    } | {
        children: {
            name: string;
            label: {
                English: string;
            };
        }[];
        name: string;
        bind: {
            required: string;
            relevant?: undefined;
            'jr:constraintMsg'?: undefined;
            constraint?: undefined;
            readonly?: undefined;
            calculate?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
        control?: undefined;
    } | {
        children: {
            name: string;
            label: {
                English: string;
            };
        }[];
        name: string;
        label: {
            English: string;
        };
        type: string;
        bind?: undefined;
        control?: undefined;
    } | {
        name: string;
        bind: {
            relevant: string;
            required: string;
            'jr:constraintMsg'?: undefined;
            constraint?: undefined;
            readonly?: undefined;
            calculate?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
        children?: undefined;
        control?: undefined;
    } | {
        control: {
            appearance: string;
            bodyless?: undefined;
        };
        children: {
            name: string;
            label: {
                Bangla: string;
                English: string;
            };
        }[];
        name: string;
        bind: {
            required: string;
            relevant?: undefined;
            'jr:constraintMsg'?: undefined;
            constraint?: undefined;
            readonly?: undefined;
            calculate?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
    } | {
        control: {
            appearance: string;
            bodyless?: undefined;
        };
        children: {
            name: string;
            label: {
                Bangla: string;
                English: string;
            };
        }[];
        name: string;
        bind: {
            relevant: string;
            required: string;
            'jr:constraintMsg'?: undefined;
            constraint?: undefined;
            readonly?: undefined;
            calculate?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
    } | {
        children: {
            name: string;
            label: {
                English: string;
            };
        }[];
        name: string;
        bind: {
            relevant: string;
            required: string;
            'jr:constraintMsg'?: undefined;
            constraint?: undefined;
            readonly?: undefined;
            calculate?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
        control?: undefined;
    } | {
        name: string;
        bind: {
            'jr:constraintMsg': {
                English: string;
            };
            required: string;
            constraint: string;
            relevant?: undefined;
            readonly?: undefined;
            calculate?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
        children?: undefined;
        control?: undefined;
    } | {
        name: string;
        bind: {
            readonly: string;
            required: string;
            calculate: string;
            relevant?: undefined;
            'jr:constraintMsg'?: undefined;
            constraint?: undefined;
        };
        label: {
            English: string;
        };
        type: string;
        children?: undefined;
        control?: undefined;
    } | {
        control: {
            bodyless: boolean;
            appearance?: undefined;
        };
        children: {
            name: string;
            bind: {
                readonly: string;
                calculate: string;
            };
            type: string;
        }[];
        name: string;
        type: string;
        label?: undefined;
        bind?: undefined;
    })[];
    version: string;
    type: string;
    name: string;
    sms_keyword: string;
    title: string;
};
export declare type DEMO_FORM_JSON = typeof DEMO_FORM_JSON;
