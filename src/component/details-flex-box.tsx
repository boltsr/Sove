import React from 'react';
import check from '../asset/check.png'
interface DetailsProps {
    txHash: string,
    CloseClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
function Details(Props:DetailsProps) {
  return (
    <div>
        <div className="flex mt-sm text-center">
            <p className="text-center font-display font-semibold text-primary text-6xl">Trasaction Details</p>
        </div>
        <div className="flex mt-sm justify-center">
            <img src={check}/>
        </div>
        <div className="flex mt-xsm text-center">
            <p className="text-center font-display font-light text-status text-9xl italic">Status Pending</p>
        </div>

        <div className="flex flex-row mt-sm text-center w-5/7 justify-center">
            <p className="text-center font-display font-thin text-primary text-5xl">Tx Hash:</p>
            <p className="text-center ml-xsm font-display font-thin text-secondary text-5xl truncate">{Props.txHash.slice(0,9)}...{Props.txHash.slice(Props.txHash.length-10)}</p>
        </div>
        <div className="flex w-5/7 mt-sm justify-center mb-xl">
            <button className=" focus:outline-none bg-secondary rounded-md border-2 border-secondary text-secondary font-extrabold text-4xl w-2/7 h-xlg" onClick = {Props.CloseClickHandler}>CLOSE</button>
        </div>
    </div>
  );
}

export default Details;
