import Styles from "../styles/countryInfo.module.css";
import Geography from "../components/Geography";
import Politics from "../components/Politics";
import Extra from "../components/Extra";

function CountryInfo({ countryInfo }) {
  return (
    <div className={Styles.innerContainer}>
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
    </div>
  );
}

export default CountryInfo;
