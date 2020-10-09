import React from 'react';
import { shallow } from 'enzyme'; 
import { findByTestAttr, checkProps } from '../../../utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    const expectedProps = {
      buttonText: 'Button text',
      emitEvent: () => {
  
      }
    }

    it('Should not throw a warning', () => {
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    })
  })

  describe('Renders', () => {
    let component;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const expectedProps = {
        buttonText: 'Button text',
        emitEvent: mockFunc
      }

      component = shallow(<SharedButton {...expectedProps} />);
    })

    it("Should render a button", () => {
      const button = findByTestAttr(component, 'buttonComponent');
      expect(button.length).toBe(1);
    })

    it("Should emit callback on click event", () => {
      const button = findByTestAttr(component, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    })
  })
})