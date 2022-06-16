import React from 'react';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import './CityTemperature.css';

const CityTemperature = () => {
	return (
		<div className='city-temp'>
			<div className='city-temp--details '>
				<span className='city-temp--details_city'>Mumbai</span>
				<span className='city-temp--details_temp'>22°C</span>
				<span className='city-temp--details_temp-text'>Light Drizzle</span>
			</div>
			<img width={40} src={CloudRainLogo} alt='raining' />
		</div>
	);
};
export default CityTemperature;
