export const selectOneDropDownFieldElement = {
  bind: {
    required: 'Yes',
  },
  children: [
    {
      label: {
        Bangla: 'Albania',
        English: 'Albania',
      },
      name: 'AL',
    },
    {
      label: {
        Bangla: 'Andorra',
        English: 'Andorra',
      },
      name: 'AD',
    },
  ],
  control: {
    appearance: 'minimal',
  },
  label: {
    Bangla:
      '\u09af\u09c7\u0987 \u09a6\u09c7\u09b6 \u09a5\u09c7\u0995\u09c7 \u09ab\u09c7\u09b0\u09a4 \u098f\u09b8\u09c7\u099b\u09c7 \u09a4\u09be\u09b0 \u09a8\u09be\u09ae',
    English: 'Return From',
  },
  name: 'return_from',
  type: 'select one',
};

export const selectOneRadioFieldElement = {
  children: [
    {
      label: 'A',
      name: 'a',
    },
    {
      label: 'B',
      name: 'b',
    },
  ],
  hint: 'select_one type with autocomplete appearance, 4 text choices',
  label: 'Select one search widget',
  name: 'select_one_autocomplete_widget',
  type: 'select one',
};
