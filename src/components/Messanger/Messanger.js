import React, { Component } from "react";
import axios from "axios";
import Chat from "../Chat/Chat";
import { withRouter } from "react-router-dom";
import Users from "../Users/Users";

class Messanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  handleClick() {
    axios.get("http://127.0.0.1:3001/exit").then((res) => {
      const { setUser } = this.props;
      if (res.status === 201) {
        setUser(res.data.user);
        const { history } = this.props;
        history.push("/en");
      }
    });
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:3001/users").then((res) => {
      this.setState({ users: res.data });
    });
    axios
      .get("http://127.0.0.1:3001/log", { withCredentials: true })
      .then((res) => {
        const { setUser } = this.props;
        if (res.status === 200) {
          setUser(res.data.user);
        }
      });
  }
  render() {
    return (
      <>
        <Users users={this.state.users} />
        <button type="submit" onClick={this.handleClick.bind(this)}>
          Выход
        </button>
        <Chat />
      </>
    );
  }
}

export default withRouter(Messanger);
