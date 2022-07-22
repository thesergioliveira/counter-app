import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

// Normally it is possible to configure enzyme in order to avoid using it in every test file
Enzyme.configure({ adapter: new Adapter() });

// TODO: Refactoring
const getWrapper = () => shallow(<App />);
const appcomponent = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

test("renders non-empty app component without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="app-component"]');
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = shallow(<App />);
  const buttonIncrement = wrapper.find('[data-test="button-increment"]');
  expect(buttonIncrement.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find('[data-test="counter-display"]');
  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find('[data-test="counter-display"]').text();
  expect(counterDisplay).toBe("0");
});

test("clicking button increments counter display", () => {
  const wrapper = shallow(<App />);

  // find the button
  const buttonIncrement = wrapper.find('[data-test="button-increment"]');

  // click the button
  buttonIncrement.simulate("click");

  // find the display, and test that the number has been incremented
  const counter = wrapper.find('[data-test="counter-display"]').text();
  expect(counter).toBe("1");
});

// TODO: Add tests for decrement button and error message

test("clicking button decrement counter display is updated", () => {
  const wrapper = getWrapper();
  // find the increment and decrement buttons
  const buttonIncrement = wrapper.find('[data-test="button-increment"]');
  const buttonDecrement = wrapper.find('[data-test="button-decrement"]');

  const counterInitial = wrapper.find('[data-test="counter-display"]').text();
  expect(counterInitial).toBe("0");

  // click the button
  buttonIncrement.simulate("click");

  const counterIntermediate = wrapper
    .find('[data-test="counter-display"]')
    .text();
  expect(counterIntermediate).toBe("1");

  buttonDecrement.simulate("click");

  // find the display, and test that the number has been updated
  const counterFinal = wrapper.find('[data-test="counter-display"]').text();
  expect(counterFinal).toBe("0");
});

test("clicking button decrement when counter is zero triggers message", () => {
  // find the decrement button
  // find the counter display
  // click the decrement button
  // find the display, and test that the number has been incremented
  // find the display, and test that the number has been incremented
});
