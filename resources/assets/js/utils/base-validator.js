const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validTelephoneRegex = /^\d{10}$/;

export const validations = {
  isEmpty(value) {
    return !value.trim();
  },
  isTelephoneValid(telephone) {
    return !this.isEmpty(telephone) && validTelephoneRegex.test(telephone);
  },
  isValidEmail(email) {
    let isValid = !this.isEmpty(email);

    return isValid && validEmailRegex.test(email);
  },
  isPasswordValid() {}
};

export const baseValidationField = {
  displayError: false,
  error: '',
  validate(value) {
    this.displayError = validations.isEmpty(value);
  }
};

export const baseValidator = {
  hasErrors() {
    return Object.keys
      .call(this, this.fields)
      .some(field => this.fields[field].displayError);
  }
};
