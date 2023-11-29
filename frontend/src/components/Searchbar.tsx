import { useState } from "react";
import Styles from "../styles/searchbar.module.css";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [searchBarPos, setSearchBarPos] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function handleClick() {
    try {
      const request = await fetch(`http://localhost:5000/api/data/${search}`);
      const data = await request.json();
      onSearch(data);
      setSearchBarPos("top"); // Change search bar position to 'top' after search
    } catch (error) {
      console.error("Fetch error", error);
    }
  }

  function handlePopularSearch(selectedSearch) {
    setSearch(selectedSearch);
  }

  return (
    <>
      <div
        className={`${Styles.container} ${
          searchBarPos === "top" ? Styles.top : ""
        }`}
      >
        <input
          type="text"
          placeholder=""
          value={search}
          onChange={handleSearch}
          className={Styles.searchBarInput}
        />
        <label htmlFor="searchBarInput" className={Styles.searchBarLbl}>
          Search for country!
        </label>
        <button onClick={handleClick} className={Styles.searchBtn}>
          Search
        </button>
      </div>
      <div
        className={`${Styles.popular} ${
          searchBarPos === "top" ? Styles.top : ""
        }`}
      >
        Popular searches:
        <button
          className={Styles.popSearch}
          onClick={() => handlePopularSearch("Ireland")}
        >
          Ireland
        </button>
        <button
          className={Styles.popSearch}
          onClick={() => handlePopularSearch("United Kingdom")}
        >
          United Kingdom
        </button>
        <button
          className={Styles.popSearch}
          onClick={() => handlePopularSearch("Germany")}
        >
          Germany
        </button>
        <button
          className={Styles.popSearch}
          onClick={() => handlePopularSearch("United States")}
        >
          United States
        </button>
      </div>
    </>
  );
}

export default Searchbar;
