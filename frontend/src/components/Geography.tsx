import React from "react";
import Styles from "../styles/card.module.css";
const Geography = (props: any) => {
  const { data } = props;

  return (
    <>
      <div className={Styles.innerContainer}>
        <h1>Geography</h1>
        {data.map((country: any, index: number) => (
          <div key={index}>
            <div>Country Capital: {country.capital}</div>
            <div>Region: {country.region}</div>
            <div>Continent: {country.continents}</div>
            <div>
              Latitude and Longitude
              <br />
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
