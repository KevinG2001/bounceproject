import React from "react";

const Geography = (props: any) => {
  const { data } = props;

  return (
    <>
      <div>
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
                <>{gps}</>
              ))}
            </div>
            <div>Borders: {country.borders}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Geography;
