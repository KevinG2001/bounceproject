import React, { useEffect, useState } from "react";
import Styles from "../styles/countryInfo.module.css";
import Geography from "../components/Geography";
import Politics from "../components/Politics";
import Extra from "../components/Extra";
// import Geography from "../components/Geography";

function CountryInfo({ countryInfo }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (countryInfo && countryInfo.length > 0) {
      setLoading(false);
    }
  }, [countryInfo]);
  return (
    <div className={Styles.container}>
      {loading ? (
        <></>
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
          <div className={Styles.infoPanelWrapper}>
            <Geography data={countryInfo} className={Styles.infoPanel} />
            <Politics data={countryInfo} className={Styles.infoPanel} />
            <Extra data={countryInfo} className={Styles.infoPanel} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
