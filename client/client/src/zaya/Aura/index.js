import React from 'react';
import Orb from './Orb.js'

const Aura = (props) => {

  const clicked = async (num) => {
    console.log(num)
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    // let contract = new ethers.Contract(contractAddress, abi, provider);

    // let tx = await contract.scry(num)
    // console.log(tx)
  }
  return(
    <>
      <Orb/>
      <div className="pallette">
        <div className='color' onClick={() => clicked(1)} style={{background: '#716BC1'}}>practice</div>
        <div className='color' onClick={() => clicked(2)} style={{background: '#3895CC'}}>wellness</div>
        <div className='color' onClick={() => clicked(3)} style={{background: '#89BECC'}}>karma</div>
    </div>
    </>
  )
}


export default Aura;