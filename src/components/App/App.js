import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
import Auth from "../Auth";
import Navigation from "../Navigation";
import Regist from "../Regist";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Messanger from "../Messanger";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      data: null,
      isAuthStatus: false,
    };
  }

  setUser = (e) => {
    console.log(e);
    this.setState({ user: e });
  };

  // componentDidMount() {
  //   axios.defaults.withCredentials = true;
  // }

  render() {
    let authRegist = null;
    if (!this.state.user) {
      authRegist = (
        <div className="auth_regist">
          <Navigation />
          <Route path="/en">
            <Auth
              isAuthStatus={this.isAuthStatus}
              setUser={this.setUser}
              user={this.state.user}
            />
          </Route>
          <Route path="/regist">
            <Regist setUser={this.setUser} isAuthStatus={this.isAuthStatus} />
          </Route>
        </div>
      );
    }
    return (
      <BrowserRouter>
        {authRegist}
        <Route path="/logs">
          <Messanger
            isAuthStatus={this.isAuthStatus}
            setUser={this.setUser}
            user={this.state.user}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
