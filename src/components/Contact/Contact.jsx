import css from "../ContactList/ContactList.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.error("Deleted");
  };

  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>
          <IoPerson />
          {contact.name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill />
          {contact.number}
        </p>
      </div>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
