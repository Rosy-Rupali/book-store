import React, { useState, useEffect } from "react";
import HomePageHeader from "./HomePageHeader";
import bookImage from "../assets/bookImage.png";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import "../css/BookDescription.css";
import Avatar from "@mui/material/Avatar";
import { addCart, addWishList, getBooks } from "../Services/BookService";

const BookDescription = (props) => {
  
  const [books, setBooks] = useState([]);
  const history = useHistory();
  const getAllBooks = () => {
    getBooks()
      .then((response) => {
        let arr1 = response.data.result;
        let singleBook = arr1.filter(
          (book) => book.bookName === props.bookData
        );
        setBooks(singleBook[0]);
        console.log("Get 1 book", singleBook[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const addToCart = (data) => {
    addCart(data)
      .then((response) => {
        console.log(response);
        history.push("/cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToWishList = (productid) => {
    addWishList(productid)
      .then((response) => {
        console.log(response);
        history.push('/wishlist');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <HomePageHeader />
      <div className="container">
        <div className="block1">
          <div className="image-container">
            <img className="image3" src={bookImage} alt="selected-book" />
          </div>
          <div className="buttons">
            <Button
              className="addbag"
              variant="contained"
              style={{ backgroundColor: "#A03037" }}
              onClick={() => addToCart(books._id)}
            >
              ADD TO BAG
            </Button>
            <Button
              className="wish"
              variant="contained"
              style={{ backgroundColor: "#000000" }}
              onClick={() => addToWishList(books._id)}
            >
              <FavoriteIcon /> WISHLIST
            </Button>
          </div>
        </div>
        <div className="block2">
          <div className="des-head">{books.bookName}</div>
         <div className="des-para">{books.author}</div>
          <div className="green-btn1">
            4.5
            <StarIcon style={{ fontSize: "medium" }} />
          </div>
          <div className="des-price">Rs.{books.price}</div>
          <div className="desc-bookdetails">
            <Divider />
            <h4 className="des-Bookhead"> Book Details</h4>
            <p className="des-Bookpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              odio vero quam itaque totam molestias. Excepturi rerum reiciendis
              ullam quidem assumenda, ut obcaecati optio repellat recusandae
              atque consequatur quae eos! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis quam aspernatur doloremque iure minus
              error, at est, saepe doloribus labore exercitationem distinctio
              voluptates sed iusto! Assumenda tenetur voluptates rem .
            </p>
            <Divider />
          </div>
          <h5 className="feedback-tag">Customer Feedback</h5>
          <div className="custDetails-container">
            <p className="overall">Overall Rating</p>
            <span>
              <StarBorderOutlinedIcon />
              <StarBorderOutlinedIcon className="star-icon" />
              <StarBorderOutlinedIcon className="star-icon" />
              <StarBorderOutlinedIcon className="star-icon" />
              <StarBorderOutlinedIcon className="star-icon" />
            </span>
            <div className="views">
              <h6 className="views-tag">Write your review</h6>
            </div>
            <div className="submit">
              <Button
                style={{
                  backgroundColor: "#3371b5",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "2px",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="review">
            <Avatar>RR</Avatar>
            <div className="review-person">
              <h6 className="feedbck-name">Rosy Rupali</h6>
              <span>
                <StarIcon className="clr-star" />
                <StarIcon className="clr-star" />
                <StarIcon className="clr-star" />
                <StarBorderOutlinedIcon />
                <StarBorderOutlinedIcon />
              </span>
              <p className="des-Bookpara">
                Great Job!! ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum natus fuga maxime, aperiam ducimus pariatur quo iusto
                assumenda! Explicabo eius debitis hic quidem tempore
                perspiciatis obcaecati quam quibusdam adipisci porro! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                asperiores, sed culpa ab earum nemo rem. Nobis provident aut
                eius ex iure dolor obcaecati veritatis, eos facere asperiores,
                nesciunt iusto?
              </p>
            </div>
          </div>
          <div className="review">
            <div>
              <Avatar>AS</Avatar>
            </div>
            <div className="review-person">
              <h6 className="feedbck-name">Ayush Singh</h6>
              <span>
                <StarIcon className="clr-star" />
                <StarIcon className="clr-star" />
                <StarIcon className="clr-star" />
                <StarIcon className="clr-star" />
                <StarBorderOutlinedIcon />
              </span>
              <p className="des-Bookpara">
                Great Job!! ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum natus fuga maxime, aperiam ducimus pariatur quo iusto
                assumenda! Explicabo eius debitis hic quidem tempore
                perspiciatis obcaecati quam quibusdam adipisci porro! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    bookData: state.bookDetailsReducer.bookData,
  };
};
export default connect(mapStateToProps)(BookDescription);
