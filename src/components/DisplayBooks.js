import React, { useEffect, useState } from "react";
import NativeSelect from "@mui/material/NativeSelect";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/Star";
import bookImage from "../assets/bookImage.png";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import "../css/DisplayBook.css";

const DisplayBook = (props) => {
  const [bookList, setBookList] = useState(props.books);
  const history = useHistory();

  const handleBookDescription = (e) => {
    props.dispatch({
      type: "BookDetails",
      bookData: e.target.id,
    })
    history.push("/description");
  };

  useEffect(() => {
    let filteredBooks = props.books;
    if(props.searchData){
      filteredBooks = props.books.filter((book) => book.bookName.toLowerCase().includes(props.searchData));
    setBookList(filteredBooks);
    console.log(filteredBooks);
     }else{
      setBookList(props.books);
     } 
  }, [props]);

  return (
    <div className="displayBook-mainContainer">
      <div className="displayBook-testContainer">
        <div className="displaybook-header">
          <div className="displaybook-header2">
            <h2 className="header-text-displayBook">Books</h2>
            <p className="header-para">(128 items)</p>
          </div>
          <NativeSelect
            style={{
              border: "1px solid black",
              marginTop: "3px",
              borderRadius: "5px",
            }}
          >
            <option>Sort by relevence</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </NativeSelect>
        </div>
        <div className="displayBook-container">
          {bookList.map((book) => (
            <div className="singleBook-container">
              <Card className="bookstate">
                <CardContent className="card-content">
                  <div className="displaybook-image">
                    <img
                      alt="book-pic"
                      src={bookImage}
                      className="image1"
                      id={book.bookName}
                      onClick={handleBookDescription}
                    />
                  </div>
                  <div className="book-info">
                    <h3 className="book-name">{book.bookName}</h3>
                    <p className="book-author">by {book.author}</p>
                    <div className="rating">
                      4.5
                      <StarIcon style={{ fontSize: "small" }} />
                    </div>
                    <h3>Rs.{book.price} </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    searchData: state.searchBarReducer.searchData,
    bookData: state.bookDetailsReducer.bookData,
  };
};
export default connect(mapStateToProps)(DisplayBook);
