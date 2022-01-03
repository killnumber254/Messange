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
      datas: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ message: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ message: "" });
    this.postDataBase();
    setTimeout(() => {
      this.dataBase();
    }, 200);
  }

  async postDataBase() {
    const { setUser } = this.props;
    const messanger = {
      messager: this.state.message,
      usernames: setUser,
    };
    console.log(setUser);
    await axios.post("http://127.0.0.1:5000/chat", messanger);
  }

  dataBase() {
    axios.get("http://127.0.0.1:5000/chat:message").then((res) => {
      this.setState({ datas: res.data });
    });
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/chat:mess").then((res) => {
      this.setState({ datas: res.data });
      axios.get("http://127.0.0.1:5000/log").then((res) => console.log(res));
    });
  }

  render() {
    return (
      <>
        <List data={this.state.datas} />
        {/* <span>{console.log(this.state.data)}</span> */}
        <Message
          value={this.state.message}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

export default Chat;
