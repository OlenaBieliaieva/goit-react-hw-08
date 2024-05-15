import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={css.navText} to="/register">
        Register
      </NavLink>
      <NavLink className={css.navText} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
