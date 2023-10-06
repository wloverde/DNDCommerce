import { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [value, setValue] = useState("");
  const changeHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(value);
        setValue("");
      }}
    >
      <input
        type='text'
        value={value}
        onChange={changeHandler}
        placeholder='Search'
        size={25}
      />
    </form>
  );
};

export default SearchForm;
