import { useEffect, useState } from "react";
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
    <div className={Styles.innerContainer}>
      {loading ? (
        <></>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className={Styles.wrapper}>
          {countryInfo.map((data: any) => (
            <>
              <div className={Styles.countryTitle} key={data.idd.suffixes}>
                {data.name.common}
              </div>
              <img src={data.flags.png} alt="" />
            </>
          ))}
          <div className={Styles.infoPanelWrapper}>
            <div className={Styles.infoPanel}>
              <Geography data={countryInfo} />
            </div>
            <div className={Styles.infoPanel}>
              <Politics data={countryInfo} />
            </div>
            <div className={Styles.infoPanel}>
              <Extra data={countryInfo} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
