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

      create table cc_users (
         user_id BIGSERIAL PRIMARY KEY NOT NULL,
         phone_num  VARCHAR(10) NOT NULL,
         full_name VARCHAR(200) NOT NULL,
         user_name VARCHAR(100) NOT NULL,
         password VARCHAR(1000) NOT NULL,
         UNIQUE (phone_num),
         UNIQUE (user_name),
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