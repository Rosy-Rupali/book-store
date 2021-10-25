import axios from "axios";
import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
} from "./itemTypes";

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  };
};

const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());
    axios
      .get(
        "https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items"
      )
      .then((response) => {
        const items = response.data.result;
        dispatch(fetchItemsSuccess(items));
      })
      .catch((error) => {
        dispatch(fetchItemsFailure(error.message));
      });
  };
};
