import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Login } from './../../components/auth/login/Login';

describe('Login', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Login />);
  });

  test('Fields should be required when submitting empty values', () => {
    const form = component
      .find('LoginForm')
      .dive()
      .find('form');

    form.simulate('submit', { preventDefault() {} });

    expect(component.instance().formIsValid()).toBe(false);
  });
});
