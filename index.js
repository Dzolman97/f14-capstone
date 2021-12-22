const express = require('express');
const path = require('path');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')
const {seed} = require('./seed.js')


app.use(express.json());
app.use(cors())
dotenv.config();

app.post('/seed', seed)

app.get('/styles.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/styles.css'))
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/dashboard.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/dashboard.css'))
});

app.get('/dashboard', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/dashboard.html'))
})

app.get('/create-acct.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/create-acct.css'))
});

app.get('/create-acct', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/create-acct.html'))
})

const port = process.env.PORT || 4004
app.listen(port, () => console.log(`We're going to the year ${port} Marty McFly!`))