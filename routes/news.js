const config = require('../config');
const axios = require('axios');
const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();

const axiosOptions = {
   headers: {
      "auth_token": process.env.NEWSAPI
   }
}

const details = async (req, res) => {
   const newsResponse = await axios.get(config.newsURL(req.query.newsApi), axiosOptions);
   console.log(newsResponse.data.results[0])
   return res.status(200).json(newsResponse.data.results[0])
}

module.exports = {
   details
}