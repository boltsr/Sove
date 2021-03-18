import Web3 from 'web3';
import config from '../config';
const providerUrl = config.web3Provider;
const web3 = new Web3((window as any).ethereum  || providerUrl);


export {
  web3,
};
