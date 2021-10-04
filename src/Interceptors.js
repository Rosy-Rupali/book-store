import axios from "axios";

axios.interceptors.request.use((request) => {
  if (
    request.url.includes("bookstore_user/get/book") ||
    request.url.includes("bookstore_user/get_cart_items") ||
    request.url.includes("bookstore_user/get_wishlist_items") ||
    request.url.includes("bookstore_user/edit_user") ||
    request.url.includes("bookstore_user/add/order")
  ) {
    console.log("get the Books", request);
    request.headers.token = localStorage.getItem("Accesstoken");
    return request;
  } else {
    return request;
  }
});

axios.interceptors.response.use((response) => {
  if (response.status !== 200) {
    console.log("bad data");
    return response;
  } else {
    return response;
  }
});
