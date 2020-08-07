import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, ProductList, Details, Default, Modal } from "./components";
import Cart from "./components/Cart";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
