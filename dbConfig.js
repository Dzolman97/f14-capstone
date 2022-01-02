require('dotenv').config();

const {Pool} = require('pg');

const {DATABASE_URL} = process.env

const connectionString = `${DATABASE_URL}`

const pool = new Pool({
   connectionString
});

module.exports = {pool}