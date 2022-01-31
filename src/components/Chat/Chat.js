import React, { Component } from "react";
import axios from "axios";
import styles from "./Chat.module.css";
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
      width: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  ref = React.createRef();

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
    }, 100);
  }

  async postDataBase() {
    const { user } = this.props;
    const messanger = {
      messager: this.state.message,
      usernames: user,
    };

    await axios.post("http://127.0.0.1:3001/chat", messanger);
  }

  dataBase() {
    axios
      .get("http://127.0.0.1:3001/chat:message", { withCredentials: true })
      .then((res) => {
        this.setState({ datas: res.data });
        console.log(res.data);
      });
  }

  scrollBottom() {
    this.ref.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollBottom();
    axios
      .get("http://127.0.0.1:3001/chat:mess", { withCredentials: true })
      .then((res, req) => {
        this.setState({ datas: res.data });
      });
    // axios
    //   .get("http://127.0.0.1:3001/log", { withCredentials: true })
    //   .then((res) => {
    //     const { setUser } = this.props;
    //     if (res.status === 200) {
    //       setUser(res.data.user);
    //     }
    //   });
  }

  render() {
    return (
      <div className={styles.block} ref={this.ref}>
        <List data={this.state.datas} />
        {/* <span>{console.log(this.state.data)}</span> */}
        <Message
          value={this.state.message}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Chat;
