const { Pool } = require("pg");

export const pool = new Pool({
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl:true,
});


