import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SignUp } from "../Services/DataService";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import "../css/Signup.css";

const nameRegex = /^[A-Z][a-z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;
const emailRegex = /^[a-z0-9.+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/;
const mobileRegex = /^[0-9]{10}$/;

const Signup = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  // const[values, setValues] = useState({password: "", showPassword: false})
  // const [showPassword, setShowPassword] = useState("");

  const [fnameError, setFnameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [mobileError, setMobileError] = useState(true);

  const handleFirstName = (e) => {
    setFname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // setValues([...values])
  };

  // const handleClickShowPassword =() =>{
  //   setValues({...values, showPassword: !values.showPassword})
  // }
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const validation = () => {
    let isError = false;
    if (fname === "" || !nameRegex.test(fname)) {
      setFnameError(false);
    } else {
      setFnameError(true);
    }

    if (email === "" || !emailRegex.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (password === "" || !passwordRegex.test(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (mobile === "" || !mobileRegex.test(mobile)) {
      setMobileError(false);
    } else {
      setMobileError(true);
    }

    isError = fnameError || emailError || passwordError || mobileError;
    return isError;
  };

  const handleSignUp = () => {
    let isValid = validation();
    if (!isValid) {
      console.log("unsuccessful validation");
    } else {
      let data = {
        fullName: fname,
        email: email,
        password: password,
        phone: mobile,
      };
      SignUp(data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="test">
      <div className="signup-texfields">
        <TextField
          name="fname"
          label="First Name"
          error={!fnameError}
          helperText={!fnameError ? "Invalid name" : ""}
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleFirstName}
        />
      </div>
      <div className="signup-texfields">
        <TextField
          name="email"
          label="Email id"
          error={!emailError}
          helperText={!emailError ? "Invalid Email" : ""}
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleEmail}
        />
      </div>
      <div className="signup-texfields">
        <TextField
          name="password"
          label="password"
          error={!passwordError}
          helperText={!passwordError ? "password is Invalid" : ""}
          variant="outlined"
          size="small"
          fullWidth
          onChange={handlePassword}
          // type={values.showPassword ? "text" : "password"}
          // value={values.password}
          // endAdornment={
          //   <InputAdornment position="end">
          //     <IconButton
          //       onClick={handleClickShowPassword}
          //     >
          //       {values.showPassword ? <Visibility /> : <VisibilityOff />}
          //     </IconButton>
          //   </InputAdornment>
          // }
        />
      </div>
      <div className="signup-texfields">
        <TextField
          name="mobile"
          label="Mobile Number"
          error={!mobileError}
          helperText={!mobileError ? "Enter correct phoneNo" : ""}
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleMobile}
        />
      </div>
      <div>
        <Button
          fullWidth
          style={{ backgroundColor: "#802F34", color: "#ffffff" }}
          onClick={handleSignUp}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};
export default Signup;
