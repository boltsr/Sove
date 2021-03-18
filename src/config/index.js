require('dotenv').config();

const web3Provider = process.env.REACT_APP_TEST_WEB3_PROVIDER;
const config = {
  web3Provider: web3Provider,
  networkId: process.env.REACT_APP_NETWORK_ID,
};

module.exports = config;
