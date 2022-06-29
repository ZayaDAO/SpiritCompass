import React, {useState, useEffect} from 'react'
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°`;
}

const Soul = (props) => {
	const [value, setValue] = useState([20]);

		useEffect(() => {
			setTimeout(() => {
				document.getElementsByClassName('css-eg0mwd-MuiSlider-thumb')[0].style.width = 0
				document.getElementsByClassName('MuiSlider-rail css-14pt78w-MuiSlider-rail')[0].style.opacity = 1
			}, 1000)
			
		})

	  const handleChange = (event, newValue) => {
	  	console.log('newValue')
	  	console.log(newValue)
	    setValue(newValue);
	    props.setMood(newValue)
	    // setTimeout(() => { // good use of mobx here
	    	// trigger useState update
	    	// alert(newValue)
	    // }, 1000)
	  };

	return(
		<>
			<div className="sides">
				<Slider
		       	 getAriaLabel={() => 'Temperature range'}
		        	value={value}
		        	onChange={handleChange}
		        	valueLabelDisplay="auto"
		        	getAriaValueText={valuetext}
		      	/>
			</div>
		</>
	)
}


export default Soul;