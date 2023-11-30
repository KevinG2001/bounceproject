const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();
app.use(cors());

app.get("/api/data/:country", (req, res) => {
  const country = req.params.country;
  https
    .get(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`,
      (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
          } catch (error) {
            res
              .status(500)
              .json({ error: "Error parsing data from external API" });
          }
        });
      }
    )
    .on("error", (error) => {
      res.status(500).json({ error: "Error fetching data from external API" });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
