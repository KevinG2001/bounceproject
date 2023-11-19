import React, { useState } from "react";

function Searchbar() {
  const [search, setSearch] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function handleClick() {
    console.log("Query: ", search);
    const request = await fetch(`http://localhost:5000/api/data/${search}`);
    const data = await request.json();
    console.log(data);
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
