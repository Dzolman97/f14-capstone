require('dotenv').config();

const {CONNECTION_STRING} = process.env

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
   dialect: 'postgres',
   dialectOptions: {
      ssl: {
         rejectUnauthorized: false
      }
   }
});


module.exports = {
   seed: (req, res) => {
      sequelize.query(`
      drop table if exists cc_users;

      create table cc_users (
         user_id SERIAL PRIMARY KEY,
         full_name VARCHAR(300),
         user_name VARCHAR(100),
         password VARCHAR(1000)
      );


      `)
   }
}