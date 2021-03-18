import React, { useState } from 'react';
import {bnToDec, decToBn} from './constant/util';
import Details from './component/details-flex-box'
import Review from './component/review-flex-box'
import Send from './component/send-flex-box'
import Header from './container/header/index'
import {web3} from './constant/web3'
import config from './config';
import BigNumber from 'bignumber.js'
import './App.css';
const WeenusTokenContract = require('./constant/contract')

function App() {
  const [showSend,setShowSend] = useState(0)
  const [isConnect,setConnect] = useState(false)
  const [amount, setTransferAmount] = useState("")
  const [address, setTransferAddress] = useState("")
  const [isETH,setAsset] = useState(false)
  const [assetName, setAssetName] = useState("rETH")
  const [flagPer, setPercentFlag] = useState(0)
  const [assetAmount, setAssetAmount] = useState(0)
  const [txhash, setTxHash] = useState("")
  const onAssetClickHandler = async (event: any) => {
    const asset = event.target.innerText
    const address = web3.givenProvider.selectedAddress

    if (asset === "rETH") {
        setAsset(false)
        setAssetName("rETH")
        web3.eth.getBalance(address)
        .then(result=>{
            const asset = new BigNumber(result)
            const totalAmount = bnToDec(asset)
            setAssetAmount(totalAmount.toFixed(2))
        });
    
    } else if (asset === "WEENUS"){
        setAsset(true)
        setAssetName("WEENUS")
        const tAmount = await WeenusTokenContract.WeenusTokenContract.contract.methods.balanceOf(address).call()
        const asset = new BigNumber(tAmount)
        const weenusAmount = bnToDec(asset)
        const totalAmount = weenusAmount.toFixed(2)
        setAssetAmount(totalAmount)
    }
}
const onPercentClickHandler = (event: any) => {
    const percent = event.target.innerText
    if (percent === '10%') {
        setPercentFlag(1)
        console.log("ams", assetAmount)
        if (assetAmount !== 0) {
          const pAmount =  assetAmount/10
          setTransferAmount(String(pAmount))
        }
    } else if (percent === '25%') {
        setPercentFlag(2)
        if (assetAmount !== 0) {
          const pAmount =  assetAmount/4
          setTransferAmount(String(pAmount))
        }
    } else if (percent === '50%') {
        setPercentFlag(3)
        if (assetAmount !== 0) {
          const pAmount =  assetAmount/2
          setTransferAmount(String(pAmount))
        }
    } else if (percent === '75%') {
      if (assetAmount !== 0) {
        const pAmount =  assetAmount*0.75
        setTransferAmount(String(pAmount))
      }
      setPercentFlag(4)
    } else if (percent === '100%') {
        setPercentFlag(5)
        setTransferAmount(String(assetAmount))

    }
  }
  const onSubmitClickHandler = ()=> {
    if (showSend === 0) {
      setShowSend(1)
    } else if (showSend === 1){
      setShowSend(0)
    }
  }
  const onConfirmClickHandler = async()=> {
    if (assetName === "WEENUS") {
      const contract = WeenusTokenContract.WeenusTokenContract.contract
      const asset = decToBn(amount)
      contract.methods.transfer(address, web3.utils.toBN(asset))
      .send()
      .on('transactionHash', (hash:any) => {
        setShowSend(2)
        setTxHash(hash)
      })
    } else if (assetName === "rETH") {
      web3.eth.sendTransaction({
        from: "0xB7180670fc3e7a4Ccd8fE4bcBEcAe2bEaA7d92E0",
        to: address,
        value: web3.utils.toWei(amount, 'ether'),
      });
    }
  }
  const onChangeAmount = (event: any) => {
      setTransferAmount(event.target.value)
      setPercentFlag(0)
  }
  const onChangeAddress = (event: any) => {
      setTransferAddress(event.target.value)
  }
  const onConnectWallet = async () => {
    try {
      const netId =  `${await web3.eth.net.getId()}`;
      if (netId !== config.networkId) {
        alert('Please select ropsten net to proceed!');
        setConnect(false)
        return;
      }
      if(web3.givenProvider !== null){
        setConnect(!isConnect)
      } else {
        alert('Please connect your metamask.');
        setConnect(false)
      }
    } catch (error) {
      // NotificationManager.warning('Something went wrong while connect wallet');
    }
    // setModalShow(false);
  }
  const onClose = async () => {
    setShowSend(0)
  }
  return (
    <div className="App flex flex-col">
      <Header isConnected={isConnect} WalletHandler = {onConnectWallet}/>
        {/* <div className={`transition-all opacity-20  ease-in duration-700 flex flex-col items-center h-thl ${showSend === 1 ? "height-div1":""} `} style={{opacity: isConnect? 1: 0.2}}> */}
        <div className={`flex flex-col items-center`}>
          <div className={`flex flex-col items-center bg-secondary bg-opacity-25 mt-sm flex flex-col items-center rounded-2xl border border-primary border-opacity-75 w-6/7 items-center transition-all opacity-20  ease-in duration-700 flex flex-col items-center h-thl ${showSend === 1 ? "height-div1":""}  ${showSend === 2 ? "height-div2":""}`} style={{opacity: isConnect? 1: 0.2}}>
            {showSend === 0 && <Send isConnected = {isConnect} TypeClickHandler = {onAssetClickHandler} PercentClickHandler={onPercentClickHandler} ClickHandler={onSubmitClickHandler} AddressHandler={onChangeAddress} AmountHandler={onChangeAmount} transferAddress={address} transferAmount={amount} amountAsset={assetAmount} flagPercent={flagPer} nameAsset={assetName} eth={isETH}/>}
            {showSend === 1 && <Review ConfirmHandler = {onConfirmClickHandler} transferAddress={address} transferAmount={Number(amount)} nameAsset={assetName}/>}
            {showSend === 2 && <Details txHash={txhash} CloseClickHandler={onClose}/>}
          </div>
        </div>
    </div>
  );
}

export default App;
