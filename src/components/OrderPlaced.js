import React from "react";
import HomePageHeader from "./HomePageHeader";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import { useHistory } from "react-router";
import "../css/OrderPlaced.css";
import order1 from "../assets/order1.jpg";
import order2 from "../assets/order2.jpg";
const OrderPlaced = () => {
  const history = useHistory();

  const handleContinueshop = () => {
    history.push("/home");
  };
  return (
    <div className="orderplaced-mainContainer">
      <HomePageHeader />
      <div className="orderplaced-container">
        <img src={order1} alt="order-placed-pic1" />
        <h2 className="order-head">Order Placed Successfully</h2>
        <img src={order2} alt="order-placed-pic1" />
        <p className="order-para"> hurray!!! your order is confirmed <br />the order id is #123456
          save the order id for<br />further communication..
        </p>
        <div className="order-details">
          <div className="order-detail1">
            <h6 className="order-tag">Email Us</h6>
            <h6 className="order-tag">Contact Us</h6>
            <h6 className="order-tag">Address</h6>
          </div>
          <div className="order-detail2">
            <p className="orderDetails-tag">admin@bookstore.com</p>
            <Divider orientation="vertical" flexItem  />
            <p className="orderDetails-tag">+91 8163475881</p>
            <Divider orientation="vertical"  flexItem />
            <p className="orderDetails-tag">42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</p>
          </div>
        </div>
        <Button
          className="continue1"
          type='button'
          style={{
            backgroundColor: "#3371b5",
            color: "#fff",
            borderRadius: "3px",
            padding: "7px",
            marginTop: "30px",
          }}
          onClick={handleContinueshop}
        >
          CONTINUE SHOPPING
        </Button>
      </div>
      <Footer />
    </div>
  );
};
export default OrderPlaced;
