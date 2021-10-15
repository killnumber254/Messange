import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="nav">
      <NavLink exact to="/en" className="navEN">
        Вход
      </NavLink>
      <NavLink exact to="/regist" className="navRegist">
        Регистрация
      </NavLink>
    </div>
  );
};

export default Navigation;
