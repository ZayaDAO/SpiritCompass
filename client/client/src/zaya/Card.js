import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { ethers } from 'ethers';
const provider = new ethers.providers.Web3Provider(window.ethereum)
const WalletCard = (props) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [ENS, setENS] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const connectwalletHandler = () => {
        if (window.ethereum) {
            provider.send("eth_requestAccounts", []).then(async () => {
                await accountChangedHandler(provider.getSigner());
                await ensChangedHandler(provider.getSigner())
            })
        } else {
            setErrorMessage("Please Install Metamask!!!");
        }
    }
    const ensChangedHandler = async (account) => {
        setENS(await provider.lookupAddress(account))
    }
    const accountChangedHandler = async (newAccount) => {
        const address = await newAccount.getAddress();
        setDefaultAccount(address);
        const balance = await newAccount.getBalance()
        setUserBalance(ethers.utils.formatEther(balance));
        await getuserBalance(address)
    }
    const getuserBalance = async (address) => {
        const balance = await provider.getBalance(address, "latest")
    }
    return (
        <div className="WalletCard">
            <Button
                className='card-button'
                style={{ background: defaultAccount ? "#A5CC82" : "white" }}
                onClick={connectwalletHandler}>
                <p className='card-status'>{ENS ? "Connected!!" : "Wallet"}</p>
            </Button>
            <div className="displayAccount">
                <h4 className="walletAddress">{ENS}</h4>
                {/*<div className="balanceDisplay">
                    <h3>
                        Wallet Amount: {userBalance}
                    </h3>
                </div>*/}
            </div>
            {errorMessage}
        </div>
    )
}
export default WalletCard;