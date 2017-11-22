import {
  validations,
  baseValidationField,
  baseValidator
} from '@pokedex/assets/js/utils/base-validator';

export const validator = {
  ...baseValidator,
  fields: {
    username: {
      ...baseValidationField,
      error: 'Your must indicate your username!'
    },
    password: {
      ...baseValidationField,
      error: 'You must indicate a password!'
    }
  }
};
