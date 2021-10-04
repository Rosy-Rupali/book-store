import React, { useEffect, useState } from "react";
import book123 from "../assets/book123.png";
import Badge from "@mui/material/Badge";
import basket from "../assets/basket.png";
import { connect } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../css/HeaderHomePage.css";
import { createStore } from "redux";
import store from "../store/store.js";
import { useHistory } from "react-router";
import Divider from "@mui/material/Divider";

const HomePageHeader = (props) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const storeState = store.getState();
  console.log(storeState);
  const cartCount = storeState.cartCountReducer.count;
  console.log(cartCount);

  const handleLogo = () => {
    history.push("/home");
  };
  const handleClickPerson = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePerson = () => {
    setAnchorEl(null);
  };
  const handleWish = () => {
    history.push("/wishlist");
  };
  const handleLogout = () => {
    
  };
  const handleSearch = (e) => {
    props.dispatch({
      type: "Search",
      searchData: e.target.value,
    });
  };
  return (
    <div className="mainHeaderContainer">
      <div className="testHeaderContainer">
        <div className="headerContainer">
          <div className="books-para">
            <img onClick={handleLogo} src={book123} alt="book-icon" />
            <p className="para">Bookstore</p>
          </div>
          <div className="searchsection">
            <SearchOutlinedIcon />
            <input
              onChange={handleSearch}
              className="search-input"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="header-icons">
          <div className="profile-cart">
            <PersonOutlineOutlinedIcon
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickPerson}
            />
            <Menu anchorEl={anchorEl} open={open} onClose={handleClosePerson}>
              <MenuItem onClick={handleLogo}>Home Page</MenuItem>
              <Divider />
              <MenuItem onClick={handleWish}>My WishList</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            <p className="profile-account-cart">Profile</p>
          </div>
          <div className="profile-cart">
            <Badge color="secondary" badgeContent={cartCount}>
              <img src={basket} alt="basket-icon" />
            </Badge>
            <p className="profile-account-cart">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    searchData: state.searchBarReducer.searchData,
  };
};
export default connect(mapStateToProps)(HomePageHeader);
