const { Pool } = require('pg');

const pool = new Pool({
  user: 'gdylanc',
  password: 'flower1234',
  host: 'bank-account-2.cpyifvn6h7ql.us-east-1.rds.amazonaws.com',
  port: 5432,
  database: 'postgres'
});

module.exports = { pool };
