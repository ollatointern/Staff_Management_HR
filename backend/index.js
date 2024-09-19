const express = require('express');
const mysql = require('mysql2');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const db = require("./config/db")

// Route: Create a new database (if needed)
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE testdb';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Database created');
  });
});

// Route: Create a new table
app.get('/createtable', (req, res) => {
  let sql = `
    CREATE TABLE users (
      id INT AUTO_INCREMENT, 
      name VARCHAR(255), 
      email VARCHAR(255), 
      PRIMARY KEY(id)
    )
  `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Users table created');
  });
});

// Route: Insert a new user
app.post('/adduser', (req, res) => {
  const { name, email } = req.body;
  let sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  let query = db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
    res.send('User added');
  });
});

// Route: Select all users
app.get('/users', (req, res) => {
  let sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Route: Update a user
app.put('/updateuser/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  let sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(sql, [name, email, id], (err, result) => {
    if (err) throw err;
    res.send('User updated');
  });
});

// Route: Delete a user
app.delete('/deleteuser/:id', (req, res) => {
  const { id } = req.params;
  let sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send('User deleted');
  });
});

// Start the Express server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
