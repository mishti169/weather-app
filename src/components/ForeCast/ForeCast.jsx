import React from 'react';
import Header from '../Header/Header';
import './ForeCast.css';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import Hourly from '../Hourly/Hourly';

const ForeCast = () => {
	return (
		<div className='forecast'>
			<Header />
			<div className='forecast--body'>
				<span className='forecast--body-heading'>Forecast</span>
				<Hourly />
			</div>
		</div>
	);
};
export default ForeCast;
