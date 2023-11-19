import React, { useEffect, useState } from "react";
import Geography from "../components/Geography";
import Politics from "../components/Politics";
// import Geography from "../components/Geography";

function CountryInfo({ countryInfo }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Assuming countryInfo is an array of countries

  // Simulating an effect that would trigger when countryInfo changes (you might adjust this according to your actual use case)
  useEffect(() => {
    if (countryInfo && countryInfo.length > 0) {
      setLoading(false); // Assuming data is available, setting loading to false
    }
  }, [countryInfo]);
  return (
    <div>
      <h1>Country Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Received Data:</h2>
          {countryInfo.map((data: any) => (
            <>
              <div key={data.idd.suffixes}>{data.name.common}</div>
              <img src={data.flags.png} alt="" />
            </>
          ))}
          {/* Passing backendData as prop to Geography component */}
          <Geography data={countryInfo} />
          <Politics data={countryInfo} />
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
