import React from 'react';

import HeaderStyle from './style';
import accoutImg from '../../asset/account.png'
import exitImg from '../../asset/exit.png'
import logoImg from '../../asset/logo.png'
import {web3} from '../../constant/web3'
interface HeaderProps {
    WalletHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
    isConnected: boolean,
}
function Header(Props: HeaderProps) {
    var address;
    if( Props.isConnected === true) {
        address = web3.givenProvider.selectedAddress
    }
  return (
    <HeaderStyle>
        <nav className="flex items-center justify-between flex-wrap bg-teal min-h-8 p-3">
            <div className="flex items-center flex-no-shrink text-white ml-6">
                <span className="font-semibold text-xl tracking-tight ml-xsm"><img src={logoImg}/></span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                <svg className="h-2 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
                <div className="text-sm lg:flex-grow">
                </div>
                {!Props.isConnected?(
                    <div>
                        <button className="focus:outline-none bg-secondary rounded-lg border-2 border-secondary text-secondary font-extrabold text-10xl w-2/7 h-xl" onClick={Props.WalletHandler}>Engage Wallet</button>
                    </div>
                ):(
                    <div className="flex flex-row">
                        <button className="focus:outline-none bg-account rounded-lg border-secondary rounded-r-none text-secondary font-extrabold text-10xl w-3/7 h-xl justify-center items-center flex flex-row">
                            <p className="text-status text-semibold text-5xl mr-xsm">{address.slice(0,4)}...{address.slice(address.length-4)}</p>
                            <img src={accoutImg}/>
                        </button>
                        <button className="focus:outline-none bg-exit rounded-lg border-secondary rounded-l-none text-secondary font-extrabold text-10xl w-7/7 h-xl justify-center items-center flex" onClick={Props.WalletHandler}><img src={exitImg}/></button>
                    </div>
                )}
            </div>
        </nav>
    </HeaderStyle>
  );
}

export default Header;
