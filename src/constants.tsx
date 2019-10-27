// Field Types
export const GROUP_FIELD_TYPE = 'group';
export type GROUP_FIELD_TYPE = typeof GROUP_FIELD_TYPE;
export const TEXT_FIELD_TYPE = 'text';
export type TEXT_FIELD_TYPE = typeof TEXT_FIELD_TYPE;
export const DATE_FIELD_TYPE = 'date';
export type DATE_FIELD_TYPE = typeof DATE_FIELD_TYPE;
export const INTEGER_FIELD_TYPE = 'integer';
export type INTEGER_FIELD_TYPE = typeof INTEGER_FIELD_TYPE;
export const DECIMAL_FIELD_TYPE = 'decimal';
export type DECIMAL_FIELD_TYPE = typeof DECIMAL_FIELD_TYPE;
export const PHOTO_FIELD_TYPE = 'photo';
export type PHOTO_FIELD_TYPE = typeof PHOTO_FIELD_TYPE;

// Required Properties
export const REQUIRED_FIELD_MSG = 'This field is required';
export type REQUIRED_FIELD_MSG = typeof REQUIRED_FIELD_MSG;
export const REQUIRED_SYMBOL = '*';
export type REQUIRED_SYMBOL = typeof REQUIRED_SYMBOL;

/* tslint:disable */
export const DEMO_FORM_JSON = {
  default_language: 'default',
  id_string: 'all-widgets',
  children: [
    {
      name: 'intro',
      hint:
        '"This is a sample for introductory and debugging purposes. It is updated periodically so check ""Get Blank Form"" to get the latest! \n\nVersion 2018032801 adds:\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance new-front (selfie) for video type\n\nVersion 2018022001 adds:\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance image-map for select_one and select_multiple types\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance new for image, audio, video types\n\nVersion 2017121301 added:\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance thousands-sep for numeric types\n&nbsp;&nbsp;&nbsp;&nbsp;- Range questions\n&nbsp;&nbsp;&nbsp;&nbsp;- Ethiopian, coptic and islamic calendars"',
      label:
        'Welcome to ODK Collect! This form showcases the different available question types (_widgets_).',
      type: 'note',
    },
    {
      children: [
        {
          name: 'string_widget',
          label: 'String widget',
          type: 'text',
        },
        {
          name: 'string_number_widget',
          hint: 'text type with numbers appearance',
          label: 'String number widget',
          type: 'text',
        },
        {
          name: 'url_widget',
          hint:
            'text type with url appearance and default value of http://opendatakit.org/',
          label: 'URL widget',
          type: 'text',
        },
        {
          name: 'ex_string_widget',
          hint:
            'text type with ex:change.uw.android.BREATHCOUNT appearance (can use other external apps)',
          label: 'Ex string widget',
          type: 'text',
        },
        {
          name: 'ex_printer_widget',
          hint: 'text type with printer:org.opendatakit.sensors.ZebraPrinter',
          label: 'Ex printer widget',
          type: 'text',
        },
      ],
      name: 'text_widgets',
      label: 'Text widgets',
      type: 'group',
    },
    {
      children: [
        {
          name: 'integer_widget',
          hint: 'integer type with no appearance',
          label: 'Integer widget',
          type: 'integer',
        },
        {
          name: 'integer_thousands_sep_widget',
          hint:
            'integer type with thousands-sep appearance. This appearance can also be applied to decimal and string numbers widgets',
          label: 'Integer widget with thousands separators',
          type: 'integer',
        },
        {
          name: 'ex_integer_widget',
          hint:
            'integer type with ex:change.uw.android.BREATHCOUNT appearance (can use other external apps)',
          label: 'Ex integer widget',
          type: 'integer',
        },
        {
          name: 'decimal_widget',
          hint: 'decimal type with no appearance',
          label: 'Decimal widget',
          type: 'decimal',
        },
        {
          name: 'ex_decimal_widget',
          hint:
            'decimal type with ex:change.uw.android.BREATHCOUNT appearance (can use other external apps)',
          label: 'Ex decimal widget',
          type: 'decimal',
        },
        {
          name: 'bearing_widget',
          hint: 'decimal type with bearing appearance',
          label: 'Bearing widget',
          type: 'decimal',
        },
      ],
      name: 'number_widgets',
      label: 'Numerical widgets',
      type: 'group',
    },
    {
      children: [
        {
          name: 'image_widget',
          hint: 'image type with no appearance',
          label: 'Image widget',
          type: 'photo',
        },
        {
          name: 'image_widget_no_choose',
          hint:
            'image type with new appearance (can also be added with annotate appearance and on audio and video types)',
          label: 'Image widget without Choose button',
          type: 'photo',
        },
        {
          name: 'selfie_image_widget',
          hint: 'image type with selfie appearance',
          label: 'Selfie widget',
          type: 'photo',
        },
        {
          name: 'draw_image_widget',
          hint: 'image type with draw appearance',
          label: 'Draw widget',
          type: 'photo',
        },
        {
          name: 'annotate_image_widget',
          hint: 'image type with annotate appearance',
          label: 'Annotate widget',
          type: 'photo',
        },
        {
          name: 'signature_widget',
          hint: 'image type with signature appearance',
          label: 'Signature widget',
          type: 'photo',
        },
        {
          name: 'webview_image_widget',
          hint: 'image type with web appearance',
          label: 'Web view image widget',
          type: 'photo',
        },
        {
          name: 'aligned_image_widget',
          hint:
            'image type with align:1 1 1 appearance, requires external aligned image app',
          label: 'Align image widget',
          type: 'photo',
        },
      ],
      name: 'image_widgets',
      label: 'Image widgets',
      type: 'group',
    },
    {
      children: [
        {
          name: 'barcode_widget',
          hint: 'barcode type with no appearance',
          label: 'Barcode widget',
          type: 'barcode',
        },
        {
          name: 'audio_widget',
          hint: 'audio type with no appearance',
          label: 'Audio widget',
          type: 'audio',
        },
        {
          name: 'video_widget',
          hint: 'video type with no appearance',
          label: 'Video widget',
          type: 'video',
        },
        {
          name: 'selfie_video_widget',
          hint: 'video type with new-front appearance',
          label: 'Selfie video widget',
          type: 'video',
        },
      ],
      name: 'media_widgets',
      label: 'Media widgets',
      type: 'group',
    },
    {
      children: [
        {
          name: 'date_widget',
          hint: 'date type with no appearance',
          label: 'Date widget',
          type: 'date',
        },
        {
          name: 'date_widget_nocalendar',
          hint: 'date type with no-calendar appearance',
          label: 'Date Widget',
          type: 'date',
        },
        {
          name: 'date_widget_month_year',
          hint: 'date type with month-year appearance',
          label: 'Date widget',
          type: 'date',
        },
        {
          name: 'date_widget_year',
          hint: 'date type with year appearance',
          label: 'Date widget',
          type: 'date',
        },
        {
          name: 'time_widget',
          hint: 'time type with no appearance',
          label: 'Time widget',
          type: 'time',
        },
        {
          name: 'date_time_widget',
          hint: 'dateTime type with no appearance',
          label: 'Date time widget',
          type: 'dateTime',
        },
        {
          name: 'date_time_widget_nocalendar',
          hint: 'dateTime type with no-calendar appearance',
          label: 'Date time widget',
          type: 'dateTime',
        },
        {
          name: 'ethiopian_date_widget',
          hint: 'date type ethiopian appearance',
          label: 'Ethiopian date widget',
          type: 'date',
        },
        {
          name: 'coptic_date_widget',
          hint: 'date type coptic appearance',
          label: 'Coptic date widget',
          type: 'date',
        },
        {
          name: 'islamic_date_widget',
          hint: 'date type islamic appearance',
          label: 'Islamic date widget',
          type: 'date',
        },
      ],
      name: 'date_time_widgets',
      label: 'Date and time widgets',
      type: 'group',
    },
    {
      children: [
        {
          children: [
            {
              name: 'a',
              label: 'A',
            },
            {
              name: 'b',
              label: 'B',
            },
            {
              name: 'c',
              label: 'C',
            },
            {
              name: 'd',
              label: 'D',
            },
          ],
          name: 'select_one_widget',
          hint: 'select_one type with no appearance, 4 text choices',
          label: 'Select one widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
            },
            {
              name: 'b',
              label: 'B',
            },
            {
              name: 'c',
              label: 'C',
            },
            {
              name: 'd',
              label: 'D',
            },
          ],
          name: 'spinner_widget',
          hint: 'select_one type with minimal appearance, 4 text choices',
          label: 'Spinner widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
            },
            {
              name: 'b',
              label: 'B',
            },
            {
              name: 'c',
              label: 'C',
            },
            {
              name: 'd',
              label: 'D',
            },
          ],
          name: 'select_one_autoadvance_widget',
          hint: 'select_one type with quick appearance, 4 text choices',
          label: 'Select one autoadvance widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
            },
            {
              name: 'b',
              label: 'B',
            },
            {
              name: 'c',
              label: 'C',
            },
            {
              name: 'd',
              label: 'D',
            },
          ],
          name: 'select_one_search_widget',
          hint: 'select_one type with search appearance, 4 text choices',
          label: 'Select one search widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
            },
            {
              name: 'b',
              label: 'B',
            },
            {
              name: 'c',
              label: 'C',
            },
            {
              name: 'd',
              label: 'D',
            },
          ],
          name: 'select_one_autocomplete_widget',
          hint: 'select_one type with autocomplete appearance, 4 text choices',
          label: 'Select one search widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
              media: {
                image: 'a.jpg',
              },
            },
            {
              name: 'b',
              label: 'B',
              media: {
                image: 'b.jpg',
              },
            },
            {
              name: 'c',
              label: 'C',
              media: {
                image: 'c.jpg',
              },
            },
            {
              name: 'd',
              label: 'D',
              media: {
                image: 'd.jpg',
              },
            },
          ],
          name: 'grid_widget',
          hint:
            'select_one type with no appearance, 4 image choices (a.jpg, b.jpg, c.jpg, d.jpg)',
          label: 'Grid select one widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
              media: {
                image: 'a.jpg',
              },
            },
            {
              name: 'b',
              label: 'B',
              media: {
                image: 'b.jpg',
              },
            },
            {
              name: 'c',
              label: 'C',
              media: {
                image: 'c.jpg',
              },
            },
            {
              name: 'd',
              label: 'D',
              media: {
                image: 'd.jpg',
              },
            },
          ],
          name: 'grid_widget_compact',
          hint:
            'select_one type with compact appearance, 4 image choices (a.jpg, b.jpg, c.jpg, d.jpg)',
          label: 'Grid select one widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
              media: {
                image: 'a.jpg',
              },
            },
            {
              name: 'b',
              label: 'B',
              media: {
                image: 'b.jpg',
              },
            },
            {
              name: 'c',
              label: 'C',
              media: {
                image: 'c.jpg',
              },
            },
            {
              name: 'd',
              label: 'D',
              media: {
                image: 'd.jpg',
              },
            },
          ],
          name: 'grid_widget_compact2',
          hint:
            'select_one type with compact-2 appearance, 4 image choices (a.jpg, b.jpg, c.jpg, d.jpg)',
          label: 'Grid select one widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
              media: {
                image: 'a.jpg',
              },
            },
            {
              name: 'b',
              label: 'B',
              media: {
                image: 'b.jpg',
              },
            },
            {
              name: 'c',
              label: 'C',
              media: {
                image: 'c.jpg',
              },
            },
            {
              name: 'd',
              label: 'D',
              media: {
                image: 'd.jpg',
              },
            },
          ],
          name: 'grid_widget_quickcompact',
          hint:
            'select_one type with quickcompact appearance, 4 image choices (a.jpg, b.jpg, c.jpg, d.jpg)',
          label: 'Grid select one widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
              media: {
                image: 'a.jpg',
              },
            },
            {
              name: 'b',
              label: 'B',
              media: {
                image: 'b.jpg',
              },
            },
            {
              name: 'c',
              label: 'C',
              media: {
                image: 'c.jpg',
              },
            },
            {
              name: 'd',
              label: 'D',
              media: {
                image: 'd.jpg',
              },
            },
          ],
          name: 'grid_widget_quickcompact2',
          hint:
            'select_one type with quickcompact-2 appearance, 4 image choices (a.jpg, b.jpg, c.jpg, d.jpg)',
          label: 'Grid select one widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'head',
              label: 'Head',
            },
            {
              name: 'neck',
              label: 'Neck',
            },
            {
              name: 'lungs',
              label: 'Lungs',
            },
            {
              name: 'left_proximal_arm',
              label: 'Left proximal arm',
            },
            {
              name: 'left_distal_arm',
              label: 'Left distal arm',
            },
            {
              name: 'right_proximal_arm',
              label: 'Right proximal arm',
            },
            {
              name: 'right_distal_arm',
              label: 'Right distal arm',
            },
            {
              name: 'left_proximal_leg',
              label: 'Left proximal leg',
            },
            {
              name: 'left_distal_leg',
              label: 'Left distal leg',
            },
            {
              name: 'right_proximal_leg',
              label: 'Right proximal leg',
            },
            {
              name: 'right_distal_leg',
              label: 'Right distal leg',
            },
          ],
          name: 'select_one_image_map',
          hint: 'select_one with type image-map appearance and image body.svg',
          label: 'Image select one widget',
          type: 'select one',
        },
      ],
      name: 'select_one_widgets',
      label: 'Select one widgets',
      type: 'group',
    },
    {
      children: [
        {
          children: [
            {
              name: 'a',
              label: 'A',
            },
            {
              name: 'b',
              label: 'B',
            },
            {
              name: 'c',
              label: 'C',
            },
            {
              name: 'd',
              label: 'D',
            },
          ],
          name: 'select_multi_widget',
          hint: 'select_multiple type with no appearance, 4 text choices',
          label: 'Multi select widget',
          type: 'select all that apply',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
              media: {
                image: 'a.jpg',
              },
            },
            {
              name: 'b',
              label: 'B',
              media: {
                image: 'b.jpg',
              },
            },
            {
              name: 'c',
              label: 'C',
              media: {
                image: 'c.jpg',
              },
            },
            {
              name: 'd',
              label: 'D',
              media: {
                image: 'd.jpg',
              },
            },
          ],
          name: 'grid_multi_widget_compact',
          hint: 'select_multiple type with compact appearance, 4 image choices',
          label: 'Grid select multiple widget',
          type: 'select all that apply',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
              media: {
                image: 'a.jpg',
              },
            },
            {
              name: 'b',
              label: 'B',
              media: {
                image: 'b.jpg',
              },
            },
            {
              name: 'c',
              label: 'C',
              media: {
                image: 'c.jpg',
              },
            },
            {
              name: 'd',
              label: 'D',
              media: {
                image: 'd.jpg',
              },
            },
          ],
          name: 'grid_multi_widget_compact2',
          hint:
            'select_multiple type with compact-2 appearance, 4 image choices',
          label: 'Grid select multiple widget',
          type: 'select all that apply',
        },
        {
          children: [
            {
              name: 'a',
              label: 'A',
            },
            {
              name: 'b',
              label: 'B',
            },
            {
              name: 'c',
              label: 'C',
            },
            {
              name: 'd',
              label: 'D',
            },
          ],
          name: 'spinner_multi_widget',
          hint: 'select_multiple type with minimal appearance, 4 image choices',
          label: 'Spinner widget: select multiple',
          type: 'select all that apply',
        },
        {
          children: [
            {
              name: 'head',
              label: 'Head',
            },
            {
              name: 'neck',
              label: 'Neck',
            },
            {
              name: 'lungs',
              label: 'Lungs',
            },
            {
              name: 'left_proximal_arm',
              label: 'Left proximal arm',
            },
            {
              name: 'left_distal_arm',
              label: 'Left distal arm',
            },
            {
              name: 'right_proximal_arm',
              label: 'Right proximal arm',
            },
            {
              name: 'right_distal_arm',
              label: 'Right distal arm',
            },
            {
              name: 'left_proximal_leg',
              label: 'Left proximal leg',
            },
            {
              name: 'left_distal_leg',
              label: 'Left distal leg',
            },
            {
              name: 'right_proximal_leg',
              label: 'Right proximal leg',
            },
            {
              name: 'right_distal_leg',
              label: 'Right distal leg',
            },
          ],
          name: 'select_multi_image_map',
          hint:
            'select_multiple type with image-map appearance and image body.svg',
          label: 'Image select multiple widget',
          type: 'select all that apply',
        },
      ],
      name: 'select_multi_widgets',
      label: 'This section contains "Select Multi Widgets"',
      type: 'group',
    },
    {
      children: [
        {
          children: [
            {
              name: 'yes',
              label: 'Yes',
            },
            {
              name: 'no',
              label: 'No',
            },
            {
              name: 'dk',
              label: "Don't Know",
            },
            {
              name: 'na',
              label: 'Not Applicable',
            },
          ],
          name: 'table_list_test_label',
          hint:
            'Show only the labels of these options and not the inputs (type=select_one yes_no, appearance=label)',
          label: 'Label widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'yes',
              label: 'Yes',
            },
            {
              name: 'no',
              label: 'No',
            },
            {
              name: 'dk',
              label: "Don't Know",
            },
            {
              name: 'na',
              label: 'Not Applicable',
            },
          ],
          name: 'table_list_test_label_2',
          hint:
            'Show only the labels of these options and not the inputs (type=select_multiple yes_no, appearance=label)',
          label: 'Label multi widget',
          type: 'select all that apply',
        },
        {
          children: [
            {
              name: 'yes',
              label: 'Yes',
            },
            {
              name: 'no',
              label: 'No',
            },
            {
              name: 'dk',
              label: "Don't Know",
            },
            {
              name: 'na',
              label: 'Not Applicable',
            },
          ],
          name: 'table_list_1',
          hint:
            'Show only the inputs of these options and not the labels (type=select_one yes_no, appearance=list-nolabel)',
          label: 'List widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'yes',
              label: 'Yes',
            },
            {
              name: 'no',
              label: 'No',
            },
            {
              name: 'dk',
              label: "Don't Know",
            },
            {
              name: 'na',
              label: 'Not Applicable',
            },
          ],
          name: 'table_list_2',
          hint:
            'Show only the inputs of these options and not the labels (type=select_multiple yes_no, appearance=list-nolabel)',
          label: 'List multi widget',
          type: 'select all that apply',
        },
        {
          children: [
            {
              name: 'yes',
              label: 'Yes',
            },
            {
              name: 'no',
              label: 'No',
            },
            {
              name: 'dk',
              label: "Don't Know",
            },
            {
              name: 'na',
              label: 'Not Applicable',
            },
          ],
          name: 'list_widget',
          hint:
            'This is a normal list widget with (type = select_one, appearance = list)',
          label: 'List widget',
          type: 'select one',
        },
        {
          children: [
            {
              name: 'yes',
              label: 'Yes',
            },
            {
              name: 'no',
              label: 'No',
            },
            {
              name: 'dk',
              label: "Don't Know",
            },
            {
              name: 'na',
              label: 'Not Applicable',
            },
          ],
          name: 'list_multi_widget',
          hint:
            'This is a normal list widget with (type = select_multiple, appearance = list)',
          label: 'List multi widget',
          type: 'select all that apply',
        },
      ],
      name: 'table_list_test',
      hint:
        'Shows all questions on one page in ODK Collect (appearance=field-list)',
      label: 'List group',
      type: 'group',
    },
    {
      children: [
        {
          name: 'repeat_q',
          label: 'Name',
          type: 'text',
        },
      ],
      name: 'repeat_1',
      type: 'repeat',
    },
    {
      control: {
        bodyless: true,
      },
      children: [
        {
          name: 'instanceID',
          bind: {
            readonly: 'true()',
            calculate: "concat('uuid:', uuid())",
          },
          type: 'calculate',
        },
      ],
      name: 'meta',
      type: 'group',
    },
  ],
  version: '2018022001',
  type: 'survey',
  name: 'all-widgets_form_builder',
  sms_keyword: 'all-widgets',
  title: 'All widgets',
};

/* tslint:enable */
export type DEMO_FORM_JSON = typeof DEMO_FORM_JSON;
