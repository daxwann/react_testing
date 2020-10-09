import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../utils'

const setUp = (props={}) => {
  const component = shallow(<Header {...props}/>)
  return component;
}

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render a header', () => {
    const header = findByTestAttr(component, "header");
    expect(header.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = findByTestAttr(component, "logo");
    expect(logo.length).toBe(1);
  });
});