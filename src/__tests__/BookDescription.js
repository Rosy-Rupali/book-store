import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookDescription from "../components/BookDescription";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from "../store/store.js";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });
const comp = mount(
  <Provider store={store}>
    <BookDescription />
  </Provider>
);
const wrapper = shallow(<Provider store={store}>
  <BookDescription />
</Provider>);
describe("test if the main container of book description is working or not", () => {
  it("renders the main div of book description", () => {
    expect(comp.find(".bookdescription-maincontainer").exists()).toBe(true);
  });
  it("should render the heading element", async () => {
    render(
      <Provider store={store}>
        <BookDescription />
      </Provider>
    );
    const headingElement = screen.getByText("Book Details");
    expect(headingElement).toBeInTheDocument();
  });
  it("should render the buttons", async () => {
    render(
      <Provider store={store}>
        <BookDescription />
      </Provider>
    );
    let clickComponent = screen.getByRole("button", { name: "ADD TO BAG" });
    expect(clickComponent).toBeInTheDocument();
  });

  it("should render the buttons", async () => {
    let clickComponent = jest.fn();
    render(
      <Provider store={store}>
        <BookDescription />
      </Provider>
    );
    fireEvent.click(screen.queryByText("WISHLIST"));
    expect(clickComponent).toHaveBeenCalledTimes(0);
  });
});

/********************************************************************************************************************************* */
describe("testing the paragraph element", () => {
  it("testing the paragraph", () => {
    expect(comp.find('.custDetails-container').childAt(0).type()).toEqual('p');
  })
  it("testing the click event of add to bag button", () => {
    const handleMock = jest.fn()
    const wrapper1 = shallow(<Provider store={store}>
      <BookDescription onClick={handleMock} />
    </Provider>)
    const addtobagButton = wrapper1.find('.addbag');
    addtobagButton.simulate('click');
    // wrapper1.update();
    expect(handleMock).toHaveBeenCalled();
    // expect(wrapper.window.location.pathname).toBe('/cart');
  })
})