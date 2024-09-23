const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const hrRoutes = require("./routes/hrRoutes");
const mysql = require("mysql2");
const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(bodyParser.json());
app.use("/hr", hrRoutes);

const db = require("./config/db");

// Start the Express server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
