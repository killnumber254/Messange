import axios from "axios";
import React, { Component } from "react";
import ListItems from "./ListItems";

const List = ({ data }) => {
  const el = data.map((datas) => {
    console.log(datas.id);
    return <li key={datas.id}>{datas.messange}</li>;
  });
  return <ul>{el}</ul>;
};
// const List = ({ list, chat }) => {
//   const el = list.map((chats) => {
//     const { id, ...data } = chats;
//     console.log(id);
//     return (
//       <li>
//         <ListItems {...data} chat={chat} />
//       </li>
//     );
//   });
//   return <ul>{el}</ul>;
// };

export default List;
