require('dotenv').config();

const {DATABASE_URL} = process.env

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {
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

      CREATE TABLE cc_users (
         user_id SERIAL PRIMARY KEY NOT NULL,
         phone_num  VARCHAR(10) NOT NULL,
         full_name VARCHAR(200) NOT NULL,
         user_name VARCHAR(100) NOT NULL,
         password VARCHAR(1000) NOT NULL
      );

         INSERT INTO cc_users(phone_num, full_name, user_name, password)
         VALUES ('1234567891', 'Daniel Zolman', 'DZolman97', 'Dwzphzmi6');

      `).then(() => {
         console.log('DB seeded!')
         res.sendStatus(200)
      }).catch(err => console.log('error seeding DB', err))
   },

   userQuery: (req, res) => {
      sequelize.query(`
      SELECT * FROM cc_users
      WHERE phone_num = $1, ${[phone_num], (err, results)=>{
         if (err){
            throw err
         }
         console.log(results.rows)
      }}
      `)
   }
}