import React from 'react';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import './HourlyData.css';
const HourlyData = (props) => {
	const { hour, temp } = props;
	return (
		<div className='forecast--body--hourly_time-icon--container '>
			<span className='forecast--body--hourly_time-temp'>{hour}</span>
			<img src={CloudRainLogo} width={24} />
			<span className='forecast--body--hourly_time-temp'>{temp}℃</span>
		</div>
	);
};
export default HourlyData;
