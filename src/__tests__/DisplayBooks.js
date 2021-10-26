import React from "react";
import DisplayBooks from "../components/DisplayBooks";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from "../store/store.js";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });
const testItems = [{id: 'harryPotter', bookName:"harryPotter", author: 'jk rowling', price: 2000}]
const comp = shallow(
  <Provider store={store}>
    <DisplayBooks items = {testItems} />
  </Provider>
);
const wrapper = mount(
  <Provider store={store}>
    <DisplayBooks  items = {testItems} />
  </Provider>
);

describe("renders the main div container of display book", () => {
  it("testing main div", () => {
     
    expect(comp.find(".displayBook-mainContainer")).toBeInTheDocument();
  });
  it("testing main div", () => {
    expect(wrapper.find(".displayBook-testContainer").exists()).toBe(true);
  });
});
