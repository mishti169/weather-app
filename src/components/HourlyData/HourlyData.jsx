import React from 'react';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import './HourlyData.css';
const HourlyData = () => {
	return (
		<div className='forecast--body--hourly_time-icon '>
			<div className='forecast--body--hourly_time-icon--container '>
				<span className='forecast--body--hourly_time'>10:00</span>
				<img src={CloudRainLogo} width={24} />
			</div>
		</div>
	);
};
export default HourlyData;
