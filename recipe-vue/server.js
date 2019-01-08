const { Pool } = require('pg');
const express = require("express");
const bodyParser = require("body-parser");
const multipart = require("connect-multiparty");
const cors = require("cors");

// Set Application Port
const PORT = process.env.PORT || 3128;
const pool = new Pool({
  user: 'pi',
  host: 'taylorearl.com',
  // host: '192.168.1.149',
  database: 'testing',
  password: 'Cocobine1',
  port: 5432,
  ssl: true,
});

// create express app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Multiparty Middleware
const multipartMiddleware = multipart();


app.get("/test", multipartMiddleware, (req, res) => {
  pool.query('SELECT * FROM list', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.get("/get/ingredients", multipartMiddleware, (req, res) => {
  pool.query('SELECT * FROM list', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}`);
});
