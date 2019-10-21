// Field Types
export const GROUP_FIELD_TYPE = 'group';
export type GROUP_FIELD_TYPE = typeof GROUP_FIELD_TYPE;
export const TEXT_FIELD_TYPE = 'text';
export type TEXT_FIELD_TYPE = typeof TEXT_FIELD_TYPE;
export const DATE_FIELD_TYPE = 'date';
export type DATE_FIELD_TYPE = typeof DATE_FIELD_TYPE;

/* tslint:disable */
export const DEMO_FORM_JSON = {
  default_language: 'English',
  id_string: 'capacity_building',
  children: [
    { name: 'start', type: 'start' },
    { name: 'end', type: 'end' },
    { name: 'username', type: 'username' },
    {
      name: 'note',
      label: { English: 'Capacity Building Entry Field' },
      type: 'note',
    },
    {
      name: 'event_name',
      bind: { required: 'Yes' },
      label: { English: 'Name of the event' },
      type: 'text',
    },
    {
      children: [
        { name: '1', label: { English: 'Training' } },
        { name: '2', label: { English: 'Workshop' } },
        { name: '3', label: { English: 'Conference' } },
        { name: '4', label: { English: 'Seminar' } },
      ],
      name: 'event_type',
      bind: { required: 'Yes' },
      label: { English: 'Event Type' },
      type: 'select one',
    },
    {
      children: [
        { name: '1', label: { English: 'In house Training' } },
        { name: '2', label: { English: 'Out of Office' } },
        { name: '3', label: { English: 'Training in Abroad' } },
      ],
      name: 'training_type',
      bind: { required: 'Yes' },
      label: { English: 'Training Type' },
      type: 'select one',
    },
    {
      children: [
        { name: '1', label: { English: 'Life skills / Social Skills' } },
        { name: '2', label: { English: 'Gender Issues' } },
        { name: '3', label: { English: 'Legal Issues' } },
        { name: '4', label: { English: 'Skill based training' } },
        { name: '5', label: { English: "Survivor'r rights" } },
        { name: '6', label: { English: 'Burn Care Training' } },
        { name: '7', label: { English: 'Mental health' } },
        { name: '8', label: { English: 'Organization Development' } },
        { name: '9', label: { English: 'HR management' } },
        { name: '99', label: { English: 'Others' } },
      ],
      name: 'capacity_building_subject',
      label: { English: 'Subject of capacity building' },
      type: 'select one',
    },
    {
      name: 'capacity_building_subject_other',
      bind: { relevant: '${capacity_building_subject}=99', required: 'Yes' },
      label: { English: 'Specify the Subject of capacity building' },
      type: 'text',
    },
    { name: 'duration', label: { English: 'Duration' }, type: 'note' },
    {
      name: 'event_start_date',
      bind: { required: 'Yes' },
      label: { English: 'Start Date' },
      type: 'date',
    },
    {
      name: 'event_end_date',
      bind: { required: 'Yes' },
      label: { English: 'End Date' },
      type: 'date',
    },
    { name: 'location', label: { English: 'Location' }, type: 'note' },
    {
      control: { appearance: "search('geo')" },
      children: [
        {
          name: 'division_code',
          label: { Bangla: 'division_name', English: 'division_name' },
        },
      ],
      name: 'division',
      bind: { required: 'Yes' },
      label: { English: 'Division' },
      type: 'select one',
    },
    {
      control: {
        appearance: "search('geo', 'matches', 'division_code', ${division})",
      },
      children: [
        {
          name: 'district_code',
          label: { Bangla: 'district_name', English: 'district_name' },
        },
      ],
      name: 'district',
      bind: { relevant: '${division}', required: 'Yes' },
      label: { English: 'District' },
      type: 'select one',
    },
    {
      control: {
        appearance: "search('geo', 'matches', 'district_code', ${district})",
      },
      children: [
        {
          name: 'upazila_code',
          label: { Bangla: 'upazila_name', English: 'upazila_name' },
        },
      ],
      name: 'upazila',
      bind: { relevant: '${district}', required: 'Yes' },
      label: { English: 'Upazila' },
      type: 'select one',
    },
    {
      control: {
        appearance: "search('geo', 'matches', 'upazila_code', ${upazila})",
      },
      children: [
        {
          name: 'union_code',
          label: { Bangla: 'union_name', English: 'union_name' },
        },
      ],
      name: 'union',
      bind: { relevant: '${upazila}', required: 'Yes' },
      label: { English: 'Union' },
      type: 'select one',
    },
    {
      children: [
        { name: '1', label: { English: '1' } },
        { name: '2', label: { English: '2' } },
        { name: '3', label: { English: '3' } },
        { name: '4', label: { English: '4' } },
        { name: '5', label: { English: '5' } },
        { name: '6', label: { English: '6' } },
        { name: '7', label: { English: '7' } },
        { name: '8', label: { English: '8' } },
        { name: '9', label: { English: '9' } },
      ],
      name: 'ward',
      bind: { relevant: '${union}', required: 'Yes' },
      label: { English: 'Ward' },
      type: 'select one',
    },
    { name: 'participant', label: { English: 'Participants' }, type: 'note' },
    {
      name: 'participant_male',
      bind: {
        'jr:constraintMsg': { English: 'Negative value not allowed' },
        required: 'Yes',
        constraint: '.>=0',
      },
      label: { English: 'Male' },
      type: 'integer',
    },
    {
      name: 'participant_female',
      bind: {
        'jr:constraintMsg': { English: 'Negative value not allowed' },
        required: 'Yes',
        constraint: '.>=0',
      },
      label: { English: 'Female' },
      type: 'integer',
    },
    {
      name: 'participant_girl',
      bind: {
        'jr:constraintMsg': { English: 'Negative value not allowed' },
        required: 'Yes',
        constraint: '.>=0',
      },
      label: { English: 'Girls' },
      type: 'integer',
    },
    {
      name: 'participant_boy',
      bind: {
        'jr:constraintMsg': { English: 'Negative value not allowed' },
        required: 'Yes',
        constraint: '.>=0',
      },
      label: { English: 'Boys' },
      type: 'integer',
    },
    {
      name: 'participant_trangender',
      bind: {
        'jr:constraintMsg': { English: 'Negative value not allowed' },
        required: 'Yes',
        constraint: '.>=0',
      },
      label: { English: 'Transgender' },
      type: 'integer',
    },
    {
      name: 'particiapnt_total',
      bind: {
        readonly: 'TRUE',
        required: 'Yes',
        calculate:
          '${participant_male}+${participant_female}+${participant_girl}+${participant_boy}+${participant_trangender}',
      },
      label: { English: 'Total' },
      type: 'text',
    },
    {
      children: [
        { name: '1', label: { English: 'ASF' } },
        { name: '99', label: { English: 'Others' } },
      ],
      name: 'organized_by',
      bind: { required: 'Yes' },
      label: { English: 'Organized by' },
      type: 'select one',
    },
    {
      name: 'organized_by_other',
      bind: { relevant: '${organized_by}=99', required: 'Yes' },
      label: { English: 'Specify the organizer' },
      type: 'text',
    },
    {
      name: 'funding_source',
      bind: { required: 'Yes' },
      label: { English: 'Funding Source' },
      type: 'text',
    },
    {
      name: 'reporting_attachment',
      bind: { required: 'No' },
      label: { English: 'Report Attachment' },
      type: 'photo',
    },
    {
      control: { bodyless: true },
      children: [
        {
          name: 'instanceID',
          bind: { readonly: 'true()', calculate: "concat('uuid:', uuid())" },
          type: 'calculate',
        },
      ],
      name: 'meta',
      type: 'group',
    },
  ],
  version: '1.0.1',
  type: 'survey',
  name: 'capacity_building',
  sms_keyword: 'capacity_building',
  title: 'Capacity Building',
};
/* tslint:enable */
export type DEMO_FORM_JSON = typeof DEMO_FORM_JSON;
