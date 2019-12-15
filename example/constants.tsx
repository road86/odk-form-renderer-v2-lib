/* tslint:disable */
export const DEMO_FORM_JSON = {
  default_language: 'default',
  id_string: 'all-widgets',
  children: [
    {
      name: 'intro',
      hint:
        'This---- is a sample for introductory and debugging purposes. It is updated periodically so check ""Get Blank Form"" to get the latest! \n\nVersion 2018032801 adds:\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance new-front (selfie) for video type\n\nVersion 2018022001 adds:\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance image-map for select_one and select_multiple types\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance new for image, audio, video types\n\nVersion 2017121301 added:\n&nbsp;&nbsp;&nbsp;&nbsp;- Appearance thousands-sep for numeric types\n&nbsp;&nbsp;&nbsp;&nbsp;- Range questions\n&nbsp;&nbsp;&nbsp;&nbsp;- Ethiopian, coptic and islamic calendars',
      label:
        'Welcome to ODK Collect! This form showcases the different available question types (_widgets_).',
      type: 'note',
    },
    {
      children: [
        {
          name: '03-31',
          label: {
            Bangla: '1st  Quarter: (1st January - 31 March)',
            English: '1st  Quarter: (1st January - 31 March)',
          },
        },
        {
          name: '06-30',
          label: {
            Bangla: '2nd  Quarter: (01 April - 30 June)',
            English: '2nd  Quarter: (01 April - 30 June)',
          },
        },
        {
          name: '09-30',
          label: {
            Bangla: '3rd  Quarter: (1st July - 30 September)',
            English: '3rd  Quarter: (1st July - 30 September)',
          },
        },
        {
          name: '12-30',
          label: {
            Bangla: '4th Quarter: (1st October - 31 December)',
            English: '4th Quarter: (1st October - 31 December)',
          },
        },
      ],
      name: 'quarter',
      bind: {
        required: 'yes',
      },
      label: {
        Bangla: 'Select Quarter',
        English: 'Select Quarter',
      },
      type: 'select one',
    },
    {
      children: [
        {
          name: '2019',
          label: {
            Bangla: '2019',
            English: '2019',
          },
        },
        {
          name: '2020',
          label: {
            Bangla: '2020',
            English: '2020',
          },
        },
        {
          name: '2021',
          label: {
            Bangla: '2021',
            English: '2021',
          },
        },
        {
          name: '2022',
          label: {
            Bangla: '2022',
            English: '2022',
          },
        },
        {
          name: '2023',
          label: {
            Bangla: '2023',
            English: '2023',
          },
        },
      ],
      name: 'year',
      bind: {
        required: 'yes',
      },
      label: {
        Bangla: 'Select Year',
        English: 'Select Year',
      },
      type: 'select one',
    },
    {
      name: 'report_month',
      bind: {
        readonly: 'TRUE',
        calculate: 'concat(${year},"-",${quarter})',
      },
      label: {
        Bangla: 'Report month',
        English: 'Report month',
      },
      type: 'text',
    },
    {
      children: [
        {
          name: 'male',
          bind: {
            required: 'yes',
          },
          label: {
            Bangla: 'Male',
            English: 'Male',
          },
          type: 'integer',
        },
        {
          name: 'female',
          bind: {
            required: 'yes',
          },
          label: {
            Bangla: 'Female',
            English: 'Female',
          },
          type: 'integer',
        },
        {
          name: 'boy',
          bind: {
            required: 'yes',
          },
          label: {
            Bangla: 'Boy',
            English: 'Boy',
          },
          type: 'integer',
        },
        {
          name: 'girl',
          bind: {
            required: 'yes',
          },
          label: {
            Bangla: 'GIrls',
            English: 'GIrls',
          },
          type: 'integer',
        },
        {
          name: 'total_participant',
          bind: {
            required: 'yes',
            calculate: '${male}+${female}+${boy}+${girl}',
          },
          label: {
            English: 'Total Participants',
          },
          type: 'calculate',
        },
        {
          control: {
            appearance: "search('geo_2')",
          },
          name: 'division',
          bind: {
            required: 'Yes',
          },
          label: {
            Bangla: '\u09ac\u09bf\u09ad\u09be\u0997',
            English: 'Division',
          },
          type: 'select one',
          children: [
            {
              name: 'division_code',
              label: {
                Bangla: 'division_name',
                English: 'division_name',
              },
            },
          ],
        },
        {
          control: {
            appearance:
              "search('geo_2', 'matches', 'division_code', ${division})",
          },
          name: 'district',
          bind: {
            relevant: '${division}',
            required: 'Yes',
          },
          label: {
            Bangla: '\u099c\u09c7\u09b2\u09be',
            English: 'District',
          },
          type: 'select one',
          children: [
            {
              name: 'district_code',
              label: {
                Bangla: 'district_name',
                English: 'district_name',
              },
            },
          ],
        },
        {
          control: {
            appearance: "search('geo') minimal",
          },
          name: 'division_d',
          bind: {
            required: 'Yes',
          },
          label: {
            Bangla: '\u09ac\u09bf\u09ad\u09be\u0997',
            English: 'Division',
          },
          type: 'select one',
          children: [
            {
              name: 'division_code',
              label: {
                Bangla: 'division_name',
                English: 'division_name',
              },
            },
          ],
        },
        {
          control: {
            appearance:
              "minimal search('geo', 'matches', 'division_code', ${division_d})",
          },
          name: 'district(NEW)',
          bind: {
            relevant: '${division_d}',
            required: 'Yes',
          },
          label: {
            Bangla: '\u099c\u09c7\u09b2\u09be',
            English: 'District',
          },
          type: 'select one',
          children: [
            {
              name: 'district_code',
              label: {
                Bangla: 'district_name',
                English: 'district_name',
              },
            },
          ],
        },
        {
          control: {
            appearance: "search('geo') minimal",
          },
          name: 'division_d_all',
          bind: {
            required: 'Yes',
          },
          label: {
            Bangla: '\u09ac\u09bf\u09ad\u09be\u0997',
            English: 'Division All',
          },
          type: 'select all that apply',
          children: [
            {
              name: 'division_code',
              label: {
                Bangla: 'division_name',
                English: 'division_name',
              },
            },
          ],
        },
        {
          control: {
            appearance:
              "minimal search('geo', 'matches', 'division_code', ${division_d_all})",
          },
          name: 'district_all',
          bind: {
            relevant: '${division_d_all}',
            required: 'Yes',
          },
          label: {
            Bangla: '\u099c\u09c7\u09b2\u09be',
            English: 'District All',
          },
          type: 'select all that apply',
          children: [
            {
              name: 'district_code',
              label: {
                Bangla: 'district_name',
                English: 'district_name',
              },
            },
          ],
        },
        {
          control: {
            appearance: "search('geo')",
          },
          name: 'division_d_ck',
          bind: {
            required: 'Yes',
          },
          label: {
            Bangla: '\u09ac\u09bf\u09ad\u09be\u0997',
            English: 'Division All CK',
          },
          type: 'select all that apply',
          children: [
            {
              name: 'division_code',
              label: {
                Bangla: 'division_name',
                English: 'division_name',
              },
            },
          ],
        },
        {
          control: {
            appearance:
              "search('geo', 'matches', 'division_code', ${division_d_ck})",
          },
          name: 'district_all_ck',
          bind: {
            relevant: '${division_d_ck}',
            required: 'Yes',
          },
          label: {
            Bangla: '\u099c\u09c7\u09b2\u09be',
            English: 'District All CK',
          },
          type: 'select all that apply',
          children: [
            {
              name: 'district_code',
              label: {
                Bangla: 'district_name',
                English: 'district_name',
              },
            },
          ],
        },
        {
          name: 'string_widget',
          label: 'String widget [${report_month}]',
          type: 'text',
          bind: {
            constraint: '.="hello"',
            'jr:constraintMsg': 'Violated [${report_month}]',
            required: 'true',
          },
        },
        {
          name: 'string_number_widget',
          hint: 'text type with numbers appearance',
          label: 'String number widget',
          type: 'text',
          default: 'this is test',
          bind: {
            constraint: '.="hello"',
            'jr:constraintMsg': 'Violated',
            required: 'true',
          },
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
          bind: {
            'jr:constraintMsg': { English: 'Negative value not allowed' },
            required: 'Yes',
            constraint: '.>=0',
          },
        },
        {
          name: 'integer_thousands_sep_widget',
          hint:
            'integer type with thousands-sep appearance. This appearance can also be applied to decimal and string numbers widgets',
          label: 'Integer widget with thousands separators',
          type: 'integer',
          bind: {
            'jr:constraintMsg': { English: 'Negative value not allowed' },
            required: 'Yes',
            constraint: '.>=0',
          },
        },
        {
          name: 'ex_integer_widget',
          hint:
            'integer type with ex:change.uw.android.BREATHCOUNT appearance (can use other external apps)',
          label: 'Ex integer widget',
          type: 'integer',
          bind: {
            'jr:constraintMsg': { English: 'Negative value not allowed' },
            required: 'Yes',
            constraint: '.>=0',
          },
        },
        {
          name: 'decimal_widget',
          hint: 'decimal type with no appearance',
          label: 'Decimal widget',
          type: 'decimal',
          bind: {
            'jr:constraintMsg': { English: 'Negative value not allowed' },
            required: 'Yes',
            constraint: '.>=0',
          },
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
      bind: {
        relevant: '${string_number_widget}',
      },
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
          bind: {
            required: 'Yes',
          },
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
          bind: {
            required: 'Yes',
          },
        },
        {
          name: 'date_time_widget_nocalendar',
          hint: 'dateTime type with no-calendar appearance',
          label: 'Date time widget',
          type: 'dateTime',
          bind: {
            required: 'Yes',
          },
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
          control: {
            appearance: 'minimal',
          },
          name: 'return_from',
          bind: {
            required: 'Yes',
          },
          label: {
            Bangla:
              '\u09af\u09c7\u0987 \u09a6\u09c7\u09b6 \u09a5\u09c7\u0995\u09c7 \u09ab\u09c7\u09b0\u09a4 \u098f\u09b8\u09c7\u099b\u09c7 \u09a4\u09be\u09b0 \u09a8\u09be\u09ae',
            English: 'Return From',
          },
          type: 'select one',
          children: [
            {
              name: 'AL',
              label: {
                Bangla: 'Albania',
                English: 'Albania',
              },
            },
            {
              name: 'AD',
              label: {
                Bangla: 'Andorra',
                English: 'Andorra',
              },
            },
            {
              name: 'AM',
              label: {
                Bangla: 'Armenia',
                English: 'Armenia',
              },
            },
            {
              name: 'AT',
              label: {
                Bangla: 'Austria',
                English: 'Austria',
              },
            },
            {
              name: 'AZ',
              label: {
                Bangla: 'Azerbaijan',
                English: 'Azerbaijan',
              },
            },
            {
              name: 'BY',
              label: {
                Bangla: 'Belarus',
                English: 'Belarus',
              },
            },
            {
              name: 'BE',
              label: {
                Bangla: 'Belgium',
                English: 'Belgium',
              },
            },
            {
              name: 'BA',
              label: {
                Bangla: 'Bosnia and Herzegovina',
                English: 'Bosnia and Herzegovina',
              },
            },
            {
              name: 'BG',
              label: {
                Bangla: 'Bulgaria',
                English: 'Bulgaria',
              },
            },
            {
              name: 'ES',
              label: {
                Bangla: 'Spain',
                English: 'Spain',
              },
            },
            {
              name: 'SE',
              label: {
                Bangla: 'Sweden',
                English: 'Sweden',
              },
            },
            {
              name: 'CH',
              label: {
                Bangla: 'Switzerland',
                English: 'Switzerland',
              },
            },
            {
              name: 'TN',
              label: {
                Bangla: 'Tunisia',
                English: 'Tunisia',
              },
            },
            {
              name: 'TR',
              label: {
                Bangla: 'Turkey',
                English: 'Turkey',
              },
            },
            {
              name: 'UA',
              label: {
                Bangla: 'Ukraine',
                English: 'Ukraine',
              },
            },
            {
              name: 'GB',
              label: {
                Bangla: 'United Kingdom (UK)',
                English: 'United Kingdom (UK)',
              },
            },
            {
              name: 'VA',
              label: {
                Bangla: 'Vatican City',
                English: 'Vatican City',
              },
            },
            {
              name: '99',
              label: {
                Bangla: '\u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af',
                English: 'Others',
              },
            },
          ],
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
          control: {
            appearance: 'minimal',
          },
          children: [
            {
              name: '1',
              label: 'Coca-cola',
            },
            {
              name: '2',
              label: 'Pepsi',
            },
            {
              name: '3',
              label: 'Fanta',
            },
          ],
          name: 'brand_name',
          label: 'Brand Known',
          type: 'select one',
        },
        {
          control: {
            appearance: 'minimal',
          },
          children: [
            {
              name: '1',
              label: 'Coca-cola',
            },
            {
              name: '2',
              label: 'Pepsi',
            },
            {
              name: '3',
              label: 'Fanta',
            },
          ],
          name: 'brand_preferance',
          bind: {
            relevant:
              "selected(${brand_name},'1') or selected(${brand_name},'2') or selected(${brand_name},'3')",
          },
          label: 'Brand Preference',
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
          control: {
            appearance: 'minimal',
          },
          bind: {
            required: 'Yes',
          },
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
      label: 'Check',
      type: 'select all that apply',
    },
    {
      children: [
        {
          bind: {
            required: 'Yes',
          },
          name: 'repeat_q',
          label: 'Name',
          type: 'text',
        },
        {
          children: [
            {
              name: 'yes',
              label: 'GO',
            },
            {
              name: 'no',
              label: 'TO',
            },
            {
              name: 'dk',
              label: 'THE',
            },
            {
              name: 'na',
              label: 'MALL',
            },
          ],
          name: 'table_list_RP',
          hint:
            'Show only the inputs of these options and not the labels (type=select_multiple yes_no, appearance=list-nolabel)',
          label: 'GO To the mall',
          type: 'select all that apply',
        },
      ],
      name: 'repeat_1',
      type: 'repeat',
    },
    {
      children: [
        {
          children: [
            {
              name: 'as',
              label: 'this',
            },
            {
              name: 'df',
              label: 'is',
            },
            {
              name: 'sdfffff',
              label: 'rp',
            },
            {
              name: 'd',
              label: '2',
            },
          ],
          name: 'table_list_RP_2',
          hint:
            'Show only the inputs of these options and not the labels (type=select_multiple yes_no, appearance=list-nolabel)',
          label: 'GO To the mall',
          type: 'select all that apply',
        },
      ],
      name: 'repeat_2',
      type: 'repeat',
    },
    {
      name: 'family_member',
      label: {
        English: 'Total Family Member',
      },
      type: 'integer',
    },
    {
      name: 'mem_info_count',
      bind: {
        readonly: 'true()',
        calculate: '${family_member}',
      },
      type: 'calculate',
    },
    {
      control: {
        'jr:count': '${mem_info_count}',
      },

      children: [
        {
          name: 'mem_name',
          label: {
            English: 'Member Name',
          },
          type: 'text',
          bind: {
            required: 'yes',
          },
        },
        {
          children: [
            {
              name: 'as',
              label: 'this',
            },
            {
              name: 'df',
              label: 'is',
            },
            {
              name: 'sdfffff',
              label: 'rp',
            },
            {
              name: 'd',
              label: '2',
            },
          ],
          name: 'the_n_t',
          hint:
            'Show only the inputs of these options and not the labels (type=select_multiple yes_no, appearance=list-nolabel)',
          label: 'The new Test',
          type: 'select all that apply',
        },
      ],
      name: 'mem_info',
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

export const sampleUserInput = {
  'text_widgets/string_number_widget': 'hello',
  repeat_1: [
    {
      'repeat_1/repeat_q': 'gsh',
    },
  ],
  'text_widgets/division': '10',
  'text_widgets/district': '1004',
  'text_widgets/division_d': '10',
  'text_widgets/district(NEW)': '1004',
  'text_widgets/division_d_all': ['10'],
  'text_widgets/district_all': ['1004'],
  'text_widgets/division_d_ck': ['10'],
  'text_widgets/district_all_ck': ['1004'],
  'text_widgets/string_widget': 'hello',
  'number_widgets/integer_widget': '1',
  'number_widgets/integer_thousands_sep_widget': '121',
  'number_widgets/ex_integer_widget': '12',
  'number_widgets/decimal_widget': '12.06',
  'select_one_widgets/return_from': 'BY',
  'select_multi_widgets/spinner_multi_widget': ['c'],
  'date_time_widgets/date_time_widget': '2019-11-23T10:30:00.000Z',
  'date_time_widgets/islamic_date_widget': '2019-07-11T00:00:00.000Z',
};

// tslint:disable
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

export const geo_1 = [
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

export const geo_2 = [
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

export const CSV_LIST = { geo, geo_1, geo_2 };

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
