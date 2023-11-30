import { useState } from "react";
import Styles from "../styles/searchbar.module.css";

interface SearchbarProps {
  onSearch: (data: any) => void;
}

function Searchbar({ onSearch }: SearchbarProps) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchBarPos, setSearchBarPos] = useState("");

  async function handleClick() {
    setLoading(true);
    try {
      const request = await fetch(`/api/data/${search}`);
      const data = await request.json();
      onSearch(data);
      setSearchBarPos("top");
    } catch (error) {
      console.error("Fetch error", error);
    } finally {
      setLoading(false);
    }
  }

  function handlePopularSearch(selectedSearch: string) {
    setSearch(selectedSearch);
  }

  return (
    <>
      <div className={Styles.container}>
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={Styles.searchBarInput}
        />
        <button onClick={handleClick} className={Styles.searchBtn}>
          Search
        </button>
      </div>
      {loading && <div className={Styles.loadingDiv}>Loading...</div>}
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
