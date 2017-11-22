import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { RegistrationForm } from './../../components/auth/registration/RegistrationForm';

describe('RegistrationForm', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RegistrationForm />);
  });

  test('Fields are marked as required at not valid form submit', () => {
    component.find('form').simulate('submit', { preventDefault() {} });

    expect(component.instance().formIsValid()).toBeFalsy();
  });

  test('Telephone number should be mask when value is valid', () => {
    component.find('[name="telephone"]').simulate('change', '8096810473');

    expect(component.instance().telephone).toBe('(809) 681-0473');
  });

  test('Telephone number should be mask when value is not valid', () => {
    component.find('[name="telephone"]').simulate('change', '096810473');

    expect(component.instance().telephone).toBe('096810473');
  });

  test('Telephone number should be mask when value is not valid', () => {
    component.find('[name="fullName"]').simulate('change', 'Vyzaldy');
    component.find('[name="telephone"]').simulate('change', '8096810473');
    component.find('[name="city"]').simulate('change', 'City');
    component.find('[name="email"]').simulate('change', 'v.sanchez@gbh.com.do');
    component.find('[name="username"]').simulate('change', 'vyzaldy');
    component.find('[name="password"]').simulate('change', '123456');
    component
      .find('[name="password_confirmation"]')
      .simulate('change', '123456');

    component.find('form').simulate('submit', { preventDefault() {} });

    expect(component.instance().formIsValid()).toBeTruthy();
  });
});
