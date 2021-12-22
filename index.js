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

const port = process.env.PORT || 4004
app.listen(port, () => console.log(`We're going to the year ${port} Marty McFly!`))