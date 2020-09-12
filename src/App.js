import React from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Checkout from "./Component/Checkout";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Payment from "./Component/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./Component/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Component/Order";

const promise = loadStripe(
  "pk_test_51HQR4ALDJNXw4g86GVNsgK2uZgHOSF553naPFusJSrTydjUgrhfQKE8OZsvbVAassQUDQqhZrcy7JeKDPzxAVk5p00v2fwzXBG"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
