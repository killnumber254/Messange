import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Regist extends Component {
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
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://127.0.0.1:5000/regist", user)
      .then((res) => res)
      .then((body) => {
        console.log(body);
        if (body) {
          const { setUser } = this.props;
          setUser(body.data.username);
          return this.props.history.push("/chat");
        }
      });
  }

  render() {
    return (
      <>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={console.log(this.state.username)}
              onChange={this.handleChangeUser}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={console.log(this.state.password)}
              onChange={this.handleChangePassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(Regist);
