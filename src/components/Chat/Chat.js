import React, { Component } from "react";
import axios from "axios";
import "./Chat.css";
import Message from "./Message";
import List from "./List";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      message: "",
      chat: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ message: e.target.value });
  }

  handleClick(e) {
    const { setUser } = this.props;

    e.preventDefault();
    const messanger = {
      usernames: setUser,
      messager: this.state.message,
    };
    axios
      .post("http://127.0.0.1:5000/chat", messanger)
      .then((res) => res)
      .then((body) =>
        this.setState({
          data: body.data,
          chat: body.data.messange,
        })
      );
  }
  render() {
    return (
      <>
        <List chat={this.state.chat} list={this.state.data} />
        <span>{console.log(this.state.data)}</span>
        <Message
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

export default Chat;
