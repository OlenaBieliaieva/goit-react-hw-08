import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (
      form.elements.password.value.length > 7 &&
      form.elements.email.value.length > 13
    ) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    } else {
      toast.error("Please enter a longer password or email");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <label>Username </label>
      <input type="text" name="name" required className={css.regInput} />
      <label>Email </label>
      <input type="email" name="email" required className={css.regInput} />
      <label>Password </label>
      <input
        type="password"
        name="password"
        required
        className={css.regInput}
      />
      <button type="submit" className={css.btn}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
