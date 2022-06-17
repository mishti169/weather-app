import React from 'react';
import Header from '../Header/Header';
import TempDetails from '../TempDetails/TempDetails';
import './Details.css';

const Details = () => {
	return (
		<div className='details'>
			<Header />
			<div className='details--body'>
				<span className='details--body_text'>Details</span>
				<div className='details--body_inner-body'>
					<TempDetails />
					<TempDetails />
				</div>
			</div>
		</div>
	);
};

export default Details;
