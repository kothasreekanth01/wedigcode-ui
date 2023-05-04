import React, { Component } from "react";
import Route from "./Routes/routeIndex";
import "./App.css";

//import style
import "./assets/css/pe-icon-7.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/theme.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Route />
      </React.Fragment>
    );
  }
}

export default App;
