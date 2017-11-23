import {
  validations,
  baseValidationField,
  baseValidator
} from '@pokedex/assets/js/utils/base-validator';

export const validator = {
  ...baseValidator,
  fields: {
    fullName: {
      ...baseValidationField,
      error: 'Your name is required!'
    },
    telephone: {
      ...baseValidationField,
      error: 'Your telephone is not valid!',
      validate(value) {
        this.displayError = !validations.isTelephoneValid(value);
      }
    },
    city: {
      ...baseValidationField,
      error: 'Please provide your city!'
    },
    email: {
      ...baseValidationField,
      error: 'Your email must be valid!',
      validate(value) {
        this.displayError = !validations.isValidEmail(value);
      }
    },
    username: {
      ...baseValidationField,
      error: 'You must provide an username!'
    },
    password: {
      ...baseValidationField,
      error: 'A password must be provided!',
      validate(value, against) {
        let isConfirmed = value === against,
          isNotEmpty = !validations.isEmpty(value),
          isValid = isNotEmpty && isConfirmed;

        if (isNotEmpty && !isConfirmed) {
          this.error = `Your password and it's confirmation must be equals.`;
        }

        this.displayError = !isValid;
      }
    },
    passwordConfirmation: {
      ...baseValidationField,
      error: 'You must confirm your password!',
      validate(value, against) {
        validator.fields.password.validate.call(this, value, against);
        validator.fields.password.validate(against, value);
      }
    }
  }
};
