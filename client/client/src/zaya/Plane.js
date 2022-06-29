import React, {useState, useEffect} from 'react'
import img from './temp_imgs/Screen\ Shot\ 2022-06-28\ at\ 1.04.52\ AM.png'

const Plane = () => {
	return(
		<>
			<img className="present" src={img} width='60%' />
			<p className="hue">What color do you resonate with right now?</p>
			<p className="hue">Choose color by clicking on the bar</p>
		</>
	)
}


export default Plane;