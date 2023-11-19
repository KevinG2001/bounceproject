import React, { useState, useEffect } from "react";
import CountryInfo from "./pages/CountryInfo";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div>
      <Searchbar />
      <CountryInfo />
    </div>
  );
}

export default App;
