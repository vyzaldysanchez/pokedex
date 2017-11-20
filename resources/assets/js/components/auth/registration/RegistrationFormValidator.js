const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validations = {
  isEmpty(value) {
    return !value.trim();
  },
  isValidEmail(email) {
    let isValid = !this.isEmpty(email);

    return isValid && validEmailRegex.test(email);
  },
  isPasswordValid() {}
};

const baseValidationField = {
  displayError: false,
  error: '',
  validate(value) {
    this.displayError = validations.isEmpty(value);
  }
};

export const validator = {
  fields: {
    fullName: {
      ...baseValidationField,
      error: 'Your name is required!'
    },
    telephone: {
      ...baseValidationField,
      error: 'Your telephone is required!'
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
      }
    }
  }
};
