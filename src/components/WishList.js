import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import HomePageHeader from "./HomePageHeader";
import bookImage from "../assets/bookImage.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useHistory } from "react-router";
import "../css/WishList.css";
import {
  getFromWishList,
  removeFromWishlist,
  addCart,
} from "../Services/BookService";

const WishList = () => {
  const history = useHistory();
  const [wishList, setwishList] = useState([]);

  const getWishListItems = () => {
    getFromWishList()
      .then((response) => {
        console.log(response);
        setwishList(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWishListItems();
  }, []);
  const addToCart = (productid) => {
    addCart(productid)
      .then((response) => {
        console.log(response);
        handleRemove(productid);
        history.push("/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (productid) => {
    removeFromWishlist(productid)
      .then((response) => {
        console.log(response, "remove from wishlist");
        getWishListItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <HomePageHeader />
      <div className="header1-text1-div">
        <p className="header-text1">Home/</p>
        <h6 className="header-tag2">My Wishlist</h6>
      </div>
      <div className="wish-container">
        <div className="wishlistitem-container">
          <h3 className="wish-head">My WishList({wishList.length})</h3>
          {wishList.map((book) => (
            <div className="cart-image2">
              <div className="wishimg-details">
                <img className="image2" src={bookImage} alt="book" />
                <div className="details-cart">
                  <h3 className="head-tagname">{book.product_id.bookName}</h3>
                  <p className="head-tag-para">by {book.product_id.author}</p>
                  <h5 className="head-tag">Rs {book.product_id.price}</h5>
                </div>
              </div>

              <div className="add-del">
                <div
                  className="addbag1"
                  onClick={() => addToCart(book.product_id._id)}
                >
                  Add To Bag
                </div>
                <DeleteForeverIcon
                  className="del-icon"
                  style={{ size: "small", color: "#ccc" }}
                  onClick={() => handleRemove(book.product_id._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default WishList;
