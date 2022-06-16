import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
	const history = useHistory();
	useEffect(() => {
		setTimeout(() => {
			history.push('/home');
		}, 1000);
	}, []);
	return (
		<div className='weather-container'>
			<div className='weather-text'>Weather</div>
			<div className='weather-footer'>A minimal weather app</div>
		</div>
	);
};

export default Splash;
