import React, {useState, useEffect} from 'react'
import img from './temp_imgs/Screen\ Shot\ 2022-06-28\ at\ 1.04.52\ AM.png'

import practiceLogo from './temp_imgs/practice.png'
import wellnessLogo from './temp_imgs/wellness.png'
import karmaLogo from './temp_imgs/karma.png'

/// @
const Practice = (props) => {
	const [tip, setTip] = useState('Plant your own indoor herb garden. Hug tree feel its bark and leaves. Walk barefoot on the grass.')
	// pull from data storage
	return(
		<>	
			<p onClick={() => props.setWorlding(true)} style={{cursor: 'pointer'}}>←</p>
			<div>
				<img className="todo-svg" src={practiceLogo} />
			</div>
			<p className="prompt">PRACTICE</p>
			<p>{tip}</p>
		</>
	)
}

///
const Wellness = (props) => {
	return(
		<>
			<img src={wellnessLogo} />
			<p className="prompt">WELLNESS</p>
		</>
	)
}

///
const Karma = (props) => {
	return(
		<>
			<img src={karmaLogo} />
			<p className="prompt">KARMA</p>
		</>
	)
}

// lattice
const Compass = (props) => {
	let needle;
	// like a quilt
	// const needle = (mood) => {
		switch(props.onResonance){
			case 1:
				needle = <Practice setWorlding={props.setWorlding}/>
				break;
			case 2:
				needle = <Wellness setWorlding={props.setWorlding}/>
				break;
			default:
				needle = <Karma setWorlding={props.setWorlding}/>
		}
	// }

	return(
		<>
			{
				needle
			}
		</>
	)
}

export default Compass;