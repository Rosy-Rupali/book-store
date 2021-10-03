import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HomePageHeader from "./HomePageHeader";
import DisplayBook from "./DisplayBooks";
import "../css/HomePage.css";
import { getBooks } from "../Services/BookService";

const HomePage = () => {
  const [books1, setBooks1] = useState([]);

  const getAllBooks1 = () => {
    getBooks()
      .then((response) => {
        console.log(response.data.result);
        setBooks1(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBooks1();
  }, []);
  return (
    <div>
      <div className="homepage-header">
        <HomePageHeader />
      </div>
      <div className="displaybook-information">
        <DisplayBook books={books1} />
      </div>
      <div className="homepage-footer">
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
