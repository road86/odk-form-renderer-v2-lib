export const selectAllDropDownFieldElement = {
  bind: {
    required: 'Yes',
  },
  control: {
    appearance: 'minimal',
  },

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
  hint: 'select_multiple type with minimal appearance, 4 image choices',
  label: 'Spinner widget: select multiple',
  name: 'spinner_multi_widget',
  type: 'select all that apply',
};
