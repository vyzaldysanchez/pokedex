import { validator } from './../../../components/auth/registration/RegistrationFormValidator';

describe('RegistrationFormValidator', () => {
  test('Validator must validate a required field when the field is empty', () => {
    validator.fields.fullName.validate('');

    expect(validator.fields.fullName.displayError).toBeTruthy();
  });

  test('Validator must validate emails when email has an incorrect format', () => {
    validator.fields.email.validate('bad@email.');

    expect(validator.fields.email.displayError).toBeTruthy();
  });

  test('Validator must validate emails when email has a correct format', () => {
    validator.fields.email.validate('good@email.com');

    expect(validator.fields.email.displayError).toBeFalsy();
  });

  test('Validator must validate passwords when password is missing', () => {
    validator.fields.password.validate('');

    expect(validator.fields.password.displayError).toBeTruthy();
    expect(validator.fields.password.error).toBe(
      'A password must be provided!'
    );
  });

  test('Validator must validate passwords when password confirmation does not match', () => {
    validator.fields.password.validate('password', 'another_password');

    expect(validator.fields.password.displayError).toBeTruthy();
    expect(validator.fields.password.error).toBe(
      `Your password and it's confirmation must be equals.`
    );
  });

  test('Validator must validate password as valid when password confirmation matches', () => {
    validator.fields.password.validate('password', 'another_password');
    validator.fields.passwordConfirmation.validate('password', 'password');

    expect(validator.fields.password.displayError).toBeFalsy();
    expect(validator.fields.passwordConfirmation.displayError).toBeFalsy();
  });

  test('Validator must validate telepnone numbers when the number is not valid', () => {
    validator.fields.telephone.validate('asdasdasdsadas');

    expect(validator.fields.telephone.displayError).toBeTruthy();
  });

  test('Validator must validate telepnone numbers when the number is valid', () => {
    validator.fields.telephone.validate('8096810473');

    expect(validator.fields.telephone.displayError).toBeFalsy();
  });
});
