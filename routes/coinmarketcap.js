const router = require("express").Router();
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();
const rp = require('request-promise');

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '1000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': `${process.env.COINAPI}`
  },
  json: true,
  gzip: true
};


module.exports = {
  details: (req, res) => {
    rp(requestOptions).then(response => {
      return ('API call response:', response);
    }).then(() => {
      console.log("recieved latest info")
      res.sendStatus(200).send(response)
    }).catch((err) => {
      return ('API call error:', err.message)
    })
  },

}