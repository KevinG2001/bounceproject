import Styles from "../styles/card.module.css";
import { Country } from "../types/types"; // Import the Country type from your types.ts file

const Geography: React.FC<{ data: Country[] }> = ({ data }) => {
  return (
    <div className={Styles.innerContainer}>
      <div className={Styles.cardTitle}>Geography</div>
      {data.map((country: Country, index: number) => (
        <div key={index}>
          <div>Country Capital: {country.capital}</div>
          <div>Continent: {country.continents}</div>
          <div>
            {country.latlng?.map((gps: number, idx: number) => (
              <div key={idx}>
                {idx === 0 ? "Latitude: " : "Longitude: "}
                {gps}
              </div>
            ))}
          </div>
          <div className={Styles.borderWrapper}>
            Borders:
            <div className={Styles.panel}>
              {country.borders.map((border: string, idx: number) => (
                <div className={Styles.panelTag} key={idx}>
                  {border}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Geography;
