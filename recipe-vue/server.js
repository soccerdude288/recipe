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
  database: 'recipe',
  password: 'Cocobine1',
  port: 5432,
  ssl: true,
});

const testPool = new Pool({
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

function isEmpty(str) {
  return !str || str.length === 0;
}

app.get("/test", multipartMiddleware, (req, res) => {
  testPool.query('SELECT * FROM list', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.get("/get/ingredients", multipartMiddleware, (req, res) => {
  const id = req.param('ingredient_id');
  console.log(`get/ingredients ${id}`);
  if (isEmpty(id)) {
    pool.query('SELECT * FROM ingredient WHERE active = true', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  } else {
    pool.query('SELECT * FROM ingredient WHERE ingredient_id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  }
});

app.post("/add/ingredients", multipartMiddleware, (req, res) => {
  const name = req.param('name');
  const abbvr = req.param('abbvr');
  if (isEmpty(name)) {
    return res.json({
      status: false,
      message: "All fields are required",
    });
  }
  pool.query(
    'INSERT INTO ingredient(name, abbreviation, active) VALUES($1, $2, true) RETURNING *',
    [name, abbvr],
    (err, resp) => {
      if (err) {
        console.log(err.stack);
      }
    },
  );
  return res.json({ status: true, message: "Success" });
});

app.post("/update/ingredients", multipartMiddleware, (req, res) => {
  const name = req.param('name');
  const abbvr = req.param('abbvr');
  const ingredientId = req.param('ingredient_id');
  const active = req.param('active');
  console.log(`/update/ingredients`);
  console.log(`name: ${name} abbvr: ${abbvr} ingredientID: ${ingredientId} active: ${active}`);
  if (isEmpty(name) || isEmpty(ingredientId)) {
    return res.json({
      status: false,
      message: "All fields are required",
    });
  }
  pool.query(
    'UPDATE ingredient set name = $1, abbreviation = $2, active = $3 WHERE ingredient_id = $4',
    [name, abbvr, active, ingredientId],
    (err, resp) => {
      if (err) {
        console.log(err.stack);
      }
    },
  );
  return res.json({ status: true, message: "Success" });
});

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}`);
});
