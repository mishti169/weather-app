import React from 'react';
import { getWeatherIcon } from '../../util/utils';
import './HourlyData.css';
const HourlyData = (props) => {
	const { hour, temp, weatherCode } = props;

	const getIcon = (code) => {
		const Icon = getWeatherIcon(code);
		return <Icon width={21} height='auto' />;
	};

	return (
		<div className='forecast--body--hourly_time-icon--container '>
			<span className='forecast--body--hourly_time-temp'>{hour}</span>
			{getIcon(weatherCode)}
			<span className='forecast--body--hourly_time-temp'>{temp}℃</span>
		</div>
	);
};
export default HourlyData;
