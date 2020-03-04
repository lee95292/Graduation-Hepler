import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Contents from "./contents";

import "./App.css";

import Sidebar from "./sidebar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Sidebar />
          <Contents />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
