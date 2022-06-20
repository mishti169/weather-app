import React from 'react';
import DailyData from '../DailyData/DailyData';

import './Daily.css';

const Daily = () => {
	return (
		<div className='forecast--body--daily'>
			<span className='forecast--body--daily_title'>Daily Forecast</span>
			<div className='forecast--body--daily_time-icon'>
				<DailyData />
			</div>
		</div>
	);
};
export default Daily;
