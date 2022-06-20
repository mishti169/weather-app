import React from 'react';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import './HourlyData.css';
const HourlyData = () => {
	return (
		<div className='forecast--body--hourly_time-icon--container '>
			<span className='forecast--body--hourly_time-temp'>10:00</span>
			<img src={CloudRainLogo} width={24} />
			<span className='forecast--body--hourly_time-temp'>22℃</span>
		</div>
	);
};
export default HourlyData;
