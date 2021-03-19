import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react';

import eth from '../asset/eth.svg'
import weenus from '../asset/weenus.svg'

interface SendProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    AddressHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    AmountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    TypeClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    PercentClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    transferAmount: string,
    transferAddress: string,
    amountAsset: any,
    flagPercent: any,
    nameAsset: string,
    eth: boolean,
    isConnected: boolean,
}

function Send( Props: SendProps) {
    // useEffect(()=>{
    //     const address = web3.givenProvider.selectedAddress
    //     web3.eth.getBalance(address)
    //     .then(result=>{
    //         const asset = new BigNumber(result)
    //         const amount = bnToDec(asset)
    //         setAssetAmount(amount)
    //     });
    // })

  return (
      <div >
        <div className="flex mt-xsm text-center justify-center">
            <p className="text-center font-display font-extrabold text-primary text-8xl">SEND</p>
        </div>
        <div className="mt-sm flex flex-col items-center w-5/7 items-center ">
            <div className="flex mt-xsm w-5/7">
                <p className="font-display font-semibold text-primary text-10xl">Asset:</p>
            </div>
            {Props.isConnected ? (
                <div className = "flex flex-row w-5/7 mt-xsm">
                    {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                    <button className={`focus:outline-none flex flex-row rounded-md border border-radio bg-radio rounded-r-none text-primary font-extrabold text-10xl w-4/7 h-xlg justify-center items-center ${!Props.eth?'bg-opacity-50':'bg-opacity-25'}`} onClick={Props.TypeClickHandler.bind(Send)}><img className="mr-tsm" src={eth}/> rETH</button>
                    <button className={`focus:outline-none flex flex-row rounded-md border border-radio bg-radio rounded-l-none text-primary font-extrabold text-10xl w-4/7 h-xlg justify-center items-center ${Props.eth?'bg-opacity-50':'bg-opacity-25'}`} onClick={Props.TypeClickHandler.bind(Send)}><img className="mr-tsm" src={weenus}/> WEENUS</button>
                    {/* </div> */}
                </div>
            ):(
                <div className = "flex flex-row w-5/7 mt-xsm">
                    {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                    <button disabled className={`focus:outline-none flex flex-row rounded-md border border-radio bg-radio rounded-r-none text-primary font-extrabold text-10xl w-4/7 h-xlg justify-center items-center ${!Props.eth?'bg-opacity-50':'bg-opacity-25'}`}><img className="mr-tsm" src={eth}/> rETH</button>
                    <button disabled className={`focus:outline-none flex flex-row rounded-md border border-radio bg-radio rounded-l-none text-primary font-extrabold text-10xl w-4/7 h-xlg justify-center items-center ${Props.eth?'bg-opacity-50':'bg-opacity-25'}`}><img className="mr-tsm" src={weenus}/> WEENUS</button>
                    {/* </div> */}
                </div>                    
            )}
            <div className="flex mt-xsm w-5/7">
                <p className="font-display font-thin text-primary text-5xl">Available Balance: {Props.amountAsset} {Props.nameAsset}</p>
            </div>
        </div>
                                                                                                                                                                    
        <div className="flex flex-col mt-sm w-5/7">
            <div className = "mt-sm w-5/7 text-left">
                <p className="font-display font-semibold text-primary text-10xl">Amount:</p>
            </div>

            <div className = "w-5/7 mt-xsm">
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0.5 pl-3 flex items-center pointer-events-none">
                        <span className="text-black font-semibold text-1-xl ">{!Props.eth?'rETH':'WEENUS'}</span>
                    </div>
                    <input type="text" name="price" id="price" className="focus:outline-none font-display focus:ring-indigo-500 h-xl focus:border-indigo-500 block w-5/7 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-center" placeholder="0" onChange={Props.AmountHandler.bind(Send)} value={Props.transferAmount}/>
                </div>
            </div>
            <div className = "flex flex-row w-5/7 mt-xsm">
                {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                <button className={`focus:outline-none rounded-md border border-radio bg-radio rounded-r-none text-primary font-extrabold text-7xl w-1/7 h-vlg ${Props.flagPercent === 1?"bg-opacity-50":"bg-opacity-25"} `} onClick={Props.PercentClickHandler.bind(Send)}>10%</button>
                <button className={`focus:outline-none border border-radio bg-radio text-primary font-extrabold text-7xl w-1/7 h-vlg ${Props.flagPercent === 2?"bg-opacity-50":"bg-opacity-25"}`} onClick={Props.PercentClickHandler.bind(Send)}>25%</button>
                <button className={`focus:outline-none border border-radio bg-radio text-primary font-extrabold text-7xl w-1/7 h-vlg ${Props.flagPercent === 3?"bg-opacity-50":"bg-opacity-25"}`} onClick={Props.PercentClickHandler.bind(Send)}>50%</button>
                <button className={`focus:outline-none border border-radio bg-radio text-primary font-extrabold text-7xl w-1/7 h-vlg ${Props.flagPercent === 4?"bg-opacity-50":"bg-opacity-25"}`} onClick={Props.PercentClickHandler.bind(Send)}>75%</button>
                <button className={`focus:outline-none rounded-md border border-radio bg-radio rounded-l-none text-primary font-extrabold text-7xl w-1/7 h-vlg ${Props.flagPercent === 5?"bg-opacity-50":"bg-opacity-25"}`} onClick={Props.PercentClickHandler.bind(Send)}>100%</button>
                {/* </div> */}
            </div>                
            
        </div>
        <div className="flex flex-col w-5/7">
            <div className = "mt-sm w-5/7 text-left">
                <p className="font-display font-extrabold text-primary text-10xl">Send To:</p>
            </div>
            <div className = "w-5/7 mt-xsm">
                    <input type="text" name="price" id="price" className="focus:outline-none font-status font-semibold focus:ring-indigo-500 h-xl focus:border-indigo-500 block w-5/7 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-center text-10xl" placeholder="Type or Paste address" onChange={Props.AddressHandler.bind(Send)} value={Props.transferAddress}/>
            </div>
        </div>
        {Props.isConnected?(
        <div className={`flex w-5/7 mt-sm justify-center mb-xl ${Props.transferAddress.length===0 ? 'opacity-20':'opacity-100'}`}>
            <button className="focus:outline-none  rounded-md bg-primary text-black font-extrabold text-4xl w-2/7 h-xlg" onClick={Props.ClickHandler}>SUBMIT</button>
        </div>
        ):(
            <div className="flex w-5/7 mt-sm justify-center mb-xl">
                <button className="focus:outline-none  rounded-md bg-primary text-black font-extrabold text-4xl w-2/7 h-xlg">SUBMIT</button>
            </div>

        )}
    </div>
  );
}

export default Send;
