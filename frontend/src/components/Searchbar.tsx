import React, { useState } from "react";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function handleClick() {
    const request = await fetch(`http://localhost:5000/api/data/${search}`);
    const data = await request.json();
    onSearch(data);
  }

  return (
    <>
      <div>
        <input type="text" value={search} onChange={handleSearch} />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
}

export default Searchbar;
