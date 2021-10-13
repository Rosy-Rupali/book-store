import React, { useState, useEffect } from "react";
import HomePageHeader from "./HomePageHeader";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import bookImage from "../assets/bookImage.png";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "../css/Cart.css";
import Footer from "./Footer";
import {
  getFromCart,
  cartitemQuantity,
  removeFromCart,
  customerDetails,
  addOrder,
} from "../Services/BookService";
import { useHistory } from "react-router";

const Cart = () => {
  const history = useHistory();
  const [cart, setCart] = useState([]);
  const [fName, setfName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [removeItem, setRemoveItem] = useState(false);
  const [fNameError, setfNameError] = useState(true);
  const [mobileError, setmobileError] = useState(true);
  const [cityError, setCityError] = useState(true);
  const [stateError, setStateError] = useState(true);
  const [opencustDetails, setOpenCustDetails] = useState(true);
  const [openOrderSum, setOpenOrderSum] = useState(true);

  const handlefName = (e) => {
    setfName(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleRadio = (e) => {
    setType(e.target.value);
  };
  const handleArea = (e) => {
    setArea(e.target.value);
  };
  const validation = () => {
    let isError = false;
    if (fName === "") {
      setfNameError(false);
    } else {
      setfNameError(true);
    }
    if (mobile === "") {
      setmobileError(false);
    } else {
      setmobileError(true);
    }
    if (city === "") {
      setCityError(false);
    } else {
      setCityError(true);
    }
    if (state === "") {
      setStateError(false);
    } else {
      setStateError(true);
    }

    isError = fNameError || stateError || cityError || mobileError;
    return isError;
  };

  const handleContinue = (e) => {
    let isValid = validation();
    if (!isValid) {
      setOpenOrderSum(true);
    } else {
      let data = {
        addressType: type,
        fullAddress: area,
        city: city,
        state: state,
      };
      customerDetails(data)
        .then((response) => {
          console.log(response);
          setOpenOrderSum(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    e.target.style.display = "none";
  };

  const getCartItems = () => {
    getFromCart()
      .then((response) => {
        setCart(response.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function incrementValue(book) {
    let value = book.quantityToBuy;
    if (value < 10) {
      value = value + 1;
      console.log(value);
    }
    let data = {
      quantityToBuy: value,
    };
    cartitemQuantity(book._id, data)
      .then((response) => {
        console.log("on increasing", response);
        getCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function decrementValue(book) {
    let value = book.quantityToBuy;
    if (value > 1) {
      value = value - 1;
    }
    let data = {
      quantityToBuy: value,
    };
    cartitemQuantity(book._id, data)
      .then((response) => {
        console.log("on decreasing", response);
        getCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleRemoveCartItem = (id) => {
    removeFromCart(id)
      .then((response) => {
        console.log("remove cartitem", response);
        setRemoveItem(!removeItem);
        getCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = (e) => {
    setOpenCustDetails(false);
    e.target.style.display = "none";
  };
  const handleCheckout = () => {
    let orderArray = [];
    for (let i = 0; i < cart.length; i++) {
      let bookDetails = {
        product_id: cart[i]._id,
        product_name: cart[i].product_id.bookName,
        product_quantity: cart[i].quantityToBuy,
        product_price: cart[i].product_id.price,
      };
      orderArray.push(bookDetails);
    }
    let data = {
      orders: orderArray,
    };
    addOrder(data)
      .then((response) => {
        console.log("order success", response);
        console.log(cart[0]._id);
        history.push("/orderplaced");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <div>
      <HomePageHeader remove={removeItem} />
      <div>
        <div className="header1-text1-div">
          <p className="header-text1">Home/</p>
          <h6 className="header-tag2">My Cart</h6>
        </div>
        <div className="main-container">
          <div className="cart-container">
            <p className="mycart-tag">My Cart({cart.length})</p>
            {cart.map((book) => (
              <div className="book-image2">
                <img className="image2" src={bookImage} alt="book" />
                <div className="details-cart">
                  <div className="head-tagname">{book.product_id.bookName}</div>
                  <div className="head-tag-para">
                    by {book.product_id.author}
                  </div>
                  <div className=" head-tag">Rs {book.product_id.price}</div>
                  <div className="cart-buttons">
                    <div className="container1">
                      <input
                        type="button"
                        onClick={() => decrementValue(book)}
                        defaultValue="-"
                        className="decrement-button"
                      />
                      <input
                        type="text"
                        placeholder={book.quantityToBuy}
                        size="1"
                        className="box-quantity"
                      />
                      <input
                        type="button"
                        onClick={() => incrementValue(book)}
                        defaultValue="+"
                        className="increment-button"
                      />
                    </div>
                    <p
                      className="remove"
                      onClick={() => handleRemoveCartItem(book._id)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="place-order">
              <Button
                style={{
                  backgroundColor: "#3371b5",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "7px 30px",
                  marginBottom: "10px",
                }}
                onClick={handleClick}
              >
                Place order
              </Button>
            </div>
          </div>
          {opencustDetails ? (
            <div className="addDetails-container">
              <p className="header-tag">Address Details</p>
            </div>
          ) : (
            <div className="customer-details">
              <div className="form">
                <div className="cust-tag">
                  <p className="head">Customer Details :</p>
                </div>
                <div className="name-mobile">
                  <TextField
                    className="sec-textfield"
                    name="fName"
                    error={!fNameError}
                    helperText={!fNameError ? "Invalid name" : ""}
                    label="First Name"
                    variant="outlined"
                    size="small"
                    onChange={handlefName}
                  />
                  <TextField
                    className="sec-textfield"
                    error={!mobileError}
                    helperText={!mobileError ? "Invalid number" : ""}
                    name="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    onChange={handleMobile}
                    fullWidth
                  />
                </div>
                <div className="address">
                  <h5 className="work-tag">1.Work</h5>
                  <TextareaAutosize
                    name="area"
                    onChange={handleArea}
                    placeholder="Address"
                    style={{
                      width: "98%",
                      height: "65px",
                      resize: "none",
                      fontFamily: "sans-serif",
                      backgroundColor: "transparent",
                      marginBottom: "3%",
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="name-mobile">
                  <TextField
                    className="sec-textfield"
                    error={!cityError}
                    helperText={!cityError ? "Invalid city" : ""}
                    name="city"
                    label="city / town"
                    variant="outlined"
                    size="small"
                    onChange={handleCity}
                    fullWidth
                  />
                  <TextField
                    onChange={handleState}
                    className="sec-textfield"
                    name="state"
                    error={!stateError}
                    helperText={!stateError ? "Invalid stateName" : ""}
                    label="State"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
                <div className="radioBtn">
                  <FormControl component="fieldset">
                    <h4 className="type">Type:</h4>
                    <RadioGroup
                      aria-label="type"
                      name="type"
                      onChange={handleRadio}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "100%",
                      }}
                    >
                      <FormControlLabel
                        value="Home"
                        control={<Radio />}
                        label="Home"
                      />
                      <FormControlLabel
                        value="Office"
                        control={<Radio />}
                        label="Work"
                      />
                      <FormControlLabel
                        value="Other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="continue">
                  <Button
                    style={{
                      backgroundColor: "#3371b5",
                      color: "#fff",
                      borderRadius: "3px",
                      marginTop: "10px",
                      padding: "7px 30px",
                    }}
                    onClick={handleContinue}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}
          {openOrderSum ? (
            <div className="orderSum-container">
              <p className="header-tag">Order summary</p>
            </div>
          ) : (
            <div className="cart-container">
              <p className="mycart-tag">Order Summary</p>
              {cart.map((book) => (
                <div className="book-image2">
                  <img className="image2" src={bookImage} alt="book" />
                  <div className="details-cart">
                    <h3 className="head-tagname">{book.product_id.bookName}</h3>
                    <p className="head-tag-para">by {book.product_id.author}</p>
                    <h5 className="head-tag">Rs {book.product_id.price}</h5>
                  </div>
                </div>
              ))}
              <div className="place-order">
                <Button
                  style={{
                    backgroundColor: "#3371b5",
                    color: "#fff",
                    borderRadius: "3px",
                    padding: "7px 30px",
                    marginBottom: "10px",
                  }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
