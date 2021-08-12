import ListItems from "./ListItems";

const List = ({ list, chat }) => {
  const el = list.map((chats) => {
    const { id, ...item } = chats;
    return (
      <li>
        <ListItems {...item} chat={chat} />
      </li>
    );
  });
  return <ul>{el}</ul>;
};

export default List;
