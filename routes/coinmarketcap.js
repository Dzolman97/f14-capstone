const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const rp = require('request-promise');

const requestOptions1 = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'symbol': 'BTC',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': `${process.env.COINAPI}`
  },
  json: true,
  gzip: true
};

const requestOptions = () => {
   rp(requestOptions1).then(response => {
   return response.status(200).json('API call response:', response);
   }).catch((err) => {
   return('API call error:', err.message);
   });
}

module.exports = {
   requestOptions
}