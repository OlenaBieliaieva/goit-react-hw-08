import css from "./HomePage.module.css";
import DocumentTitle from "../../DocumentTitle";

const HomePage = () => {
  return (
    <div className={css.container}>
      <DocumentTitle>Home</DocumentTitle>
      <h2 className={css.title}>Welcome to MyPhoneBook!</h2>
    </div>
  );
};

export default HomePage;
