const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/api/data", (req, res) => {
  // Make a request to the external API
  https
    .get("https://restcountries.com/v3.1/name/ireland", (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const jsonData = JSON.parse(data);
          res.json(jsonData); // Send the received data back to the frontend
        } catch (error) {
          res
            .status(500)
            .json({ error: "Error parsing data from external API" });
        }
      });
    })
    .on("error", (error) => {
      res.status(500).json({ error: "Error fetching data from external API" });
    });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
