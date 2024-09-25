const express = require("express");
const router = express.Router();
const db = require("../config/db"); // Ensure this path is correct

// Get questions from the database
router.get("/questions", (req, res) => {
  const query = "SELECT * FROM working_question"; // Make sure this matches your DB
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching questions:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results); // Send the results back as JSON
  });
});

module.exports = router;
