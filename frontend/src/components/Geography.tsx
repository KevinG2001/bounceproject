import React from "react";

const Geography = (props: any) => {
  const { data } = props;
  return (
    <>
      <div>
        <h1>Geography</h1>
        {data.map((country: any) => (
          <>
            <div>Country Capital: {country.capital}</div>
            <div>Region: {country.region}</div>
            <div>Continent: {country.continents}</div>
            <div>Lat & Long: {country.latlng}</div>
            <div>Borders: {country.borders}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default Geography;
