const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path"); // Don't forget to include 'path'

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

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
