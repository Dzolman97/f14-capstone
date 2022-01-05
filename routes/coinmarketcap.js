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
    'limit': '100',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': `${process.env.COINAPI}`
  },
  json: true,
  gzip: true
};

const details = async (req, res) => {
  const coindata = await rp(requestOptions).then((response) => {
    return response.data
  });

  return res.status(200).send(coindata)
}

const requestQuotes = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'start': '1',
    'limit': '100',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': `${process.env.COINAPI}`
  },
  json: true,
  gzip: true
};

const quoteDetails = async (req, res) => {
  const quotedata = await rp(requestQuotes).then((response) => {
    return response.data
  });

  return res.status(200).send(quotedata)
}


module.exports = {

  details,
  quoteDetails

}