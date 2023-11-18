import React, { useState, useEffect } from "react";

function App() {
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
        setError("Error fetching data. Please try again later.");
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
          {backendData.map((data) => (
            <div>{data.name.common}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
