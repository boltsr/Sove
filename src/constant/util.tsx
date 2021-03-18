const { web3 } = require('./web3');
const BigNumber = require('bignumber.js');
const config = require('../config');
const networkId = config.networkId;

const sendTransaction = async ( connectType: string, fromAddress: string, toAddress: string, encodedABI: any,
    /*gasLimit,*/ wei = `0x0`,
) => {
  if (connectType === 'metamask') {
    if (web3) {
      try {
        const gasPrice = await web3.eth.getGasPrice();
        const tx = {
          from: fromAddress,
          to: toAddress,
          // gas: gasLimit,
          gasPrice: web3.utils.toHex(gasPrice), //`0xAB5D04C00`,
          // chainId: 3,
          data: encodedABI,
          value: wei,
        };

        return new Promise((resolve, reject) => {
          web3.eth
            .sendTransaction(tx)
            .on('transactionHash', (hash: string) => {
              console.log('hash: ', hash);
            })
            .on('receipt', (receipt: any) => {
              resolve(receipt);
            })
            .on('error', (err:any) => {
              reject(err);
            });
        });
      } catch (err) {
        console.log('err :>> ', err);
        return null;
      }
    } else {
      return null;
    }
  } 
};

const bnToDec = (bn: any, decimals = 18) => {
  return bn.dividedBy(new BigNumber(10).pow(decimals)).toNumber();
};

const bnDivdedByDecimals = (bn: any, decimals = 18) => {
  return bn.dividedBy(new BigNumber(10).pow(decimals));
};

const bnMultipledByDecimals = (bn:any, decimals = 18) => {
  return bn.multipliedBy(new BigNumber(10).pow(decimals));
};

const decToBn = (dec:any, decimals = 18) => {
  return new BigNumber(dec).multipliedBy(new BigNumber(10).pow(decimals));
};



const formatDecimal = (value: any, decimal = 18, numPoint = 4, precision = 2) => {
  BigNumber.config({
    DECIMAL_PLACES: 18,
    FORMAT: {
      // string to prepend
      prefix: '',
      // decimal separator
      decimalSeparator: '.',
      // grouping separator of the integer part
      groupSeparator: ',',
      // primary grouping size of the integer part
      groupSize: 3,
    },
  });

  const data = new BigNumber(value).dividedBy(new BigNumber(10).pow(decimal));
  if (data.isGreaterThan(1)) {
    return data.dp(precision, 1).toString(10);
  }
  return data.dp(numPoint, 1).toString(10);
};

export {
  sendTransaction,
  bnToDec,
  bnDivdedByDecimals,
  bnMultipledByDecimals,
  decToBn,
  formatDecimal,
};
