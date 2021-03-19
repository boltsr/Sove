import React from 'react';

import arrow from '../asset/arrow.png'
import { web3 } from '../constant/web3'

interface ReviewProps {
    ConfirmHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    transferAmount: number,
    transferAddress: string,
    nameAsset: string,
}
function Review(Props: ReviewProps) {
  return (
      <div>
        <div className="flex mt-sm text-center justify-center">
            <p className="text-center font-display font-semibold text-status text-6xl">Review Transaction</p>
        </div>
        <div className="flex flex-col mt-sm text-center justify-center">
            <p className="text-center font-display font-semibold text-status text-4xl">SEND</p>
            <p className="text-center font-display font-semibold text-status text-4xl">{Props.transferAmount.toFixed(2)} {Props.nameAsset}</p>
        </div>

        <div className="flex mt-sm text-center justify-center">
            <p className="text-center font-display font-thin text-status text-7xl">From: {web3.givenProvider.selectedAddress}</p>
        </div>
        <div className="flex mt-xsm justify-center">
            <img src={arrow}/>
        </div>

        <div className="flex mt-xsm text-center justify-center">
            <p className="text-center font-display font-thin text-status text-7xl">To: {Props.transferAddress}</p>
        </div>
        <div className="flex flex-row mt-sm text-center justify-center">
            <p className="text-center font-display font-thin text-status text-5xl">Tx Fee:</p>
            <p className="text-center ml-elg font-display font-thin text-status text-5xl">0.0006 rBTC</p>

        </div>

        <div className="focus:outline-none flex w-5/7 mt-sm justify-center mb-xl">
            <button className="focus:outline-none  rounded-md bg-primary text-black font-extrabold text-4xl w-2/7 h-xlg" onClick={Props.ConfirmHandler}>CONFIRM</button>
        </div>
    </div>
  );
}

export default Review;
