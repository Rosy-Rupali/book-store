import React from "react";
import HomePage from "../components/HomePage";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from "../store/store.js";
import { Provider } from "react-redux";
Enzyme.configure({ adapter: new Adapter() });

const comp = shallow(<HomePage />);
const wrapper = mount(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
describe("test if the child component are working", () => {
  it("render the header component", () => {
    expect(comp.find(".homepage-header")).toHaveLength(1);
  });
  it("render the display book component", () => {
    expect(comp.find(".displaybook-information").exists()).toBe(true);
  });
  it("render the footer component", () => {
    expect(comp.find(".homepage-footer").exists()).toBe(true);
  });
  it("render the header component", () => {
    expect(wrapper.find(".homepage-header")).toHaveLength(1);
  });
  it("render the display book component", () => {
    expect(wrapper.find(".displaybook-information").exists()).toBe(true);
  });
  it("render the footer component", () => {
    expect(wrapper.find(".homepage-footer")).toHaveLength(1);
  });
});
