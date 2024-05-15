import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
