/* eslint-disable no-unused-expressions */
import react, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

import Aura from './zaya/Aura/index.js'
import Dex from './zaya/Dex.js'
import Plane from './zaya/Plane.js'
import Soul from './zaya/Soul.js'

// const require('./three.js')
const ethers = require('ethers');

// The Contract interface
let abi = [
    "event ValueChanged(address indexed author, string oldValue, string newValue)",
    "constructor(string value)",
    "function getValue() view returns (string value)",
    "function setValue(string value)"
];

// Connect to the network
// let provider = ethers.getDefaultProvider();

// The address from the above deployment example
let contractAddress = "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E";

function Context() {
  return (
    <>
      <Dex/>
      <Plane/>
      <Soul/>
    </>
  )
}

function Z() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
       {
         !loggedIn ? <Context /> : <Aura />
       }
    </div>
  );
}

export default Z;
