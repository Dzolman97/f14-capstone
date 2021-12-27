const express = require('express');
const path = require('path');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')
const {seed} = require('./seed.js')
const {createUSer} = require('./models/user.js')
// const userRoute = require("./routes/users.js");
// const authRoute = require("./routes/auth.js");


app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(cors());
// app.use("/api/user", userRoute);
// app.use("/api/auth", authRoute);
dotenv.config();

app.post('/seed', seed);



app.get('/styles.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/styles.css'))
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/index.html'))
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

app.post('/create-acct', (req, res) => {
   let { phone_num, full_name, user_name, password, password2 } = req.body;

   console.log({
      phone_num,
      full_name,
      user_name,
      password,
      password2
   });
});

app.get('/feed-news.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/feed-news.css'))
});

app.get('/news', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/feed-news.html'))
});

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

const port = process.env.PORT || 4004;
app.listen(port, () => console.log(`We're going to the year ${port} Marty McFly!`));