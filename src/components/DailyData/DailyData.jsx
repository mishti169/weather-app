import React from 'react';

import ArrowUpLogo from '../../assets/icons/arrow-up.svg';
import ArrowDownLogo from '../../assets/icons/arrow-down.svg';
import './DailyData.css';
import { getWeatherIcon } from '../../util/utils';
import ArrowUpIcon from '../Icons/ArrowUpIcon';
import ArrowDownIcon from '../Icons/ArrowDownIcon';

const DailyData = (props) => {
	const { date, maxTemp, minTemp, weatherCode } = props;

	const getIcon = (code) => {
		const Icon = getWeatherIcon(code);
		return <Icon width={21} height='auto' />;
	};

	return (
		<div className='forecast--body--daily_time-icon-temp--container '>
			<span className='forecast--body--daily_time-date'>{date}</span>
			{getIcon(weatherCode)}
			<div className='home--body_temp_summary--detail'>
				<ArrowUpIcon width={11} height='auto' />
				<span className='forecast--body--daily_time-temp'>{maxTemp.toFixed(1)}℃</span>
			</div>
			<div className='home--body_temp_summary--detail'>
				<ArrowDownIcon width={11} height='auto' />
				<span className='forecast--body--daily_time-temp'>{minTemp.toFixed(1)}℃</span>
			</div>
		</div>
	);
};
export default DailyData;
