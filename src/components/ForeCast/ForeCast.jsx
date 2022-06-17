import React from 'react';
import Header from '../Header/Header';
import './ForeCast.css';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';

const ForeCast = () => {
	return (
		<div className='forecast'>
			<Header />
			<div className='forecast--body'>
				<span className='forecast--body-heading'>Forecast</span>
				<div className='forecast--body--hourly'>
					<span className='forecast--body--hourly_title'>Hourly Forecast</span>
					<div className='forecast--body--hourly_time-icon '>
						<div className='forecast--body--hourly_time-icon--container '>
							<span className='forecast--body--hourly_time'>10:00</span>
							<img src={CloudRainLogo} width={24} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ForeCast;
