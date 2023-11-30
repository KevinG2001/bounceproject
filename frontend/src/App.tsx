import { useState } from "react";
import CountryInfo from "./pages/CountryInfo";
import Searchbar from "./components/Searchbar";
import Styles from "./styles/app.module.css";
import { Country } from "./types/types"; // Import the Country interface

function App() {
  const [countryInfo, setCountryInfo] = useState<Country[]>([]); // Initialize with an empty array

  const callBack = (childData: Country[]) => {
    setCountryInfo(childData); // Ensure childData is an array of Country objects
  };

  return (
    <div className={Styles.container}>
      <Searchbar onSearch={callBack} />
      <CountryInfo countryInfo={countryInfo} />
    </div>
  );
}

export default App;
