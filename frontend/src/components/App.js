import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Contents from "./contents";
import axios from "axios";
import "./App.css";

import Sidebar from "./sidebar";

class App extends Component {
  componentDidMount() {
    axios.get("/test").then(res => {
      console.log(res);
    });
  }
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
