import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {login} from '../Services/DataService.js' 
import {useHistory} from 'react-router'
import "../css/Login.css";

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;
const emailRegex = /^[a-z0-9.+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const history = useHistory();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validation = () => {
    let isError = false;
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
    isError = emailError || passwordError;
    return isError;
  };

  const handleLogin = () => {
    let isValid = validation();
    if (!isValid) {
      console.log("unsuccessful validation");
    } else {
      let obj = {
        email: email,
        password: password,
      };
      login(obj)
        .then((response) => {
          console.log(response);
          localStorage.setItem("Accesstoken",response.data.result.accessToken);
          history.push("/home")
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="test1">
      <div className="login-texfields">
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
        />
      </div>
      <div>
      <Button
        fullWidth
        className="login-btn"
        style={{ backgroundColor: "#802F34", color: "#ffffff" }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <h4 className="or">OR</h4>
      </div>
      <div className="loginButtons">
        <Button
          className="fb-btn"
          style={{
            backgroundColor: "#4266B2",
            color: "#ffffff",
            textTransform: "capitalize",
            padding: "10px 30px",
          }}
        >
          Facebook
        </Button>
        <Button
          style={{
            backgroundColor: "#E4E4E4",
            color: "#000000",
            textTransform: "capitalize",
            width: "50%",
          }}
        >
          Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
