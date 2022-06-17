import React from 'react';
import HourlyData from '../HourlyData/HourlyData';
import './Hourly.css';

const Hourly = () => {
	return (
		<div className='forecast--body--hourly'>
			<span className='forecast--body--hourly_title'>Hourly Forecast</span>
			<div className='forecast--body--hourly_time-icon'>
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
				<HourlyData />
			</div>
		</div>
	);
};
export default Hourly;
