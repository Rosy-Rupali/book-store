import React from "react";
import book123 from "../assets/book123.png";
import basket from '../assets/basket.png'
import {connect} from "react-redux"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import '../css/HeaderHomePage.css'
const HomePageHeader = (props) => {

  const handleSearch = (e) =>{
    props.dispatch({
      type: "Search",
      searchData: e.target.id
    })
  }
  return (
    <div className="mainHeaderContainer">
    <div className="testHeaderContainer">
      <div className="headerContainer">
      <div className="books-para">
      <img src={book123} alt="book-icon" />
        <p className="para">Bookstore</p>
      </div>
        <div className="searchsection">
          <SearchOutlinedIcon />
          <input onChange={handleSearch} className="search-input" placeholder="Search..." />
        </div>
        </div>
        <div className="header-icons">
          <div className="profile-cart">
            <PersonOutlineOutlinedIcon />
            <p className="profile-account-cart">Profile</p>
          </div>
          <div className="profile-cart">
            <img src={basket} alt="basket-icon" />
            <p className="profile-account-cart">Cart</p>
        </div>
        </div>
      </div>
    </div>
  );
};
const  mapStateToProps = (state) => {
  return {
    searchData: state.searchBarReducer.searchData,
  };
}
export default connect(mapStateToProps)(HomePageHeader);
