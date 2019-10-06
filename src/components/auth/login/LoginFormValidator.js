import {
  baseValidationField,
  baseValidator,
} from '../../../utils/base-validator';

export const validator = {
  ...baseValidator,
  fields: {
    username: {
      ...baseValidationField,
      error: 'Your must indicate your username!',
    },
    password: {
      ...baseValidationField,
      error: 'You must indicate a password!',
    },
  },
};
