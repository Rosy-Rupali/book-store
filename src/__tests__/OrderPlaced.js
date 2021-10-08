import React from "react";
import OrderPlaced from "../components/OrderPlaced";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<OrderPlaced />);

describe("renders the Order placed component", () => {
  it("render main container", () => {
    expect(wrapper.find(".orderplaced-container")).toHaveLength(1);
  });
  it("test whether div is present or not", () => {
    expect(wrapper.find(".order-head")).toHaveLength(1);
  });
  it("test whether div is present or not", () => {
    expect(wrapper.find(".order-detail2")).toHaveLength(1);
  });
});
