import "./Searchbar.css";
import { useState } from "react";
import SilverSelect from "../../assets/cursors/silver-2/SilverTextSelect.cur";
import searchIcon from "../../assets/icons/search.png";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFocus = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    e.target.value = "";
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    e.target.value = " ";
  };

  const handleSubmit = (e) => {
    setSearchTerm(e.target.value);
    console.log("onSubmit searchTerm value: ", e.target.value);
  };

  return (
    <div className="Component Searchbar">
      <div id="search-container">
        <img src={searchIcon} style={{ width: "2vmax" }} />
        <label htmlFor="google searchbar" style={{ display: "none" }}></label>
        <input
          style={{ cursor: `url(${SilverSelect}),auto` }}
          autoComplete="off"
          type="text"
          id="searchbar"
          placeholder="seek..."
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          onKeyUp={(e) => {
            e.preventDefault();

            if (e.keyCode === 13) {
              console.log("Enter key pressed/released.");

              console.log(`Searching Google for ${searchTerm} in new window.`);
              window.open(`http://www.google.com/search?q=${searchTerm}`);
            }
          }}
        />
      </div>
    </div>
  );
}
