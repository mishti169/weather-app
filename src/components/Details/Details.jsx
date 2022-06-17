import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import TempDetails from '../TempDetails/TempDetails';
import './Details.css';

const Details = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push('/forecast');
	};
	return (
		<div className='details'>
			<Header />
			<div className='details--body'>
				<div className='details--body_text'>
					<span className='details--body_text-1'>Details</span>
					<span onClick={handleClick} className='details--body_text-2'>
						Forecast
					</span>
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
