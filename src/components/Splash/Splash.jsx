import React from 'react';
import { useHistory } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push('/home');
	};
	return (
		<div onClick={handleClick} className='weather-container'>
			<div className='weather-text'>Weather</div>
			<div className='weather-footer'>A minimal weather app</div>
		</div>
	);
};

export default Splash;
