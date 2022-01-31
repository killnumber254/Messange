// import { useLayoutEffect, useRef } from "react";

const List = ({ data }) => {
  console.log(data);
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

export default List;
