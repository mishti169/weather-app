import React from 'react';
import Header from '../Header/Header';
import Daily from '../Daily/Daily';
import Hourly from '../Hourly/Hourly';
import './ForeCast.css';

const ForeCast = () => {
	return (
		<div className='forecast'>
			<Header />
			<div className='forecast--body'>
				<span className='forecast--body-heading'>Forecast</span>
				<Hourly />
				<Daily />
			</div>
		</div>
	);
};
export default ForeCast;
