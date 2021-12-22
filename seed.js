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
         phone_num  VARCHAR(10),
         full_name VARCHAR(300),
         user_name VARCHAR(100),
         password VARCHAR(1000)
      );

         insert into cc_users (phone_num, full_name, user_name, password)
         values ('1234567891', 'Daniel Zolman', 'DZolman97', 'Dwzphzmi6'),
         ('1234567891', 'Tester McTesting', 'Test1', 'testing123');

      `).then(() => {
         console.log('DB seeded!')
         res.sendStatus(200)
      }).catch(err => console.log('error seeding DB', err))
   }
}