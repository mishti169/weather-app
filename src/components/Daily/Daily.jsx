import React from 'react';
import DailyData from '../DailyData/DailyData';
import './Daily.css';
import { getDate } from '../../util/utils';

const Daily = (props) => {
	const { weatherData } = props;

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
							date={getDate(currentVal.date)}
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
