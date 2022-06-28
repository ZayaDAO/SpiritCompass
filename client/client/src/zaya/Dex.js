// TODO: Add ENS Name Resolver
import react, {useState, useEffect} from 'react'
import Card from './Card'

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
