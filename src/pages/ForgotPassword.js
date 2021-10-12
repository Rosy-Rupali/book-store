import React from "react";
import HomePageHeader from "../components/HomePageHeader";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../css/ForgetPassword.css";
const ForgetPassword = () => {
  const reset = () => {};
  return (
    <div className="mainContainer-forgetPassword">
      <HomePageHeader />
      <div className="main-section-pwd">
        <h2 className="pwd">forget your password?</h2>
        <div className="labels">
          <p className="text">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
          <div className="email-id">Email id</div>

          <TextField
            id="password"
            name="password"
            variant="outlined"
            className="forget-password1-textfeilds"
          />
          <Button className="reset-btn" onClick={reset}>
            Reset Password
          </Button>
          <div className="create-account">Create Account</div>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
