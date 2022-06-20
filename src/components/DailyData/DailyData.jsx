import React from 'react';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import ArrowUpLogo from '../../assets/icons/arrow-up.svg';
import ArrowDownLogo from '../../assets/icons/arrow-down.svg';
import './DailyData.css';
import { getWeatherIcon } from '../../util/utils';

const DailyData = (props) => {
	const { date, maxTemp, minTemp, weatherCode } = props;
	return (
		<div className='forecast--body--daily_time-icon-temp--container '>
			<span className='forecast--body--daily_time-date'>{date}</span>
			<img src={getWeatherIcon(weatherCode)} width={24} />
			<div className='home--body_temp_summary--detail'>
				<img width={11} src={ArrowUpLogo} />
				<span className='forecast--body--daily_time-temp'>{maxTemp}℃</span>
			</div>
			<div className='home--body_temp_summary--detail'>
				<img width={11} src={ArrowDownLogo} />
				<span className='forecast--body--daily_time-temp'>{minTemp}℃</span>
			</div>
		</div>
	);
};
export default DailyData;
