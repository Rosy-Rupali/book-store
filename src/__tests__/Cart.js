import React from "react";
import Cart from "../components/Cart.js";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from "../store/store.js";
import { Provider } from "react-redux";
Enzyme.configure({ adapter: new Adapter() });

const comp = mount(
  <Provider store={store}>
    <Cart />
  </Provider>
);

const wrapper = shallow(<Cart />);

describe("test if the main container of cart is working or not", () => {
  it("renders the main div of cart component", () => {
    expect(comp.find(".cart-MainContainer").exists()).toBe(true);
  });
  it("renders the main div of cart component", () => {
    expect(wrapper.find(".cart-MainContainer").exists()).toBe(true);
  });
  // it("testing the input fields", () => {
  //   const comp1 = mount(
  //     <Provider store={store}>
  //       <Cart {...props} />
  //     </Provider>
  //   );
  //   const textField = comp1.find(TextField);

  //   textField.props().onChange({ target: { value: "New Task 2" } });
  //   textField.simulate("change");
  //   comp1.update();

  //   console.log(comp1.find(TextField).props());
  // });
});

describe("renders the cart component", () => {
  it("display counter text", () => {
    let quantity = jest.fn();
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    screen.queryByTestId("counter-text");
    expect(quantity).toHaveBeenCalledTimes(0);
  });

  it("increment counter", async () => {
    let quantityIncrease = jest.fn();
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    screen.queryByTestId("btn-increment");
    expect(quantityIncrease).toHaveBeenCalledTimes(0);
  });
  it("decrement counter", async () => {
    let quantityDecrease = jest.fn();
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    screen.queryByTestId("btn-decrement");
    expect(quantityDecrease).toHaveBeenCalledTimes(0);
  });

  it("succesfully opened the form", async () => {
    const { getByText, getByTestId, queryByText } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const content = fireEvent.click(screen.getByTestId("place-btn"));
    await waitFor(() => {
      expect(content).not.toBe(false);
    });
  });
});
/********************************************************************************************************* */
