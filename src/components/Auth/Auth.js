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
    axios.defaults.withCredentials = true;
    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    axios
      .post("http://127.0.0.1:3001/login", user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        // const tokens = {
        //   token: body.data.token,
        // };
        const { setUser } = this.props;

        if (res.data.user.username) {
          setUser(res.data.user.username);
          const { history } = this.props;
          history.push("/logs");
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
