import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { useId } from "react";

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameInputId = useId();
  const telInputdId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
    toast.success("Added");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        id={nameInputId}
        type="text"
        name="name"
        placeholder="Enter a name"
        className={css.input}
        required
      />
      <input
        id={telInputdId}
        type="tel"
        name="number"
        placeholder="Enter a number"
        className={css.input}
        required
      />
      <button type="submit" className={css.addBtn}>
        Add a contact
      </button>
    </form>
  );
};

export default ContactForm;
