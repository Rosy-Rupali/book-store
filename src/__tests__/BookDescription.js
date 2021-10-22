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
  let clickComponent = screen.getByRole("button", {name: 'ADD TO BAG'});
  expect(clickComponent).toBeInTheDocument();
});

it("should render the buttons", async () => {
  let clickComponent = jest.fn()
  render(
    <Provider store={store}>
      <BookDescription />
    </Provider>
  );
  fireEvent.click(screen.queryByText('WISHLIST'));
  expect(clickComponent).toHaveBeenCalledTimes(0);
});

  // it("should render the paragraph element", async () => {
  //   render(
  //     <Provider store={store}>
  //       <BookDescription />
  //     </Provider>
  //   );
  //   const paragraphElement = screen.getAllByText("Lorem");
  //   expect(paragraphElement).toContainHTML(p);
  // });
});
