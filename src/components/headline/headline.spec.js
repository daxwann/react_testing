import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from '../../../utils';

describe("Headline Component", () => {
  const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
  }

  describe("Checking proptypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [{
          fName: "Test fName",
          lName: "Test lName",
          email: "test@email.com",
          age: 23,
          onlineStatus: false
        }]
      }

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    })
  })

  describe("Have props header", () => {
    let component;

    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test desc"
      }
      component = setUp(props);
    })

    it("should render headline", () => {
      const headline = findByTestAttr(component, "headline");
      expect(headline.length).toBe(1);
    });

    it("should render headline header", () => {
      const headlineHeader = findByTestAttr(component, "headline--header");
      expect(headlineHeader.length).toBe(1);
    });

    it("should render headline logo", () => {
      const headlineDesc = findByTestAttr(component, "headline--desc");
      expect(headlineDesc.length).toBe(1);
    });
  });

  describe("Have no props header", () => {  
    let component;

    beforeEach(() => {
      component = setUp();
    })

    it("should not render headline", () => {
      const headline = findByTestAttr(component, "headline");
      expect(headline.length).toBe(0);
    })

    it("should not render headline header", () => {
      const headlineHeader = findByTestAttr(component, "headline--header");
      expect(headlineHeader.length).toBe(0);
    });

    it("should not render headline logo", () => {
      const headlineDesc = findByTestAttr(component, "headline--desc");
      expect(headlineDesc.length).toBe(0);
    });
  })
})