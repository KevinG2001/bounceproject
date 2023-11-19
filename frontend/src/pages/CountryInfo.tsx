import React, { useEffect, useState } from "react";
import Geography from "../components/Geography";
import Politics from "../components/Politics";
// import Geography from "../components/Geography";

function CountryInfo() {
  const [backendData, setBackendData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/data") // Replace with your backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBackendData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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
          {backendData.map((data: any) => (
            <>
              <div key={data.idd.suffixes}>{data.name.common}</div>
              <img src={data.flags.png} alt="" />
            </>
          ))}
          {/* Passing backendData as prop to Geography component */}
          <Geography data={backendData} />
          <Politics data={backendData} />
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
