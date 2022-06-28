import React, {useState, useEffect} from 'react'
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°`;
}

const Soul = () => {
	const [value, setValue] = useState([20]);

	  const handleChange = (event, newValue) => {
	    setValue(newValue );
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