const express = require("express");
const db = require("../config/db");
const bcrypt = require("bcrypt");

// check user in table
let query;
query = `SELECT * FROM users WHERE email = ? LIMIT 1`;

// execute query
db.query(query, [email, password], (err, results) => {
  if (err) {
    console.log("Error querying table user", err);
    return;
  }

  // No user founds
  if (results.length === 0) return;

  //   user found
  const user = results[0];
  console.log("user found in table user", user);
});

const login = (req, res) => {
  const { email, password } = req.body;
};
