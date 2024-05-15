import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        className={css.seachInput}
        placeholder="Enter a name"
        value={currentFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
