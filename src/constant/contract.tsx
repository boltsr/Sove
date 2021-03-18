import config from '../config'
import {web3} from './web3';
const networkId = config.networkId as string;
const WeenusTokenContractAbi = require('./abis/WeenusTokenABI.json');
const { contractAddresses } = require('./contant');
const WeenusTokenContractAddress = contractAddresses['WeenusToken'][networkId];
var WeenusTokenAbiContract = null;
if (web3.givenProvider !== null) {
    WeenusTokenAbiContract = new web3.eth.Contract(WeenusTokenContractAbi, WeenusTokenContractAddress,{ from: web3.givenProvider.selectedAddress});

}
export const WeenusTokenContract =  {
    address: WeenusTokenContractAddress,
    contract: WeenusTokenAbiContract,
};
