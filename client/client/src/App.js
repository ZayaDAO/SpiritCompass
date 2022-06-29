/* eslint-disable no-unused-expressions */
import react, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

import Compass from './zaya/Compass.js'
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

function Context(props) {
  return (
    <>
      <Dex setLoggedIn={props.setLoggedIn}/>
      <Plane/>
      <Soul setMood={props.setMood}/>
    </>
  )
}

function Z() {
  const [spirit, setSpirit] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [onResonance, setOnResonance] = useState(false)
  const [worlding, setWorlding] = useState(false) 

  return (
    <div>
       {
         ! onResonance && !spirit 
           ? 
             <Context setLoggedIn={setLoggedIn} setMood={setSpirit}/> 
           : 
            ! onResonance && !worlding
              ? 
                <Aura setMood={setSpirit} forAffordance={setOnResonance}/> 
              : 
                <Compass onResonance={onResonance} setWorlding={setWorlding}/>
       }
    </div>
  );
}

export default Z;
