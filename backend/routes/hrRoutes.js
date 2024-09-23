const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();
const saltRounds = 10;

// signup route
router.post("/signup", async (req, res) => {
  const { email, password, fullName, dateOfBirth, gender } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT  INTO users ( email, password, fullName, dateOfBirth, gender) VALUES(?,?,?,?,?) `;

  db.query(
    query,
    [email, hashedPassword, fullName, dateOfBirth, gender],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(501).json({
          success: false,
          message: "Cant register Admin",
        });
      }
      res.status(200).json({
        success: true,
        message: "Admin registered succesfully",
      });
    }
  );
});

// login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "email and password are required",
    });
  }

  const checkUserQuery = `SELECT * FROM users WHERE email = ?`;

  db.query(checkUserQuery, [email, password], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }

    if (results.length === 0) {
      // User does not exist
      return res.status(404).json({
        success: false,
        message: "User not found. Please register.",
      });
    } else {
      // User exists, so login
      const user = results[0];

      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid password",
        });
      }

      // Generate JWT token after successful login
      const token = jwt.sign({ email: user.email }, (jwtSecret = "yash"));

      // Successful login
      return res.status(200).json({
        success: true,
        message: "Login successful",
        token: token,
      });
    }
    console.log(user);
  });

  // logout

  // logout route
  router.post("/logout", (req, res) => {
    // For JWT, there's no specific server-side action needed
    // You can simply inform the client to remove the token from local storage
    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  });
});

module.exports = router;
