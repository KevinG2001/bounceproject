const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/data/:country", async (req, res) => {
  try {
    const country = req.params.country;
    const externalApiUrl = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

    const response = await axios.get(externalApiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from external API:", error);
    res.status(500).json({ error: "Error fetching data from external API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
