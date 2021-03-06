import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr, createTestStore } from '../utils';
import React from 'react';

const setUp = (initialState = {}) => {
  const store = createTestStore(initialState);
  const component = shallow(<App store={store} />).childAt(0).dive();
  return component;
}

describe("App component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Test title 1",
          body: 'Test body 1'
        },
        {
          title: "Test title 2",
          body: 'Test body 2'
        },
        {
          title: "Test title 3",
          body: 'Test body 3'
        }
      ]
    }
    component = setUp(initialState);
  })

  it('Should render', () => {
    const appComponent = findByTestAttr(component, 'appComponent');
    expect(appComponent.length).toBe(1);
  })

  it('should update isBtnHidden when toggleBtn method is called', () => {
    const classInstance = component.instance();
    const oldState = classInstance.state.isBtnHidden;
    classInstance.toggleBtn();
    const newState = classInstance.state.isBtnHidden;
    expect(newState).not.toBe(oldState);
  })

  it('should return a number when method is called', () => {
    const classInstance = component.instance();
    const newValue = classInstance.methodReturnsValue(4);
    expect(newValue).toBe(5);
  })
})