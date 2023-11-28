import React, { useState } from "react";
import Styles from "../styles/searchbar.module.css";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function handleClick() {
    try {
      const request = await fetch(`http://localhost:5000/api/data/${search}`);
      const data = await request.json();
      onSearch(data);
    } catch (error) {
      console.error("Fetch error", error);
    }
  }

  return (
    <>
      <div className={Styles.container}>
        <input
          type="text"
          placeholder=""
          value={search}
          onChange={handleSearch}
          className={Styles.searchBarInput}
        />
        {/*  //TODO Make label move when input is filled (placeholder)
        <label htmlFor="searchBarInput" className={Styles.searchBarLbl}>
          Search for country!
        </label> */}
        <button onClick={handleClick} className={Styles.searchBtn}>
          Search
        </button>
      </div>
    </>
  );
}

export default Searchbar;
