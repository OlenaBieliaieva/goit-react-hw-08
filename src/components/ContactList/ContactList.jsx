import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import NotFound from "../NotFound/NotFound";
import { useSelector } from "react-redux";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {visibleContacts.length <= 0 && <NotFound />}
      <ul className={css.contactList}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
