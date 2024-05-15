import DocumentTitle from "../../DocumentTitle";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactsPage;
