import { Pool } from 'pg';

const pool = new Pool({
  user: 'pi',
  host: 'taylorearl.com',
  database: 'testing',
  password: 'Cocobine1',
  port: 5432,
});


const getItems = (request, response) => {
  pool.query('SELECT * FROM users list', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export default {
  getItems,
};
