import React from 'react';
import HourlyData from '../HourlyData/HourlyData';
import './Hourly.css';

const Hourly = (props) => {
	const { weatherData } = props;
	const {
		forecast: { forecastday },
	} = weatherData;
	const [today] = forecastday;
	const { hour } = today;
	const hours = [...hour].splice(6);
	return (
		<div className='forecast--body--hourly'>
			<span className='forecast--body--hourly_title'>Hourly Forecast</span>
			<div className='forecast--body--hourly_time-icon'>
				{hours.map((currentVal) => {
					const time = currentVal.time.split(' ')[1];
					return (
						<HourlyData
							weatherCode={currentVal.condition.code}
							key={currentVal.time_epoch}
							hour={time}
							temp={currentVal.temp_c}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Hourly;
