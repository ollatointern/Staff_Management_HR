// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const hrRoutes = require("./routes/hrRoutes");
// const question = require("./routes/questions");
// const mysql = require("mysql2");
// const app = express();

// // Middleware to parse JSON bodies
// // app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Allow the frontend origin
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, // Allow cookies if necessary
//   })
// );

// app.use(bodyParser.json());
// app.use("/hr", hrRoutes);
// app.use("/api", question);

// const db = require("./config/db");

// // Start the Express server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const hrRoutes = require("./routes/hrRoutes");
const questionRoutes = require("./routes/questions"); // Renamed for consistency
const db = require("./config/db"); // DB configuration
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json()); // Parse incoming JSON requests

// Enable CORS for the frontend running on localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173", // Allow the frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow cookies if needed
  })
);

// Define routes
app.use("/hr", hrRoutes); // Routes for HR-related operations
app.use("/api", questionRoutes); // Routes for question-related operations

// Start the Express server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
