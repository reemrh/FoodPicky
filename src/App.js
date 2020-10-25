import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Checkout from "./components/checkout";
import SearchResults from "./components/searchResults.js";
import RestaurantRegistration from "./components/RestaurantRegistration.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search-results">
            <SearchResults />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/RestaurantRegistration">
            <RestaurantRegistration />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/:id" children={<Checkout />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
