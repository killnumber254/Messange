const Users = ({ users }) => {
  console.log(users);
  const el = users.map((data) => {
    console.log(data);
    return (
      <li key={data.id}>
        <p>{data.username}</p>
      </li>
    );
  });
  return <ul>{el}</ul>;
};

export default Users;
