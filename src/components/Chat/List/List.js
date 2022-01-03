// import axios from "axios";
// import React, { Component } from "react";
// import ListItems from "./ListItems";

const List = ({ data }) => {
  const el = data.map((datas) => {
    return (
      <li key={datas.id}>
        <p>{datas.usernames}</p>
        {datas.messange}
      </li>
    );
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
