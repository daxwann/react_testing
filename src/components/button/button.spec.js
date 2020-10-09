import React from 'react';
import { shallow } from 'enzyme'; 
import { findByTestAttr, checkProps } from '../../../utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
  const expectedProps = {
    buttonText: 'Button text',
    emitEvent: () => {

    }
  }

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    })
  })

  describe('Renders', () => {
    let component;

    beforeEach(() => {
      component = shallow(<SharedButton {...expectedProps} />);
    })

    it("Should render a button", () => {
      const button = findByTestAttr(component, 'buttonComponent');
      expect(button.length).toBe(1);
    })
  })
})