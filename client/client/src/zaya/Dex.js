// TODO: Add ENS Name Resolver
import React, {useState, useEffect} from 'react'
import Card from './Card.js'

const Dex = () => {
	const [lightMode, setLightMode] = useState(false)

	useEffect(() => {
		if(!lightMode){
			// TODO: Ephemeral, store a window of transactions in the browser.
		}
	},[setLightMode])

	return(// TODO: Maybe think about Lens with Card
		<>	
			<Card/>
		</>
	)
}

export default Dex;

