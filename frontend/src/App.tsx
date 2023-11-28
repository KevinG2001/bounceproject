import React, { useState, useEffect } from "react";
import CountryInfo from "./pages/CountryInfo";
import Searchbar from "./components/Searchbar";
import Styles from "./styles/app.module.css";

function App() {
  const [countryInfo, setCountryInfo] = useState("");

  const callBack = (childData: any) => {
    setCountryInfo(childData);
  };

  return (
    <div className={Styles.container}>
      <Searchbar onSearch={callBack} />
      <CountryInfo countryInfo={countryInfo} />
    </div>
  );
}

export default App;
