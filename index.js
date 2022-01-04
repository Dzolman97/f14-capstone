const express = require('express');
const path = require('path');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')
const {seed} = require('./seed.js')
const {userQuery} = require('./seed.js')
const bcrypt = require("bcrypt")
const {DATABASE_URL} = process.env
const userRoute = require("./routes/users.js")
const newsRouter = require("./routes/news.js")

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {
   dialect: 'postgres',
   dialectOptions: {
      ssl: {
         rejectUnauthorized: false
      }
   }
});

app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(cors());
app.use("/profile/api/user", userRoute)
app.use("/news/api/feed", newsRouter.details)
dotenv.config();

app.post('/seed', seed);



app.get('/styles.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/styles.css'))
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.post('/user/login', (req, res) => {
   let user_name = req.body.user_name
   let password = req.body.password

   const authenticateUser = (user_name, password) => {
      sequelize.query(
         `SELECT * FROM cc_users WHERE user_name = '${user_name}'`,
         {type: sequelize.QueryTypes.SELECT}
      ).then((result) => {
         console.log("this is the result", result)
         if(result.length > 0){
            const user = result[0]

            bcrypt.compare(password, user.password, (err, isMatch) => {
               if(err){
                  throw err
               }
               if(isMatch){
                  console.log("user authenticated")
                  res.redirect('/dashboard')
               }else{
                  console.log("Wrong Password")
               }
            })
         }
      })
   }

   authenticateUser(user_name, password)
});

app.get('/dashboard.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/dashboard.css'))
});

app.get('/dashboard', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/dashboard.html'))
});

app.get('/create-acct.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/create-acct.css'))
});

app.get('/create-acct', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/create-acct.html'))
});

app.post('/create-acct', async(req, res) => {
   let { phone_num, full_name, user_name, password, password2 } = req.body;
   console.log(req.body)
   console.log({
      phone_num,
      full_name,
      user_name,
      password,
      password2
   });

   const errors = [];

   if(!phone_num || !full_name || !user_name || !password || !password2){
      errors.push('Please enter ALL fields.');
   }

   if(phone_num.length < 10) {
      errors.push("Phine Number needs to be 10 digits")
   }

   if(password.length < 6) {
      errors.push("Password should be at least 6 characters long.");
   }

   if(password !== password2){
      errors.push("Passwords do not match!");
   }

   if(errors.length > 0){
      res.status(500).send(errors);
   }else{
      // Form Validation Passed

      let hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      
      sequelize
         .query(
            `INSERT INTO cc_users(phone_num, full_name, user_name, password)
            VALUES ('${phone_num}', '${full_name}', '${user_name}', '${hashedPassword}')`
         ).then(() => {
            console.log("User Insterted")
            res.redirect("/dashboard")
         }).catch(err => console.log('error inserting user date', err))
   }
});

app.get('/feed-news.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/feed-news.css'))
});

app.get('/news', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/feed-news.html'))
});

app.get('/news/api/feed', newsRouter.details);

app.get('/currencies.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/currencies.css'))
});

app.get('/market-list', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/currencies.html'))
});

app.get('/user-profile.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/user-profile.css'))
});

app.get('/profile', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/user-profile.html'))
});

app.get('/users/logout', (req, res) => {
   // res.sendFile(path.join(__dirname, '/public/index.html'))
   res.redirect("/")
})

const port = process.env.PORT || 4004;
app.listen(port, () => console.log(`We're going to the year ${port} Marty McFly!`));