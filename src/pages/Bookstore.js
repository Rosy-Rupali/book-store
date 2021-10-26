import React, { useState } from "react";
import Button from "@mui/material/Button";
import trolley from "../assets/trolley1.png";
import "../css/BookStoreMain.css";
import Login from "./Login";
import Signup from "./Signup";

const BookStoreMain = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
 
  return (
    <div className="mainContainer-bookstore">
      <div className="container-bookstore">
        <div className="image-heading">
          <img alt="basket-pic" src={trolley} className="trolley" />
          <h4>ONLINE BOOK SHOPPING</h4>
        </div>
        <div className="formContainer-pages">
          <div className="formButtons">
            <Button
              variant="text"
              onClick={handleClick}
              className="loginButton"
            >
              <h3>Login</h3>
            </Button>
            <Button
              variant="text"
              onClick={handleClick}
              className="signupButton"
            >
              <h3>SignUp</h3>
            </Button>
          </div>
          <div className="show">
          {click ? <Login /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookStoreMain;
