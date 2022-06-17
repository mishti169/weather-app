import React from 'react';
import './Hourly.css';

const Hourly = () => {
	return (
		<div className='forecast--body--hourly'>
			<span className='forecast--body--hourly_title'>Hourly Forecast</span>
			<div className='forecast--body--hourly_time-icon '>
				<div className='forecast--body--hourly_time-icon--container '>
					<span className='forecast--body--hourly_time'>10:00</span>
					<img src={CloudRainLogo} width={24} />
				</div>
			</div>
		</div>
	);
};
export default Hourly;
