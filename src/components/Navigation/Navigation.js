import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <NavLink exact to="/en">
        Вход
      </NavLink>
      <NavLink exact to="/regist">
        Регистрация
      </NavLink>
    </div>
  );
};

export default Navigation;
