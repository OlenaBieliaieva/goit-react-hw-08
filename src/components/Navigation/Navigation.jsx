import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.container}>
      <NavLink className={css.navText} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navText} to="/contacts">
          Contacts
        </NavLink>
      )}{" "}
    </nav>
  );
};

export default Navigation;
