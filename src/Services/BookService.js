import axios from "axios";
import store from "../store/store.js";
// import {createStore} from 'redux'
// const storeState = store.getState();
const baseUrl = "https://new-bookstore-backend.herokuapp.com/";
const config = {
  headers: {
    "Content-Type": "application/json",
    "x-access-token": localStorage.getItem("Accesstoken"),
  },
};
export const getBooks = async () => {
  let response = await axios.get(`${baseUrl}bookstore_user/get/book`);
  console.log(response);
  return response;
};

export const addCart = async (product_id) => {
  let response = await axios.post(
    `${baseUrl}bookstore_user/add_cart_item/${product_id}`,
    {},
    config
  );
  // store.dispatch({ type: "addCart" });
  console.log(response);
  return response;
};

export const addWishList = async (product_id) => {
  let response = await axios.post(
    `${baseUrl}bookstore_user/add_wish_list/${product_id}`,
    {},
    config
  );

  console.log(response);
  return response;
};

export const getFromCart = async () => {
  let response = await axios.get(`${baseUrl}bookstore_user/get_cart_items`);
  console.log(response);
  return response;
};

export const getFromWishList = async () => {
  let response = await axios.get(`${baseUrl}bookstore_user/get_wishlist_items`);
  console.log(response);
  return response;
};
export const cartitemQuantity = async (cartitem_id, data) => {
  let response = await axios.put(
    `${baseUrl}bookstore_user/cart_item_quantity/${cartitem_id}`,
    data,
    config
  );
  console.log(response);
  return response;
};

export const removeFromCart = async (book_id) => {
  let response = await axios.delete(
    `${baseUrl}bookstore_user/remove_cart_item/${book_id}`,
    config
  );
  // store.dispatch({ type: "subtractCart" });
  console.log(response);
  return response;
};

export const removeFromWishlist = async (book_id) => {
  let response = await axios.delete(
    `${baseUrl}bookstore_user/remove_wishlist_item/${book_id}`,
    config
  );
  console.log(response);
  return response;
};

export const customerDetails = async (data) => {
  let response = await axios.put(`${baseUrl}bookstore_user/edit_user`, data);
  console.log(response);
  return response;
};

export const addOrder = async (data) => {
  let response = await axios.post(`${baseUrl}bookstore_user/add/order`, data);
  console.log(response);
  return response;
};
