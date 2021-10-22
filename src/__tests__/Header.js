import React from "react";
import HomePageHeader from "../components/HomePageHeader.js";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from "../store/store.js";
import { Provider } from "react-redux";
Enzyme.configure({ adapter: new Adapter() });

const wrapper = mount(
  <Provider store={store}>
    <HomePageHeader />
  </Provider>
);

describe("renders the header component", () => {
  it("render the main div of the header component", () => {
    expect(wrapper.find(".mainHeaderContainer")).toHaveLength(1);
  });
});

describe("Input value", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <Provider store={store}>
        <HomePageHeader setSearch={setSearch} />
      </Provider>
    );

    const searchInput = queryByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
  it("increments counter after 0.5s", async () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <HomePageHeader />
      </Provider>
    );
    fireEvent.click(getByTestId("button-up"));

    await waitFor(() => {
      expect(getByText("Cart")).toBeInTheDocument();
    });
  });
});
