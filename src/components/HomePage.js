import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HomePageHeader from "./HomePageHeader";
import DisplayBook from "./DisplayBooks";
import Pagination from "./Pagination";
import "../css/HomePage.css";
import { getBooks } from "../Services/BookService";

const HomePage = () => {
  const [books1, setBooks1] = useState([]);
  const [count, setCount] = useState();
  const [perPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentBooks = books1.slice(indexOfFirstPost, indexOfLastPost);
  const getAllBooks1 = () => {
    getBooks()
      .then((response) => {
        setBooks1(response.data.result);
        console.log(response.data.result.length);
        setCount(response.data.result.length);
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
        <DisplayBook books={currentBooks} />
      </div>
      <div>
        <Pagination pageCount={count} perPage={perPage} paginate={paginate} />
      </div>
      <div className="homepage-footer">
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
