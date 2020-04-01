import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./admin";
import Contents from "./contents";
// import axios from "axios";
import "./App.css";

import Sidebar from "./sidebar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/admin" component={Admin} />
          <Route
            path="/main"
            render={() => (
              <div className="app-main">
                <Sidebar />
                <Contents />
              </div>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
