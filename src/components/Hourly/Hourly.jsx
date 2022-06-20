import React from 'react';
import { useWeather } from '../../hooks/useWeather';
import HourlyData from '../HourlyData/HourlyData';
import './Hourly.css';

const Hourly = () => {
	const { data: weatherData } = useWeather();
	const {
		forecast: { forecastday },
	} = weatherData;
	const [today] = forecastday;
	const { hour } = today;
	return (
		<div className='forecast--body--hourly'>
			<span className='forecast--body--hourly_title'>Hourly Forecast</span>
			<div className='forecast--body--hourly_time-icon'>
				{hour.map((currentVal) => {
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
