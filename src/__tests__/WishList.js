import React from "react";
import { render,fireEvent, screen } from '@testing-library/react';
// import "@testing-library/jest-dom";
import WishList from '../components/WishList.js'
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from "../store/store.js";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = mount(<Provider store={store}><WishList /></Provider> );

describe("testing the WishList component", () => {
    it("renders the main div of wishlist", () => {
        expect(wrapper.find(".wishlist-maincontainer")).toHaveLength(1);
    })
})

// describe("testing the add to cart and remove button click events", () => {
//     it("tests if the add to cart button works", () => {
//         render(<Provider store={store}><WishList /></Provider>)
//         let addbagbutton = document.querySelector(".addbag1")
//         fireEvent.click(screen.getByText('Add To Bag'))
//         expect();
//     })
// })