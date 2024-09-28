const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

const saltRounds = 10;

// signup route
router.post("/signup", async (req, res) => {
  const { email, password, fullName, dateOfBirth, gender } = req.body;

  // Validate password (should be 4-6 digits long and numeric)
  if (!/^\d{4,6}$/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must be 4-6 digits long and numeric.",
    });
  }

  // Check if email already exists
  const checkEmailQuery = `SELECT email FROM users WHERE email = ?`;

  db.query(checkEmailQuery, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Server error occurred while checking email.",
      });
    }

    if (results.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    // If email does not exist, proceed to register the user
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const insertUserQuery = `
        INSERT INTO users (email, password, fullName, dateOfBirth, gender, status) 
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      // Pass 'inactive' as the default status
      db.query(
        insertUserQuery,
        [email, hashedPassword, fullName, dateOfBirth, gender, "inactive"],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(501).json({
              success: false,
              message: "Unable to register user.",
            });
          }

          res.status(200).json({
            success: true,
            message: "User registered successfully with status inactive.",
          });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Server error occurred while registering user.",
      });
    }
  });
});

module.exports = router;

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const checkUserQuery = `SELECT * FROM users WHERE email = ?`;

  // Only use email to find the user
  db.query(checkUserQuery, [email], async (err, results) => {
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
        console.log("Error during comparing passwords");
      }

      // Declare the token variable outside the try block
      let token;
      // Generate JWT token after successful login
      // Handle errors that might occur during jwt.sign()
      try {
        token = jwt.sign({ email: user.email }, "yash");
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Server error occurred while generating JWT token",
        });
      }

      // Successful login
      return res.status(200).json({
        success: true,
        message: "Login successful",
        token: token,
        user: {
          id: user.id, // Include other relevant fields
          name: user.fullName,
          email: user.email,
          status: user.status, // Assuming you have this field in your DB
        },
      });
    }
  });
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
module.exports = router;
