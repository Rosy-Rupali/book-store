import React from "react";
import BookStoreMain from "../pages/Bookstore";
import { render } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
const comp = shallow(<BookStoreMain />);
const wrapper = mount(<BookStoreMain />);
describe("renders signup and login container", () => {
  it("renders Login component", () => {
    expect(comp.find(".test1")).toHaveLength(0);
  });
  it("renders Signup component", () => {
    expect(comp.find(".test")).toHaveLength(0);
  });

  it("mount the Login component", () => {
    expect(wrapper.find(".test1")).toHaveLength(1);
  });
  it("mount Signup component", () => {
    expect(wrapper.find(".test")).toHaveLength(0);
  });
  it('image of coverpage', () => {
    const { getByAltText } = render(
      <BookStoreMain />
    );
    expect(getByAltText('basket-pic')).toBeDefined();
  });
});

describe("testing the signup and login button click events", () => {
  it("test if the signup button works", () => {
    const signupButton = comp.find(".signupButton");
    signupButton.simulate("click");
    comp.update();
    expect(comp.find(".signupButton")).toHaveLength(1);
  });
  it("test if the login button works", () => {
    const loginButton = comp.find(".loginButton");
    loginButton.simulate("click");
    comp.update();
    expect(comp.find(".loginButton")).toHaveLength(1);
  });
});