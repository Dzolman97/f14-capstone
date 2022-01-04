const config = require('../config');
// C:\Users\dzson\Desktop\DevMountain\capstone-proj\config.js
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
   return res.status(200).json(newsResponse.data)
}

module.exports = {
   details
}