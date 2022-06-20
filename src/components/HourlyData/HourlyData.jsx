import React from 'react';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import { getWeatherIcon } from '../../util/utils';
import './HourlyData.css';
const HourlyData = (props) => {
	const { hour, temp, weatherCode } = props;
	return (
		<div className='forecast--body--hourly_time-icon--container '>
			<span className='forecast--body--hourly_time-temp'>{hour}</span>
			<img src={getWeatherIcon(weatherCode)} width={24} />
			<span className='forecast--body--hourly_time-temp'>{temp}℃</span>
		</div>
	);
};
export default HourlyData;
