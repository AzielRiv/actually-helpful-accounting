import { Validators } from "@angular/forms";
import { FormService, ProfileCategory, ProfileMetaFields } from 'my-library';

export const TYPES = ['Resident'];

export var rTypes: string[] = [
  "Seasonal Resident",
  "Full Time Resident",
];
// INITIALIZING IN WELCOME //////////////////////////////////////////////////////////////////////////////////////////////////////

// GENERIC PROFILE VARIABLES // THESE ARE STATIC ENTERED INTO CATEGORIES RESPECTIVELY 
// DO NOT REARRANGE OR CHANGE - HAS BIG IMPACT ON SYSTEM
export var ProfileCategories: ProfileCategory[] = [
  // { ID: 0, Title: 'I am a...', Description: ''}, // ID: 0 RESERVED SPACE for 1st question - user selection and initialization of remaining fields
  { ID: 1, Title: 'Personal', Description: 'Personal Information' },
  { ID: 2, Title: 'Additional Info', Description: '' },
  { ID: 3, Title: 'Profile Picture', Description: '' }, // seperate so they can upload a picture later if they want 
];

//profile config//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export var USER_META: ProfileMetaFields[] = [
  {
    Title: '',
    Name: 'pictures',
    Type: 'profilePicture',
    Vars: '',
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 3),
    Placeholder: 'https://www.w3schools.com/howto/img_avatar.png',
    validators: [Validators.minLength(5), Validators.maxLength(200)],
    customValidators: "ValidateLink",
    Required: false,
    userCategories: [TYPES[0]]
  },

  //remove to default to a single type
  // { Title: 'User Type',
  //   Name: 'Type',
  //   Type: 'select',
  //   Vars: TYPES,
  //   Style: '',
  //   Category: ProfileCategories.find(cat => cat.ID === 0),
  //   Placeholder: '',
  //   validators: [], 
  //   customValidators: "ValidateName",
  //   Required: true,
  //   userCategories: []},

  // { Title: 'First Name',
  //   Name: 'firstname',
  //   Type: 'text',
  //   Vars: '',
  //   Style: '',
  //   Category: ProfileCategories.find(cat => cat.ID === 1),
  //   Placeholder: '',
  //   validators: [Validators.minLength(2), Validators.maxLength(50)], 
  //   customValidators: "ValidateName",
  //   Required: true,
  //   userCategories: [TYPES[1],TYPES[0]]},

  {
    Title: 'Last Name',
    Name: 'lastname',
    Type: 'text',
    Vars: '',
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 1),
    Placeholder: '',
    validators: [Validators.minLength(2), Validators.maxLength(50)],
    customValidators: "ValidateName",
    Required: true,
    userCategories: [TYPES[0]]
  },

  {
    Title: 'Seasonal Resident or Full Time',
    Name: 'resident_type',
    Type: 'select',
    Vars: rTypes,
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 1),
    Placeholder: '',
    validators: [
      Validators.minLength(1),
      Validators.maxLength(50)],
    userCategories: [TYPES[0]],
    Required: true
  },

  {
    Title: 'Street Address',
    Name: 'street',
    Type: 'text',
    Vars: '',
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 2),
    Placeholder: '',
    validators: [
      Validators.minLength(5),
      Validators.maxLength(100)],
    userCategories: [TYPES[0]],
    Required: true
  },

  {
    Title: 'City',
    Name: 'city',
    Type: 'text',
    Vars: '',
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 2),
    Placeholder: '',
    validators: [
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z\s.'-]+$/)],
    userCategories: [TYPES[0]],
    Required: true
  },

  {
    Title: 'State',
    Name: 'state',
    Type: 'select',
    Vars: FormService.US_States,
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 2),
    Placeholder: '',
    validators: [],
    userCategories: [TYPES[0]],
    Required: true
  },

  {
    Title: 'Country',
    Name: 'country',
    Type: 'text',
    Vars: '',
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 2),
    Placeholder: '',
    validators: [
      Validators.minLength(2),
      Validators.maxLength(56), // Longest country name is around 56 chars
      Validators.pattern(/^[a-zA-Z\s.'-]+$/)],
    userCategories: [TYPES[0]],
    Required: true
  },

  {
    Title: 'ZIP Code',
    Name: 'zip',
    Type: 'text',
    Vars: '',
    Style: '',
    Category: ProfileCategories.find(cat => cat.ID === 2),
    Placeholder: '',
    validators: [
      Validators.pattern(/^\d{5}(-\d{4})?$/)],
    userCategories: [TYPES[0]],
    Required: true
  },
];

export interface TYPE_Resident {
  [key: string]: any;
  resident_type: string;
  address: string;
  conference: string;
  Connect?: string;
  ConnectCount?: number; // Number of connections
  dis_name: string;
  Email: string;
  firstname: string;
  GID?: number[];
  ID?: string;
  lastname: string;
  Skip?: string;
  Type: string; // User type
  video: string;
  Verified?: boolean;
}
