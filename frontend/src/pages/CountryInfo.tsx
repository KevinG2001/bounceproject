import Styles from "../styles/countryInfo.module.css";
import Geography from "../components/Geography";
import Politics from "../components/Politics";
import Extra from "../components/Extra";
import { Country, CountryInfoProps } from "../types/types";

function CountryInfo({ countryInfo }: CountryInfoProps) {
  return (
    <div className={Styles.innerContainer}>
      <div className={Styles.wrapper}>
        {countryInfo.length === 0 ? (
          <div className={Styles.countryItem}>
            <p>No country searched yet.</p>
          </div>
        ) : (
          countryInfo.map((data: Country) => (
            <div className={Styles.countryItem} key={data.idd.suffixes}>
              <div className={Styles.countryTitle}>{data.name.common}</div>
              <img src={data.flags.png} alt={data.name.common} />
            </div>
          ))
        )}
        {countryInfo.length > 0 && (
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
        )}
      </div>
    </div>
  );
}

export default CountryInfo;
