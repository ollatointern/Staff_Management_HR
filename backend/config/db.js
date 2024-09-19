const mysql = require("mysql2")
const express = require("express")

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',  // Change to your MySQL host if needed
    user: 'root',       // Replace with your MySQL username
    password: '',       // Replace with your MySQL password
    database: 'staff_hr_management'  // Replace with your MySQL database name
  });
  
  // Connect to the MySQL database
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL connected...');
  });
  module.exports = db;