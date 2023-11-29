import Styles from "../styles/card.module.css";
const Geography = (props: any) => {
  const { data } = props;

  return (
    <>
      <div className={Styles.innerContainer}>
        <div className={Styles.cardTitle}>Geography</div>
        {data.map((country: any, index: number) => (
          <div key={index}>
            <div>Country Capital: {country.capital}</div>
            <div>Continent: {country.continents}</div>
            <div>
              {country.latlng?.map((gps: number, index: number) => (
                <div key={index}>
                  {index === 0 ? "Latitude: " : "Longitude: "}
                  {gps}
                </div>
              ))}
            </div>
            <div className={Styles.borderWrapper}>
              Borders:
              <div className={Styles.panel}>
                {country.borders.map((border: any, index: any) => (
                  // TODO: Turn bordering countries into buttons so you can search the country
                  <div className={Styles.panelTag} key={index}>
                    {border}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Geography;
