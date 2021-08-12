import React, { Component } from "react";
import "./App.css";
import Auth from "../Auth";
import Navigation from "../Navigation";
import Regist from "../Regist";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "../Chat/Chat";
//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  setUser = (e) => {
    console.log(e);
    this.setState({ user: e });
  };

  render() {
    let authRegist = null;
    if (!this.state.user) {
      authRegist = (
        <div className="auth_regist">
          <Navigation />
          <Route path="/en">
            <Auth setUser={this.setUser} />
          </Route>
          <Route path="/regist">
            <Regist setUser={this.setUser} />
          </Route>
        </div>
      );
    }
    return (
      <BrowserRouter>
        {authRegist}
        <Route path="/chat">
          <Chat setUser={this.state.user} />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
