import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <label>Email</label>
      <input type="email" name="email" className={css.loginFormInput} />{" "}
      <label>Password</label>
      <input type="password" name="password" className={css.loginFormInput} />
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
