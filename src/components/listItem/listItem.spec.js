import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import ListItem from './index';

describe("ListItem component", () => {
  const expectedProps = {
    title: "Test title",
    desc: "Test desc"
  }

  describe("propTypes", () => {
    it("Should not throw warning", () => {
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    })
  });

  describe("When passed in expected props", () => {
    let component;
    beforeEach(() => {
      component = shallow(<ListItem {...expectedProps} />);
    })

    it("Should render a listItem", () => {
      const listItem = findByTestAttr(component, 'list-item');
      expect(listItem.length).toBe(1);
    })

    it("Should render a title", () => {
      const title = findByTestAttr(component, 'list-item--title');
      expect(title.length).toBe(1);
    })

    it("Should render a desc", () => {
      const desc = findByTestAttr(component, 'list-item--desc');
      expect(desc.length).toBe(1);
    })
  })

  describe("When passed in unexpected props", () => {
    let component;
    const unexpectProps = {}
    beforeEach(() => {
      component = shallow(<ListItem {...unexpectProps} />);
    })

    it("Should not render a listItem", () => {
      const listItem = findByTestAttr(component, 'list-item');
      expect(listItem.length).toBe(0);
    })

    it("Should not render a title", () => {
      const title = findByTestAttr(component, 'list-item--title');
      expect(title.length).toBe(0);
    })

    it("Should not render a desc", () => {
      const desc = findByTestAttr(component, 'list-item--desc');
      expect(desc.length).toBe(0);
    })
  })
})