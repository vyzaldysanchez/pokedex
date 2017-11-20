import { validator } from './../../../components/auth/registration/RegistrationFormValidator';

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
  expect(validator.fields.password.error).toBe('A password must be provided!');
});

test('Validator must validate passwords when password confirmation does not match', () => {
  validator.fields.password.validate('password', 'another_password');

  expect(validator.fields.password.displayError).toBeTruthy();
  expect(validator.fields.password.error).toBe(
    `Your password and it's confirmation must be equals.`
  );  
});
