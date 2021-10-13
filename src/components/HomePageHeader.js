import React, { useEffect, useState } from "react";
import book123 from "../assets/book123.png";
import Badge from "@mui/material/Badge";
import basket from "../assets/basket.png";
import { connect } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import "../css/HeaderHomePage.css";
import { useHistory } from "react-router";
import { getFromCart} from "../Services/BookService";

const HomePageHeader = (props) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartCount, setCartCount] = useState("");
  const open = Boolean(anchorEl);

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
  const handleCartItems = () => {
    history.push('/cart');
  }
  const handleLogout = () => {
    history.push('/');
  };
  const handleSearch = (e) => {
    props.dispatch({
      type: "Search",
      searchData: e.target.value,
    });
  };

  const getCartItems = () => {
    getFromCart()
      .then((response) => {
        setCartCount(response.data.result.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItems();
  }, [props.remove]);
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
              <MenuItem onClick={handleLogo}><MenuBookOutlinedIcon fontSize="small" /> Home Page</MenuItem>
              <MenuItem onClick={handleWish}><FavoriteBorderIcon fontSize="small" /> My WishList</MenuItem>
              <Button  variant="contained" style={{
                  color: "#fff",
                  borderRadius: "3px",
                  margin: "14px"
                }} onClick={handleLogout}>Logout</Button>
            </Menu>
            <p className="profile-account-cart">Profile</p>
          </div>
          <div className="profile-cart">
            <Badge color="secondary" badgeContent={cartCount} className="badge-container">
              <img src={basket} alt="basket-icon" onClick={handleCartItems} />
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
