import React from 'react';
import Header from '../Header/Header';
import TempDetails from '../TempDetails/TempDetails';
import './Details.css';

const Details = () => {
	return (
		<div className='details'>
			<Header />
			<div className='details--body'>
				<div className='details--body_text'>
					<span className='details--body_text-1'>Details</span>
					<span className='details--body_text-2'>Forecast</span>
				</div>
				<div className='details--body_inner-body'>
					<TempDetails />
					<TempDetails />
				</div>
			</div>
		</div>
	);
};

export default Details;
