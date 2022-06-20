import React from 'react';
import DailyData from '../DailyData/DailyData';
import { useWeather } from '../../hooks/useWeather';

import './Daily.css';

const Daily = () => {
	const { data: weatherData } = useWeather();
	const { forecast } = weatherData;
	const { forecastday } = forecast;

	return (
		<div className='forecast--body--daily'>
			<span className='forecast--body--daily_title'>Daily Forecast</span>
			<div className='forecast--body--daily_time-icon'>
				{forecastday.map((currentVal) => {
					return (
						<DailyData
							key={currentVal.date_epoch}
							date={currentVal.date}
							maxTemp={currentVal.day.maxtemp_c}
							minTemp={currentVal.day.mintemp_c}
							weatherCode={currentVal.day.condition.code}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Daily;
