import {
  validations,
  baseValidationField,
  baseValidator
} from './../../../utils/base-validator';

export const validator = {
  ...baseValidator,
  fields: {
    email: {
      ...baseValidationField,
      error: 'Your email must be valid!',
      validate(value) {
        this.displayError = !validations.isValidEmail(value);
      }
    },
    password: {
      ...baseValidationField,
      error: 'You must indicate a password!'
    }
  }
};
