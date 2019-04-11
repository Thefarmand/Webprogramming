import React, { Component } from "react";
import Head from "./Head";
import Nav from "./Nav";
import Main from "./Main";
import "../index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Nav />
        <Main></Main>

      </div>
    );
  }
}

export default App;
