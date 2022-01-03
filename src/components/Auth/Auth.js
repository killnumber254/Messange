import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeUser(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    console.log(e.keyCode);
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(user);
    axios
      .post("http://127.0.0.1:5000/login", user)
      .then((res) => res)
      .then((body) => {
        console.log(body.data.username);
        // const tokens = {
        //   token: body.data.token,
        // };
        const { setUser } = this.props;
        if (body.data.username) {
          setUser(body.data.username);
          const { history } = this.props;
          return history.push("/log");
        }
      });
  }

  render() {
    return (
      <>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={this.state.username}
              onChange={this.handleChangeUser}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.handleChangePassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            type="submit"
            ref={this.logButton}
            onKeyDown={this.keyBoard}
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(Auth);
