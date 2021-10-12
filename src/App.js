import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import BookStoreMain from "./pages/Bookstore";
import HomePage from "./components/HomePage";
import BookDescription from "./components/BookDescription";
import Cart from "./components/Cart";
import OrderPlaced from "./components/OrderPlaced";
import WishList from "./components/WishList";
import ForgetPassword from "./pages/ForgotPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BookStoreMain}></Route>
        <Route path="/home" component={HomePage} />
        <Route path="/description" component={BookDescription} />
        <Route path="/cart" component={Cart} />
        <Route path="/orderplaced" component={OrderPlaced} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
