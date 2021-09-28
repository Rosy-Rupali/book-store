import axios from "axios";
// let config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: localStorage.getItem("token"),
//     },
//   };

export const SignUp = async (data) => {
  let response = await axios.post(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/registration",
    data
  );
  console.log(response);
  return response;
};
export const login = async (data) => {
  let response = await axios.post(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/login",
    data
  );
  console.log(response);
  return response;
};
